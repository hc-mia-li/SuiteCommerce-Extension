
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

			if(layout)
			{
				//cart
				layout.addChildView('cms:cart_detailed_cms_area_1', function() {
					return new DisableGiftEditView({ container: container });
				});
			}
		}
	};
});
