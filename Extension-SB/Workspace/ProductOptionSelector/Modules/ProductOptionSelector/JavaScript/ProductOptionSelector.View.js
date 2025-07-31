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

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			this.items = []; // 所有同类商品
			this.color = this.model.get('item').get('custitem12');
			this.size = this.model.get('item').get('custitem11');
			this.model = options.model;
			this.application = options.application;

			this.getAllItems();
		}

	,	events: {
			'click .product-views-option-color-picker-box': 'changeColor',
			'click .product-views-option-tile-picker': 'changeSize'
		},
		getAllItems: function () {
			var search = this.application.getComponent('Search');
			var categories = this.model.get('item').get('commercecategory').categories;
			var maxCategory = _.max(categories, function(item) {
				return item.id;
			});
			var category = maxCategory ? maxCategory.name : null;
			var searchParams = {
				commercecategoryname: category,
				fieldset: "details"
			};
			var searchUrl = search.getUrl(searchParams);
			// var url = SC.ENVIRONMENT.siteSettings.touchpoints.home;
			var self = this;
			this.colorMap = this.getColorPalette();
			jQuery.ajax(searchUrl).then(function (data) {
				self.items = data.items;
				self.colorOptions = _.chain(self.items).pluck('custitem12').uniq().compact().map(function (value) {
					return {
						label: value,
						value: self.colorMap[value]
					};
				}).value();
				self.sizeOptions = _.uniq(_.map(self.items, 'custitem11'));
				self.optionMap = self.setOptionMap(self.items);
				self.render();
			})
		},
		setOptionMap:function(options){
			var map = {};
			options.forEach(function(item) {
				var size = item.custitem11 || "size";  // 尺寸可能为空
				var color = item.custitem12 || "color"; // 颜色可能为空
				if (!map[color]) {
					map[color] = {};
				}
				map[color][size] = item;
			});
			return map;
		}
		,getColorPalette:function(){
			var configuration = this.application.getConfig();
			var layout = configuration.layout || {};
			var colorMap = {};
			layout.colorPalette.forEach(function (color) {
				colorMap[color.colorName] = color.colorValue;
			})
			return colorMap;
		}
		,changeColor:function(e){
			e.preventDefault();
			this.color = $(e.currentTarget).data('value');
			this.render();
			var size = this.size?this.size:'size';
			var currentItem = this.optionMap[this.color][size];
			this.model.set('item',currentItem);
			this.changeItemInfo();
		}
		,changeSize:function(e){
			e.preventDefault();
			this.size = $(e.currentTarget).val();
			this.render();
			var color = this.color?this.color:'color';
			var currentItem = this.optionMap[color][this.size];
			this.model.set('item',currentItem);
			this.changeItemInfo();
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
				size:this.size,
				color:this.color,
				sizeOptions:this.sizeOptions,
				colorOptions:this.colorOptions
			};
		}
	});
});
