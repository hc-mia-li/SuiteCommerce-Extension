define("HP.PromotionalGiftExt.PromotionalGift.ServiceController", ["ServiceController","Configuration"], function(
  ServiceController,
  Configuration
) {
  "use strict";

  return ServiceController.extend({
    name: "HP.PromotionalGiftExt.PromotionalGift.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {
      },
    },

    get: function get() {
      var nlapiCustomer = nlapiGetWebContainer().getShoppingSession().getCustomer();
      var customer = nlapiCustomer.getFieldValues();
      var internalid = customer.internalid;
      var result = nlapiLoadRecord('customer', internalid, null);
      var flag = result.getFieldValue('custentity_promo_blacklist');
      return JSON.stringify({
        flag: flag
      });
    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
