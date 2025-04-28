// @module HitPoint.HomePageExt.HomePageExt
define("HitPoint.HomePageExt.HomePageExt.View", [
  "hp_homepageext_homepageext.tpl",
  "HitPoint.HomePageExt.HomePageExt.SS2Model",
  "Backbone",
  "Backbone.CollectionView",
  "ItemRelations.RelatedItem.View",
  "item_relations_cell.tpl",
  "item_relations_row.tpl",
  "Utils",
], function (
  hp_homepageext_homepageext_tpl,
  HomePageExtSS2Model,
  Backbone,
  BackboneCollectionView,
  ItemRelationsRelatedItemView,
  item_relations_cell_tpl,
  item_relations_row_tpl,
  Utils
) {
  "use strict";

  // @class HitPoint.HomePageExt.HomePageExt.View @extends Backbone.View
  return Backbone.View.extend({
    template: hp_homepageext_homepageext_tpl,

    initialize: function (options) {
      var self = this;
      BackboneCollectionView.prototype.initialize.call(this, {
        collection: self.options.collection,
        viewsPerRow: Infinity,
        cellTemplate: item_relations_cell_tpl,
        rowTemplate: item_relations_row_tpl,
        childView: ItemRelationsRelatedItemView,
        template: hp_homepageext_homepageext_tpl,
      });
      const layout = this.options.application.getLayout();
      layout.once("afterAppendView", this.loadRelatedItem, this);
      layout.currentView &&
        layout.currentView.once(
          "afterCompositeViewRender",
          this.loadRelatedItem,
          this
        );
    },
    loadRelatedItem: function () {
      var self = this;
      var $slider = this.$('[data-type="carousel-items"]');

      $slider.ready(function () {
        Utils.initBxSlider($slider, {
          minSlides: 2,
          slideWidth: 297,
          maxSlides: 4,
          forceStart: true,
          pager: false,
          touchEnabled: false,
          nextText:
            '<a class="home-item-sec1-next"><span class="control-text">' +
            Utils.translate("next") +
            '</span> <i class="carousel-next-arrow"></i></a>',
          prevText:
            '<a class="home-item-sec1-prev"><i class="carousel-prev-arrow"></i> <span class="control-text">' +
            Utils.translate("prev") +
            "</span></a>",
          controls: true,
          preloadImages: "all",
        });
      });
    },

    destroy: function destroy() {
      this._destroy();
      const layout = this.options.application.getLayout();

      layout.off("afterAppendView", this.loadRelatedItems, this);
      layout.currentView &&
        layout.currentView.off(
          "afterCompositeViewRender",
          this.loadRelatedItems,
          this
        );
    },
  });
});
