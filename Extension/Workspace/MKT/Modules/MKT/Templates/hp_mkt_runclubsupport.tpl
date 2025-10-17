<section class="rc_container">
    <div class="rc_banner">
        <img src="{{resizeImage bannerData.image 'main'}}" class="rc_image" alt="{{bannerData.title}}">
        <div class="rc_mask">
            <div class="rc_banner-content">
                <h2 class="rc_banner-title">{{bannerData.title}}</h2>
                <h3 class="rc_banner-subtitle">{{bannerData.text}}</h3>
                <a href="{{bannerData.linklocation}}" target="_blank" class="rc_banner-button">{{bannerData.linktext}}</a>
            </div>
        </div>
    </div>
    <div class="rc_kit">
        <h2 class="rc_kit-title">What's in the Kit</h2>
        <div class="rc_kit-content">
            <div class="rc_kit-item">
                <img src="{{resizeImage '/site/image/MKT/kit.png' 'thumbnail'}}" alt="" class="rc_kit-image">
            </div>
            <div class="rc_kit-item">
                <img src="{{resizeImage '/site/image/MKT/kit-open.png' 'thumbnail'}}" alt="" class="rc_kit-image">
            </div>
            <div class="rc_kit-list">
                {{#each kitBlocks}}
                    <div class="rc_kit-list-item">
                        <img src="{{resizeImage image 'thumbnail'}}" alt="{{desc}}" class="rc_kit-list-image">
                        <p class="rc_kit-list-text">{{desc}}</p>
                    </div>
                {{/each}}
            </div>
        </div>
    </div>
    <div class="rc_info">
        <h2 class="rc_info-title">Why It Works</h2>
        <div class="rc_info-content">
            <div class="rc_info-block">
                <h3 class="rc_info-block-title">Drive Sales</h3>
                <p class="rc_info-block-text">Runners try before they buy, right outside your store.</p>
            </div>
            <div class="rc_info-block">
                <h3 class="rc_info-block-title">Boost Foot Traffic</h3>
                <p class="rc_info-block-text">Make your store the spot for your running community.</p>
            </div>
            <div class="rc_info-block">
                <h3 class="rc_info-block-title">Level Up Your Team</h3>
                <p class="rc_info-block-text">Staff gets hands-on time with Shokz to build product confidence.</p>
            </div>
            <div class="rc_info-block">
                <h3 class="rc_info-block-title">Earn Trust</h3>
                <p class="rc_info-block-text">Position your store as a go-to for comfort, innovation, and great gear.</p>
            </div>
        </div>
    </div>
    <div class="rc_works">
        <div class="rc_works-col rc_works-text">
            <div style="width: 100%;">
                <p class="rc_works-title">How It Works</p>
                <p class="rc_works-desc">
                    1. Set up the demo kit during your next store run.<br/>
                    2. Invite runners to test Shokz before they head out.<br/>
                    3. After the run, scan the QR code to log attendance<br/>
                    (it's quick).We'll handle the rest!</p>
            </div>
        </div>
        <div class="rc_works-col">
            <img src="{{resizeImage '/site/image/MKT/run-works.png' 'main'}}" alt="How It Works" class="rc_works-image">
        </div>
    </div>
    <div class="rc_form">
        <div class="rc_form-block">
            <p class="rc_form-tip">Free for select partners. Big runs, small runs—this kit turns them all into Shokz-powered experiences.</p>
            <a href="{{bannerData.linklocation}}" target="_blank" class="rc_form-button">{{bannerData.linktext}}</a>
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
