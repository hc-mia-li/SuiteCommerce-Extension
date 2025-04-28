
function service(request, response)
{
	'use strict';
	try 
	{
		require('HitPoint.QuickViewExtension.QuickView.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HitPoint.QuickViewExtension.QuickView.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}