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
      if (internalid) {
        var result = nlapiLoadRecord('customer', internalid);
        var flag = result.getFieldValue('custentity_promo_blacklist');
        return JSON.stringify({ flag: flag });
      } else {
        return JSON.stringify({ flag: null, error: 'User is not logged in' });
      }
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
