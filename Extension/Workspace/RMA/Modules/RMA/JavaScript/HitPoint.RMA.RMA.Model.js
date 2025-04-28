// Model.js
// -----------------------
// @module Case
define("HitPoint.RMA.RMA.Model", ["Backbone", "Utils"], function (
    Backbone,
    Utils
) {
    "use strict";
    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RMA.Service.ss"
            )
        )
        , validation: {
            accountname: {
                required: true,
                msg: Utils.translate('Account Name is required')
            },
            sku_1: {
                required: true,
                msg: Utils.translate('SKU is required')
            },
            itemdes_1: {
                required: true,
                msg: Utils.translate('Item Description is required')
            },
            qunty_1: {
                required: true,
                msg: Utils.translate('Quantity is required')
            },
            reasonreturn_1: {
                required: true,
                msg: Utils.translate('Reason for Return is required')
            },

            sku_2: {
                required: true,
                msg: Utils.translate('SKU is required')
            },
            itemdes_2: {
                required: true,
                msg: Utils.translate('Item Description is required')
            },
            qunty_2: {
                required: true,
                msg: Utils.translate('Quantity is required')
            },
            reasonreturn_2: {
                required: true,
                msg: Utils.translate('Reason for Return is required')
            },
            sku_3: {
                required: true,
                msg: Utils.translate('SKU is required')
            },
            itemdes_3: {
                required: true,
                msg: Utils.translate('Item Description is required')
            },
            qunty_3: {
                required: true,
                msg: Utils.translate('Quantity is required')
            },
            reasonreturn_3: {
                required: true,
                msg: Utils.translate('Reason for Return is required')
            },
        }

    });

});

