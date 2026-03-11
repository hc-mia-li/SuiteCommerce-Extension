
function service(request, response)
{
	'use strict';
	try 
	{
		require('HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}