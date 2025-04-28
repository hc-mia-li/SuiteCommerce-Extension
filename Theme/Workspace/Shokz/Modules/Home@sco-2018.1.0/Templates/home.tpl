<div class="home">
    <div data-cms-area="home_cms_area_1" data-cms-area-filters="path"></div>

    <div class="home-slider-container" data-view="home">
        <div class="home-image-slider">
            <ul data-slider id="home-image-slider-list" class="home-image-slider-list">
                {{#if extraHomeView.isReady}}
                    {{#if extraHomeView.showCarousel}}
                        {{#each extraHomeView.carousel}}
                            {{#unlessEquals title ../bannerTitle}}
                                <li class="{{#if text}}caption-on{{/if}} {{#if title}}caption-on{{/if}} {{#if linktext}}caption-on{{/if}}">
                                    <div class="home-slide-main-container
										{{#if imageBehaviour}}
											use-image
										{{else}}
                                        {{#if backgroundCrop}}
                                            {{backgroundCrop}}
                                        {{/if}}
                                    {{/if}}">
                                        {{#if isAbsoluteUrl}}
                                            <div class="home-slide-image-container use-image" style="background-image:url('{{image}}');">
                                                <a{{objectToAtrributes item}} class="home-slide-wrap-link">
                                                    <img src="{{image}}" class="home-slide-image" />
                                                </a>
                                            </div>
                                        {{else}}
                                            <div class="home-slide-image-container
											{{#if imageBehaviour}}
												use-image
											{{else}}
                                                {{#if backgroundCrop}}
                                                    {{backgroundCrop}}
                                                {{/if}}
                                            {{/if}}" style="background-image:url('{{getThemeAssetsPathWithDefault image 'img/posh-carousel-home-1.jpg'}}');">
                                                <a{{objectToAtrributes item}} class="home-slide-wrap-link">
                                                    <img src="
															{{#if isAbsoluteUrl}}
                                                        {{image}}
                                                    {{else}}
                                                        {{getThemeAssetsPathWithDefault image 'img/posh-carousel-home-1.jpg'}}
                                                    {{/if}}"
                                                         class="home-slide-image {{#if imageMobile}}hide-small{{/if}}" />
                                                    {{#if imageMobile}}
                                                        <img src="{{imageMobile}}" class="home-slide-image-mobile" />
                                                    {{/if}}
                                                </a>
                                            </div>
                                        {{/if}}

                                        <div class="home-slide-caption-container {{#if isAbsoluteUrl}}carousel-center-box{{/if}} {{#if class}}{{class}}{{else}}carousel-center{{/if}} {{#if text}}caption-display{{/if}} {{#if title}}caption-display{{/if}} {{#if linktext}}caption-display{{/if}}">
                                            <div class="home-slide-caption {{captionTextAlign}}">
                                                <div class="home-slide-caption-body">
                                                    <div class="custom-menu-color" style="color:{{captionColor}};display: none;">{{title}}</div>
                                                        <!--                                                {{#if title}}<h1 class="home-info-title"-->
                                                        <!--                                                                 style="color:{{captionColor}}">{{title}}</h1>{{/if}}-->
                                                    <!--<h2 class="home-info-title">OPEN<span style="font-weight:500">FIT</span></h2>-->
                                                    {{#ifEquals title 'OPENFIT'}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}}">OPEN<span style="font-weight:700">FIT</span></h2>
                                                        {{#if text}}<h2 class="home-info-text"
                                                                        style="color:{{captionColor}}">{{text}}</h2>{{/if}}
                                                        <h3 class="home-info-subtext"
                                                            style="color:#F1F1F1;font-size:20px;line-height:30px;margin:0 0 48px 0">
                                                            Open-Ear True Wireless Earbuds</h3>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENFIT 2'}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}};font-weight: 500">
                                                            <span style="display: block;background: linear-gradient(to right, {{captionColor}}, #DBC2AC 50%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Open-Ear Comfort,</span>
                                                            <span style="display: block;background: linear-gradient(to right, {{captionColor}}, #DBC2AC 50%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Ultimate Sound.</span>
                                                        </h2>
                                                        <h3 class="home-info-subtext"
                                                            style="color:#E7E7E7;font-size:20px;line-height:30px;margin:0 0 48px 0">
                                                            OPEN<span style="font-weight:700">FIT</span> 2 |
                                                            {{text}}</h3>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENFIT AIR'}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}}">OPEN<span style="font-weight:700">FIT</span> AIR</h2>
                                                        {{#if text}}<h2 class="home-info-text"
                                                                        style="color:{{captionColor}}">{{text}}</h2>{{/if}}
                                                        <h3 class="home-info-subtext"
                                                            style="color:#666666;font-size:20px;line-height:30px;margin:0 0 48px 0">
                                                            Secure Fit. Effortless Comfort.</h3>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENSWIM PRO'}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}}">OPEN<span style="font-weight:700">SWIM PRO</span></h2>
                                                        {{#if text}}<h2 class="home-info-text"
                                                                        style="color:{{captionColor}}">{{text}}</h2>{{/if}}
                                                        <h3 class="home-info-subtext"
                                                            style="color:#E7E7E7;font-size:20px;line-height:30px;margin:0 0 48px 0">
                                                            Water to Land, the Music Never Ends.</h3>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENRUN PRO2 BM'}}
                                                        <h3 class="home-info-subtext"
                                                            style="color:#C9C9C9;font-size:20px;line-height:30px;">
                                                            Redefining the Sound of Sports.</h3>
                                                        <h2 class="home-info-title" style="color:{{captionColor}};margin-bottom: 0">OPEN<span style="font-weight:700">RUN PRO </span>2</h2>
                                                        {{#if text}}<h2 class="home-info-text"
                                                                        style="color:{{captionColor}};margin-bottom:3.646vw;">{{text}}</h2>{{/if}}
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'ELIUD KIPCHOGE'}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}};font-size: 1.25vw !important;letter-spacing: -0.04em;">BE <span style="font-weight: 700;">OPEN</span> to <span style="font-family:'Titillium Web';font-weight:700;background: linear-gradient(to right, #E9521B, #FBB728);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-style: italic;padding-right: 5px">GREATNESS</span></h2>
                                                        <h3 style="letter-spacing: -0.03em;font-size: 1.771vw;background: linear-gradient(to right, #FFFFFF, #D0C3C3);-webkit-background-clip: text;-webkit-text-fill-color: transparent;margin-bottom:3.646vw;">
                                                            Eliud Kipchoge x Shokz <br/>OpenRun Pro 2 Co-Branded Edition.
                                                        </h3>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENRUN PRO2'}}
                                                        {{#if text}}<h2 class="home-info-text"
                                                                        style="color:{{captionColor}};margin-bottom: 3px;">{{text}}</h2>{{/if}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}};margin-bottom: 2.604vw;">OPEN<span style="font-weight:700">RUN PRO </span>2 <div style="text-transform: uppercase;display: inline-block;font-size: 16px;padding: 3px 11px;border-radius: 34px;vertical-align: middle;margin-left: -5px;background-color: rgba(10, 11, 16);opacity: 0.6">Silver</div></h2>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'Get Up to $40 off'}}
                                                        <p style="background: linear-gradient(to right, #D99B82, #BE8068,#9E6049);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-size: 1.02vw;line-height: 1vw;margin-bottom:0.7vw">{{text}}</p>
                                                        <h2 class="home-info-title" style="display: inline-block;border-bottom: 2px solid #D8BEAA;padding-bottom: calc(20px + 0.5vw);line-height: 2.5vw;">
                                                            <span style="color:#4A1500;font-weight: 400;font-size: 2.5vw !important;letter-spacing: -0.02em;">
                                                                Get Up to <span style="color:#CB500C">$40 off</span>
                                                                <br/>savings with Shokz
                                                            </span>
                                                        </h2>

                                                        <div style="margin-top: 2vw;margin-bottom: 3.65vw;">
                                                            <p style="color: rgba(85, 24, 0, 0.8);font-size: 0.83vw;"><span style="font-weight: 600">Discounts for you: </span>April 16-30</p>
                                                            <p style="color: rgba(85, 24, 0, 0.8);font-size: 0.83vw;"><span style="font-weight: 600">Discounts for your customer: </span>May 5–11 & May 19–26</p>
                                                        </div>
                                                    {{/ifEquals}}

                                                    {{#if linktext}}
                                                        <div class="home-slide-caption-button-container">
                                                            <a{{objectToAtrributes item}} class="home-slide-caption-button">{{#if text}}{{linktext}}{{else}}{{translate 'Shop now'}}{{/if}}</a>
                                                        </div>
                                                    {{/if}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            {{/unlessEquals}}
                        {{/each}}
                    {{else}}
                        {{#each carouselImages}}
                            <li>
                                <div class="home-slide-main-container
						{{#if imageBehaviour}}
							use-image
						{{else}}
                                    {{#if backgroundCrop}}
                                        {{backgroundCrop}}
                                    {{/if}}
                                {{/if}}">
                                    <div class="home-slide-image-container">
                                        <img src="{{this}}" alt="" />
                                    </div>

                                    <div class="home-slide-caption">
                                        <div class="home-slide-caption-body">
                                            <h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
                                            <p>Example descriptive text displayed on multiple lines.</p>
                                            <div class="home-slide-caption-button-container">
                                                <a href="/search" class="home-slide-caption-button">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        {{/each}}
                    {{/if}}
                {{/if}}
            </ul>
        </div>
    </div>

    <div class="home-benefit-container">
        <div class="home-benefit-body">
            <h2 class="home-benefit-title">How you can benefit from our B2B website</h2>
            <div class="home-benefit-cart-container">
                <div class="home-benefit-cart-first-row">
                    <div class="home-benefit-cart-first-row-first-col">
                        <img src="/site/image/Home/fast-shipping.svg"></img>
                        <img src="/site/image/Home/efficient-order-management.svg"></img>
                    </div>
                    <div class="home-benefit-cart-first-row-first-col">
                        <img src="/site/image/Home/dedicated-commerical-team.svg"></img>
                    </div>
                </div>
                <div class="home-benefit-cart-second-row">
                    <img class="home-benefit-cart-second-row-img" src="/site/image/Home/competitive-pricing.svg"></img>
                    <img class="home-benefit-cart-second-row-img" src="/site/image/Home/net-payments-terms.svg"></img>
                </div>
            </div>
        </div>
    </div>

    <div class="home-product-container">
        <div class="home-product-body">
            <div class="home-product-category true-wireless">
                <h3 class="home-product-category-title">True Wireless</h3>
                <p class="home-product-category-description">Open-Ear Headphones</p>
                <div class="collections-container">
                    <!-- OpenFit 2-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black"
                                     src="/site/image/T920-ST-BK-US_01.png"/>
                                <img class="collection-image beige" style="display: none;"
                                     src="/site/image/T920-ST-BG-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background-color: black;"
                                             data-value="T920-ST-BK-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option beige" style="background-color: #E5DED5;"
                                             data-value="T920-ST-BG-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-fit-2-price"></div>
                                    <input class="black" type="hidden" value="product/911725"/>
                                    <input class="beige" type="hidden" value="product/911925"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">FIT</span> 2</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenFit Air-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black"
                                     src="/site/image/T511-ST-BK-US_01.png"/>
                                <img class="collection-image white" style="display: none;"
                                     src="/site/image/T511-ST-WT-US_01.png"/>
                                <img class="collection-image pink" style="display: none;"
                                     src="/site/image/T511-ST-PK-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background-color: black;"
                                             data-value="T511-ST-BK-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option white" style="background-color: #E6E6E6;"
                                             data-value="T511-ST-WT-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option pink" style="background-color: #F3C7C2;"
                                             data-value="T511-ST-PK-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-fit-air-price"></div>
                                    <input class="black" type="hidden" value="OpenFit-Air-Black"/>
                                    <input class="white" type="hidden" value="OpenFit-Air-White"/>
                                    <input class="pink" type="hidden" value="OpenFit-Air-Pink"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">FIT</span> AIR</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                        <script>
                            $('.color-option').click(function () {
                                var color = this.className.split(" ")[1];
                                var sku = $(this).attr('data-value');
                                var size = $(this).parent().parent().parent().find('.item.active').attr('data-value');
                                if (size !== undefined) {
                                    size = '.' + size;
                                } else {
                                    size = "";
                                }
                                $(this).parent().find('.color-option' + size).find('.checkmark').removeClass('active');
                                $(this).find('.checkmark').addClass('active');

                                $(this).parents('.collection-detail').find('.collection-detail-image').find('.collection-image').hide()
                                $(this).parents('.collection-detail').find('.collection-detail-image').find('.collection-image.' + color + size).show();

                                if (SC_HOME_PRICE && sku) {
                                    var itemRec = SC_HOME_PRICE.filter(function (item) {
                                        // return item.itemname.split(" ")[0].includes("Open")
                                        return item.itemtype==='Headphone'
                                    }).find(function (item) {
                                        return item.itemid === sku;
                                    });
                                    if (itemRec.price) {
                                        var itemType = "";
                                        if (itemRec.itemname.includes("OpenFit")) {
                                            // OpenFit Air
                                            if (itemRec.itemname.includes("Air")) {
                                                itemType = "open-fit-air-price";
                                            } else if (itemRec.itemname.includes("2")) {
                                                // OpenFit 2
                                                itemType = "open-fit-2-price";
                                            } else {
                                                // OpenFit
                                                itemType = "open-fit-price";
                                            }
                                        } else if (itemRec.itemname.includes("OpenRun Pro")) {
                                            // OpenRun Pro 2-EK
                                            if (itemRec.itemname.includes("2-EK")) {
                                                itemType = "open-run-pro2-ek-price";
                                            } else if (itemRec.itemname.includes("Boston Marathon")) {
                                                // OpenRun Pro 2 Boston Marathon
                                                itemType = "open-run-pro2-bm-price";
                                            } else if (itemRec.itemname.includes("2")) {
                                                // OpenRun Pro 2
                                                itemType = "open-run-pro2-price";
                                            } else {
                                                // OpenRun Pro
                                                itemType = "open-run-pro-price";
                                            }
                                        } else if (itemRec.itemname.includes("OpenRun") && !itemRec.itemname.includes("Pro")) {
                                            // OpenRun
                                            itemType = "open-run-price";
                                        } else if (itemRec.itemname.includes("OpenMove")) {
                                            // OpenMove
                                            itemType = "open-move-price";
                                        } else if (itemRec.itemname.includes("OpenSwim")) {
                                            // OpenSwim Pro
                                            if (itemRec.itemname.includes("Pro")) {
                                                itemType = "open-swim-pro-price";
                                            } else {
                                                // OpenSwim
                                                itemType = "open-swim-price";
                                            }
                                        } else if (itemRec.itemname.includes("OpenComm")) {
                                            // OpenComm 2
                                            itemType = "open-comm-2-price";
                                        }

                                        $('[data-view=' + itemType + ']').text(itemRec.price)
                                    }
                                }
                            })
                            $('.item').click(function () {
                                $(this).parent().find('.item').removeClass('active');
                                $(this).addClass('active');
                                var size = $(this).attr('data-value');
                                $(this).parent().parent().parent().find('.color-option').hide();
                                $(this).parent().parent().parent().find('.color-option.' + size).show();

                                var obj = $(this).parent().parent().parent().find('.color-option.' + size);
                                var sku = "";
                                var color = "";
                                for (let i = 0; i < obj.length; i++) {
                                    if (obj.eq(i).find('.checkmark').hasClass('active')) {
                                        sku = obj.eq(i).attr('data-value');
                                        color = obj.eq(i).attr('class').split(' ')[1];
                                        break;
                                    }
                                }
                                $(this).parents('.collection-detail').find('.collection-detail-image').find('.collection-image').hide()

                                if (SC_HOME_PRICE && sku) {
                                    var itemRec = SC_HOME_PRICE.filter(function (item) {
                                        // return item.itemname.split(" ")[0].includes("Open")
                                        return item.itemtype==='Headphone'
                                    }).find(function (item) {
                                        return item.itemid === sku;
                                    });
                                    if (itemRec.price) {
                                        var itemType = "";
                                        if (itemRec.itemname.includes("OpenFit")) {
                                            // OpenFit Air
                                            if (itemRec.itemname.includes("Air")) {
                                                itemType = "open-fit-air-price";
                                            } else if (itemRec.itemname.includes("2")) {
                                                // OpenFit 2
                                                itemType = "open-fit-2-price";
                                            } else {
                                                // OpenFit
                                                itemType = "open-fit-price";
                                            }
                                        } else if (itemRec.itemname.includes("OpenRun Pro")) {
                                            // OpenRun Pro 2-EK
                                            if (itemRec.itemname.includes("2-EK")) {
                                                itemType = "open-run-pro2-ek-price";
                                            } else if (itemRec.itemname.includes("Boston Marathon")) {
                                                // OpenRun Pro 2 Boston Marathon
                                                itemType = "open-run-pro2-bm-price";
                                            } else if (itemRec.itemname.includes("2")) {
                                                // OpenRun Pro 2
                                                itemType = "open-run-pro2-price";
                                            } else {
                                                // OpenRun Pro
                                                itemType = "open-run-pro-price";
                                            }
                                        } else if (itemRec.itemname.includes("OpenRun") && !itemRec.itemname.includes("Pro")) {
                                            // OpenRun
                                            itemType = "open-run-price";
                                        } else if (itemRec.itemname.includes("OpenMove")) {
                                            // OpenMove
                                            itemType = "open-move-price";
                                        } else if (itemRec.itemname.includes("OpenSwim")) {
                                            // OpenSwim Pro
                                            if (itemRec.itemname.includes("Pro")) {
                                                itemType = "open-swim-pro-price";
                                            } else {
                                                // OpenSwim
                                                itemType = "open-swim-price";
                                            }
                                        } else if (itemRec.itemname.includes("OpenComm")) {
                                            // OpenComm 2
                                            itemType = "open-comm-2-price";
                                        }

                                        $('[data-view=' + itemType + ']').text(itemRec.price)
                                    }
                                }
                                $(this).parents('.collection-detail').find('.collection-detail-image').find('.collection-image.' + color + '.' + size).show();

                            })
                            $('.collection-link-btn').click(function () {
                                var size = $(this).parent().parent().find('.item.active').attr('data-value');

                                if (size !== undefined) {
                                    size = '.' + size;
                                } else {
                                    size = "";
                                }
                                var color = '.' + $(this).parent().parent().find('.color-option' + size).find('.active').parent().attr('class').split(' ')[1];

                                var link = $(this).parent().parent().find('.collection-product').find(color + size).val();
                                location.href += link;
                            })
                        </script>
                    </div>
                    <!-- OpenFit-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black"
                                     src="/site/image/T910-ST-BK-US_01.png"/>
                                <img class="collection-image beige" style="display: none;"
                                     src="/site/image/T910-ST-BG-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background-color: black;"
                                             data-value="T910-ST-BK-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option beige" style="background-color: #E5DED5;"
                                             data-value="T910-ST-BG-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-fit-price"></div>
                                    <input class="black" type="hidden" value="product/468181"/>
                                    <input class="beige" type="hidden" value="product/468179"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">FIT</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-product-category sports">
                <div class="home-product-sports">
                    <div>
                        <h3 class="home-product-category-title">Sports</h3>
                        <p class="home-product-category-description">Bone Conduction Headphones</p>
                    </div>
                    <div class="sport-left">
                        <div class="arrow-circle prev disabled" title="prev">
                            <img src="/scs/img/arrow-left.png">
                        </div>
                        <div class="arrow-circle next" style="margin-left: 10px;" title="next">
                            <img src="/scs/img/arrow-right.png">
                        </div>
                    </div>
                </div>
                <div class="collections-container">
                    <!-- OpenRun Pro 2-BM-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image standard royal" src="/site/image/S820-ST-BM-US-326_01.png"/>
                                <img class="collection-image mini royal" style="display:none" src="/site/image/S821-MN-BM-US-326_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option royal standard" style="background:linear-gradient(to bottom, #E1D21B, #7483BE, #001DCD);z-index: 1"
                                             data-value="S820-ST-BM-US-326">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option royal mini" style="background:linear-gradient(to bottom, #E1D21B, #7483BE, #001DCD);display:none;z-index: 1"
                                             data-value="S821-MN-BM-US-326">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <span style="color: #666666;font-size: 11px; background: #DFE9FB;padding: 0 15px 0 25px;border-radius: 16px;margin-left: -21px;line-height: 16px;">Boston Marathon® Co-branded Edition</span>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Size：</p>
                                    <div class="features open-run-pro-2-bm">
                                        <span class="item" data-value="mini">Mini</span>
                                        <span class="item active" data-value="standard">Standard</span>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-run-pro2-bm-price"></div>
                                    <input class="royal standard" type="hidden" value="product/969331"/>
                                    <input class="royal mini" type="hidden" value="product/969032"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">RUN PRO&nbsp;</span>2</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                        <p class="collection-tag">New</p>
                    </div>
                    <!-- OpenRun Pro 2-EK-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image standard coral" src="/site/image/S820-ST-EK-US-326_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option coral standard" style="background: linear-gradient(to bottom, #EB6231, #F6BC48);z-index: 1"
                                             data-value="S820-ST-EK-US-326">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <span style="color: #666666;font-size: 11px; background: #FCEDD0;padding: 0 15px 0 25px;border-radius: 16px;margin-left: -21px;line-height: 16px;">Kipchoge Co-branded Edition</span>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-run-pro2-ek-price"></div>
                                    <input class="coral standard" type="hidden" value="product/829573"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">RUN PRO </span>2</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenRun Pro 2-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image standard black" style="display:none" src="/site/image/S820-ST-BK-US_01.png"/>
                                <img class="collection-image standard orange" style="display:none" src="/site/image/S820-ST-OR-US_01.png"/>
                                <img class="collection-image standard silver" style="display:none" src="/site/image/S820-ST-SR-US-326_01.png"/>
                                <img class="collection-image mini black" style="display:none" src="/site/image/S821-MN-BK-US_01.png"/>
                                <img class="collection-image mini orange" style="display:none" src="/site/image/S821-MN-OR-US_01.png"/>
                                <img class="collection-image mini silver" src="/site/image/S821-MN-SR-US-326_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black standard" style="background-color: black;display:none;"
                                             data-value="S820-ST-BK-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option orange standard" style="background-color: #F87E41;display:none;"
                                             data-value="S820-ST-OR-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option silver standard" style="background:linear-gradient(to bottom, #A7A7A7, #EDEDED);display:none;"
                                             data-value="S820-ST-SR-US-326">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option black mini" style="background-color: black;"
                                             data-value="S821-MN-BK-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option orange mini" style="background-color: #F87E41;"
                                             data-value="S821-MN-OR-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option silver mini" style="background:linear-gradient(to bottom, #A7A7A7, #EDEDED);"
                                             data-value="S821-MN-SR-US-326">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Size：</p>
                                    <div class="features open-run-pro-2">
                                        <span class="item active" data-value="mini">Mini</span>
                                        <span class="item" data-value="standard">Standard</span>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-run-pro2-price"></div>
                                    <input class="black standard" type="hidden" value="product/639641"/>
                                    <input class="orange standard" type="hidden" value="product/639940"/>
                                    <input class="silver standard" type="hidden" value="product/843182"/>
                                    <input class="black mini" type="hidden" value="product/723970"/>
                                    <input class="orange mini" type="hidden" value="product/724066"/>
                                    <input class="silver mini" type="hidden" value="product/954028"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">RUN PRO </span>2</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenSwim Pro-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image grey"
                                     src="/site/image/S710-ST-GY-US_01.png"/>
                                <img class="collection-image red" style="display:none"
                                     src="/site/image/S710-ST-RD-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option grey" style="background-color: grey;"
                                             data-value="S710-ST-GY-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option red" style="background-color: #ba4b36;"
                                             data-value="S710-ST-RD-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-swim-pro-price"></div>
                                    <input class="grey" type="hidden" value="OpenSwim-Pro-Grey"/>
                                    <input class="red" type="hidden" value="OpenSwim-Pro"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">SWIM PRO</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenRun Pro-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image standard black" src="/site/image/S810-ST-BK-US_01.png"/>
                                <img class="collection-image standard blue" style="display:none" src="/site/image/S810-ST-BL-US_01.png"/>
                                <img class="collection-image standard beige" style="display:none" src="/site/image/S810-ST-BG-US_01.png"/>
                                <img class="collection-image standard pink" style="display:none" src="/site/image/S810-ST-PK-US_01.png"/>
                                <img class="collection-image mini black" style="display:none" src="/site/image/S811-MN-BK-US_01.png"/>
                                <img class="collection-image mini beige" style="display:none" src="/site/image/S811-MN-BG-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black standard" style="background-color: black;" data-value="S810-ST-BK-US">
                                            <img class="checkmark active" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option blue standard" style="background-color: #3886B4;" data-value="S810-ST-BL-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option beige standard" style="background-color: #E0CFC2;" data-value="S810-ST-BG-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option pink standard" style="background-color: #F08C81;" data-value="S810-ST-PK-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option black mini" style="background-color: black; display:none;" data-value="S811-MN-BK-US">
                                            <img class="checkmark active" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option beige mini" style="background-color: #E0CFC2; display:none;" data-value="S811-MN-BG-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Size：</p>
                                    <div class="features open-run-pro">
                                        <span class="item" data-value="mini">Mini</span>
                                        <span class="item active" data-value="standard">Standard</span>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-run-pro-price"></div>
                                    <input class="black standard" type="hidden" value="product/286119"/>
                                    <input class="blue standard" type="hidden" value="product/285750"/>
                                    <input class="beige standard" type="hidden" value="product/286114"/>
                                    <input class="pink standard" type="hidden" value="product/285958"/>
                                    <input class="black mini" type="hidden" value="product/404178"/>
                                    <input class="beige mini" type="hidden" value="product/404975"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">RUN PRO</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenRun-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image standard black" src="/site/image/S803-ST-BK-US_01.png"/>
                                <img class="collection-image standard grey" style="display:none" src="/site/image/S803-ST-GY-US_01.png"/>
                                <img class="collection-image standard blue" style="display:none" src="/site/image/S803-ST-BL-US_01.png"/>
                                <img class="collection-image standard red" style="display:none" src="/site/image/S803-ST-RD-US_01.png"/>
                                <img class="collection-image mini black" style="display:none" src="/site/image/S803-MN-BK-US_01.png"/>
                                <img class="collection-image mini blue" style="display:none" src="/site/image/S803-MN-BL-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black standard" style="background: black" data-value="S803-ST-BK-US">
                                            <img class="checkmark active" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option grey standard" style="background: #CCCCCC" data-value="S803-ST-GY-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option blue standard" style="background: #233F8C" data-value="S803-ST-BL-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option red standard" style="background: #B24441" data-value="S803-ST-RD-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option black mini" style="background: black; display:none;" data-value="S803-MN-BK-US">
                                            <img class="checkmark active" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option blue mini" style="background: #233F8C; display:none;" data-value="S803-MN-BL-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Size：</p>
                                    <div class="features open-run">
                                        <span class="item" data-value="mini">Mini</span>
                                        <span class="item active" data-value="standard">Standard</span>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-run-price"></div>
                                    <input class="black standard" type="hidden" value="product/285810"/>
                                    <input class="grey standard" type="hidden" value="product/285739"/>
                                    <input class="blue standard" type="hidden" value="product/285729"/>
                                    <input class="red standard" type="hidden" value="product/286013"/>
                                    <input class="black mini" type="hidden" value="product/281689"/>
                                    <input class="blue mini" type="hidden" value="product/363010"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">RUN</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenMove-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image grey" src="/site/image/S661-ST-GY-US_01.png"/>
                                <img class="collection-image white" style="display:none" src="/site/image/S661-ST-WT-US_01.png"/>
                                <img class="collection-image blue" style="display:none" src="/site/image/S661-ST-BL-US_01.png"/>
                                <img class="collection-image pink" style="display:none" src="/site/image/S661-ST-PK-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option grey" style="background: #646569" data-value="S661-ST-GY-US">
                                            <img class="checkmark active" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option white" style="background: #B5B5B5" data-value="S661-ST-WT-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option blue" style="background: #4893C6" data-value="S661-ST-BL-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option pink" style="background: #DFCCD2" data-value="S661-ST-PK-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-move-price"></div>
                                    <input class="grey" type="hidden" value="product/285700"/>
                                    <input class="white" type="hidden" value="product/285713"/>
                                    <input class="blue" type="hidden" value="product/285800"/>
                                    <input class="pink" type="hidden" value="product/285902"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">MOVE</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenSwim-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black" src="/site/image/S700-ST-BK-US_01.png"/>
                                <img class="collection-image blue" style="display:none" src="/site/image/S700-ST-BL-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background: black" data-value="S700-ST-BK-US">
                                            <img class="checkmark active" src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option blue" style="background: #233F8C" data-value="S700-ST-BL-US">
                                            <img class="checkmark" src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-swim-price"></div>
                                    <input class="black" type="hidden" value="product/285919"/>
                                    <input class="blue" type="hidden" value="product/286102"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">SWIM</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                </div>
                <script>
                    var currentIndex = 0;
                    var length = $('.sports').find('.collection').length;
                    var pageSize = Math.min(Math.max(Math.floor(window.innerWidth / 330), 1), 3);
                    var indexs = Math.ceil(length/pageSize);
                    $('.arrow-circle').click(function(){
                        var type = this.className.split(" ")[1];
                        var isDisabled = this.className.split(" ")[2];
                        if(!isDisabled){
                            if(type=='prev'){
                                currentIndex--;
                                if(pageSize<3){
                                    var offset = -currentIndex * 345 *pageSize;
                                    $(this).parent().parent().next().css('transform',`translateX(${offset}px)`);
                                }else{
                                    var offset = -currentIndex * 100;
                                    $(this).parent().parent().next().css('transform',`translateX(${offset}%)`);
                                }
                                if(currentIndex===0){
                                    $(this).addClass('disabled');
                                }
                                $(this).next().removeClass('disabled');
                            }
                            if(type=='next'){
                                currentIndex++;
                                if(pageSize<3){
                                    var offset = -currentIndex * 345*pageSize;
                                    $(this).parent().parent().next().css('transform',`translateX(${offset}px)`);
                                }else{
                                    var offset = -currentIndex * 100;
                                    $(this).parent().parent().next().css('transform',`translateX(${offset}%)`);
                                }
                                if(currentIndex+1===indexs){
                                    $(this).addClass('disabled');
                                }
                                $(this).prev().removeClass('disabled');
                            }
                        }
                    })
                </script>
            </div>
            <div class="home-product-category communication">
                <h3 class="home-product-category-title">Communication</h3>
                <p class="home-product-category-description">Bone Conduction Headphones</p>
                <div class="collections-container">
                    <!-- OpenComm2-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black" src="/site/image/C120-AN-BK-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background: black">
                                            <img class="checkmark active" src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-comm-2-price"></div>
                                    <input class="black" type="hidden" value="product/895324" />
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">COMM2</span> 2025 Upgrade</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="separator-line"><div class="separator-box"></div></div> -->


    <!-- CMS ZONE --> <!--
	<div data-cms-area="home_cms_area_2" data-cms-area-filters="path"></div>-->

    <!-- CMS MERCHANDISING ZONE --><!--
    <div class="home-merchandizing-zone">
        <div class="home-merchandizing-zone-content">
            <div data-cms-area="home_merchandizing_zone" data-cms-area-filters="path"></div>
        </div>
    </div>-->


    <!-- Promo Area --><!--
	{{#if extraHomeView.promo}}
	<div class="home-promo">
		<div class="home-promo-image"{{#if extraHomeView.promo.image}} style="background-image:url('{{getThemeAssetsPathWithDefault extraHomeView.promo.image 'img/posh-freetextimage.jpg'}}');"{{/if}}>{{#if extraHomeView.promo.image}}<img src="{{getThemeAssetsPathWithDefault extraHomeView.promo.image 'img/posh-freetextimage.jpg'}}" />{{/if}}</div>
		<div class="home-promo-text">
			<div class="home-promo-text-content">
				{{#if extraHomeView.promo.title}}<h1>{{extraHomeView.promo.title}}</h1>{{/if}}
    {{#if extraHomeView.promo.subtitle}}<h2>{{extraHomeView.promo.subtitle}}</h2>{{/if}}
			    <div class="separator-line"><div class="separator-box"></div></div>
				{{#if extraHomeView.promo.text}}{{{extraHomeView.promo.text}}}{{/if}}
    {{#if extraHomeView.promo.linklocation}}
					<a href="{{extraHomeView.promo.linklocation}}">{{#if extraHomeView.promo.linktext}}{{extraHomeView.promo.linktext}}{{else}}{{translate 'Learn More'}}{{/if}}</a>
				{{/if}}
			</div>
		</div>
	</div>
	{{/if}}-->

    <!-- CMS ZONE --><!--
    <div data-cms-area="home_cms_area_3" data-cms-area-filters="path"></div>-->

    <!-- INFOBLOCKS --><!--
	{{#if extraHomeView.showInfoblocks}}
	<div class="home-infoblock-layout">
		{{#each extraHomeView.infoBlocks}}
		<div class="home-infoblock{{#if span}} home-infoblock-span2{{/if}}">
			<a{{objectToAtrributes item}} class="home-infoblock-link">
				<img class="home-infoblock-image" src="{{getThemeAssetsPathWithDefault image}}" alt="{{title}}" />
				{{#if title}}<div class="home-infoblock-text">{{title}}</div>{{/if}}
			</a>
		</div>
		{{/each}}
	</div>
	{{/if}}-->

    <!-- CMS ZONE --><!--
	<div data-cms-area="home_cms_area_4" data-cms-area-filters="path"></div>-->

</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}

