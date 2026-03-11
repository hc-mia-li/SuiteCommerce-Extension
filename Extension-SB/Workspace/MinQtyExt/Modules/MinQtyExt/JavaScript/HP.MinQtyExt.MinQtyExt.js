
define(
	'HP.MinQtyExt.MinQtyExt'
,   [
		'HP.MinQtyExt.MinQtyExt.View',
		'Header.MiniCart.View',
		'Cart.Detailed.View',
		'underscore'
	]
,   function (
		MinQtyExtView,
		HeaderMiniCartView,
		CartDetailedView,
		_
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

			/** @type {LayoutComponent} */
			var cart = container.getComponent('Cart');

			// mini cart处的checkout按钮添加判断
			_.extend(HeaderMiniCartView.prototype, {
				trackEvent: _.wrap(HeaderMiniCartView.prototype.trackEvent, function (fn, e) {
					// 修改 model 值
					var lines = this.model.get('lines');
					var flag = handleClick(lines);
					if(flag) return fn.apply(this, e);
					return false;
				})
			})

			// cart处的checkout按钮添加判断
			_.extend(CartDetailedView.prototype, {
				trackEvent: _.wrap(CartDetailedView.prototype.trackEvent, function (fn, e) {
					// 修改 model 值
					var lines = this.model.get('lines');
					var flag = handleClick(lines);
					if(flag) return fn.apply(this, e);
					return false;
				})
			})

			//点击checkout按钮时的事件
			function handleClick(lines) {
				let sum = lines.reduce((total, prod) => {
					if (prod.get('item').get('custitem_ccs_item_type') === "Headphone") {
						return total + prod.get('quantity');
					}
					return total;
				}, 0);
				if (sum > 0 && sum < 4) {
					let msgElement = document.querySelector('.global-views-message-error');
					if (!msgElement) {
						cart.showMessage({
							message: 'The quantity of headphones in the order should be at least 4.',
							type: 'error',
							selector: 'Notifications'
						});
						window.scrollTo({
							top: 0,
							behavior: 'smooth'
						});
					}
					return false;
				}
				return true;
			}

            if(cart)
            {
				//如果是在新标签页更新了购物车,但在当前标签页点击结账,会跳过MOQ校验
				cart.on('beforeSubmit', function () {
					let deferred = jQuery.Deferred();
					cart.getLines().done(function (lines) {
						let sum = lines.reduce((total, prod) => {
							if (prod.item.extras.custitem_ccs_item_type === "Headphone") {
								return total + prod.quantity;
							}
							return total;
						}, 0);
						if (sum > 0 && sum < 4) {
							let msgElement = document.querySelector('.global-views-message-error');
							if (!msgElement) {
								cart.showMessage({
									message: 'The quantity of headphones in the order should be at least 4.',
									type: 'error',
									selector: 'Notifications'
								});
								window.scrollTo({
									top: 0,
									behavior: 'smooth'
								});
							}
							deferred.reject();
						}
						deferred.resolve();
					});
					return deferred;
				})
            }
		}
	};
});
