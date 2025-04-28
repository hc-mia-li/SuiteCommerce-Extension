// @module HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt
define('HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.View'
,	[
	'hp_returnauthorizationext_returnauthorizationext.tpl'
	
	,	'HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.SS2Model'
	
	,	'Backbone'
    ]
, function (
	hp_returnauthorizationext_returnauthorizationext_tpl
	
	,	ReturnAuthorizationExtSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_returnauthorizationext_returnauthorizationext_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ReturnAuthorizationExtModel();
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

		//@method getContext @return HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.View.Context
	,	getContext: function getContext()
		{
			//@class HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
