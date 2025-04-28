
function service(request, response)
{
	'use strict';
	try 
	{
		require('HP.DisableGiftEdit.DisableGiftEdit.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('HP.DisableGiftEdit.DisableGiftEdit.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}