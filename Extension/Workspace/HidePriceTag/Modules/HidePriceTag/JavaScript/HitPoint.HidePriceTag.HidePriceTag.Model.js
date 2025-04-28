// Model.js
// -----------------------
// @module Case
define("HitPoint.HidePriceTag.HidePriceTag.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/HidePriceTag.Service.ss"
            )
        )
        
});
});
