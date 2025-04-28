// @module HP.DisableGiftEdit.DisableGiftEdit
define('HP.DisableGiftEdit.DisableGiftEdit.View'
,	[
	'hp_disablegiftedit_disablegiftedit.tpl'

	,	'Backbone'
    ]
, function (
		hp_disablegiftedit_disablegiftedit_tpl
		, Backbone
)
{
    'use strict';

	// @class HP.DisableGiftEdit.DisableGiftEdit.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_disablegiftedit_disablegiftedit_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new DisableGiftEditModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.DisableGiftEdit.DisableGiftEdit.View.Context
	,	getContext: function getContext()
		{
			//@class HP.DisableGiftEdit.DisableGiftEdit.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
