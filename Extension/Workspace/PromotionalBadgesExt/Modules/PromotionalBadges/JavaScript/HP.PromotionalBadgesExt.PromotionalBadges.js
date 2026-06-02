
define(
	'HP.PromotionalBadgesExt.PromotionalBadges'
,   [
		'HP.PromotionalBadgesExt.PromotionalBadges.View'
	]
,   function (
		PromotionalBadgesView
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

			var layout = container.getComponent('Layout');
			var plp = container.getComponent('PLP');
			var pdp = container.getComponent('PDP');
			var environment = container.getComponent('Environment');

			if(layout) {
				if (!isInPromotion()) {
					layout.addToViewContextDefinition('Home.View', 'bannerTitle', 'string', function (context) {
						return environment.getConfig("PromotionalBadges.bannerTitle");
					});
				}

				// home
				layout.addChildView('home', function () {
					if (isInPromotion()) {
						return new PromotionalBadgesView({environment: environment});
					}
				});
				// PLP
				layout.addChildView('cms:facets_facet_browse_cms_area_1', function () {
					if (isInPromotion()) {
						return new PromotionalBadgesView({environment: environment, plp: plp});
					}
				});
				//PDP
				layout.addChildView('cms:item_details_banner', function () {
					if (isInPromotion()) {
						return new PromotionalBadgesView({environment: environment, pdp: pdp});
					}
				});
				// quick view
				layout.addChildView('Child.View', function() {
					let model = container.getLayout().getCurrentView().model;
					if(isInPromotion()) {
						return new PromotionalBadgesView({environment: environment,model:model});
					}
				});

				// 判断当前时间是否处于促销期间
				function isInPromotion() {
					let currentDate = new Date(
						new Date(SC.date).toLocaleString('en-US', {
							timeZone: 'America/Los_Angeles'
						})
					);
					let startDate = new Date(
						environment.getConfig('PromotionalBadges.startDate')
					);
					let endDate = new Date(
						environment.getConfig('PromotionalBadges.endDate')
					);
					console.log('badge result',currentDate >= startDate && currentDate < endDate)
					return currentDate >= startDate && currentDate < endDate;
				}
			}
		}
	};
});
