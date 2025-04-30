
define(
	'HP.DisableGiftEdit.DisableGiftEdit'
,   [
		'HP.DisableGiftEdit.DisableGiftEdit.View'
	]
,   function (
		DisableGiftEditView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{

			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var pdp = container.getComponent('PDP');
			var environment = container.getComponent('Environment');
			var cart = container.getComponent('Cart');

			if(layout)
			{
				//cart
				layout.addChildView('Quick.Order', function() {
					return new DisableGiftEditView({ container: container,cart:cart,environment:environment});
				});
				//pdp
				layout.addChildView('cms:item_info_bottom', function() {
					return new DisableGiftEditView({ container: container,pdp: pdp,environment:environment});
				})
			}
		}
	};
});
