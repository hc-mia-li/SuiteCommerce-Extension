// @module HitPoint.ProductInStock.ProductInStock
define('HitPoint.ProductInStock.ProductInStock.View'
,	[
	'hp_productinstock_productinstock.tpl'
	
	,	'HitPoint.ProductInStock.ProductInStock.SS2Model'
	
	,	'Backbone'
    ]
, function (
	hp_productinstock_productinstock_tpl
	
	,	ProductInStockSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class HitPoint.ProductInStock.ProductInStock.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_productinstock_productinstock_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			this.model = new ProductInStockSS2Model();
			var self = this;
			console.log(options.model);
			self.message = options.model?.item?.quantityavailable;
			// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HitPoint.ProductInStock.ProductInStock.View.Context
	,	getContext: function getContext()
		{
			//@class HitPoint.ProductInStock.ProductInStock.View.Context
			var self = this;
			//@class SC.ProductInStock.ProductInStock.View.Context
			var message = '';
			var stockStatus = true;
			if(self.message == 0) {
				message = 'Sold Out';
				stockStatus = false;
			} else if(self.message < 9) {
				message = 'In stock: ' + self.message;
			}
			return {
				message: message,
				stockStatus: stockStatus
			};
		}
	});
});
