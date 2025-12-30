
define('HP.MKT.MKT.ProductLibrary.View'
,	[
	'hp_mkt_productlibrary.tpl'

	,	'Backbone'
    ]
, function (
	hp_mkt_productlibrary_tpl
	,	Backbone
)
{
    'use strict';

	return Backbone.View.extend({

		template: hp_mkt_productlibrary_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			let env = options.application.getComponent('Environment');
			this.categoryData = env.getConfig('MKT.productLibrary.category');
			this.productsData = env.getConfig('MKT.productLibrary.products');
			//获取一级分类
			this.categories = this.categoryData.filter(item => item.parentId === "");
			//设置默认一级分类、二级分类
			this.category = this.categories[0].category;
			this.subCategory = 'ALL';
			//获取二级分类
			this.subCategories = this.filterSubCategories();
			//获取当前分类的货品
			this.products = this.filterProducts(this.category,this.subCategory);
			document.addEventListener('click', function() {
				document.querySelectorAll('.pl_dropdown.pl_dropdown-open')
					.forEach(item => item.classList.remove('pl_dropdown-open'));
			});
		}
    ,  destroy:function () {
      Backbone.View.prototype.destroy.apply(this, arguments);
    }
	,	events: {
			'click .pl_dropdown':'openDropdown',
			'click .pl_dropdown-list':'handleSelect',
      'click .pl_table-subrow-download':'clickDownload'
		}
		,filterProducts:function (category, subCategory) {
			if (subCategory !== 'ALL') {
				return this.productsData.filter(item => item.category === this.subCategory);
			}else{
				return this.productsData.filter(item =>
					this.subCategories.some(sub => sub.category === item.category)
				);
			}

		}
		,filterSubCategories:function () {
			return this.categoryData.filter(item => item.parentId === this.category);
		}
		,openDropdown:function(e) {
			e.stopPropagation();
			const el = e.currentTarget;
			document.querySelectorAll('.pl_dropdown.pl_dropdown-open')
				.forEach(item => {
					if (item !== el) {
						item.classList.remove('pl_dropdown-open');
					}
				});
			el.classList.toggle('pl_dropdown-open');
		},
		handleSelect:function(e) {
			e.stopPropagation();
			const type = e.currentTarget.dataset.type;
			const item = e.target.closest('.pl_dropdown-item');
			if (!item) return;
			const value = item.dataset.value;
			const selectEl = e.currentTarget.closest('.pl_dropdown');
			selectEl.classList.remove('pl_dropdown-open');
			if(type==='Category'){
				this.category = value;
				this.subCategory = 'ALL';
				this.subCategories = this.filterSubCategories();
			}else{
				this.subCategory = value;
			}
			this.products = this.filterProducts(this.category,this.subCategory);
			this.render();
		}
    ,clickDownload(e){
      const $btn = $(e.currentTarget);
      const category = $btn.data('category');
      const isVideo = $btn.hasClass('download_video');
      gtag('event', isVideo ? 'download video' : 'download image', {
        category: category
      });
    }
	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.MKT.ProductLibrary.View.Context
	,	getContext: function getContext()
		{
			//@class HP.MKT.ProductLibrary.View.Context
			return {
				category: this.category,
				categories: this.categories,
				subCategory: this.subCategory,
				products: this.products,
				subCategories: this.subCategories
			};
		}
	});
});
