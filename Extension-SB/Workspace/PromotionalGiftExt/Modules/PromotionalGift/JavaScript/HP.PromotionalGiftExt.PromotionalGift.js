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
                var layout = container.getComponent('Layout');
                var environment = container.getComponent('Environment');
                var cart = container.getComponent('Cart');
                var pdp = container.getComponent('PDP');

                if (layout) {
                    var promotionalGift = environment.getConfig('PromotionalGift');
                    var gifts = promotionalGift.PromotionItem;
                    var handle_flag = 0;//0 空闲 1 处理赠品 2正在处理
                    var lineItem = {};
                    // pdp
                    layout.addChildView('cms:item_info_bottom', function () {
                        if (isInPromotion()) {
                            return new PromotionalGiftView({
                                cart: cart,
                                pdp: pdp,
                                promotionalGift: promotionalGift,
                                addLine: addLine,
                                updateLine: updateLine,
                                removeLine: removeLine
                            });
                        }
                    })
                    // //cart
                    layout.addChildView('Quick.Order', function() {
                    	if(isInPromotion()) {
                    		return new PromotionalGiftView({ cart:cart,promotionalGift:promotionalGift,addLine: addLine,
                                updateLine: updateLine,
                                removeLine: removeLine});
                    	}
                    });

                    if (cart) {
                        updateLineItem();
                        cart.on("beforeAddLine", addLine);
                        cart.on("beforeUpdateLine", updateLine);
                        cart.on("beforeRemoveLine", removeLine);
                    }

                    function addLine(data) {
                        var itemId = data.line.item.internalid;
                        var quantity = data.line.quantity || 1;
                        var lines = [];
                        var msg = "";

                        if (handle_flag !== 0) return true;

                        var item_flag = validateGift(itemId);

                        if (item_flag === 2) {
                            showMessage(`This item is a promotional gift and cannot be sold on its own.`, 'error');
                            return jQuery.Deferred().reject();
                        }

                        if (item_flag === 3) {
                            handle_flag = 1;
                            gifts.forEach(function (item) {
                                if (item.itemId == itemId) {
                                    lines.push({
                                        quantity: item.quantity * quantity,
                                        item: {internalid: item.giftId}
                                    })
                                    msg += `${item.quantity * quantity} FREE ${item.gift}、`
                                }
                            });
                            if (lines.length > 0) {
                                handle_flag = 2;
                                msg = msg.slice(0, -1);
                                cart.addLines({lines: lines}).then(function () {
                                    showMessage(`Congratulations! ${msg} was added to your cart.`, 'success');
                                });
                            }
                        }
                    }

                    function updateLine(data) {
                        var itemId = data.line.item.internalid;
                        var quantity = data.line.quantity;

                        if (handle_flag !== 0) return true;

                        var item_flag = validateGift(itemId);

                        if (item_flag === 2) {
                            showMessage(`This item is a promotional gift and cannot be changed`, 'error');
                            return jQuery.Deferred().reject();
                        }

                        if (item_flag === 3) {
                            handle_flag = 1;
                            var old_quantity = lineItem[itemId].quantity;
                            gifts.forEach(function (item) {
                                if (item.itemId == itemId) {
                                    if (lineItem[item.giftId]) {
                                        if (old_quantity > quantity) {
                                            //减少
                                            var qty = old_quantity - quantity;
                                            var currentQty = lineItem[item.giftId].quantity - qty * item.quantity;
                                            if (currentQty > 0) {
                                                cart.updateLine({
                                                    line: {
                                                        internalid: lineItem[item.giftId].internalid,
                                                        quantity: currentQty
                                                    }
                                                }).then(function () {
                                                    showMessage(`${qty * item.quantity} ${item.gift} was removed from your cart.`, 'warning')
                                                });
                                            }
                                        } else {
                                            //新增
                                            var qty = quantity - old_quantity;
                                            var currentQty = lineItem[item.giftId].quantity + qty * item.quantity;
                                            cart.updateLine({
                                                line: {
                                                    internalid: lineItem[item.giftId].internalid,
                                                    quantity: currentQty
                                                }
                                            }).then(function () {
                                                showMessage(`Congratulations! ${qty * item.quantity} FREE ${item.gift} was added to your cart.`, 'success');
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
                                        });
                                    }
                                }
                            })
                        }
                    }

                    function removeLine(data) {
                        var itemId = data.line_id.replace(/.*item(\d+)set.*/, "$1");
                        var quantity = lineItem[itemId].quantity;

                        if (handle_flag !== 0) return true;

                        var item_flag = validateGift(itemId);

                        if (item_flag === 2) {
                            showMessage(`This item is a promotional gift and cannot be removed.`, 'error');
                            return jQuery.Deferred().reject();
                        }

                        if (item_flag === 3) {
                            handle_flag = 1;
                            gifts.forEach(function (item) {
                                if (item.itemId == itemId) {
                                    var expectedQty = quantity * item.quantity;
                                    if (lineItem[item.giftId]) {
                                        var currentQty = lineItem[item.giftId].quantity - expectedQty;
                                        if (currentQty > 0) {
                                            cart.updateLine({
                                                line: {
                                                    internalid: lineItem[item.giftId].internalid,
                                                    quantity: currentQty
                                                }
                                            }).then(function () {
                                                showMessage(`${expectedQty} ${item.gift} was removed from your cart.`, 'warning')
                                            });
                                        } else {
                                            cart.removeLine({line_id: lineItem[item.giftId].internalid}).then(function () {
                                                showMessage(`${lineItem[item.giftId].quantity} ${item.gift} was removed from your cart.`, 'warning');
                                            });
                                        }
                                    }
                                }
                            })
                        }
                    }

                    function updateLineItem() {
                        cart.getLines().then(function (lines) {
                            lines.forEach(function (line) {
                                if (!line.extras.free_gift) {
                                    var item_flag = validateGift(line.item.internalid);
                                    if (item_flag === 2) {
                                        // $(`[data-item-id="${line.item.internalid}"] .cart-lines-item-actions`).remove();
                                        $(`.quantity-${line.internalid}`).attr('disabled', 'disabled');
                                        // $(`.quantity-${line.internalid}`).css({border:'none',padding:0,'text-align':'left'});
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
                        handle_flag = 0;
                        updateLineItem();
                    }

                    function validateGift(id) {
                        // 0 表示普通货品，1 表示是可编辑赠品，2 表示是不可编辑赠品 3 表示是有赠品的货品
                        for (var i = 0; i < gifts.length; i++) {
                            if (gifts[i].giftId == id) {
                                if (gifts[i].uneditable) {
                                    return 2;
                                }
                                return 1;
                            } else if (gifts[i].itemId == id) {
                                return 3;
                            }
                        }
                        return 0;
                    }

                    // 判断当前时间是否处于促销期间
                    function isInPromotion() {
                        // Convert timestamp to PST date
                        // 创建一个 Date 对象
                        var date = new Date(SC.date);
                        // 使用 toLocaleString 转换为指定格式
                        var options = {
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
                        var formattedDate = date.toLocaleString('en-US', options);
                        // 处理格式，去掉多余的部分
                        var [datePart, timePart] = formattedDate.split(', ');
                        var [month, day, year] = datePart.split('/');
                        var [hour, minute, secondPart] = timePart.split(':');
                        // 处理秒数的 AM/PM 部分
                        var [second, period] = secondPart.split(' ');
                        // 拼接为所需格式
                        var currentStr = `${year}/${month}/${day} ${hour}:${minute}:${second} ${period}`;
                        var startStr = promotionalGift.startDate;
                        var endStr = promotionalGift.endDate;
                        console.log('gift result', startStr <= currentStr && currentStr < endStr)
                        return startStr <= currentStr && currentStr < endStr;
                    }
                }
            }
        };
    });
