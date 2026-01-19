// @module HP.MKT.MKT
define('HP.MKT.MKT.View'
	,	[
		'hp_mkt_mkt.tpl'

		,	'HP.MKT.MKT.Model'

		,	'Backbone'
	]
	, function (
		hp_mkt_mkt_tpl

		,	MKTModel

		,	Backbone
	)
	{
		'use strict';

		// @class HP.MKT.MKT.View @extends Backbone.View
		return Backbone.View.extend({

			template: hp_mkt_mkt_tpl

			,	initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
                    (you'll need to deploy and activate the extension first)
                */
				let env = options.application.getComponent('Environment');
				this.bannerData = env.getConfig('MKT.main.banner')[0];
				this.url = env.getConfig('MKT.main.googleDrive');
			}

			,	events: {
        'click .mkt_download':'clickDownload',
			}
,      clickDownload: function () {
        gtag('event', 'download_click', {
          content_type: 'poster',
          content_name: 'promotional_poster',
          page_name: 'mkt_resource'
        });
      }
			,	bindings: {
			}

			, 	childViews: {

			}

			//@method getContext @return HP.MKT.MKT.View.Context
			,	getContext: function getContext()
			{
				return {
					bannerData: this.bannerData,
					url: this.url
				};
			}
		});
	});
