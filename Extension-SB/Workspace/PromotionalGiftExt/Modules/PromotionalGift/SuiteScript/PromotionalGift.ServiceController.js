define("HP.PromotionalGiftExt.PromotionalGift.ServiceController", ["ServiceController","Configuration"], function(
  ServiceController,
  Configuration
) {
  "use strict";

  return ServiceController.extend({
    name: "HP.PromotionalGiftExt.PromotionalGift.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
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
