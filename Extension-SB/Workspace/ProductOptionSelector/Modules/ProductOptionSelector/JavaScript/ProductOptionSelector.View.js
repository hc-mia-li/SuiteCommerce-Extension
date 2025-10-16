// @module HP.ProductOptionSelector.ProductOptionSelector
define('HP.ProductOptionSelector.ProductOptionSelector.View'
,	[
	'hp_productoptionselector_productoptionselector.tpl'
	, 'HP.ProductOptionSelector.ProductOptionSelector.Model'
	, 'Backbone'
	,'underscore'
	,'jQuery'
    ]
, function (
	hp_productoptionselector_productoptionselector_tpl
	,	ProductOptionSelectorModel
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
			this.isLoading = true;
			this.items = []; // 所有同类商品
			this.model = options.model;
			this.itemOptions = options.application.getConfig().optionSelector.itemOptions;
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
				// 找出所有已选的选项
				var selectedOptions = _.filter(this.itemOptions, function(opt){
					return !!opt.selectOption;
				});

                // 对每个已选项都更新一次可用性
				_.each(selectedOptions, function(opt){
					this.updateAvailableOptions(opt.fieldId, opt.selectOption);
				}, this);
				this.isLoading = false;
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
		changeOption: function (e) {
			e.stopPropagation();
			var value = $(e.currentTarget).data('value');
			var fieldId = $(e.currentTarget).data('field');
			//如果当前选项不可用，则不做修改
			if ($(e.currentTarget).hasClass('disabled')) {
				return;
			}
			this.updateSelectedOption(fieldId, value);
			this.updateAvailableOptions(fieldId, value);
			this.updateCurrentItem();
			this.render();
		},
		updateSelectedOption: function (fieldId, value) {
			//更新当前选项
			var opt = _.find(this.itemOptions, { fieldId: fieldId });
			if(opt) opt.selectOption = value;
		},
		updateAvailableOptions: function () {
          // 遍历所有选项，更新 disabled 状态
			_.each(this.itemOptions, function (opt) {
				// 对每个选项，找出在当前已选组合下可用的值
				var tempItems = _.filter(this.items, function (item) {
					// item 必须满足所有已选选项（除了当前 opt）
					return _.every(this.itemOptions, function(o){
						if(!o.selectOption) return true; // 未选的忽略
						if(o.fieldId === opt.fieldId) return true; // 当前选项先忽略
						return item[o.fieldId] === o.selectOption;
					});
				}, this);

				var uniqueValues = _.chain(tempItems).pluck(opt.fieldId).uniq().compact().value();
				_.each(opt.options, function(o){
					o.disabled = !_.contains(uniqueValues, o.label);
				});

				// // 如果当前选中值不再可用 清空或保持 null
				// if(opt.selectOption && !_.contains(uniqueValues, opt.selectOption)){
				// 	opt.selectOption = null;
				// }

			}, this);
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
			$('.product-details-full-content-header-title').text(item.get('storedisplayname2'));
			$('.product-details-quickview-item-name').text(item.get('storedisplayname2'));
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
				availableOptions: this.availableOptions,
				isLoading: this.isLoading
			};
		}
	});
});
