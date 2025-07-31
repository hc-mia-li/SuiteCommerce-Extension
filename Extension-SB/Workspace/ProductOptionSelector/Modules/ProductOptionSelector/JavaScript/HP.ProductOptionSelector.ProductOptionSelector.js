
define(
	'HP.ProductOptionSelector.ProductOptionSelector'
,   [
		'HP.ProductOptionSelector.ProductOptionSelector.View',
		'ProductDetails.Full.View',
		'underscore'
	]
,   function (
		ProductOptionSelectorView,
		ProductDetailsFullView,
		_
	)
{
	'use strict';
	ProductDetailsFullView.prototype.childViews['Product.Options'] = function () {
		return new ProductOptionSelectorView({
			model: this.model,
			application: this.application
		});
	};
});
