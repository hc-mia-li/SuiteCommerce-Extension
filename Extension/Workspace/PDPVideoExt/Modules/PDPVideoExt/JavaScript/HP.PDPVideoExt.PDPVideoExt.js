
define(
	'HP.PDPVideoExt.PDPVideoExt'
,   [
		'HP.PDPVideoExt.PDPVideoExt.View'
	]
,   function (
		PDPVideoExtView
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
			var layout = container.getComponent('Layout');
			var pdp = container.getComponent("PDP");
			var environment = container.getComponent("Environment");

			if(pdp)
			{
				var firstArr = environment.getConfig("PDPVideoExt.first");
				var lastArr = environment.getConfig("PDPVideoExt.last");

				layout.addToViewContextDefinition('ItemRelations.Related.View','description','string',function(){
					return pdp.getItemInfo()?.item.relateditemsdescription?.replace(/<[^>]*>/g, '');
				})

				layout.addChildView('Product.ImageGallery', function() {
					return new PDPVideoExtView({ itemInfo: pdp.getItemInfo(),firstArr:firstArr,lastArr:lastArr });
				});
			}
		}
	};
});
