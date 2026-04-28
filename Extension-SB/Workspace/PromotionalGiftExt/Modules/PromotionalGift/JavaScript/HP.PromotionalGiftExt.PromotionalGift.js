define(
    'HP.PromotionalGiftExt.PromotionalGift'
    , [
        'HP.PromotionalGiftExt.PromotionalGift.View',
        'Cart.Detailed.View',
        'underscore'
    ]
    , function (
        PromotionalGiftView,
        CartDetailedView,
        _
    ) {
        'use strict';

        return {
            mountToApp: function mountToApp(container) {

                /** @type {LayoutComponent} */
                let layout = container.getComponent('Layout');
                let environment = container.getComponent('Environment');
                let cart = container.getComponent('Cart');
                let profile = container.getComponent('UserProfile');
                profile.getUserProfile().then(function (profile) {
                   console.log(profile);
                    let field = _.findWhere(profile.customfields, {id: "custentity_promo_blacklist"});
                    if (layout) {
                        let promotionalGift = environment.getConfig('PromotionalGift');
                        let gifts = promotionalGift.PromotionItem;
                        let ItemType = {
                            NORMAL: 0, // 普通商品
                            EDITABLE_GIFT: 1, // 可编辑赠品
                            LOCKED_GIFT: 2, // 不可编辑赠品
                            WITH_GIFT: 3 // 有赠品的主商品
                        }
                        let Process = {
                            IDLE: 0,          // 空闲
                            HANDLING: 1,      // 正在处理
                        }
                        let handle_flag = Process.IDLE;
                        let lineItem = {};
                        if (cart) {
                            cleanInvalidGifts();
                            updateLineItem();
                            if(field.value) return;
                            cart.on("beforeAddLine", addLine);
                            cart.on("beforeUpdateLine", updateLine);
                            cart.on("beforeRemoveLine", removeLine);
                            cart.on("afterAddLine", function(data){
                                let itemId = data.line.item.internalid;
                                lineItem[itemId] = {
                                    internalid: data.result,
                                    quantity: data.line.quantity
                                };
                            });
                            cart.on("afterUpdateLine", function(data){
                                let itemId = data.line.item.internalid;
                                lineItem[itemId].quantity = data.line.quantity;
                            });
                            cart.on("afterRemoveLine", function(data){
                                let itemId = data.line_id.replace(/.*item(\d+)set.*/, "$1");
                                delete lineItem[itemId];
                            });
                        }

                        function addLine(data) {
                            let itemId = data.line.item.internalid;
                            let quantity = data.line.quantity || 1;
                            let lines = [];
                            let msg = "";

                            if (handle_flag !== Process.IDLE) return true;

                            if (!isInPromotion()) {
                                return true;
                            }

                            let item_flag = validateGift(itemId);

                            if (item_flag === ItemType.LOCKED_GIFT) {
                                showMessage(`This item is a promotional gift and cannot be sold on its own.`, 'error');
                                return jQuery.Deferred().reject();
                            }

                            if (item_flag === ItemType.WITH_GIFT) {
                                handle_flag = Process.HANDLING;
                                gifts.forEach(function (item) {
                                    if (item.itemId == itemId) {
                                        // 如果购物车已经存在该商品但赠品不存在，则数量是原来的数量加上新增的数量
                                        if(lineItem[itemId] && !lineItem[item.giftId]){
                                            quantity += lineItem[itemId].quantity;
                                        }
                                        lines.push({
                                            quantity: item.quantity * quantity,
                                            item: {internalid: item.giftId}
                                        })
                                        msg += `${item.quantity * quantity} FREE ${item.gift}、`
                                    }
                                });
                                if (lines.length > 0) {
                                    msg = msg.slice(0, -1);
                                    cart.addLines({lines: lines}).then(function () {
                                        showMessage(`Congratulations! ${msg} was added to your cart.`, 'success');
                                    });
                                }
                            }
                        }

                        function updateLine(data) {
                            let itemId = data.line.item.internalid;
                            let quantity = data.line.quantity;

                            if (handle_flag !== Process.IDLE) return true;

                            if (!isInPromotion()) {
                                return true;
                            }

                            let item_flag = validateGift(itemId);

                            if (item_flag === ItemType.LOCKED_GIFT) {
                                showMessage(`This item is a promotional gift and cannot be changed`, 'error');
                                return jQuery.Deferred().reject();
                            }
                            if (item_flag === ItemType.WITH_GIFT) {
                                handle_flag = Process.HANDLING;
                                let old_quantity = lineItem[itemId].quantity;
                                let deferred = jQuery.Deferred();

                                gifts.forEach(function (item) {
                                    if (item.itemId == itemId) {
                                        if (lineItem[item.giftId]) {
                                            if (old_quantity > quantity) {
                                                //减少
                                                let qty = old_quantity - quantity;
                                                let currentQty = lineItem[item.giftId].quantity - qty * item.quantity;
                                                cart.updateLine({
                                                    line: {
                                                        internalid: lineItem[item.giftId].internalid,
                                                        quantity: currentQty
                                                    }
                                                }).then(function () {
                                                    showMessage(`${qty * item.quantity} ${item.gift} was removed from your cart.`, 'warning');
                                                    deferred.resolve();
                                                });
                                            } else {
                                                //新增
                                                let qty = quantity - old_quantity;
                                                let currentQty = lineItem[item.giftId].quantity + qty * item.quantity;
                                                cart.updateLine({
                                                    line: {
                                                        internalid: lineItem[item.giftId].internalid,
                                                        quantity: currentQty
                                                    }
                                                }).then(function () {
                                                    showMessage(`Congratulations! ${qty * item.quantity} FREE ${item.gift} was added to your cart.`, 'success');
                                                    deferred.resolve();
                                                });
                                            }
                                        } else {
                                            //如果赠品行不存在，就新增
                                            cart.addLine({
                                                line: {
                                                    quantity: item.quantity * quantity,
                                                    item: {
                                                        internalid: item.giftId
                                                    }
                                                }
                                            }).then(function () {
                                                showMessage(`Congratulations! ${item.quantity * quantity} FREE ${item.gift} was added to your cart.`, 'success')
                                                deferred.resolve();
                                            });
                                        }
                                    }
                                });

                                return deferred;
                            }

                            return true; // 对于非赠品商品，允许正常更新
                        }

                        function removeLine(data) {

                            if (handle_flag !== Process.IDLE) return true;

                            if (!isInPromotion()) {
                                return true;
                            }

                            let itemId = data.line_id.replace(/.*item(\d+)set.*/, "$1");

                            let item_flag = validateGift(itemId);

                            if (item_flag === ItemType.LOCKED_GIFT) {
                                showMessage(`This item is a promotional gift and cannot be removed.`, 'error');
                                return jQuery.Deferred().reject();
                            }

                            if (item_flag === ItemType.WITH_GIFT) {
                                // 获取当前行的数量
                                let quantity = lineItem[itemId]?.quantity||0;
                                handle_flag = Process.HANDLING;
                                let deferred = jQuery.Deferred();

                                gifts.forEach(function (item) {
                                    let expectedQty = quantity * item.quantity;
                                    let old_quantity = lineItem[item.giftId].quantity;
                                    if (lineItem[item.giftId]) {
                                        let currentQty = old_quantity - expectedQty;
                                        if (currentQty > 0) {
                                            cart.updateLine({
                                                line: {
                                                    internalid: lineItem[item.giftId].internalid,
                                                    quantity: currentQty
                                                }
                                            }).then(function () {
                                                showMessage(`${expectedQty} ${item.gift} was removed from your cart.`, 'warning')
                                                deferred.resolve();
                                            });
                                        } else {
                                            cart.removeLine({line_id: lineItem[item.giftId].internalid}).then(function () {
                                                showMessage(`${old_quantity} ${item.gift} was removed from your cart.`, 'warning');
                                                deferred.resolve();
                                            });
                                        }
                                    }else{
                                        deferred.resolve();
                                    }
                                })
                                return deferred;
                            }
                            return true; // 对于非赠品商品，允许正常删除
                        }

                        function updateLineItem() {
                            cart.getLines().then(function (lines) {
                                lines.forEach(function (line) {
                                    if (!line.extras.free_gift) {
                                        let item_flag = validateGift(line.item.internalid);
                                        if (item_flag === ItemType.LOCKED_GIFT) {
                                            $(`.quantity-${line.internalid}`).attr('disabled', 'disabled');
                                        }
                                        lineItem[line.item.internalid] = {
                                            internalid: line.internalid,
                                            quantity: line.quantity
                                        }
                                    }
                                })
                            })
                        }

                        function showMessage(msg, type) {
                            cart.showMessage({
                                message: msg,
                                type: type,
                                selector: 'Notifications',
                                timeout: 5000
                            });
                            handle_flag = Process.IDLE;
                        }

                        function validateGift(id) {
                            // 0 表示普通货品，1 表示是可编辑赠品，2 表示是不可编辑赠品 3 表示是有赠品的货品
                            for (let i = 0; i < gifts.length; i++) {
                                const gift = gifts[i];

                                if (gift.giftId == id) {
                                    return gift.uneditable ? ItemType.LOCKED_GIFT : ItemType.EDITABLE_GIFT;
                                }

                                if (gift.itemId == id) {
                                    return ItemType.WITH_GIFT;
                                }
                            }

                            return ItemType.NORMAL;
                        }

                        // 清理不可用的赠品
                        function cleanInvalidGifts() {
                            if (isInPromotion()) return;

                            cart.getLines().then(function (lines) {
                                lines.forEach(function (line) {
                                    let itemId = line.item.internalid;
                                    if (validateGift(itemId) === ItemType.LOCKED_GIFT) {
                                        cart.removeLine({line_id: line.internalid});
                                    }
                                });
                            });
                        }

                        // 判断当前时间是否处于促销期间
                        function isInPromotion() {
                            // Convert timestamp to PST date
                            // 创建一个 Date 对象
                            let date = new Date(SC.date);
                            // 使用 toLocaleString 转换为指定格式
                            let options = {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: true,
                                timeZone: 'America/Los_Angeles' // 处理夏令时
                            };
                            // 转换为指定格式
                            let formattedDate = date.toLocaleString('en-US', options);
                            // 处理格式，去掉多余的部分
                            let [datePart, timePart] = formattedDate.split(', ');
                            let [month, day, year] = datePart.split('/');
                            let [hour, minute, secondPart] = timePart.split(':');
                            // 处理秒数的 AM/PM 部分
                            let [second, period] = secondPart.split(' ');
                            // 拼接为所需格式
                            let currentStr = `${year}/${month}/${day} ${hour}:${minute}:${second} ${period}`;
                            let startStr = promotionalGift.startDate;
                            let endStr = promotionalGift.endDate;
                            console.log('gift result', startStr <= currentStr && currentStr < endStr)
                            return startStr <= currentStr && currentStr < endStr;
                        }
                    }
                });

            }
        };
    });
