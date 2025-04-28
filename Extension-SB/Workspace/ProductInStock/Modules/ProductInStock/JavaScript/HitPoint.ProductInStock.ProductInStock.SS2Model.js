// Model.js
// -----------------------
// @module Case
define("HitPoint.ProductInStock.ProductInStock.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ProductInStock/SuiteScript2/ProductInStock.Service.ss"
            ),
            true
        )
});
});
