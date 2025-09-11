// @module HP.ProductOptionSelector.ProductOptionSelector
define('HP.ProductOptionSelector.ProductOptionSelector.View'
,	[
	'hp_productoptionselector_productoptionselector.tpl'
	, 'HP.ProductOptionSelector.ProductOptionSelector.Model'
	, 'ProductDetails.Full.View'
	, 'Backbone'
	,'underscore'
	,'jQuery'
    ]
, function (
	hp_productoptionselector_productoptionselector_tpl
	,	ProductOptionSelectorModel
	,   ProductDetailsFullView
	,	Backbone
	,   _
	,   jQuery
)
{
    'use strict';

	// @class HP.ProductOptionSelector.ProductOptionSelector.View @extends Backbone.View
	return Backbone.View.extend({

		template: hp_productoptionselector_productoptionselector_tpl

	,	initialize: function (options) {
			this.items = []; // 所有同类商品
			this.model = options.model;
			// this.itemOptions = options.application.getConfig('optionSelector.itemOptions');
			this.itemOptions = [
				{
					fieldId:"custitem11",
					label:"size",
					isColor:false
				},
				{
					fieldId:"custitem12",
					label:"color",
					isColor:true
				}
			];
			this.colorMap = this.getColorPalette();
			_.each(this.itemOptions, function (opt) {
				opt.selectOption = this.model.get('item').get(opt.fieldId) || null;
			}, this);
			this.getAllItems();
		}
	,	events: {
			'click .product-option-picker': 'changeOption'
		},
		getItemCategory:function(){
			var categories = this.model.get('item').get('commercecategory').categories;
			//获取最后一层类别
			var maxCategory = _.max(categories, 'id');
			return maxCategory ? maxCategory.name : null;
		},
		getAllItems: function () {
			var search = this.options.application.getComponent('Search');
			var category = this.getItemCategory();
			var searchParams = {
				commercecategoryname: category,
				fieldset: "details"
			};
			var searchUrl = search.getUrl(searchParams);
			jQuery.ajax(searchUrl).then(_.bind(function (data) {
				this.items = data.items;
				this.buildOptions();
				this.setOptionMap(this.items);
				//根据当前 item 设置 disabled 状态
				var firstOpt = _.find(this.itemOptions, function(opt){
					return !!opt.selectOption;
				});
				if(firstOpt){
					this.updateAvailableOptions(firstOpt.fieldId, firstOpt.selectOption);
				}
				this.render();
			}, this));
		},
		buildOptions: function () {
			var self = this;
			_.each(this.itemOptions, function (opt) {
				var uniqueValues = _.chain(self.items).pluck(opt.fieldId).uniq().compact().value();
				opt.options = _.map(uniqueValues, function(value) {
					return {
						label: value,
						value: opt.isColor ? self.colorMap[value] || value : value,
						disabled: false
					};
				});
			});
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
		},
		getColorPalette:function(){
			// var palette = this.options.application.getConfig('optionSelector.colorPalette');
			let palette = [
				{
					colorName:"black",
					colorValue:"black"
			    },{
				    colorName:"beige",
					colorValue:"#E5DED5"
				}
			]
			return _.object(_.pluck(palette,'colorName'), _.pluck(palette,'colorValue'));
		},
		changeOption: function (e) {
			e.stopPropagation();
			var value = $(e.currentTarget).data('value');
			var fieldId = $(e.currentTarget).data('field');
			this.updateSelectedOption(fieldId, value);
			this.updateAvailableOptions(fieldId, value);
			this.updateCurrentItem();
			this.render();
		},
		updateSelectedOption: function (fieldId, value) {
			var opt = _.find(this.itemOptions, { fieldId: fieldId });
			if(opt) opt.selectOption = value;
		},
		updateAvailableOptions: function (fieldId, value) {
			var tempItems = _.filter(this.items, function(item) {
				return item[fieldId] === value;
			});

			_.each(this.itemOptions, function (opt) {
				if(opt.fieldId === fieldId) {
					_.each(opt.options, function (o) { o.disabled = false; });
				} else {
					var uniqueValues = _.chain(tempItems).pluck(opt.fieldId).uniq().compact().value();
					_.each(opt.options, function (o) {
						o.disabled = !_.contains(uniqueValues, o.label);
					});
					if(!_.contains(uniqueValues, opt.selectOption)) {
						opt.selectOption = uniqueValues[0] || null;
					}
				}
			});
		},
		updateCurrentItem: function () {
			var key = _.map(this.itemOptions, function (opt) {
				return opt.selectOption || opt.label;
			}).join('|');

			var currentItem = this.optionMap[key];
			if(currentItem) {
				this.model.set('item', currentItem);
				this.changeItemInfo();
			}
		},
		changeItemInfo:function(){
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
				itemOptions: this.itemOptions,
				availableOptions: this.availableOptions
			};
		}
	});
});
