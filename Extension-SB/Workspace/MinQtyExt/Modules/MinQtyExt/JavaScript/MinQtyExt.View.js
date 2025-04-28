// @module HP.MinQtyExt.MinQtyExt
define('HP.MinQtyExt.MinQtyExt.View'
    , [
        'hp_minqtyext_minqtyext.tpl'
        , 'Backbone'
        ,'jQuery'
    ]
    , function (
        hp_minqtyext_minqtyext_tpl
        , Backbone
        ,jQuery
    ) {
        'use strict';
        // @class HP.MinQtyExt.MinQtyExt.View @extends Backbone.View
        return Backbone.View.extend({

            template: hp_minqtyext_minqtyext_tpl

            , initialize: function (options) {
                const layout = this.options.layout;
                const cart = this.options.cart;
                let sum = 0;

                //点击checkout按钮时的事件
                function handleClick(e) {
                    cart.getLines().done(function (lines) {
                        sum = lines.reduce((total, prod) => {
                            if (prod.item.extras.custitem_ccs_item_type === "Headphone") {
                                return total + prod.quantity;
                            }
                            return total;
                        }, 0);
                        console.log('sum', sum)
                        if (sum > 0 && sum < 4) {
                            let msgElement = document.querySelector('.global-views-message-error');
                            if (!msgElement) {
                                cart.showMessage({
                                    message: 'The quantity of headphones in the order should be at least 4.',
                                    type: 'error',
                                    selector: 'Notifications'
                                });
                            }
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
                }

                //页面呈现之后触发的事件
                layout.on('afterShowContent', function () {
                    $('[data-touchpoint="checkout"]').on('click', handleClick);

                    const parentDiv = document.getElementById('Cart.Detailed.View');

                    //在购物车页面，更新，删除操作，都会发起http请求，返回响应后触发页面局部刷新，导致按钮绑定的click事件失效
                    if(parentDiv){
                        // 创建一个 MutationObserver 实例
                        const observer = new MutationObserver(function (mutationsList, observer) {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    if (mutation.addedNodes.length > 0) {
                                        $('[data-touchpoint="checkout"]').on('click', handleClick);
                                        $('.cart-item-summary-quantity-value').on('change', function (e) {
                                            if (sum > 0) {
                                                $('[data-touchpoint="checkout"]').attr('disabled', true);
                                            }
                                        });
                                        $('[data-action="remove-item"]').on('click', function(e){
                                            $('[data-touchpoint="checkout"]').attr('disabled', true);
                                        });
                                    }
                                }
                            }
                        });

                        // 配置 MutationObserver 监听子节点的添加
                        const config = {childList: true};

                        // 开始监听父元素内部子元素的变化
                        observer.observe(parentDiv, config);
                    }
                });

                //如果是在新标签页更新了购物车,但在当前标签页点击结账,会跳过MOQ校验
                cart.on('beforeSubmit', function () {
                    let deferred = jQuery.Deferred();
                    cart.getLines().done(function (lines) {
                        sum = lines.reduce((total, prod) => {
                            if (prod.item.extras.custitem_ccs_item_type === "Headphone") {
                                return total + prod.quantity;
                            }
                            return total;
                        }, 0);
                        console.log('sum', sum)
                        if (sum > 0 && sum < 4) {
                            let msgElement = document.querySelector('.global-views-message-error');
                            if (!msgElement) {
                                cart.showMessage({
                                    message: 'The quantity of headphones in the order should be at least 4.',
                                    type: 'error',
                                    selector: 'Notifications'
                                });
                            }
                            deferred.reject();
                        }
                        deferred.resolve();
                    });
                    return deferred;
                })


                /*  Uncomment to test backend communication with an example service
                    (you'll need to deploy and activate the extension first)
                */

                // this.model = new MinQtyExtModel();
                // var self = this;
                // this.model.fetch().done(function(result) {
                // 	self.message = result.message;
                // 	self.render();
                // });
            }

            , events: {}

            , bindings: {}

            , childViews: {}

            //@method getContext @return HP.MinQtyExt.MinQtyExt.View.Context
            , getContext: function getContext() {
                //@class HP.MinQtyExt.MinQtyExt.View.Context
                this.message = this.message || ''
                return {
                    message: this.message
                };
            }
        });
    });
