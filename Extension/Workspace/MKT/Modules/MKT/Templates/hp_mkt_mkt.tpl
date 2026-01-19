<section class="mkt_container">
    <div class="mkt_banner">
        <img src="{{resizeImage bannerData.image 'main'}}" class="mkt_image">
        <div class="mkt_mask">
            <p class="mkt_title">{{bannerData.title}}</p>
        </div>
    </div>
    <div class="mkt_row mkt_row-first">
        <div class="mkt_card">
            <img src="{{resizeImage '/site/image/MKT/video&images.png' 'thumbnail'}}" alt="Video&Images" class="mkt_image">
            <div class="mkt_card-body">
                <p class="mkt_card-title">Video& Images</p>
                <a href="mkt/product-library" class="mkt_card-button">Learn More</a>
            </div>
        </div>
        <div class="mkt_card">
            <img src="{{resizeImage '/site/image/MKT/promotional-posters.png' 'thumbnail'}}" alt="Promotional posters" class="mkt_image">
            <div class="mkt_card-body">
                <p class="mkt_card-title">Promotional posters</p>
                <a href="{{url}}" class="mkt_card-button mkt_download" target="_blank">Download</a>
            </div>
        </div>
    </div>
    <div class="mkt_row mkt_row-second">
        <div class="mkt_content-left">
            <div class="mkt_text">
                <p class="mkt_text-title">Want to bring more runners into your store?</p>
                <p class="mkt_text-detail">The Shokz Run Club Demo Kit makes it simple get Shokz products in their hands without adding extra work to your plate.</p>
            </div>
            <a href="mkt/run-club-support" class="mkt_text-button">Learn More</a>
            <p class="mkt_tips">
                * If you're already hosting weekly or monthly runs, just add Shokz to the lineup. Your runners get to test our open-ear headphones right before they hit the road.
            </p>
        </div>
        <div class="mkt_content-right">
            <img src="{{resizeImage '/site/image/MKT/runners.png' 'main'}}" alt="Want to bring more runners into your store" class="mkt_image">
        </div>
    </div>
</section>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
