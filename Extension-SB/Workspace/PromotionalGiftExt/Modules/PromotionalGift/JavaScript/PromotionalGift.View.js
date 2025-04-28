// @module HP.PromotionalGiftExt.PromotionalGift
define('HP.PromotionalGiftExt.PromotionalGift.View'
,	[
	'cart_lines_free.tpl'
	,'HP.PromotionalGiftExt.PromotionalGift.Model'
	,'Backbone'
    ]
, function (
		cart_lines_free
    ,PromotionalGiftModel
	,	Backbone
)
{
    'use strict';

	// @class HP.PromotionalGiftExt.PromotionalGift.View @extends Backbone.View
	return Backbone.View.extend({

		template: cart_lines_free

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			this.model = new PromotionalGiftModel();
			var self = this;
			var promotionalGift = options.promotionalGift;
			var PromotionItem = promotionalGift.PromotionItem || [];
			var cart = options.cart;

            // 初始化
			this.model.fetch().done(function (result) {
				if (result.flag == 'F') {
					cart.on("beforeAddLine", function(data) {
						var itemId = data.line.item.internalid;
						var quantity = data.line.quantity||1;
						var lines = [];
						var msg = "";
						PromotionItem.forEach(function (item) {
							if (item.itemId == itemId){
								lines.push({
									quantity: item.quantity * quantity,
									item: { internalid: item.giftId }
								})
								msg+=`${item.quantity * quantity} FREE ${item.gift}、`
							}
						});
						msg = msg.substring(0, msg.length - 1);
						if(lines.length >0){
							cart.addLines({lines:lines}).then(function () {
								showMessage(`Congratulations! ${msg} was added to your cart.`, 'success');
							});
						}
					});
					cart.on("beforeRemoveLine", function(data){
						var lineQty = 0;
						var internalid;
						var lineItem = {};
						cart.getLines().then(function (lines) {
							lines.forEach(function(line){
								if(line.internalid==data.line_id){
									lineQty = line.quantity;
									internalid = line.item.internalid;
								}else{
									if(!line.extras.free_gift){
										lineItem[line.item.internalid] = {
											internalid: line.internalid,
											quantity: line.quantity
										}
									}
								}
							})
							PromotionItem.forEach(function(item){
								if(item.itemId == internalid) {
									var expectedQty = lineQty * item.quantity;
									if(lineItem[item.giftId]){
										var currentQty = lineItem[item.giftId].quantity - expectedQty;
										if(currentQty>0){
											cart.updateLine({
												line: {
													internalid: lineItem[item.giftId].internalid,
													quantity: currentQty
												}
											}).then(function () {
												showMessage(`${expectedQty} ${item.gift} was removed from your cart.`,'warning')
											});
										}else{
											cart.removeLine({ line_id: lineItem[item.giftId].internalid }).then(function () {
												showMessage(`${lineItem[item.giftId].quantity} ${item.gift} was removed from your cart.`, 'warning');
											});
										}
									}
								}
							})
						})
					});
					cart.on("beforeUpdateLine", function(data) {
						var itemId = data.line.item.internalid;
						var quantity = data.line.quantity;
						var lineItem = {};
						var lines = [];
						cart.getLines().then(function (lines) {
							lines.forEach(function(line) {
								if (!line.extras.free_gift) {
									lineItem[line.item.internalid] = {
										internalid: line.internalid,
										quantity: line.quantity
									}
								}
							})
							PromotionItem.forEach(function(item){
								if(item.itemId == itemId) {
									var expectedQty = quantity*item.quantity;
									if(lineItem[item.giftId]){
										var currentQty = lineItem[item.giftId].quantity - expectedQty;
										if(currentQty>0){
											//减少
											cart.updateLine({
												line: {
													internalid: lineItem[item.giftId].internalid,
													quantity: lineItem[item.giftId].quantity - currentQty
												}
											}).then(function () {
												showMessage(`${currentQty} ${item.gift} was removed from your cart.`,'warning')
											});
										}else{
											// 增加
											cart.updateLine({
												line: {
													internalid: lineItem[item.giftId].internalid,
													quantity: expectedQty
												}
											}).then(function () {
												showMessage(`Congratulations! ${Math.abs(currentQty)} FREE ${item.gift} was added to your cart.`, 'success');
											});
										}
									}else{
										//如果赠品行不存在，就新增
										cart.addLine({
											line: {
												quantity: item.quantity * quantity,
												item: {
													internalid: item.giftId
												}
											}
										}).then(function () {
											showMessage(`Congratulations! ${item.quantity * quantity} FREE ${item.gift} was added to your cart.`,'success')
										});
									}
								}
							})
						})
					});
				}
			});

			function showMessage(msg, type) {
				cart.showMessage({
					message: msg,
					type: type,
					selector: 'Notifications',
					timeout: 5000
				});
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
			// var item = this.model.get("item");
			return {
				// line: this.model,
				// lineId: this.model.get("internalid"),
				// item: item,
				// itemId: item.get("internalid"),
				// linkAttributes: this.model.getFullLink({
				// 	quantity: null,
				// 	location: null,
				// 	fulfillmentChoice: null
				// }),
				// isNavigable: !!this.options.navigable && !!item.get("_isPurchasable"),
				// thumbnail: this.model.getThumbnail(),
				// isQtyEditable: this.model.get("free_gift_info").eligible_quantity > 1,
				// qtyElegible: this.model.get("free_gift_info").eligible_quantity
			};
		}
	});
});
