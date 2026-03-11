define("HitPoint.HomePageExt.HomePageExt", [
  "HitPoint.HomePageExt.HomePageExt.View",
  "Home.View",
  "Item.Collection",
  "FacetsItemsCollectionView",
  "facets_item_cell_grid.tpl",
  'ProductDetails.Full.View',
  'ProductDetails.QuickView.View',
  'underscore'
], function (
  HomePageExtView,
  Homeview,
  ItemCollection,
  FacetsItemsCollectionView,
  facets_item_cell_grid_tpl,
  ProductDetailsFullView,
  ProductDetailsQuickViewView,
  _
) {
  "use strict";
  return {
    mountToApp: function mountToApp(container) {
      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");

      // miniquntatity order

      _.extend(ProductDetailsFullView.prototype, {
        getContext: _.wrap(ProductDetailsFullView.prototype.getContext, function (fn) {
          let ret = fn.apply(this, _.toArray(arguments).slice(1));
          ret.is_minimumquantity = ret.model.get('item').get('minimumquantity') != undefined;
          ret.shortDescription = ret.model.get('item').get('custitem_hp_item_short_desc') || '';
          ret.sku = ret.model.get('item').get('itemid') || '';
          ret.upc = ret.model.get('item').get('custitem_upc') || '';

          // console.log("ret.is_minimumquantity", ret.is_minimumquantity);
          return ret;
        })
      });
      _.extend(ProductDetailsQuickViewView.prototype, {
        getContext: _.wrap(ProductDetailsQuickViewView.prototype.getContext, function (fn) {
          let ret = fn.apply(this, _.toArray(arguments).slice(1));
          ret.is_minimumquantity = ret.model.get('item').get('minimumquantity') != undefined;
          ret.shortDescription = ret.model.get('item').get('custitem_hp_item_short_desc') || '';
          ret.sku = ret.model.get('item').get('itemid') || '';
          ret.upc = ret.model.get('item').get('custitem_upc') || '';
          //console.log("ret.is_minimumquantity ee", ret.is_minimumquantity);
          return ret;
        })
      });

      //end

      _.extend(Homeview.prototype, {
        beforeShowContent: function beforeShowContent() {
          var self = this;
          var promise = jQuery.Deferred();
          jQuery.get(
            "/api/items?custitem_product_series=True-Wireless&fieldset=details&limit=3",
            function (result) {
              self.truewireless =
                result && result.total > 0
                  ? new ItemCollection(_.compact(result.items))
                  : [];

              jQuery.get(
                "/api/items?custitem_product_series=Sports&fieldset=details&limit=3",
                function (result) {
                  self.sports =
                    result && result.total > 0
                      ? new ItemCollection(_.compact(result.items))
                      : [];

                  jQuery.get(
                    "/api/items?custitem_product_series=Communications&fieldset=details&limit=3",
                    function (result) {
                      self.communication =
                        result && result.total > 0
                          ? new ItemCollection(_.compact(result.items))
                          : [];
                      promise.resolve();
                    }
                  );
                }
              );
            }
          );
          return promise;
        },
        childViews: {
          Sports: function () {
            const self = this;
            return new FacetsItemsCollectionView.FacetsItemsCollectionView({
              application: self.options.application,
              collection: self.sports,
              viewsPerRow: 3,
              cellViewTemplate: facets_item_cell_grid_tpl,
            });
          },
          Truewires: function () {
            const self = this;
            return new FacetsItemsCollectionView.FacetsItemsCollectionView({
              application: self.options.application,
              collection: self.truewireless,
              viewsPerRow: 4,
              cellViewTemplate: facets_item_cell_grid_tpl,
            });
          },
          Communication: function () {
            const self = this;
            return new FacetsItemsCollectionView.FacetsItemsCollectionView({
              application: self.options.application,
              collection: self.communication,
              viewsPerRow: 4,
              cellViewTemplate: facets_item_cell_grid_tpl,
            });
          },
        },
      });
    },
  };
});
