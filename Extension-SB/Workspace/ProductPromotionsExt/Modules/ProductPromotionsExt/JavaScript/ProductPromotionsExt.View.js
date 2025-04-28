// @module HP.ProductPromotionsExt.ProductPromotionsExt
define('HP.ProductPromotionsExt.ProductPromotionsExt.View'
,	[
	'hp_productpromotionsext_productpromotionsext.tpl'
		,'HP.ProductPromotionsExt.ProductPromotionsExt.Model'

	,	'Backbone'
    ]
, function (
	hp_productpromotionsext_productpromotionsext_tpl
	,ProductPromotionsExtModel

	,	Backbone
)
{
    'use strict';

	// @class HP.ProductPromotionsExt.ProductPromotionsExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_productpromotionsext_productpromotionsext_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			let environment = options.environment;
			let items = options.plp?.getItemsInfo();
			let itemInfo = options.pdp?.getItemInfo();
			let PLPSeries = environment.getConfig("ProductPromotions.PLPSeries");
			let homeProduct = [
				{"series":"OpenFit Air"},
				{"series":"OpenFit",exclude:'Air'},//由于判断时根据字符串匹配，OpenFit和OpenFit Air容易同事匹配上，需要排除
				{"series":"OpenRun Pro",exclude:'2'},
				{"series":"OpenRun Pro 2"},
				{"series":"OpenRun",exclude:'Pro'},
				{"series":"OpenMove"},
				{"series":"OpenSwim Pro"},
				{"series":"OpenSwim",exclude:'Pro'},
				{"series":"OpenComm2"}
			]
			// To add elements to the page, need to wait for DOM rendering to complete.
			// When the request is done, DOM has been rendered.
			this.model = new ProductPromotionsExtModel();
			this.model.fetch().done(function(result) {
				if(items){
					//PLP
					items.forEach(itm=>{
						let categories = itm.commercecategory.categories;
						let displayname = itm.storedisplayname2.toLowerCase();
						let item = PLPSeries.find(objA =>
							categories.some(objB =>
								objA.series === objB.name &&
								(!objA.size || displayname.toLowerCase().includes(objA.size.toLowerCase())) &&
								(
									!objA.excludeKeywords || // 如果没有排除关键词就通过
									!displayname.toLowerCase().includes(objA.excludeKeywords.toLowerCase()) // displayname 中不能包含这个关键词
								)
							)
						);
						if(item){
							let dom = $('[data-sku="'+itm.itemid+'"]').find('.facets-item-cell-grid-image-wrapper');
							appendContent(dom,item);
						}
					})
				}else if(itemInfo && itemInfo.item.custitem_ccs_item_type=="Headphone"){
					//PDP
					let categories = itemInfo.item.commercecategory.categories;
					let displayname = itemInfo.item.storedisplayname2.toLowerCase();
					let item = PLPSeries.find(objA =>
						categories.some(objB =>
							objA.series === objB.name &&
							(!objA.size || displayname.toLowerCase().indexOf(objA.size.toLowerCase()) > -1) &&
							(!objA.excludeKeywords || displayname.toLowerCase().indexOf(objA.excludeKeywords.toLowerCase()) === -1)
						)
					);
					if(item){
						let dom = $('.product-details-image-gallery');
						appendContent(dom, item);
					}
				}else{
					PLPSeries.forEach(obj => {
						let item = homeProduct.find(el => el.series === obj.series);
						if (item) {
							// Home
							$('.primary-text').filter(function(){
								let text = $(this).text();
								let series = item.series.toUpperCase();
								let size = $(this).parent().parent().find('.item.active').text();
								if(text===series&&(!obj.size||obj.size===size)){
									let dom = $(this).parent().parent();
									appendContent(dom,obj);
								}
							})

							// quick view
							let quick = $('.product-details-quickview-item-name').text();
							if (
								quick.includes(obj.series) &&
								(!item.exclude || quick.indexOf(item.exclude) < 0) &&
								(!obj.size || quick.toLowerCase().indexOf(obj.size.toLowerCase()) > -1) &&
								quick.indexOf('(') < 0 &&
								(!obj.excludeKeywords || quick.toLowerCase().indexOf(obj.excludeKeywords.toLowerCase()) < 0)
							){	let dom = $('.product-details-quickview-img')
								appendContent(dom,obj);
							}
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
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.ProductPromotionsExt.ProductPromotionsExt.View.Context
	,	getContext: function getContext()
		{
			//@class HP.ProductPromotionsExt.ProductPromotionsExt.View.Context
			return {
				startDate:this.startDate,
				endDate:this.endDate,
				PLPSeries:this.PLPSeries
			};
		}
	});
});
