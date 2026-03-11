// Model.js
// -----------------------
// @module Case
define("HitPoint.HomePageExt.HomePageExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/HomePageExt/SuiteScript2/HomePageExt.Service.ss"
            ),
            true
        )
});
});
