// Model.js
// -----------------------
// @module Case
define("HitPoint.QuickViewExtension.QuickView.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/QuickView/SuiteScript2/QuickView.Service.ss"
            ),
            true
        )
});
});
