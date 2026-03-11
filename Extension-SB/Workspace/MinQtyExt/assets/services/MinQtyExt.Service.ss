
function service(request, response)
{
	'use strict';
	try 
	{
		require('HP.MinQtyExt.MinQtyExt.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HP.MinQtyExt.MinQtyExt.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}