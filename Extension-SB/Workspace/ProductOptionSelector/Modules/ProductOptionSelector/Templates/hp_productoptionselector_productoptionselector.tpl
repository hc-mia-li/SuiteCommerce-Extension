{{#each itemOptions}}
    {{#if isColor}}
        <div class="product-views-option-color-label-header">
            <span class="product-views-option-color-label">{{label}}: </span>
            <span class="product-views-option-color-value">{{selectOption}}</span>
        </div>
        <div class="product-views-option-color-container ">
            {{#each options}}
                <div class="product-views-option-color-picker">
                    <span data-value="{{label}}" data-field="{{../fieldId}}" class="product-views-option-color-picker-box product-views-option-picker {{#ifEquals ../selectOption label}} active {{/ifEquals}}" style="background: {{value}}"></span>
                </div>
            {{/each}}
        </div>
    {{else}}
        <div class="custcol_size-controls-group">
            <span class="product-views-option-tile-label">
                {{label}}: <span data-value="custcol_size">{{selectOption}}</span>
            </span>
            <div class="product-views-option-tile-container">
                {{#each options}}
                    <span class="product-views-option-tile-picker product-views-option-picker {{#ifEquals ../selectOption this}} active {{/ifEquals}}" data-field="{{../fieldId}}" data-value="{{this}}">
                        <input class="product-views-option-tile-input-picker" type="radio"
                               name="{{../fieldId}}" value="{{this}}" data-active="false">
                        {{this}}
                    </span>
                {{/each}}
            </div>
    {{/if}}
{{/each}}

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
