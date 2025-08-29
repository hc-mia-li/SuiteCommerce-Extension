
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
			this.categories = this.categoryData.filter(item => item.parentId === "");
			this.category = this.categories[0].category;
			this.subCategory = 'ALL';
			this.productsData = env.getConfig('MKT.productLibrary.products');
			this.subCategories = this.categoryData.filter(item => item.parentId === this.category);
			this.products = this.productsData.filter(item =>
				this.subCategories.some(sub => sub.category === item.category)
			);
			document.addEventListener('click', function() {
				document.querySelectorAll('.pl_dropdown.pl_dropdown-open')
					.forEach(item => item.classList.remove('pl_dropdown-open'));
			});
		}

	,	events: {
			'click .pl_dropdown':'openDropdown',
			'click .pl_dropdown-list':'handleSelect'
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
				this.subCategories = this.categoryData.filter(item => item.parentId === this.category);
			}else{
				this.subCategory = value;
			}
			if(this.subCategory!=='ALL'){
				this.products = this.productsData.filter(item => item.category === this.subCategory);
			}else{
				this.products = this.productsData.filter(item =>
					this.subCategories.some(sub => sub.category === item.category)
				);
			}
			this.render();
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
