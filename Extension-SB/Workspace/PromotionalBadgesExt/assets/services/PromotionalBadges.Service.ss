
function service(request, response)
{
	'use strict';
	try 
	{
		require('HP.PromotionalBadgesExt.PromotionalBadges.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HP.PromotionalBadgesExt.PromotionalBadges.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}