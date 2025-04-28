
define(
	'HP.MinQtyExt.MinQtyExt'
,   [
		'HP.MinQtyExt.MinQtyExt.View'
	]
,   function (
		MinQtyExtView
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
			var cart = container.getComponent('Cart');

            if(layout)
            {
            	//页面会有两个MiniCart.Actions,所以换成用Header
                layout.addChildView('Header', function() {
                    return new MinQtyExtView({ layout: layout,cart:cart });
                });
            }
		}
	};
});
