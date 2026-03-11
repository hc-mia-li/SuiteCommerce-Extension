// Model.js
// -----------------------
// @module Case
define("HP.ItemSpecExt.ItemSpecExt.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ItemSpecExt.Service.ss"
            )
        )
    });
});
