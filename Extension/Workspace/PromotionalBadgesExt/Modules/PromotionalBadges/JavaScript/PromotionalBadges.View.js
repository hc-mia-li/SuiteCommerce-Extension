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
			let qv_item = options.model?.get('item');
			let Series = environment.getConfig("PromotionalBadges.PLPSeries");
			let homeProduct = [
				"OpenFit 2",
				"OpenFit 2+",
				"OpenFit Air",
				"OpenFit Pro",
				"OpenDots One",
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
						let category = itm.custitem8;
						let size = itm.custitem_hc_item_size;
						let displayname = itm.storedisplayname2.toLowerCase();
						let item = findSeries(category,size,displayname);
						if(item){
							let dom = $('[data-sku="'+itm.itemid+'"]').find('.facets-item-cell-grid-image-wrapper');
							appendContent(dom,item);
						}
					})
				}else if(itemInfo && itemInfo.item.custitem_ccs_item_type=="Headphone"){
					//PDP
					let category = itemInfo.item.custitem8;
					let size = itemInfo.item.custitem_hc_item_size;
					let displayname = itemInfo.item.storedisplayname2.toLowerCase();
					let item = findSeries(category,size,displayname);
					if(item){
						let dom = $('.product-details-image-gallery');
						appendContent(dom, item);
					}
				}else if(qv_item){
					// quick view
					let category = qv_item.get('custitem8');
					let size = qv_item.get('custitem_hc_item_size');
					let displayname = qv_item.get('storedisplayname2').toLowerCase();
					let item = findSeries(category,size,displayname);
					if(item){
						let dom = $('.product-details-quickview-img');
						appendContent(dom, item);
					}
				}else{
					//Home
					Series.forEach(obj => {
						let matched = $('.primary-text').filter(function () {
							let text = $(this).text().toLowerCase();
							let series = matchSeries(text);
							return obj.series===series;
						})
						if(matched.length>1){
							//如果没有指定cardIndex，则全都显示
							if(obj.cardIndex){
								let indexes = obj.cardIndex.split(',').map(s => parseInt(s.trim(), 10));

								indexes.forEach(function(index) {
									let size = $(matched.get(index)).parent().parent().find('.item.active').text();
									if(!obj.size||obj.size===size){
										let dom = $(matched.get(index)).parent().parent();
										appendContent(dom,obj);
									}
								});
							}else{
								matched.each(function(i, el) {
									let size = $(el).parent().parent().find('.item.active').text();
									if (!obj.size || obj.size === size) {
										let dom = $(el).parent().parent();
										appendContent(dom, obj);
									}
								});
							}
						}else{
							let size = $(matched.get(0)).parent().parent().find('.item.active').text();
							if(!obj.size||obj.size===size){
								let dom = $(matched.get(0)).parent().parent();
								appendContent(dom,obj);
							}
						}
					})
					// 首页size切换
					$('.item').click(function () {
						let size = $(this).text();
						let name = $(this).parents('.collection').find('.primary-text').text();
						let item = Series.find(obj =>
							obj.series.toLowerCase() === name.toLowerCase() &&
							(!obj.size || obj.size === size));
						if(item){
							let dom = $(this).parents('.collection');
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

			// 找到匹配的配置记录
			function findSeries(category,size,itemName){

				// 找到所有和 item 相关的配置：series + size 都匹配（size 可选）
				var relatedSeries = Series.filter(config => {
					if ( category.toLowerCase() !== config.series.toLowerCase()) return false;

					// size 存在时，itemName 必须包含 size
					if (config.size && size.toLowerCase() !== config.size.toLowerCase()) return false;

					return true;
				});

				if (relatedSeries.length === 0) {
					return null;
				}

				// 判断是否存在 excludeKeywords 出现在 itemName 中的配置
				var hasExcluded = relatedSeries.some(obj => {
					return obj.excludeKeywords && itemName.includes(obj.excludeKeywords.toLowerCase());
				});

				if (hasExcluded) {
					// 如果任意一条 excludeKeywords 匹配了，则整体不符合
					return null;
				}
				return relatedSeries[0];
			}

			//根据name字符串匹配series
			function matchSeries(name) {

				let sortedTypes = homeProduct.sort((a, b) => b.length - a.length);

				for (let type of sortedTypes) {
					let escapedType = type.replace(/[+^${}()|[\]\\]/g, '\\$&');
					let regex = new RegExp(`^${escapedType}(\\s|$)`, 'i'); // 忽略大小写
					if (regex.test(name)) {
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
