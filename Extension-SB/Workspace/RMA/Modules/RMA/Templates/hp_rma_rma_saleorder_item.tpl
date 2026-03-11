{{!-- <section class="rma-container">
  <h1 class="rma-title">Return Application</h1>
  <form class="rma-form" id="rma-form">
    <div class="basic-info-row">
      <div class="basic-info-title">
        <h3 class="rma-basic-info">Basic Information</h3>
      </div>
      <div class="col-md-6 col-sm-6">
        <label for="accountname">Account Name *</label>
        <input type="text" data-action="clear-error" name="accountname" id="accountname" class="">
        <div data-type="accountname"></div>
      </div>
      <div class="col-md-6 col-sm-6">
        <label for="ramtype">RMA type *</label>
        <select class="rma-type-list" name="ramtype" id="ramtype" data-action="clear-error">
          <option> Select RMA Type</option>
        </select>
        <div data-type="ramtype"></div>
      </div>
    </div>

    {{!-- <div class="basic-info-title">
      <h3 class="rma-return-info">Return Product Information</h3>
    </div> --}}

<div class="return-prod-info">

  <div class="rma-retrun-instrunctions">
    <h3 class="rma-return-info">Return Product Information</h3>

    <h4 class="rma-return-instr-title">INSTRUCTIONS:</h4>
    <div class="p-text">
      <p>Please input the the product information by SKU</p>
      <p class="rma-p">When filling in the reason for return", please input the reasons by key in the letters
        matching the
        reasons,
        as the below instruction shows.</p>
      <p></p>
    </div>

    <ol class="rma-return-instr-ol">
      <li>
        <p>A - Connectivity issue</p>
      </li>
      <li>
        <p>B - Control function break</p>
      </li>
      <li>
        <p>C - Sound quality</p>
      </li>
      <li>
        <p>D - Charging/power issues</p>
      </li>
      <li>
        <p>E - Headband break</p>
      </li>
      <li>
        <p>F - Right side falling</p>
      </li>
      <li>
        <p>G - Left side failing</p>
      </li>
      <li>
        <p>H - Transducer rattling</p>
      </li>
      <li>
        <p>I - Headset turns off by itself</p>
      </li>
      <li>
        <p>J - Microphone quality</p>
      </li>
      <li>
        <p>K - Control functions</p>
      </li>
      <li>
        <p>L - Customer Changed mind</p>
      </li>
      <li>
        <p>M - Does not fit right-too big/too tight</p>
      </li>
    </ol>
    <div class="p-text">
      <p>You con key in more one letters, if there are more than one reasons for return.</p>
    </div>
  </div>
</div>

{{!-- return prod 1  --}}
<div class="rma-return-prod" data-prod="1">
  <h5 class="rma-return-info">Return Product 1</h5>
  <div class="rma-flex">
    <div class="rma-flex-wrap">
      <label for="SKU">SKU *</label>
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

    <div class="rma-flex-wrap">
      <label for="itemdescription">Item Description*</label>
      <input type="text" data-action="clear-error" name="itemdes_1" id="itemdes1" class="ram-input-fld" value="">
      <div data-type="itemdes_1"></div>
    </div>

    <div class="rma-flex-wrap">
      <label for="itemdescription">Quantity*</label>
      <input type="number" data-action="clear-error" name="qunty_1" id="qunty1" class="rma-type" value="">
      <div data-type="qunty_1"></div>
    </div>

  </div>
  <div class="rma-flex">
    <div class="rma-flex-wrap-1">
      <label for="SerialNumber">Serial Number</label>
      <input type="text" data-action="clear-error" name="serialnumber_1" id="SerialNumber1" class="">
      <div data-type="serialnumber_1"></div>
    </div>
    <div class="rma-flex-wrap-2">
      <label for="Reason for Return">Reason for Return*</label>
      <select name="reasonreturn_1" data-action="clear-error" id="reasonreturn" data-id=""
        class="rma-reson-return-select">
        <option value="">Select Reason</option>
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

{{!-- return prod 2  --}}
<div class="rma-return-prod" data-prod="2">
  <h5 class="rma-return-info">Return Product 2</h5>
  <div class="rma-flex">
    <div class="rma-flex-wrap">
      <label for="SKU">SKU *</label>
      <select type="text" data-action="clear-error" name="sku_2" data-id="product-1-sku" class="rma-type">
        <option value="">Select An Item</option>
        {{#each models}}
          <option value="{{this.internalid}}">
            {{this.displayname}}
          </option>
        {{/each}}
      </select>
      <div data-type="sku_2"></div>
    </div>

    <div class="rma-flex-wrap">
      <label for="itemdescription">Item Description*</label>
      <input type="text" data-action="clear-error" name="itemdes_2" id="itemdes1" class="ram-input-fld" value="">
      <div data-type="itemdes_2"></div>
    </div>

    <div class="rma-flex-wrap">
      <label for="itemdescription">Quantity*</label>
      <input type="number" data-action="clear-error" name="qunty_2" id="qunty1" class="rma-type" value="">
      <div data-type="qunty_2"></div>
    </div>

  </div>
  <div class="rma-flex">
    <div class="rma-flex-wrap-1">
      <label for="SerialNumber">Serial Number</label>
      <input type="text" data-action="clear-error" name="serialnumber_2" id="SerialNumber1" class="">
      <div data-type="serialnumber_2"></div>
    </div>
    <div class="rma-flex-wrap-2">
      <label for="Reason for Return">Reason for Return*</label>
      <select name="reasonreturn_2" data-action="clear-error" id="reasonreturn" data-id=""
        class="rma-reson-return-select">
        <option value="">Select Reason</option>
        {{#each resoan_for_return}}
          <option value="{{text}}">
            {{text}}
          </option>
        {{/each}}
      </select>
      <div data-type="reasonreturn_2"></div>
    </div>
  </div>
</div>
{{!-- end return prod 2  --}}
{{!-- return prod 3  --}}
<div class="rma-return-prod" data-prod="3">
  <h5 class="rma-return-info">Return Product 3</h5>
  <div class="rma-flex">
    <div class="rma-flex-wrap">
      <label for="SKU">SKU *</label>
      <select type="text" data-action="clear-error" name="sku_3" data-id="product-1-sku" class="rma-type">
        <option value="">Select An Item</option>
        {{#each models}}
          <option value="{{this.internalid}}">
            {{this.displayname}}
          </option>
        {{/each}}
      </select>
      <div data-type="sku_3"></div>
    </div>

    <div class="rma-flex-wrap">
      <label for="itemdescription">Item Description*</label>
      <input type="text" data-action="clear-error" name="itemdes_3" id="itemdes1" class="ram-input-fld" value="">
      <div data-type="itemdes_3"></div>
    </div>

    <div class="rma-flex-wrap">
      <label for="itemdescription">Quantity*</label>
      <input type="number" data-action="clear-error" name="qunty_3" id="qunty1" class="rma-type" value="">
      <div data-type="qunty_3"></div>
    </div>

  </div>
  <div class="rma-flex">
    <div class="rma-flex-wrap-1">
      <label for="SerialNumber">Serial Number</label>
      <input type="text" data-action="clear-error" name="serialnumber_3" id="SerialNumber1" class="">
      <div data-type="serialnumber_3"></div>
    </div>
    <div class="rma-flex-wrap-2">
      <label for="Reason for Return">Reason for Return*</label>
      <select name="reasonreturn_3" data-action="clear-error" id="reasonreturn" data-id=""
        class="rma-reson-return-select">
        <option value="">Select Reason</option>
        {{#each resoan_for_return}}
          <option value="{{text}}">
            {{text}}
          </option>
        {{/each}}
      </select>
      <div data-type="reasonreturn_3"></div>
    </div>
  </div>
</div>
{{!-- end return prod 3  --}}

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
        <input type="file" id="fileUploadVald" class="file-img" />
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
      <label for="storecontact">Store Contact Name</label>
      <input type="text" name="storecontact" id="storecontact" class="" value="">

    </div>
    <div class="ship-flex-wrap col-md-4">
      <label for="storecontact">Country</label>
      <input type="text" name="country" id="country" class="" value="">
    </div>
    <div class="ship-flex-wrap col-md-3">
      <label for="state">state</label>
      <input type="text" name="state" id="state" class="" value="">
    </div>
  </div>
  <div class="ship-info-addrs">
    <label for="ship addres">Address</label>
    <input type="text" name="address" id="address" class="" value="">
  </div>
  <div class="shin-info-flex row">
    <div class="ship-flex-wrap col-md-6">
      <label for="storecontact">Store Phone Number</label>
      <input type="text" name="storephone" id="storephone" class="" value="">
    </div>
    <div class="ship-flex-wrap col-md-6">
      <label for="storecontact">Store Contact Email</label>
      <input type="email" name="storeemail" id="country" class="" value="">
    </div>
  </div>
</div>
<div class="rma-form-actions">
  <button type="submit" class="rma-submit-btn">{{translate 'Submit'}}</button>
</div>
</form>
</section>
<div data-type="rma-form-msg" class="rma-container" id="submit-msg"></div>



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension

  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder

  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme

  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
--> --}}
