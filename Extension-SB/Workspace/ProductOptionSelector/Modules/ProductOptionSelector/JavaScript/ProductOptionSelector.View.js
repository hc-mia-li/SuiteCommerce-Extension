// @module HP.ProductOptionSelector.ProductOptionSelector
define('HP.ProductOptionSelector.ProductOptionSelector.View'
,	[
	'hp_productoptionselector_productoptionselector.tpl'
	, 'HP.ProductOptionSelector.ProductOptionSelector.Model'
	, 'ProductDetails.Full.View'
	, 'Backbone'
		,'underscore'
    ]
, function (
	hp_productoptionselector_productoptionselector_tpl
	,	ProductOptionSelectorModel
	,ProductDetailsFullView
	,	Backbone
	,_
)
{
    'use strict';

	// @class HP.ProductOptionSelector.ProductOptionSelector.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_productoptionselector_productoptionselector_tpl

	,	initialize: function (options) {
			this.items = []; // 所有同类商品
			this.model = options.model;
			this.application = options.application;
			this.itemOptions = this.application.getConfig('optionSelector.itemOptions');
			var self = this;
			_.each(this.itemOptions, function (opt) {
				opt.selectOption = self.model.get('item').get(opt.fieldId);
			})
			this.getAllItems();
		}
	,	events: {
			'click .product-views-option-picker': 'changeOption'
		},
		getItemCategory:function(){
			var categories = this.model.get('item').get('commercecategory').categories;
			//获取最后一层类别
			var maxCategory = _.max(categories, function(item) {
				return item.id;
			});
			return maxCategory ? maxCategory.name : null;
		},
		getAllItems: function () {
			var search = this.application.getComponent('Search');
			var category = this.getItemCategory();
			var searchParams = {
				commercecategoryname: category,
				fieldset: "details"
			};
			var searchUrl = search.getUrl(searchParams);
			// var url = SC.ENVIRONMENT.siteSettings.touchpoints.home;
			var self = this;
			this.colorMap = this.getColorPalette();
			//获取该类别下的所有货品
			jQuery.ajax(searchUrl).then(function (data) {
				self.items = data.items;
				self.optionsMap = {};
				_.each(self.itemOptions, function (opt) {
					var uniqueValues = _.chain(self.items).pluck(opt.fieldId).uniq().compact().value();
					if (opt.isColor) {
						opt.options = _.map(uniqueValues, function (value) {
							return { label: value, value: self.colorMap[value] || value };
						});
					} else {
						opt.options = uniqueValues;
					}
				});
				//整理Item数据，方便后续切换选项时读取
				self.setOptionMap(self.items);
				self.render();
			})
		},
		setOptionMap:function(items){
			this.optionMap = {};
			var self = this;
			items.forEach(function (item) {
				var key = _.map(self.itemOptions, function (opt) {
					return item[opt.fieldId] || opt.label;
				}).join('|');
				self.optionMap[key] = item;
			});
		}
		,getColorPalette:function(){
			var configuration = this.application.getConfig();
			var layout = configuration.layout || {};
			var colorMap = {};
			layout.colorPalette.forEach(function (color) {
				colorMap[color.colorName] = color.colorValue;
			})
			return colorMap;
		},
		changeOption: function (e) {
			e.preventDefault();
			var value = $(e.currentTarget).data('value');
			var fieldId = $(e.currentTarget).data('field');

			var currentOption = _.find(this.itemOptions, { fieldId: fieldId });
			currentOption.selectOption = value;

			var key = _.map(this.itemOptions, function (opt) {
				return opt.selectOption || opt.label;
			}, this).join('|');

			var currentItem = this.optionMap[key];

			if (currentItem) {
				this.model.set('item', currentItem);
				this.changeItemInfo();
			}
			this.render();
		}
		,changeItemInfo:function(){
			var item = this.model.get('item');
			$('[itemprop="name"]').text(item.get('storedisplayname2'));
			$('.product-details-full-content-sku-upc .product-line-sku-value').eq(0).text('SKU: ' + item.get('itemid'));
			$('.product-details-full-content-sku-upc .product-line-sku-value').eq(1).text('UPC: ' + item.get('custitem_upc'));
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return HP.ProductOptionSelector.ProductOptionSelector.View.Context
	,	getContext: function getContext()
		{
			//@class HP.ProductOptionSelector.ProductOptionSelector.View.Context
			return {
				itemOptions: this.itemOptions
			};
		}
	});
});
