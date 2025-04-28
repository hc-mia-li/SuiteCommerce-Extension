// @module HitPoint.HidePriceTag.HidePriceTag
define('HitPoint.HidePriceTag.HidePriceTag.View'
,	[
	'hp_hidepricetag_hidepricetag.tpl'
	
	,	'Backbone'
    ]
, function (
	hp_hidepricetag_hidepricetag_tpl
	
	,	Backbone
)
{
    'use strict';

	// @class HitPoint.HidePriceTag.HidePriceTag.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_hidepricetag_hidepricetag_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HidePriceTagModel();
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

		//@method getContext @return HitPoint.HidePriceTag.HidePriceTag.View.Context
	,	getContext: function getContext()
		{
			//@class HitPoint.HidePriceTag.HidePriceTag.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
