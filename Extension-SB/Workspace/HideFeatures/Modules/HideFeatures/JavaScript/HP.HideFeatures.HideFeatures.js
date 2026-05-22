
define(
	'HP.HideFeatures.HideFeatures'
,   [
		'HP.HideFeatures.HideQuote',
		'HP.HideFeatures.HideWishlist',
		'HP.HideFeatures.HideFeatures.MyAccount'
	]
,   function (
		HideQuote,
		HideWishlist,
		MyAccount
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
			let environment = container.getComponent("Environment");
			let HideFeatures = environment.getConfig("HideFeatures");
			if(HideFeatures.HideQuote){
				HideQuote.mountToApp(container);
			}
			if(HideFeatures.HideWishlist){
				HideWishlist.mountToApp(container);
			}

			MyAccount.mountToApp(container);
		}
	};
});
