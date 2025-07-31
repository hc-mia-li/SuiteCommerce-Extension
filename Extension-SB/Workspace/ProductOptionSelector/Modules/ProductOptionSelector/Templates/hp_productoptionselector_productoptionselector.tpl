<div class="product-views-option-color-label-header">
    <span class="product-views-option-color-label">Product Color: </span>
    <span class="product-views-option-color-value">{{color}}</span>
</div>
<div class="product-views-option-color-container ">
    {{#each colorOptions}}
        <div class="product-views-option-color-picker">
            <span data-value="{{label}}" class="product-views-option-color-picker-box  {{#ifEquals ../color label}} active {{/ifEquals}}" style="background: {{value}}"></span>
        </div>
    {{/each}}
</div>
<!--<div class="custcol_size-controls-group">-->
<!--    <span class="product-views-option-tile-label">Product Size : </span>-->
<!--    <span data-value="custcol_size"></span>-->
<!--    <div class="product-views-option-tile-container">-->
<!--        {{#each sizeOptions}}-->
<!--            <input class="product-views-option-tile-input-picker" type="radio" name="custcol_size" value="{{this}}" data-active="false">-->
<!--            {{this}}-->
<!--        {{/each}}-->
<!--    </div>-->
<!--</div>-->
<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
