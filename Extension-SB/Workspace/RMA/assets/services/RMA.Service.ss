
function service(request, response)
{
	'use strict';
	try 
	{
		require('HitPoint.RMA.RMA.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HitPoint.RMA.RMA.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}