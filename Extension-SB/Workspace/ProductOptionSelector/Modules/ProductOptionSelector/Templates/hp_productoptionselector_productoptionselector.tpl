{{#if isLoading}}
    <div class="product-options-loading">Loading options...</div>
{{else}}
    {{#each itemOptions}}
        {{#if options}}
            <div class="product-option-label-header">
                <span class="product-option-label">{{label}}</span>
                <!--<span class="product-option-color-value">{{selectOption}}</span>-->
            </div>
            <div class="product-option-container">
                {{#each options}}
                    <div class="product-option-picker {{#ifEquals ../selectOption label}} active {{/ifEquals}} {{#if disabled}} disabled {{/if}}"
                         data-value="{{label}}" data-field="{{../fieldId}}">
    <!--                {{#if ../isColor}}-->
    <!--                    <span class="product-option-picker-box" style="background: {{value}}"></span>-->
    <!--                {{/if}}-->
                        <span class="product-option-value">{{label}}</span>
                    </div>
                {{/each}}
            </div>
        {{/if}}
    {{/each}}
{{/if}}

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
