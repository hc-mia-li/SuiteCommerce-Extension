
define(
	'HP.MKT.MKT'
,   [
		'HP.MKT.MKT.View',
		'HP.MKT.MKT.ProductLibrary.View',
		'HP.MKT.MKT.RunClubSupport.View'
	]
,   function (
		MKTView,
		ProductLibraryView,
		RunClubSupportView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			let PageType = container.getComponent('PageType');
			PageType.registerPageType({
				name: 'MKT',
				routes: ['mkt'],
				view: MKTView
			});
			PageType.registerPageType({
				name: 'MKT',
				routes: ['mkt/product-library'],
				view: ProductLibraryView
			});
			PageType.registerPageType({
				name: 'MKT',
				routes: ['mkt/run-club-support'],
				view: RunClubSupportView
			});

		}
	};
});
