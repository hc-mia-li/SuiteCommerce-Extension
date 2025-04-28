
function service(request, response)
{
	'use strict';
	try 
	{
		require('HitPoint.HidePriceTag.HidePriceTag.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HitPoint.HidePriceTag.HidePriceTag.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}