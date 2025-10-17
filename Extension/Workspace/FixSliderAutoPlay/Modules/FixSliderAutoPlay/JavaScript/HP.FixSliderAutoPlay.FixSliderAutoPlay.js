
define(
	'HP.FixSliderAutoPlay.FixSliderAutoPlay'
,   [
		'Home.View',
		'Utils',
		'underscore'
	]
,   function (
		HomeView,
		Utils,
		_
	)
{
	'use strict';

	_.extend(HomeView.prototype, {
		initSlider: function() {
			let self = this;
			Utils.initBxSlider(this.$('[data-slider]'), {
				nextText: '<a class="home-gallery-next-icon"></a>',
				prevText: '<a class="home-gallery-prev-icon"></a>',
				onSliderLoad: function(){
					//根据banner动态切换菜单项颜色
					if(window.innerWidth>=992) {
						self.updateMenuColor();
					}
				},
				onSlideBefore: function($slideElement){
					//根据banner动态切换菜单项颜色
					if(window.innerWidth>=992 && $('[data-slider]').length) {
						let color = $slideElement.find('.custom-menu-color').css('color');
						$('.header-menu-level1-anchor').css('color', color);
						$('.svg-shopping-bag').css('fill', color);
						$('.svg-search').css('fill', color);
						$('.header-mini-cart-menu-cart-legend').css('color', color);
						if (color == 'rgb(255, 255, 255)') { //#FFFFFF
							$('.header-logo-image').css('filter', 'none');
						} else {
							$('.header-logo-image').css('filter', 'invert(1)');
						}
					}
				},
				onSlideAfter:function(){
					//实现手动切换图片后，重新倒计时
					this.stopAuto();
					this.startAuto();
				}
			});
		},
		updateMenuColor: function() {
			let currentItem = document.querySelector('li[aria-hidden="false"] .custom-menu-color');
			if (!currentItem) {
				currentItem = document.querySelector('.custom-menu-color')
			}
			let color = currentItem?.style.color; // 获取当前活动项目对应的颜色

			$('.header-menu-level1-anchor').css('color', color);
			$('.svg-shopping-bag').css('fill', color);
			$('.svg-search').css('fill', color);
			$('.header-mini-cart-menu-cart-legend').css('color', color);
			if (color == 'rgb(255, 255, 255)') { //#FFFFFF
				$('.header-logo-image').css('filter', 'none');
			} else {
				$('.header-logo-image').css('filter', 'invert(1)');
			}
		},
		destroy:_.wrap(HomeView.prototype.destroy,function(fn){
			this.$('[data-slider]').data('bxSlider')?.destroySlider();
			$('.header-menu-level1-anchor').removeAttr('style');
			$('.svg-shopping-bag').removeAttr('style');
			$('.svg-search').removeAttr('style');
			$('.header-mini-cart-menu-cart-legend').removeAttr('style');
			$('.header-logo-image').removeAttr('style');
			return fn.apply(this, _.toArray(arguments).slice(1));
		})
	})
});
