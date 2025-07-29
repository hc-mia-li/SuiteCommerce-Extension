// @module HP.MinQtyExt.MinQtyExt
define('HP.MinQtyExt.MinQtyExt.View'
    , [
        'hp_minqtyext_minqtyext.tpl'
        , 'Backbone'
        ,'jQuery'
    ]
    , function (
        hp_minqtyext_minqtyext_tpl
        , Backbone
        ,jQuery
    ) {
        'use strict';
        // @class HP.MinQtyExt.MinQtyExt.View @extends Backbone.View
        return Backbone.View.extend({

            template: hp_minqtyext_minqtyext_tpl

            , initialize: function (options) {

            }

            , events: {}

            , bindings: {}

            , childViews: {}

            //@method getContext @return HP.MinQtyExt.MinQtyExt.View.Context
            , getContext: function getContext() {
                //@class HP.MinQtyExt.MinQtyExt.View.Context
                this.message = this.message || ''
                return {
                    message: this.message
                };
            }
        });
    });
