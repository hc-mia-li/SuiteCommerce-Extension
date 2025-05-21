// @module HP.PromotionalBadgesExt.PromotionalBadges
define('HP.PromotionalBadgesExt.PromotionalBadges.View'
,	[
	'hp_promotionalbadgesext_promotionalbadges.tpl'

		,'HP.PromotionalBadgesExt.PromotionalBadges.Model'

	,	'Backbone'
    ]
, function (
	hp_promotionalbadgesext_promotionalbadges_tpl

	,PromotionalBadgesModel

	,	Backbone
)
{
    'use strict';

	// @class HP.PromotionalBadgesExt.PromotionalBadges.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_promotionalbadgesext_promotionalbadges_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			let environment = options.environment;
			let items = options.plp?.getItemsInfo();
			let itemInfo = options.pdp?.getItemInfo();
			let PLPSeries = environment.getConfig("PromotionalBadges.PLPSeries");
			let homeProduct = [
				"OpenFit",
				"OpenFit 2",
				"OpenFit Air",
				"OpenRun",
				"OpenRun Pro",
				"OpenRun Pro 2",
				"OpenMove",
				"OpenSwim",
				"OpenSwim Pro",
				"OpenComm2"
			]
			// To add elements to the page, need to wait for DOM rendering to complete.
			// When the request is done, DOM has been rendered.
			this.model = new PromotionalBadgesModel();
			this.model.fetch().done(function(result) {
				if(items){
					//PLP
					items.forEach(itm=>{
						let categories = itm.commercecategory.categories;
						let displayname = itm.storedisplayname2.toLowerCase();
						let item = findSeries(categories,displayname);
						if(item){
							let dom = $('[data-sku="'+itm.itemid+'"]').find('.facets-item-cell-grid-image-wrapper');
							appendContent(dom,item);
						}
					})
				}else if(itemInfo && itemInfo.item.custitem_ccs_item_type=="Headphone"){
					//PDP
					let categories = itemInfo.item.commercecategory.categories;
					let displayname = itemInfo.item.storedisplayname2.toLowerCase();
					let item = findSeries(categories,displayname);
					if(item){
						let dom = $('.product-details-image-gallery');
						appendContent(dom, item);
					}
				}else{
					PLPSeries.forEach(obj => {
						// Home
						$('.primary-text').filter(function(){
							let text = $(this).text();
							let series = matchSeries(text);
							let size = $(this).parent().parent().find('.item.active').text();
							if(obj.series===series&&(!obj.size||obj.size===size)){
								let dom = $(this).parent().parent();
								appendContent(dom,obj);
							}
						})

						// quick view
						let quick = $('.product-details-quickview-item-name').text();
						let series = matchSeries(quick);
						if (series==obj.series && (!obj.size || quick.toLowerCase().includes(obj.size.toLowerCase())) &&
							(
								!obj.excludeKeywords || // 如果没有排除关键词就通过
								!quick.toLowerCase().includes(obj.excludeKeywords.toLowerCase()) // displayname 中不能包含这个关键词
							)){
							let dom = $('.product-details-quickview-img');
							appendContent(dom,obj);
						}
					});
					// 首页size切换
					$('.item').click(function () {
						let size = $(this).text();
						let name = $(this).parents('.collection').find('.primary-text').text();
						let item = PLPSeries.find(obj =>
							obj.series.toUpperCase() === name.toUpperCase() &&
							(!obj.size || obj.size === size));
						if(item){
							let dom =$(this).parents('.collection');
							appendContent(dom,item);
						}else{
							$(this).parents('.collection').find('.badge-box').remove();
						}
					})
				}
			});
			// 添加促销标识
			function appendContent(dom,obj){
				let badgeContent = `
                <div class="badge-box">
                    <div class="badge">
                        <p class="badge-text">${obj.text}</p>
                        ${obj.extratext ? `<p class="badge-tag">${obj.extratext}</p>` : ''}
                    </div>
                </div>`;
				if(!dom.find('.badge-box').length){
					dom.append(badgeContent);
				}
			}

			function findSeries(categories,itemName){
				return PLPSeries.find(objA =>
					categories.some(objB =>
						objA.series === objB.name &&
						(!objA.size || itemName.toLowerCase().includes(objA.size.toLowerCase())) &&
						(
							!objA.excludeKeywords || // 如果没有排除关键词就通过
							!itemName.toLowerCase().includes(objA.excludeKeywords.toLowerCase()) // displayname 中不能包含这个关键词
						)
					)
				);
			}

			function matchSeries(name) {
				let lowerInput = name.toLowerCase();

				let sortedTypes = homeProduct.sort((a, b) => b.length - a.length);

				for (let type of sortedTypes) {
					let regex = new RegExp(`^${type.toLowerCase()}(\\s|$)`);
					if (regex.test(lowerInput)) {
						return type;
					}
				}

				return null; // 如果没有匹配，返回null
			}
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.PromotionalBadgesExt.PromotionalBadges.View.Context
	,	getContext: function getContext()
		{
			//@class HP.PromotionalBadgesExt.PromotionalBadges.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
