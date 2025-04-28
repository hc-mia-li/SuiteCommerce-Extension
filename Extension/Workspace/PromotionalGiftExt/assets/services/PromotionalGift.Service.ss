
function service(request, response)
{
	'use strict';
	try 
	{
		require('HP.PromotionalGiftExt.PromotionalGift.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HP.PromotionalGiftExt.PromotionalGift.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}