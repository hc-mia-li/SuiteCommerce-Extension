
define(
	'HP.InventoryStatusOverride.InventoryStatusOverride'
,   [
		'ProductLine.Stock.View',
		'underscore'
	]
,   function (
		ProductLineStockView,
		_
	)
{
	'use strict';

	return {
		mountToApp: function mountToApp(container) {
			var env = container.getComponent("Environment");

			let items = env.getConfig("InventoryStatus.Items")||[];
			_.extend(ProductLineStockView.prototype, {
				getContext: _.wrap(ProductLineStockView.prototype.getContext, function (fn) {
					var context = fn.apply(this, arguments);
					var self = this;
					var matchedItem = _.find(items, function(item) {
						let itemid = self.model.get('itemid')?self.model.get('itemid'):self.model.get('item').get('itemid')
						return item.itemId === itemid;
					});

					if (matchedItem) {
						context.showOutOfStockMessage = true;
						if (matchedItem.OutOfStockMessage) {
							context.stockInfo.outOfStockMessage = matchedItem.OutOfStockMessage;
						}
						context.stockInfo.stock = 0;
						context.stockInfo.isInStock = false;
						context.stockInfo.showOutOfStockMessage = true;
					}
					return context;
				})
			});
		}
	}
});
