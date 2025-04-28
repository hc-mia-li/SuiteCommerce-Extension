// Model.js
// -----------------------
// @module Case
define("HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ReturnAuthorizationExt/SuiteScript2/ReturnAuthorizationExt.Service.ss"
            ),
            true
        )
});
});
