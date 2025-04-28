
define(
	'HP.ProductPromotionsExt.ProductPromotionsExt'
,   [
		'HP.ProductPromotionsExt.ProductPromotionsExt.View'
	]
,   function (
		ProductPromotionsExtView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var plp = container.getComponent('PLP');
			var pdp = container.getComponent('PDP');
			var environment = container.getComponent('Environment');

			if(layout)
			{
				if(!isInPromotion()){
					layout.addToViewContextDefinition('Home.View', 'bannerTitle', 'string', function (context) {
						return environment.getConfig("ProductPromotions.bannerTitle");
					});
				}
				// home
				layout.addChildView('home', function() {
					if(isInPromotion()){
						return new ProductPromotionsExtView({ environment: environment});
					}
				});
				// PLP
				layout.addChildView('cms:facets_facet_browse_cms_area_1', function() {
					if(isInPromotion()){
						return new ProductPromotionsExtView({ environment: environment,plp:plp });
					}
				});
				//PDP
				layout.addChildView('cms:item_details_banner', function() {
					if(isInPromotion()) {
						return new ProductPromotionsExtView({environment: environment, pdp: pdp});
					}
				});
				//quick view
				layout.addChildView('Child.View', function() {
					if(isInPromotion()) {
						return new ProductPromotionsExtView({environment: environment});
					}
				});

				// 判断当前时间是否处于促销期间
				function isInPromotion(){
					// Convert timestamp to PST date
					// 创建一个 Date 对象
					var date = new Date(SC.date);
					// 使用 toLocaleString 转换为指定格式
					var options = {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit',
						hour12: true,
						timeZone: 'America/Los_Angeles' // 处理夏令时
					};
					// 转换为指定格式
					var formattedDate = date.toLocaleString('en-US', options);
					// 处理格式，去掉多余的部分
					var [datePart, timePart] = formattedDate.split(', ');
					var [month, day, year] = datePart.split('/');
					var [hour, minute, secondPart] = timePart.split(':');
					// 处理秒数的 AM/PM 部分
					var [second, period] = secondPart.split(' ');
					// 拼接为所需格式
					var currentStr = `${year}/${month}/${day} ${hour}:${minute}:${second} ${period}`;
					var startStr = environment.getConfig("ProductPromotions.startDate");
					var endStr = environment.getConfig("ProductPromotions.endDate");
					var currentDate = new Date(currentStr);
					var startDate = new Date(startStr);
					var endDate = new Date(endStr);
					console.log('result',startDate <= currentDate && currentDate<endDate)
					return startDate <= currentDate && currentDate<endDate;
				}
			}
		}
	};
});
