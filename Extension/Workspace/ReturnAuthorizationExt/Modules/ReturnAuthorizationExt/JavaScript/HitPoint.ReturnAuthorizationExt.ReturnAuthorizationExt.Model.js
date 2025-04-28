// Model.js
// -----------------------
// @module Case
define("HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.Model", [
  "Backbone",
  "Utils",
  "Transaction.Model",
  "Transaction.Collection",
], function (Backbone, Utils, TransactionModel, TransactionCollection) {
  "use strict";

  // @class Case.Fields.Model @extends Backbone.Model
  return Backbone.Model.extend({
    //@property {String} urlRoot
    urlRoot: Utils.getAbsoluteUrl(
      getExtensionAssetsPath("services/ReturnAuthorizationExt.Service.ss")
    ),

    cacheSupport: true,

    initialize: function (attributes) {
      TransactionModel.prototype.initialize.apply(this, arguments);
      this.on("change:applies", function (model, applies) {
        model.set("applies", new TransactionCollection(applies), {
          silent: true,
        });
      });
      this.trigger(
        "change:applies",
        this,
        (attributes && attributes.lines) || []
      );
    },
  });
});
