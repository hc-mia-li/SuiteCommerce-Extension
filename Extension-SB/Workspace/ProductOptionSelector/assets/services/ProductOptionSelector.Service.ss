
function service(request, response)
{
	'use strict';
	try 
	{
		require('HP.ProductOptionSelector.ProductOptionSelector.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HP.ProductOptionSelector.ProductOptionSelector.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}