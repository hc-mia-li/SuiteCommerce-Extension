
define(
	'HitPoint.HidePriceTag.HidePriceTag'
,   [
		'HitPoint.HidePriceTag.HidePriceTag.View'
	]
,   function (
		HidePriceTagView
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
			
			if(layout)
			{
				layout.addChildView('login-container', function() { 
					return new HidePriceTagView({ container: container });
				});
			}

		}
	};
});
