// @module HP.PromotionalGiftExt.PromotionalGift
define('HP.PromotionalGiftExt.PromotionalGift.View'
,	[
	'hp_promotionalgiftext_promotionalgift.tpl'
	,'HP.PromotionalGiftExt.PromotionalGift.Model'
	,'Backbone'
    ]
, function (
		hp_promotionalgiftext_promotionalgift_tpl
    ,PromotionalGiftModel
	,	Backbone
)
{
    'use strict';

	// @class HP.PromotionalGiftExt.PromotionalGift.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_promotionalgiftext_promotionalgift_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			this.model = new PromotionalGiftModel();
			var promotionalGift = options.promotionalGift;
			var gifts = promotionalGift.PromotionItem;
			var cart = options.cart;
			var pdp = options.pdp;

            // 初始化
			this.model.fetch().done(function (result) {
				console.log('result',result);
				if(result.flag !=='F'){
					cart.off("beforeAddLine", options.addLine);
					cart.off("beforeUpdateLine", options.updateLine);
					cart.off("beforeRemoveLine", options.removeLine);
				}else{
					if(pdp){
						var info = pdp.getItemInfo();
						var item_flag = validateGift(info.item.internalid);
						// 不可编辑的赠品
						if(item_flag===2){
							$('.cart-add-to-cart-button-button').remove();
							$('#product-details-full-form').remove();
							$('#in-modal-product-details-quickview-form').remove();
						}
					}
					cart.getLines().then(function (lines) {
						lines.forEach(function (line) {
							if (!line.extras.free_gift) {
								var item_flag = validateGift(line.item.internalid);
								if (item_flag === 2) {
									// $(`[data-item-id="${line.item.internalid}"] .cart-lines-item-actions`).remove();
									$(`.quantity-${line.internalid}`).attr('disabled', 'disabled');
									// $(`.quantity-${line.internalid}`).css({border:'none',padding:0,'text-align':'left'});
								}
							}
						})
					})
				}
			});

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

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.PromotionalGiftExt.PromotionalGift.View.Context
	,	getContext: function () {
			return {

			};
		}
	});
});
