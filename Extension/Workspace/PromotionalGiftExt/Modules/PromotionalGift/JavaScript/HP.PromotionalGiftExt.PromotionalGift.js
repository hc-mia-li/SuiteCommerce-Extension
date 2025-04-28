
define(
	'HP.PromotionalGiftExt.PromotionalGift'
,   [
		'HP.PromotionalGiftExt.PromotionalGift.View'
	]
,   function (
		PromotionalGiftView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{

			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var environment = container.getComponent('Environment');
			var cart = container.getComponent('Cart');

			if(cart)
			{
				var promotionalGift = environment.getConfig('PromotionalGift');

				if(isInPromotion()){
					return new PromotionalGiftView({cart:cart,promotionalGift:promotionalGift})
				}

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
					var startStr = promotionalGift.startDate;
					var endStr = promotionalGift.endDate;
					console.log('result',startStr <= currentStr && currentStr<endStr)
					return startStr <= currentStr && currentStr<endStr;
				}
			}

		}
	};
});
