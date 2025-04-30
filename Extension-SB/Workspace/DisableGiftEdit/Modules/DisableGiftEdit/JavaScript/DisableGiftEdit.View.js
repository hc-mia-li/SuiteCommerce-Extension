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

			var pdp = options.pdp;
			var environment = options.environment;
			var cart = options.cart;
			var giftConfig = environment.getConfig('DisableGiftEdit');
			var enabled = giftConfig.enabled;
			var gifts = giftConfig.promotions;
			this.showBtn = true;
			var _this = this;
			console.log('pdp',pdp)
			if(pdp){
				var info = pdp.getItemInfo();
				if(enabled){
					var find = gifts.find(obj=>obj.gift==info.item.internalid);
					if(find){
						_this.showBtn = false;
					}
				}
			}
			if(cart && enabled){
				cart.on('beforeAddLine',function(line){
					console.log(line)
					var find = gifts.find(obj=>obj.gift==line.line.item.internalid);
					if(find){
						let msgElement = document.querySelector('.global-views-message-error');
						if (!msgElement) {
							cart.showMessage({
								message: 'The current item is not allowed to be sold separately',
								type: 'error',
								selector: 'Notifications'
							});
						}
						return jQuery.Deferred().reject();
					}
				})
				this.showBtn = false;
			}
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
			return {
				showBtn: this.showBtn
			};
		}
	});
});
