// @module HP.PDPVideoExt.PDPVideoExt
define('HP.PDPVideoExt.PDPVideoExt.View'
,	[
	'hp_pdpvideoext_pdpvideoext.tpl'

	,	'Backbone'
    ]
, function (
	hp_pdpvideoext_pdpvideoext_tpl

	,	Backbone
)
{
    'use strict';

	// @class HP.PDPVideoExt.PDPVideoExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_pdpvideoext_pdpvideoext_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			let itemInfo = this.options.itemInfo;
			let firstArr = this.options.firstArr;
			let lastArr = this.options.lastArr;
			let _this = this;
			if(firstArr){
				firstArr.forEach(function (item) {
					if(item.item == itemInfo.item.itemid){
						_this.videoURL = item.videoURL;
						_this.position = 'first'
					}
				})
			}
			if(lastArr){
				lastArr.forEach(function (item) {
					if(item.item == itemInfo.item.itemid){
						_this.videoURL = item.videoURL;
						_this.position = 'last'
					}
				})
			}
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.PDPVideoExt.PDPVideoExt.View.Context
	,	getContext: function getContext()
		{
			//@class HP.PDPVideoExt.PDPVideoExt.View.Context
			return {
				videoURL: this.videoURL || '',
				position: this.position || 'last'
			};
		}
	});
});
