
function service(request, response)
{
	'use strict';
	try 
	{
		require('HP.ProductPromotionsExt.ProductPromotionsExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HP.ProductPromotionsExt.ProductPromotionsExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}