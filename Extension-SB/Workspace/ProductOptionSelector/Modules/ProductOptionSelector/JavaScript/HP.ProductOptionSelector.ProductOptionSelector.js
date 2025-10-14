
define(
	'HP.ProductOptionSelector.ProductOptionSelector'
,   [
		'HP.ProductOptionSelector.ProductOptionSelector.View',
		'ProductDetails.Full.View',
		'ProductDetails.QuickView.View',
		'underscore'
	]
,   function (
		ProductOptionSelectorView,
		ProductDetailsFullView,
		ProductDetailsQuickViewView,
		_
	)
{
	'use strict';
	//PDP
	ProductDetailsFullView.prototype.childViews['Product.Options'] = function () {
		return new ProductOptionSelectorView({
			model: this.model,
			application: this.application
		});
	};
	// quick view
	ProductDetailsQuickViewView.prototype.childViews['Product.Options'] = function () {
		return new ProductOptionSelectorView({
			model: this.model,
			application: this.application
		});
	};
});
