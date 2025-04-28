<section class="rma-container">
{{#if inactive}}
    <div data-cms-area="rma_cms_area_1" data-cms-area-filters="path"></div>
{{else}}
  {{#if isLoggedIn}}
  <h1 class="rma-title">Return Application</h1>
  <form class="rma-form" id="rma-form">
    <div class="basic-info-row">
      <div style="display: none;" class="basic-info-title">
        <h3 class="rma-basic-info">Basic Information</h3>
      </div>
      <div style="display: none;" class="col-md-6 col-sm-6">
        <label for="accountname">Account Name *</label>
        <input type="hidden" data-action="clear-error" name="accountname" id="accountname" class="" value="{{accountName}}">
        <div data-type="accountname"></div>
      </div>
      <div class="col-md-6 col-sm-6" style="display: none">
        <label for="ramtype">RMA type *</label>
        <select class="rma-type-list" name="ramtype" id="ramtype" data-action="clear-error">
          <option> Select RMA Type</option>
        </select>
        <div data-type="ramtype"></div>
      </div>
    </div>

    {{!-- return prod 1  --}}
    <div class="rma-return-prod" data-prod="1">
      <h5 class="rma-return-info">Return Product 1</h5>
      <div class="rma-flex">
        <div class="rma-flex-wrap col-md-4">
          <label for="SKU">Item Description *</label>
          <select type="text" data-action="clear-error" name="sku_1" data-id="product-1-sku" class="rma-type">
            <option value="">Select An Item</option>
            {{#each models}}
              <option value="{{this.internalid}}">
                {{this.displayname}}
              </option>
            {{/each}}
          </select>
          <div data-type="sku_1"></div>
        </div>

        <div class="rma-flex-wrap col-md-5">
          <label for="itemdescription">Memo *</label>
          <input type="text" data-action="clear-error" name="itemdes_1" id="itemdes1" class="ram-input-fld" value="">
          <div data-type="itemdes_1"></div>
        </div>

        <div class="rma-flex-wrap col-md-3">
          <label for="itemdescription">Quantity *</label>
          <input type="number" data-action="clear-error" name="qunty_1" id="qunty1" class="rma-type" value="" min="1" step="1">
          <div data-type="qunty_1"></div>
        </div>

      </div>
      <div class="rma-flex">
        <div class="rma-flex-wrap-1 col-md-6">
          <label for="SerialNumber">Serial Number</label>
          <input type="text" data-action="clear-error" name="serialnumber_1" id="SerialNumber1" class="">
          <div data-type="serialnumber_1"></div>
        </div>
        <div class="rma-flex-wrap-2 col-md-6">
          <label for="Reason for Return">Reason for Return *</label>
          <select name="reasonreturn_1" data-action="clear-error" id="reasonreturn" data-id=""
            class="rma-reson-return-select" multiple>
            {{!-- <option value="">Select Reason</option> --}}
            {{#each resoan_for_return}}
              <option value="{{text}}">
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
    <div class="rma-add-retrun-sec">
      <i class="rma-new-plus-icon"></i>
      <h5>Add return product</h5>
    </div>
    {{!-- end  --}}

    {{!-- Attach Picture --}}
    <div class="attach-pictures">
      <div class="basic-info-title">
        <h3 class="rma-return-info">Attach Pictures</h3>
      </div>
      <div class="row attach-pic-sect">
        <div class="col-sm-5">
          <div class="rma-upload-td">
            <lable class="rma-lable">Please attach pictures of product</lable>
            <i class="rma-file-upload-icon"></i>
            <input type="file" id="fileUploadVald" class="file-img" multiple required/>
          </div>
          <p id="validationMessage"></p>
        </div>
        <div class="col-sm-4">
          <p class="rma-files-format">
            *up to 5 files in format of JPEG/JPG/PDF, sum of 15m
            in maximum
          </p>
        </div>
      </div>
    </div>
    {{!-- end  --}}

    {{!-- Ship From Information  --}}
    <div class="rma-ship-from-information">
      <h3 class="rma-ship-info">Ship From Information</h3>
      <div class="shin-info-flex row">
        <div class="ship-flex-wrap col-md-5">
          <label for="storecontact">Store Contact Name *</label>
          <input type="text" name="storecontact" id="storecontact" class="" value="" required>

        </div>
        <div class="ship-flex-wrap col-md-4">
          <label for="storecontact">Country *</label>
          <input type="text" name="country" id="country" class="" value="" required>
        </div>
        <div class="ship-flex-wrap col-md-3">
          <label for="state">State *</label>
          <input type="text" name="state" id="state" class="" value="" required>
        </div>
      </div>
      <div class="ship-info-addrs">
        <label for="ship addres">Address *</label>
        <input type="text" name="address" id="address" class="" value="" required>
      </div>
      <div class="shin-info-flex row">
        <div class="ship-flex-wrap col-md-6">
          <label for="storecontact">Store Phone Number *</label>
          <input type="text" name="storephone" id="storephone" class="" value="" required>
        </div>
        <div class="ship-flex-wrap col-md-6">
          <label for="storecontact">Store Contact Email *</label>
          <input type="email" name="storeemail" id="country" class="" value="" required>
        </div>
      </div>
    </div>
    <div class="rma-form-actions">
      <button type="submit" class="rma-submit-btn">{{translate 'Submit'}}</button>
    </div>
  </form>
  {{else}}
    <p>{{translate 'You need to be logged in to request a return, <a href="#" data-touchpoint="login">click here</a> to log in.'}}</p>
  {{/if}}
{{/if}}
</section>
<div data-type="rma-form-msg" class="rma-container" id="submit-msg"></div>



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->
