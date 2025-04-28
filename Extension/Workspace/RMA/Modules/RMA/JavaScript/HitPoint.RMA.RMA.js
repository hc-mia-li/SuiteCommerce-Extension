
define(
	'HitPoint.RMA.RMA'
	, [
		'HitPoint.RMA.RMA.View',
		'HitPoint.RMA.RMA.SaleOrderItem.View'
	]
	, function (
		RMAView,
		RMASaleOrderItemView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');

				let PageType = container.getComponent('PageType');

				PageType.registerPageType({
					name: 'Return Products',
					routes: ['public-return-authorization'],
					view: RMAView
				});
			}
		};
	});
