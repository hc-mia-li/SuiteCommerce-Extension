
define('HP.MKT.MKT.RunClubSupport.View'
,	[
	'hp_mkt_runclubsupport.tpl'

	,	'Backbone'
    ]
, function (
	hp_mkt_runclubsupport_tpl

	,	Backbone
)
{
    'use strict';

	return Backbone.View.extend({

		template: hp_mkt_runclubsupport_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			let env = options.application.getComponent('Environment');
			this.bannerData = env.getConfig('MKT.runClub.banner')[0];
			this.kitBlocks = env.getConfig('MKT.runClub.kitBlocks');
		}

	,	events: {
      'click .form-button': 'handleClick'
		}
,   handleClick: function () {
      gtag('event', 'get_demo_kit', {
        content_type: 'demo_kit',
        content_name: 'get_demo_kit',
        page_name: 'run_club_support'
      });
    }
	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.MKT.RunClubSupport.View.Context
	,	getContext: function getContext()
		{
			//@class HP.MKT.RunClubSupport.View.Context
			return {
				bannerData: this.bannerData,
				kitBlocks: this.kitBlocks
			};
		}
	});
});
