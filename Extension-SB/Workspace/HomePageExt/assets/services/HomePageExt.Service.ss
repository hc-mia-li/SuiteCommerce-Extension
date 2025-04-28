
function service(request, response)
{
	'use strict';
	try 
	{
		require('HitPoint.HomePageExt.HomePageExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HitPoint.HomePageExt.HomePageExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}