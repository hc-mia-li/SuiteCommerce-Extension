// @module HP.ItemSpecExt.ItemSpecExt
define('HP.ItemSpecExt.ItemSpecExt.View'
,	[
	'hp_itemspecext_itemspecext.tpl'

	,	'Backbone'
    ]
, function (
	hp_itemspecext_itemspecext_tpl
	
	,	Backbone
)
{
    'use strict';

	// @class HP.ItemSpecExt.ItemSpecExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_itemspecext_itemspecext_tpl

	,	initialize: function (options) {
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			const itemInfo = this.options.itemInfo;
			this.specURL = itemInfo.item.custitem_item_spec;
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.ItemSpecExt.ItemSpecExt.View.Context
	,	getContext: function getContext()
		{
			//@class HP.ItemSpecExt.ItemSpecExt.View.Context
			this.specURL = this.specURL || ''
			return {
				specURL: this.specURL
			};
		}
	});
});
