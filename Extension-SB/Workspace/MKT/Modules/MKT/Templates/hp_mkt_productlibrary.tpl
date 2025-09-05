<section class="pl_container">
    <h2 class="pl_title">Download Video & Images</h2>
    <div class="pl_filters">
        <div class="pl_dropdown">
            <div class="pl_dropdown-header">
                <div class="pl_dropdown-title">Category</div>
                <div class="pl_dropdown-selected">{{category}}</div>
            </div>
            <div class="pl_dropdown-list" data-type="Category">
                {{#each categories}}
                    {{#unlessEquals category ../category}}
                        <div class="pl_dropdown-item" data-value="{{category}}">{{category}}</div>
                    {{/unlessEquals}}
                {{/each}}
            </div>
        </div>
        <div class="pl_dropdown">
            <div class="pl_dropdown-header">
                <div class="pl_dropdown-title">Products</div>
                <div class="pl_dropdown-selected">{{subCategory}}</div>
            </div>
            <div class="pl_dropdown-list" data-type="Products">
                {{#unlessEquals subCategory 'ALL'}}
                    <div class="pl_dropdown-item" data-value="ALL">ALL</div>
                {{/unlessEquals}}
                {{#each subCategories}}
                    {{#unlessEquals category ../subCategory}}
                        <div class="pl_dropdown-item" data-value="{{category}}">{{category}}</div>
                    {{/unlessEquals}}
                {{/each}}
            </div>
        </div>
    </div>
    <div class="pl_table">
        <div class="pl_table-header">
            <div class="pl_header-cell pl_header-cell-product">Product</div>
            <div class="pl_header-cell">Title</div>
            <div class="pl_header-cell">Format</div>
        </div>
        {{#each products}}
            <div class="pl_table-row">
                <div class="pl_table-cell pl_table-cell-product">
                    <img src="{{resizeImage coverImage 'thumbnail'}}" alt="{{category}}" class="table-image">
                    <div class="pl_table-product-name">{{{name}}}</div>
                </div>
                <div class="pl_table-cell-doc">
                    <div class="pl_table-subrow">
                        <div>Video</div>
                        <a href="{{video}}" target="_blank" class="pl_table-subrow-download">
                            <span class="download-link">Document File</span>
                            <img src="{{resizeImage '/site/image/MKT/download.png' 'thumbnail'}}" alt="download Video">
                        </a>
                    </div>
                    <div class="pl_table-subrow">
                        <div>Image</div>
                        <a href="{{image}}" target="_blank" class="pl_table-subrow-download">
                            <span class="download-link">Document File</span>
                            <img src="{{resizeImage '/site/image/MKT/download.png' 'thumbnail'}}" alt="download Image">
                        </a>
                    </div>
                </div>
            </div>
        {{/each}}
    </div>
</section>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
