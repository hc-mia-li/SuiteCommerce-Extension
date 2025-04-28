{{#if showBackToAccount}}
    <a href="/" class="return-authorization-form-button-back">
        <i class="return-authorization-form-button-back-icon"></i>
        {{translate "Back to Account"}}
    </a>
{{/if}}

<section class="return-authorization-form">
    <header>
        <h1 class="return-authorization-form-title">{{pageHeader}}</h1>
    </header>
    <div data-type="alert-placeholder"></div>
    <form class="return-authorization-form-form">
        <fieldset class="return-authorization-form-items-fieldset">
            <p class="return-authorization-form-items-info">
                {{translate '<label class="return-authorization-form-items-fieldset-from-label">From: </label><a href="$(0)">Purchase #$(1)</a>' createdFromURL model.tranid}}
            </p>
            <input type="hidden" name="type" value="{{model.recordtype}}">
            <h5 class="return-authorization-form-products-title">{{translate 'Select products to return'}}</h5>
            <input type="hidden" name="id" value="{{model.internalid}}">
            <!--            <div data-view="ListHeader"></div>-->
            <div class="return-authorization-form-list">
                {{!-- return prod 1  --}}
                <div class="return-authorization-form-prod" data-prod="1" data-line-id="">
                    <h5 class="return-authorization-form-info">Return Product 1</h5>
                    <div class="return-authorization-form-flex">
                        <div class="return-authorization-form-flex-wrap col-md-4">
                            <label for="SKU">Item Description *</label>
                            <select data-action="clear-error" name="sku_1" data-id="product-1-sku" class="return-authorization-form-type">
                                <option value="">Select An Item</option>
                                {{#each selectLines}}
                                    <option value="{{this.itemid}}">
                                        {{this.displayname}}
                                    </option>
                                {{/each}}
                            </select>
                            <div data-type="sku_1"></div>
                        </div>

                        <div class="return-authorization-form-flex-wrap col-md-5">
                            <label for="itemdes1">Memo *</label>
                            <input type="text" data-action="clear-error" name="itemdes_1" id="itemdes1" class="return-authorization-form-input-fld" value="">
                            <div data-type="itemdes_1"></div>
                        </div>

                        <div class="return-authorization-form-flex-wrap col-md-3">
                            <label for="qunty1">Quantity *</label>
                            <input type="number" data-action="clear-error" name="qunty_1" id="qunty1" class="return-authorization-form-quantity" value="" min="1" step="1">
                            <div data-type="qunty_1"></div>
                        </div>

                    </div>
                    <div class="return-authorization-form-flex">
                        <div class="return-authorization-form-flex-wrap-1 col-md-6">
                            <label for="SerialNumber">Serial Number</label>
                            <input type="text" data-action="clear-error" name="serialnumber_1" id="SerialNumber1" class="return-authorization-form-serial">
                            <div data-type="serialnumber_1"></div>
                        </div>
                        <div class="return-authorization-form-flex-wrap-2 col-md-6">
                            <label for="Reason for Return">Reason for Return *</label>
                            <select name="reasonreturn_1" data-action="clear-error" id="reasonreturn" data-id="product-1-sku"
                                    class="return-authorization-form-reason" multiple>
                                {{#each reasons}}
                                    <option value="{{id}}">
                                        {{text}}
                                    </option>
                                {{/each}}
                            </select>
                            <div data-type="reasonreturn_1"></div>
                        </div>
                    </div>
                </div>
                {{!-- end return prod 1  --}}

                {{!-- add rma prod --}}
                <div class="return-authorization-form-add">
                    <i class="return-authorization-form-icon"></i>
                    <h5>Add return product</h5>
                </div>
                {{!-- end  --}}

                {{!-- Attach Picture --}}
                <div class="attach-pictures">
                    <div class="basic-info-title">
                        <h3 class="return-authorization-form-info">Attach Pictures</h3>
                    </div>
                    <div class="row attach-pic-sect">
                        <div class="col-sm-5">
                            <div class="return-authorization-form-upload-td">
                                <label class="return-authorization-form-label">Please attach pictures of product</label>
                                <i class="return-authorization-form-file-upload-icon"></i>
                                <input type="file" id="fileUploadVald" class="file-img" multiple/>
                            </div>
                            <p id="validationMessage"></p>
                        </div>
                        <div class="col-sm-4">
                            <p class="return-authorization-form-files-format">
                                *up to 5 files in format of JPEG/JPG/PDF, sum of 15m
                                in maximum
                            </p>
                        </div>
                    </div>
                </div>
                {{!-- end  --}}

                {{!-- Ship From Information  --}}
                <div class="return-authorization-form-ship-from-information">
                    <h3 class="return-authorization-form-ship-info">Ship From Information</h3>
                    <div class="ship-info-flex row">
                        <div class="ship-flex-wrap col-md-6">
                            <label for="storecontact">Store Contact Name *</label>
                            <input type="text" name="storecontact" id="storecontact" class="" value="" required>
                        </div>
                        <div class="ship-flex-wrap col-md-6">
                            <label for="zipcode">Zip Code *</label>
                            <input type="text" name="zipcode" id="zipcode" value="" maxlength="5" pattern="\d*" required>
                        </div>
                    </div>
                    <div class="ship-info-flex row">
                        <div class="ship-flex-wrap col-md-12">
                            <label for="address">Address 1 *</label>
                            <input type="text" name="address" id="address" class="" value="" required>
                        </div>
                    </div>
                    <div class="ship-info-flex row">
                        <div class="ship-flex-wrap col-md-12">
                            <label for="address">Address 2 </label>
                            <input type="text" name="address2" id="address2" class="" value="">
                        </div>
                    </div>
                    <div class="ship-info-flex row">
                        <div class="ship-flex-wrap col-md-4">
                            <label for="city">City *</label>
                            <input type="text" name="city" id="city" class="" value="" required>
                        </div>
                        <div class="ship-flex-wrap col-md-4">
                            <label class="global-views-countriesDropdown-group-label" for="country">
                                {{translate 'Country'}} <span class="global-views-countriesDropdown-input-required">*</span>
                            </label>
                            <div  class="global-views-countriesDropdown-form-controls" data-validation="control">
                                <select class="global-views-countriesDropdown-select" id="country" name="country" data-action="selectcountry" required>
                                    <option value="">
                                        {{translate '-- Select --'}}
                                    </option>
                                    {{#each countries}}
                                        <option value="{{code}}" {{#ifEquals code ../selectedCountry}} selected {{/ifEquals}}>
                                            {{name}}
                                        </option>
                                    {{/each}}
                                </select>
                            </div>
                            <!--                            <label for="city">City *</label>-->
                            <!--                            <input type="text" name="city" id="city" class="" value="" required>-->
                        </div>
                        <div class="ship-flex-wrap col-md-4">
                            <div class="address-edit-fields-group" data-input="state" data-view="StatesView" data-validation="control-group">
                            </div>
                        </div>
                    </div>
                    <div class="ship-info-flex row">
                        <div class="ship-flex-wrap col-md-6">
                            <label for="storephone">Store Phone Number *</label>
                            <input type="text" name="storephone" id="storephone" class="" value="" required>
                        </div>
                        <div class="ship-flex-wrap col-md-6">
                            <label for="storeemail">Store Contact Email *</label>
                            <input type="email" name="storeemail" id="storeemail" class="" value="" required>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="form-actions">
            <button type="submit" class="return-authorization-form-submit-button">{{translate 'Submit'}}</button>
        </div>
    </form>
</section>
