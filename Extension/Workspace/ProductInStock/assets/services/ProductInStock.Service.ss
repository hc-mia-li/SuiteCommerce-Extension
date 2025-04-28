
function service(request, response)
{
	'use strict';
	try 
	{
		require('HitPoint.ProductInStock.ProductInStock.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HitPoint.ProductInStock.ProductInStock.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}