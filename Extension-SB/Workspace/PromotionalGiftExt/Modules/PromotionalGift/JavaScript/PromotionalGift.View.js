// @module HP.PromotionalGiftExt.PromotionalGift
define('HP.PromotionalGiftExt.PromotionalGift.View'
,	[
	'hp_promotionalgiftext_promotionalgift.tpl'
	,'HP.PromotionalGiftExt.PromotionalGift.Model'
	,'Backbone'
    ]
, function (
		hp_promotionalgiftext_promotionalgift_tpl
    ,PromotionalGiftModel
	,	Backbone
)
{
    'use strict';

	// @class HP.PromotionalGiftExt.PromotionalGift.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_promotionalgiftext_promotionalgift_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.PromotionalGiftExt.PromotionalGift.View.Context
	,	getContext: function () {
			return {

			};
		}
	});
});
