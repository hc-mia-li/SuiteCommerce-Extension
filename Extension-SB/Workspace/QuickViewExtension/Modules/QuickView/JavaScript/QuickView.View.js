// @module HitPoint.QuickViewExtension.QuickView
define('HitPoint.QuickViewExtension.QuickView.View'
,	[
	'hp_quickviewextension_quickview.tpl'
	
	,	'HitPoint.QuickViewExtension.QuickView.SS2Model'
	
	,	'Backbone'
    ]
, function (
	hp_quickviewextension_quickview_tpl
	
	,	QuickViewSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class HitPoint.QuickViewExtension.QuickView.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_quickviewextension_quickview_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			this.model = new QuickViewSS2Model();
			var self = this;
			self.message = options.model.item.storedetaileddescription;
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

		//@method getContext @return HitPoint.QuickViewExtension.QuickView.View.Context
	,	getContext: function getContext()
		{
			//@class HitPoint.QuickViewExtension.QuickView.View.Context
			this.message = this.message || ''
			return {
				message: this.message
			};
		}
	});
});
