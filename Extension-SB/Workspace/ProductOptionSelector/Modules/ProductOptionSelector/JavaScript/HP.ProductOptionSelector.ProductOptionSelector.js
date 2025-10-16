
define(
	'HP.ProductOptionSelector.ProductOptionSelector'
,   [
		'HP.ProductOptionSelector.ProductOptionSelector.View',
		'ProductDetails.Full.View',
		'ProductDetails.QuickView.View',
		'Cart.AddToCart.Button.View',
		'Profile.Model',
		'underscore'
	]
,   function (
		ProductOptionSelectorView,
		ProductDetailsFullView,
		ProductDetailsQuickViewView,
		CartAddToCartButtonView,
		ProfileModel,
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

	//没有登录时，不显示加入购物车按钮
	_.extend(CartAddToCartButtonView.prototype, {
		getContext: function () {
			var isLoggedIn = ProfileModel.getInstance().get('isLoggedIn');
			return {
				isCurrentItemPurchasable: isLoggedIn=='F'? false : this.model.getItem().get('_isPurchasable'),
				isUpdate: !this.model.isNew() && this.model.get('source') === 'cart'
			};
		}
	})
});
