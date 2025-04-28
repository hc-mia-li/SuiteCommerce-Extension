// @module HitPoint.RMA.RMA
define('HitPoint.RMA.RMA.SaleOrderItem.View'
  , [
    'hp_rma_rma_saleorder_item.tpl'
    , 'HitPoint.RMA.RMA.Model'
    , 'Backbone'
    , 'Utils'
  ]
  , function (
    hp_rma_rma_saleorder_item_tpl
    , RMAModel
    , Backbone
    , Utils
  ) {
    'use strict';

    // @class HitPoint.RMA.RMA.SaleOrderItem @extends Backbone.View
    return Backbone.View.extend({
      template: hp_rma_rma_saleorder_item_tpl
      , title: Utils.translate('Return Products'),

      page_header: Utils.translate('Return Products'),

      initialize: function (options) {
        // this.model = new RMAModel();
        // var self = this;
        // this.model.fetch().done(function(result) {
        // 	self.message = result.message;
        // 	self.render();
        // });
      }

      , events: {
      }

      , bindings: {
      }

      , childViews: {

      }

      //@method getContext @return HitPoint.RMA.RMA.SaleOrderItem.Context
      , getContext: function getContext() {
        //@class HitPoint.RMA.RMA.SaleOrderItem.Context
        return {

        };
      }
    });
  });
