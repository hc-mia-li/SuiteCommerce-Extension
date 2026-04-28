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
                                    <div class="home-slide-main-container {{#if imageBehaviour}}use-image{{else}}{{#if backgroundCrop}}{{backgroundCrop}}{{/if}}{{/if}}">
                                        {{#if isAbsoluteUrl}}
                                            <div class="home-slide-image-container use-image" style="background-image:url('{{image}}');">
                                                <a{{objectToAtrributes item}} class="home-slide-wrap-link">
                                                    <img src="{{image}}" class="home-slide-image" />
                                                </a>
                                            </div>
                                        {{else}}
                                            <div class="home-slide-image-container {{#if imageBehaviour}}use-image{{else}}{{#if backgroundCrop}}
                                                    {{backgroundCrop}}
                                                {{/if}}{{/if}}" style="background-image:url('{{getThemeAssetsPathWithDefault image 'img/posh-carousel-home-1.jpg'}}');">
                                                <a{{objectToAtrributes item}} class="home-slide-wrap-link">
                                                    <img src="{{#if isAbsoluteUrl}}
                                                        {{image}}
                                                    {{else}}
                                                        {{getThemeAssetsPathWithDefault image 'img/posh-carousel-home-1.jpg'}}
                                                    {{/if}}" class="home-slide-image {{#if imageMobile}}hide-small{{/if}}" />
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

                                                    {{#ifEquals title 'OPENSWIM PRO'}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}}">OPEN<span style="font-weight:700">SWIM PRO</span></h2>
                                                        {{#if text}}<h2 class="home-info-text"
                                                                        style="color:{{captionColor}}">{{text}}</h2>{{/if}}
                                                        <h3 class="home-info-subtext"
                                                            style="color:#E7E7E7;font-size:20px;line-height:30px;margin:0 0 48px 0">
                                                            Water to Land, the Music Never Ends.</h3>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENRUN PRO2'}}
                                                        {{#if text}}<h2 class="home-info-text"
                                                                        style="color:{{captionColor}};margin-bottom: 3px;">{{text}}</h2>{{/if}}
                                                        <h2 class="home-info-title" style="color:{{captionColor}};margin-bottom: 2.604vw;">OPEN<span style="font-weight:700">RUN PRO </span>2 <div style="text-transform: uppercase;display: inline-block;font-size: 16px;padding: 3px 11px;border-radius: 34px;vertical-align: middle;margin-left: -5px;background-color: rgba(10, 11, 16);opacity: 0.6">Silver</div></h2>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENDOTS ONE PINK'}}
                                                        <h2 class="home-info-text" style="color:#F0ECED;font-size: clamp(14px, 1.093vw, 21px);font-weight: 500;letter-spacing: -0.2px;">New Color Drop - OpenDots ONE in Pink</h2>
                                                        <h2 class="home-info-title" style="background: linear-gradient(90deg, #FFFFFF 0%, #CAA4A7 100%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;display: inline-block;font-size: clamp(20px, 2.083vw, 40px);font-weight: 500;letter-spacing: -1.2px;">Fresh Color, Proven Tech.</h2>
                                                        <p style="color: #F0ECED;font-size: clamp(14px, 1.042vw, 20px);letter-spacing: 0.3px;margin-bottom: clamp(20px, 2.08vw, 40px);margin-top: clamp(6px, 0.52vw, 10px);">Available September 4</p>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENFIT 2+'}}
                                                        <h3 style="font-size: 20px;color: #737373;font-weight: 400;line-height: 1.2;">Pre-order on Sept.2</h3>
                                                        <h2 class="home-info-title" style="font-weight: 500;text-transform: uppercase;color: #000">Open<span style="font-weight: 600">Fit</span> 2+</h2>
                                                        <p style="font-size: 20px;font-weight: 400;line-height: 1.2;color: #404040;padding-bottom: 16px;">Equipped with Dolby Audio<br/>
                                                            and Qi Wireless Charging Case for <br/>
                                                            Superior Convenience.</p>
                                                        <p style="font-size: 12px;color: #404040;padding-bottom: 32px;">*The wireless charging pad is not included in the box</p>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'OPENRUN PRO 2'}}
                                                        <h3 style="font-size: 0.885vw;color: #3B7AA1;font-weight: 500;line-height: 1.2;">A Fresh New Color for OPEN<span style="font-weight: bolder">RUN PRO</span> 2</h3>
                                                        <h2 class="home-info-title" style="font-weight: 700;color: #3B7AA1;font-style: italic">Run Free in Sky Blue</h2>
                                                        <p style="font-size: 0.885vw;font-weight: 500;line-height: 1.2;color: #3B7AA1;margin-bottom: 2.083vw;">Launching Oct. 23</p>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'Shokz Spring Sale'}}
                                                        <p style="font-size: 1.174vw;line-height: 1.3;font-weight: 400;color:#5F5F5F;margin-bottom: 0.365vw">{{text}}</p>
                                                        <h2 class="home-info-title" style="display: inline-block;font-weight: 700;font-size: 2.36vw;color:#5F823B;line-height: 1.2;margin-bottom: 0.99vw">{{title}}</h2>

                                                        <p style="font-size: 1.042vw;line-height: 1.4;margin-bottom: 1.146vw;font-weight: 500;color:rgba(95, 95, 95, 0.9);">Discounts for you: <span style="font-weight: 700">March 6 - 20</span> <br/>
                                                        Discounts for your customer: <span style="font-weight: 700">March 25 - April 7</span></p>
                                                        <p style="font-size:0.625vw;color:#5F5F5F;line-height: 1.3;margin-bottom: 1.5625vw;">Retailer Support Program<br/>
                                                            Shokz.com will run a Spring Promotion (Buy 2 Get Extra $30 Off).<br/>
                                                            Retailers may choose to price match and submit sell-out reports to request for reimbursement.<br/>
                                                            Please refer to the detailed <a href="https://docs.google.com/document/d/1RP1cfnqSP6rGepJPRks8zc7njZFmawNp_lGDPJPRD-M/edit?usp=sharing" target="_blank" style="text-decoration: underline;pointer-events: all;">program guidelines.</a><br/>
                                                        </p>
                                                    {{/ifEquals}}

                                                    {{#ifEquals title 'Mother’s Day Sale & Memorial Day Sale'}}
<!--                                                        不显示按钮-->
                                                        <p style="font-size: 1.042vw;line-height: 1.2;font-weight: 400;background: linear-gradient(269.94deg, #D99B82 3.87%, #BE8068 30.3%, #9E6049 102.53%);-webkit-background-clip: text; -webkit-text-fill-color: transparent;margin-bottom: 0.365vw">{{title}}</p>
                                                        <h2 class="home-info-title" style="display: inline-block;font-weight: 500;font-size: 2.36vw;color:#4A1500;line-height: 1.2;padding-bottom: 1.757vw;border-bottom: 0.104vw solid #DBC2B4;margin-bottom: 1.172vw">Up to <span style="color:#C14601">30% off</span><br/>
                                                            wholesale favorites</h2>
                                                        <p style="font-size: 0.833vw;line-height: 1.3;margin-bottom: 1.146vw;font-weight: 500;color:#753F29;">Discounts for you:<br/> <span style="font-size:0.833vw;line-height:1.6;color:#83503A;font-weight: 200">April 8–22</span></p>
                                                        <p style="font-size: 0.833vw;line-height: 1.3;margin-bottom: 1.146vw;font-weight: 500;color:#753F29;">Discounts for your customer:<br/>
                                                            <span style="font-size:0.833vw;line-height:1.6;color:#83503A;font-weight: 200">Mother’s Day Sale：April 29 - May 10<br/>
                                                                Memorial Day Sale：May 18 - May 25
                                                            </span>
                                                        </p>
                                                        <p style="font-size:1.042vw;color:#4A1500;line-height: 1.3;font-weight: 500">Get Ready: OpenFit Pro Launches April 28</p>
                                                    {{/ifEquals}}

                                                    {{#unlessEquals title 'Mother’s Day Sale & Memorial Day Sale'}}
                                                        {{#if linktext}}
                                                            <div class="home-slide-caption-button-container" style="white-space: nowrap;">
                                                                <a{{objectToAtrributes item}} class="home-slide-caption-button" {{#ifEquals title 'OPENRUN PRO 2'}} style="background-color: #000;border-color: #000;color: #fff;"{{/ifEquals}}>{{#if text}}{{linktext}}{{else}}{{translate 'Shop now'}}{{/if}}</a>
                                                            </div>
                                                        {{/if}}
                                                    {{/unlessEquals}}
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
            <h2 class="home-benefit-title">How you can benefit from our reseller website</h2>
            <div class="home-benefit-cart-container">
                <div class="home-benefit-cart-first-row">
                    <div class="home-benefit-cart-first-row-first-col">
                        <img src="/site/image/Home/fast-shipping.svg">
                        <img src="/site/image/Home/efficient-order-management.svg">
                    </div>
                    <div class="home-benefit-cart-first-row-first-col">
                        <img src="/site/image/Home/dedicated-commerical-team.svg">
                    </div>
                </div>
                <div class="home-benefit-cart-second-row">
                    <img class="home-benefit-cart-second-row-img" src="/site/image/Home/competitive-pricing.svg">
                    <img class="home-benefit-cart-second-row-img" src="/site/image/Home/net-payments-terms.svg">
                </div>
            </div>
        </div>
    </div>

    <div class="home-product-container">
        <div class="home-product-body">
            <div class="home-product-category true-wireless">
                <div class="home-product-sports">
                    <div>
                        <h3 class="home-product-category-title">Open Earbuds</h3>
                        <p class="home-product-category-description">Open-Ear Headphones</p>
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
                    <!-- OpenFit Pro-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black"
                                     src="/site/image/T010-ST-BK-US_01.png"/>
                                <img class="collection-image white" style="display: none;"
                                     src="/site/image/T010-ST-WT-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background-color: black;"
                                             data-value="T010-ST-BK-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option white" style="background-color: #E6E6E6;"
                                             data-value="T010-ST-WT-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-fit-pro-price"></div>
                                    <input class="black" type="hidden" value="product/1274801"/>
                                    <input class="white" type="hidden" value="product/1274901"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">FIT PRO</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                        <p class="collection-tag">New</p>
                    </div>
                    <!-- OpenFit 2+-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black"
                                     src="/site/image/T921-ST-BK-US_01.png"/>
                                <img class="collection-image grey" style="display: none;"
                                     src="/site/image/T921-ST-GY-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background-color: black;"
                                             data-value="T921-ST-BK-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option grey" style="background-color: #C8C8C8;"
                                             data-value="T921-ST-GY-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-fit-22-price"></div>
                                    <input class="black" type="hidden" value="product/1035263"/>
                                    <input class="grey" type="hidden" value="product/1035066"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">FIT</span> 2+</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
                    <!-- OpenDots One-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image black" style="display: none;"
                                     src="/site/image/E310-ST-BK-US_01.png"/>
                                <img class="collection-image beige" style="display: none;"
                                     src="/site/image/E310-ST-GY-US_01.png"/>
                                <img class="collection-image pink"
                                     src="/site/image/E310-ST-PK-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black" style="background-color: black;"
                                             data-value="E310-ST-BK-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option beige" style="background-color: #F0ECE1;"
                                             data-value="E310-ST-GY-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option pink" style="background-color: #E5C3C4;"
                                             data-value="E310-ST-PK-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-dots-one-price"></div>
                                    <input class="black" type="hidden" value="product/956627"/>
                                    <input class="beige" type="hidden" value="product/956428"/>
                                    <input class="pink" type="hidden" value="product/1151988"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">DOTS</span> ONE</p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
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
                    </div>
                </div>
            </div>
            <div class="home-product-category sports">
                <div class="home-product-sports">
                    <div>
                        <h3 class="home-product-category-title">Bone Conduction</h3>
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
                    <!-- OpenSwim Pro-->
                    <div class="collection">
                        <div class="collection-detail">
                            <div class="collection-detail-image">
                                <img class="collection-image grey" style="display:none"
                                     src="/site/image/S710-ST-GY-US_01.png"/>
                                <img class="collection-image red" style="display:none"
                                     src="/site/image/S710-ST-RD-US_01.png"/>
                                <img class="collection-image white"
                                     src="/site/image/S710-ST-WT-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option grey" style="background-color: grey;"
                                             data-value="S710-ST-GY-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option red" style="background-color: #ba4b36;"
                                             data-value="S710-ST-RD-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option white" style="background-color: #C2C2C2;"
                                             data-value="S710-ST-WT-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-swim-pro-price"></div>
                                    <input class="grey" type="hidden" value="OpenSwim-Pro-Grey"/>
                                    <input class="red" type="hidden" value="OpenSwim-Pro"/>
                                    <input class="white" type="hidden" value="OpenSwim-Pro-White"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">SWIM PRO</span></p>
                            <div class="collection-link-btn">SHOP NOW ></div>
                        </div>
                    </div>
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
                                <img class="collection-image standard blue" src="/site/image/S820-ST-BL-US_01.png"/>
                                <img class="collection-image mini black" style="display:none" src="/site/image/S821-MN-BK-US_01.png"/>
                                <img class="collection-image mini orange" style="display:none" src="/site/image/S821-MN-OR-US_01.png"/>
                                <img class="collection-image mini silver" style="display:none" src="/site/image/S821-MN-SR-US-326_01.png"/>
                                <img class="collection-image mini blue" style="display:none" src="/site/image/S821-MN-BL-US_01.png"/>
                            </div>
                            <div class="collection-detail-info">
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Color：</p>
                                    <div class="color-option-container">
                                        <div class="color-option black standard" style="background-color: black;"
                                             data-value="S820-ST-BK-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option orange standard" style="background-color: #F87E41;"
                                             data-value="S820-ST-OR-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option silver standard" style="background:linear-gradient(to bottom, #A7A7A7, #EDEDED);"
                                             data-value="S820-ST-SR-US-326">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option blue standard" style="background:#B8C7D1;"
                                             data-value="S820-ST-BL-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option black mini" style="background-color: black;display:none;"
                                             data-value="S821-MN-BK-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option orange mini" style="background-color: #F87E41;display:none;"
                                             data-value="S821-MN-OR-US">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option silver mini" style="background:linear-gradient(to bottom, #A7A7A7, #EDEDED);display:none;"
                                             data-value="S821-MN-SR-US-326">
                                            <img class="checkmark"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                        <div class="color-option blue mini" style="background-color: #B8C7D1;display:none;"
                                             data-value="S821-MN-BL-US">
                                            <img class="checkmark active"
                                                 src="/scs/img/check-circle.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title">
                                    <p class="collection-detail-title">Size：</p>
                                    <div class="features open-run-pro-2">
                                        <span class="item" data-value="mini">Mini</span>
                                        <span class="item active" data-value="standard">Standard</span>
                                    </div>
                                </div>
                                <div class="collection-detail-info-title collection-product">
                                    <p class="collection-detail-title collection-price-title">Price：</p>
                                    <div class="collection-price" data-view="open-run-pro2-price"></div>
                                    <input class="black standard" type="hidden" value="product/639641"/>
                                    <input class="orange standard" type="hidden" value="product/639940"/>
                                    <input class="silver standard" type="hidden" value="product/843182"/>
                                    <input class="blue standard" type="hidden" value="product/1173594"/>
                                    <input class="black mini" type="hidden" value="product/723970"/>
                                    <input class="orange mini" type="hidden" value="product/724066"/>
                                    <input class="silver mini" type="hidden" value="product/954028"/>
                                    <input class="blue mini" type="hidden" value="product/1173295"/>
                                </div>
                            </div>
                        </div>
                        <div class="collection-info">
                            <p class="primary-text">OPEN<span style="font-weight: 700">RUN PRO </span>2</p>
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
                </div>
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
            <script>
                var productTypes = [
                    { type: "OpenFit Air", template: "open-fit-air-price" },
                    { type: "OpenFit 2+", template: "open-fit-22-price" },
                    { type: "OpenFit 2", template: "open-fit-2-price" },
                    { type: "OpenFit Pro", template: "open-fit-pro-price" },
                    { type: "OpenRun Pro 2", template: "open-run-pro2-price" },
                    { type: "OpenRun Pro", template: "open-run-pro-price" },
                    { type: "OpenRun", template: "open-run-price" },
                    { type: "OpenMove", template: "open-move-price" },
                    { type: "OpenSwim Pro", template: "open-swim-pro-price" },
                    { type: "OpenSwim", template: "open-swim-price" },
                    { type: "OpenComm 2", template: "open-comm-2-price" },
                    { type: "OpenDots One", template: "open-dots-one-price" },
                ];
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
                            for (let rule of productTypes) {
                                if (itemRec.itemname.includes(rule.type)) {
                                    if(rule.type=='OpenRun Pro 2'){
                                        if (itemRec.itemname.includes("2-EK")) {
                                            // OpenRun Pro 2-EK
                                            itemType = "open-run-pro2-ek-price";
                                        }else if (itemRec.itemname.includes("Boston Marathon")) {
                                            // OpenRun Pro 2 Boston Marathon
                                            itemType = "open-run-pro2-bm-price";
                                        }else{
                                            // OpenRun Pro 2
                                            itemType = rule.template;
                                        }
                                    }else{
                                        itemType = rule.template;
                                    }
                                    break;
                                }
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
                            for (let rule of productTypes) {
                                if (itemRec.itemname.includes(rule.type)) {
                                    if(rule.type=='OpenRun Pro 2'){
                                        if (itemRec.itemname.includes("2-EK")) {
                                            // OpenRun Pro 2-EK
                                            itemType = "open-run-pro2-ek-price";
                                        }else if (itemRec.itemname.includes("Boston Marathon")) {
                                            // OpenRun Pro 2 Boston Marathon
                                            itemType = "open-run-pro2-bm-price";
                                        }else{
                                            // OpenRun Pro 2
                                            itemType = rule.template;
                                        }
                                    }else{
                                        itemType = rule.template;
                                    }
                                    break;
                                }
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
                // 翻页切换
                $('.home-product-category').each(function () {
                    var $category = $(this);
                    var currentIndex = 0;
                    var $collections = $category.find('.collections-container .collection');
                    var length = $collections.length;
                    var pageSize = Math.min(Math.max(Math.floor(window.innerWidth / 330), 1), 3);
                    var totalPages = Math.ceil(length / pageSize);
                    var $arrowPrev = $category.find('.arrow-circle.prev');
                    var $arrowNext = $category.find('.arrow-circle.next');

                    function updateButtons() {
                        $arrowPrev.toggleClass('disabled', currentIndex === 0);
                        $arrowNext.toggleClass('disabled', currentIndex >= totalPages - 1);
                    }

                    function updateOffset() {
                        var offsetPercent = -currentIndex * 100;
                        $category.find('.collections-container').css({
                            'transform': `translateX(${offsetPercent}%)`,
                            'transition': 'transform 0.5s ease'
                        });
                    }

                    updateButtons();

                    $arrowPrev.add($arrowNext).click(function () {
                        if ($(this).hasClass('disabled')) return;

                        if ($(this).hasClass('prev')) {
                            currentIndex = Math.max(0, currentIndex - 1);
                        } else {
                            currentIndex = Math.min(totalPages - 1, currentIndex + 1);
                        }
                        updateOffset();
                        updateButtons();
                    });
                });
            </script>
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

