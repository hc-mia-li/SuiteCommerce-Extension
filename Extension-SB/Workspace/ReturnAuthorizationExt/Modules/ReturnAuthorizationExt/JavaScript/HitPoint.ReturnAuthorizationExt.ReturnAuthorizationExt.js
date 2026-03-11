define("HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt", [
  "HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.View",
  "ReturnAuthorization.Form.View",
  "Configuration",
  "AjaxRequestsKiller",
  "OrderHistory.Model",
  "HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.Model",
  "ReturnAuthorization.Model",
  "Utils",
  "underscore",
  "Backbone.View",
  "Tracker",
  'GlobalViews.Message.View',
  "GlobalViews.States.View"
], function (
    ReturnAuthorizationExtView,
    ReturnAuthorizationFormView,
    Configuration,
    AjaxRequestsKiller,
    OrderHistoryModel,
    ReturnAuthorizationExtModel,
    ReturnAuthorizationModel,
    Utils,
    _,
    BackboneView,
    Tracker,
    GlobalViewsMessageView,
    StatesView
) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");

      console.log("ReturnAuthorizationModel", ReturnAuthorizationModel);

      _.extend(ReturnAuthorizationModel.prototype, {
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath("services/ReturnAuthorizationExt.Service.ss")
        )
      });

      console.log("returnauthorization", ReturnAuthorizationFormView);
      //
      _.extend(
          ReturnAuthorizationFormView.ReturnAuthorizationFormView.prototype,
          {
            beforeShowContent: function beforeShowContent() {
              var self = this;
              self.UploadfilesArray = [];
              self.model.set("multifilearray", { file: [], size: 0 });
              return this.createdFromModel.fetch({
                killerId: AjaxRequestsKiller.getKillerId(),
                data: {recordtype: this.options.routerArguments[0]},
              });
            },
            events: {
              "change .return-authorization-form-type": "changeSKU",
              "change .return-authorization-form-input-fld": "changeMemo",
              "change .return-authorization-form-quantity": "changeQuantityHandler",
              "change .return-authorization-form-serial": "changeSerialNumber",
              "change .return-authorization-form-reason": "changeReasonHandler",
              "click .return-authorization-form-add": "addProduct",
              'click .return-authorization-form-remove-icon': "removeProduct",
              "submit form": "saveForm",
              "change .file-img": "uploadFile",
              "change [data-action='clear-error']": "clearError",
              'change [data-action="selectcountry"]': "changeCountry"
            },

            changeSKU(e) {
              var self = this;
              e.preventDefault();
              var inputvalue = e.target.value; //itemid
              // $(e.target).data("id")   product-1-sku
              console.log("this.getLines", this.getLines().models);
              _.each(this.getLines().models, function (line) {
                if (line.get("domid") == $(e.target).data("id")) {
                  line.set("itemid",inputvalue)
                  self.toggleLine(line.get("internalid"), false);
                  $(e.target).parents('.return-authorization-form-flex').find('.return-authorization-form-quantity').val('')
                  $(e.target).parents('.return-authorization-form-prod').attr('data-line-id','')
                }
                if (inputvalue == line.get("item").get("itemid")) {
                  if(line.get("domid")){
                    alert('The current SKU has been selected, please select another SKU');
                    e.target.value = '';
                    return;
                  }
                  line.set("domid", $(e.target).data("id"));
                  self.toggleLine(line.get("internalid"), true);
                  line.set("returnQty", line.get('quantity'))
                  line.set("itemid",inputvalue)
                  $(e.target).parents('.return-authorization-form-flex').find('.return-authorization-form-quantity').val(line.get('quantity'));
                  $(e.target).parents('.return-authorization-form-flex').find('.return-authorization-form-quantity').attr('max',line.get('quantity'));
                  $(e.target).parents('.return-authorization-form-prod').attr('data-line-id',line.get("internalid"));
                }
              });
              if(this.countries[this.selectedCountry] && this.countries[this.selectedCountry].states){
                $(".global-views-states-group-select").attr('required',true);
              }
              // this.render();
            },

            changeMemo:function(e){
              var line_id = $(e.target).parents('.return-authorization-form-prod').data('line-id')
              return this.setLine(line_id,"memo",e.target.value)
            },

            changeQuantityHandler(e) {
              var self = this;
              var line_id = $(e.target).parents('.return-authorization-form-prod').data('line-id')
              return this.setLine(line_id,"returnQty",Math.min(e.target.value, self.getLine(line_id).get("quantity")))
            },

            changeReasonHandler(e) {
              var self = this;
              var line_id = $(e.target).parents('.return-authorization-form-prod').data('line-id');
              var selected_reason = $(e.target).val();
              var reasonArr = [];
              _.each(selected_reason,function(reasonId){
                var reason = _.findWhere(self.reasons, {
                  id: +reasonId
                });
                reasonArr.push(reason)
              })
              return this.setLine(line_id, "reason", reasonArr);
            },

            changeSerialNumber:function(e){
              var line_id = $(e.target).parents('.return-authorization-form-prod').data('line-id')
              return this.setLine(line_id,"serialnumber",e.target.value)
            },

            uploadFile: function (e) {
              var input = e.target.value;
              var files = e.target.files;
              var self = this;
              if (self.UploadfilesArray.length > 0) {
                self.UploadfilesArray = [];
              }
              this.validateFile();
              if (input != null && input != "" && input != undefined) {
                var tsize = 0;
                Object.keys(files).forEach((file) => {
                  console.log("🚀 ~ file:", file, files)
                  var reader = new FileReader();
                  var $target = e.target;
                  var currentFile = files[file];
                  reader.readAsDataURL(files[file]);
                  reader.onload = function (ev) {
                    console.log("🚀 ~ ev:", ev, currentFile)
                    var fileType = currentFile.type;
                    var fileName = currentFile.name;
                    tsize = tsize + currentFile.size;
                    var fileName = "PO FILE " + Date.now() + " " + fileName;
                    var file = ev.target.result.split(",")[1];
                    var url = reader.result.split(`data:${fileType};base64,`).join("");;
                    var fileExtension = fileName.replace(/^.*\./, "");
                    self.UploadfilesArray.push({
                      filetype: fileExtension,
                      fileName: fileName,
                      file: file,
                      filedata: url,
                    });
                    console.log("🚀 ~ UploadfilesArray:", self.UploadfilesArray)
                  };
                })

                self.model.set("multifilearray", { file: self.UploadfilesArray, size: tsize });
              }
            },

            validateFile: function () {
              const fileInput = document.getElementById('fileUploadVald');
              let validationMessage = document.getElementById('validationMessage');
              validationMessage.textContent = '';
              const allowedExtensions = ['jpg', 'jpeg', 'pdf'];
              const fileName = fileInput.value.toLowerCase();
              const fileExtension = fileName.split('.').pop();
              if (allowedExtensions.includes(fileExtension) === false) {
                validationMessage.textContent = 'Invalid file type. Please select a JPEG, JPG, or PDF file.';
                // Clear the file input
                fileInput.value = '';
              }
            },

            addProduct: function (e) {
              var prod_no = $(e.currentTarget).prev().data('prod') + 1;

              let sku_list = ` <select data-action="clear-error" name="sku_${prod_no}" data-id="product-${prod_no}-sku" class="return-authorization-form-type"><option value="">Select An Item</option>`
              _.each(this.selectLines, function (itms) {
                let opt = `<option value="${itms.itemid}">${itms.displayname}</option>`;
                sku_list = sku_list + opt;
              });

              sku_list = sku_list + `</select><div data-type="sku_${prod_no}"></div>`;

              let htm = `<div class="return-authorization-form-prod" data-prod="${prod_no}" data-line-id="">
                        <div style="display: flex; justify-content: space-between;">
                             <h5 class="return-authorization-form-info">Return Product ${prod_no}</h5>
                             <div style="display: flex;"><i class="return-authorization-form-remove-icon" data-prod="${prod_no}" ></i></div>
                        </div>
                        <div class="return-authorization-form-flex">
                             <div class="return-authorization-form-flex-wrap col-md-4">
                                    <label for="SKU">Item Description *</label>
                                    <div data-validation="control">${sku_list}</div>
                             </div>
                             <div class="return-authorization-form-flex-wrap col-md-5">
                                    <label for="itemdes1">Memo *</label>
                                    <input type="text" data-action="clear-error" name="itemdes_${prod_no}" class="return-authorization-form-input-fld" value="">
                                    <div data-type="itemdes_${prod_no}"></div>
                             </div>
                             <div class="return-authorization-form-flex-wrap col-md-3" data-validation="control-group">
                                    <label for="qunty1">Quantity *</label>
                                    <input type="number" data-action="clear-error" name="qunty_${prod_no}" class="return-authorization-form-quantity" value="" min="1" step="1">
                                    <div data-type="qunty_${prod_no}"></div>
                             </div>
                        </div>
                        <div class="return-authorization-form-flex">
         <div class="return-authorization-form-flex-wrap-1 col-md-6" data-validation="control-group">
                <label for="SerialNumber">Serial Number</label>
                <input type="text" data-action="clear-error" name="serialnumber_${prod_no}" class="return-authorization-form-serial">
                <div data-type="serialnumber_${prod_no}"></div>
         </div>
         <div class="return-authorization-form-flex-wrap-2 col-md-6" data-validation="control-group">
                <label for="Reason for Return">Reason for Return *</label>
                <select name="reasonreturn_${prod_no}" data-action="clear-error" data-id="" class="return-authorization-form-reason" multiple>`
              _.each(this.reasons, function (itms) {
                const opt = `<option value="${itms.id}">${itms.text}</option>`;
                htm = htm + opt;
              });

              htm = htm + ` </select><div data-type="reasonreturn_${prod_no}"></div></div></div></div>`
              $('.return-authorization-form-add').before(htm);
            },

            removeProduct: function (e) {
              var prod_no = $(e.currentTarget).data('prod');
              var line = $('.return-authorization-form-prod[data-prod=' + prod_no + ']');
              if (line.length > 0) {
                line.remove();
              }
            },

            toggleLine(id, flag) {
              const line = this.getLine(id);
              line.set("checked", flag);
              if (!line.get("checked")) {
                line.set({
                  reason: null,
                  returnQty: null,
                  textReason: null,
                  domid: null
                });
              }
              // return this.render();
            },

            getActiveLinesData: function() {
              return _.map(this.getActiveLines(), function(line) {
                var reasonText = '';
                if (line.get("reason")) {
                  _.each(line.get("reason"), (vl) => { reasonText = reasonText + `${vl.text}\n`; });
                }
                return {
                  id: line.get("internalid"),
                  itemid: line.get('itemid'),
                  quantity: line.get("returnQty"),
                  reason: reasonText,
                  memo: line.get("memo"),
                  serialnumber: line.get("serialnumber")
                };
              });
            },

            saveForm: function(event) {
              var orderModel = this.createdFromModel;
              var data = {
                id: orderModel.get("internalid"),
                type: orderModel.get("recordtype"),
                lines: this.getActiveLinesData(),
                storecontact: $('[name="storecontact"]').val(),
                // country: $('[name="country"]').val(),
                country:$('[name="country"] option:selected').text().trim(),
                state: $('[name="state"] option:selected').text().trim()||$('[name="state"]').val(),
                address: $('[name="address"]').val(),
                address2: $('[name="address2"]').val(),
                storephone: $('[name="storephone"]').val(),
                storeemail: $('[name="storeemail"]').val(),
                city: $('[name="city"]').val(),
                zipcode: $('[name="zipcode"]').val(),
                files: this.model.get('multifilearray').file,
                memo:orderModel.get('memo')
              };
              event.preventDefault();
              if (this.isValid(data)) {
                return BackboneView.prototype.saveForm.call(this, event, this.model, data).done(function(returnData) {
                  Tracker.getInstance().trackRefund({
                    requestReturn: returnData
                  });
                })
              }
            },

            erorrMsg: function (id, msg) {
              const placeholder = $(`[data-type="${id}"]`);
              const global_view_message = new GlobalViewsMessageView({
                message: msg,
                type: 'error',
                closable: true
              });
              placeholder.html(global_view_message.render().$el.html());
            },

            clearError: function (e) {
              $(`[data-type=${$(e.currentTarget).attr('name')}]`).empty();
            },

            isValid: function(data) {
              var self = this;
              var lines = data.lines;
              let isSubmit = true;
              const fileInput = document.getElementById('fileUploadVald');
              let validationMessage = document.getElementById('validationMessage');
              validationMessage.textContent = '';
              var maxSize = 15 * 1024 * 1024;

              let totalSize = this.model.get('multifilearray').size;

              if (totalSize > maxSize) {
                validationMessage.textContent = 'Total file size exceeds 15MB limit.';
                fileInput.value = "";
                return;
              }

              if (lines.length) {
                _.each(lines, function(line,i) {
                  if (!line.itemid) {
                    self.erorrMsg(`sku_${i + 1}`, "Item Description is required");
                    isSubmit = false;
                  }
                  if (!line.memo) {
                    self.erorrMsg(`itemdes_${i + 1}`, "Memo is required");
                    isSubmit = false;
                  }
                  if (!line.quantity) {
                    self.erorrMsg(`qunty_${i + 1}`, "Quantity is required");
                    isSubmit = false;
                  }
                  if (!line.reason) {
                    self.erorrMsg(`reasonreturn_${i + 1}`, "Reason for Return is required");
                    isSubmit = false;
                  }
                });
              }else{
                self.erorrMsg(`sku_1`, "Item Description is required");
                isSubmit = false;
              }
              return isSubmit;
            },

            eraseZip: function () {
              var country, siteSettings, zipInput;
              if (this.getChildViewInstance("StatesView").options.selectedState !== undefined) {
                country = this.$('#country').val();
                siteSettings = Configuration.get("siteSettings.countries", {});
                zipInput = this.$('#zipcode');
                this.$('#zipcode', zipInput).val("");
                if(siteSettings[country] && siteSettings[country].states){
                  $(".global-views-states-group-select").attr('required',true);
                }
                if (siteSettings[country] && siteSettings[country].isziprequired === "F") {
                  zipInput.hide();
                } else {
                  zipInput.show();
                }
              }
            },

            changeCountry: function (event) {
              var statesView = this.getChildViewInstance("StatesView");
              statesView.options.selectedCountry = this.$(event.currentTarget).val();
              statesView.render();
              this.eraseZip(event);
            },

            childViews: {
              StatesView: function () {
                return new StatesView({
                  countries: this.countries,
                  selectedCountry: this.selectedCountry,
                  selectedState: '',
                  manage: ''
                });
              }
            },

            getContext() {
              var self = this;
              console.log('this',this.getLines())
              const active_lines = this.getActiveLines();
              const items_to_return_length = this.getTotalItemsToReturn();
              const invalid_lines = this.createdFromModel.get("invalidLines");
              // // @class ReturnAuthorization.Form.Context
              this.selectLines = [];
              _.each(this.getLines().models, function (line) {
                var obj = {
                  itemid: line.get("item").get("itemid"),
                  displayname: line.get("item").get("displayname"),
                };
                self.selectLines.push(obj);
              });
              this.countries = Configuration.get("siteSettings.countries", []);
              this.selectedCountry = Configuration.get("siteSettings.defaultshipcountry");
              if (!this.selectedCountry && Object.keys(this.countries).length === 1) {
                this.selectedCountry = Object.keys(this.countries)[0];
              }
              var selectedCountry = this.selectedCountry;
              var country = selectedCountry && this.countries[selectedCountry];
              var states = country && country.states;

              // @class ReturnAuthorization.Form.View.Context
              return {
                // @property {OrderHistory.Model} model
                model: this.createdFromModel,
                reasons: this.reasons,
                selectLines: this.selectLines,
                lines: this.getLines(),
                isreturnableLines: this.getLines().length > 0,
                // @property {String} pageHeader
                pageHeader: this.page_header,
                // @property {String} createdFromURL
                createdFromURL: this.getLinkedRecordUrl(),
                // @property {Boolean} activeLinesLengthGreaterThan1
                activeLinesLengthGreaterThan1: active_lines.length > 1,
                // @property {Number} activeLinesLength
                activeLinesLength: active_lines.length,
                // @property {Boolean} hasAtLeastOneActiveLine
                hasAtLeastOneActiveLine: !!active_lines.length,
                // @property {Booelan} itemsToReturnLengthGreaterThan1
                itemsToReturnLengthGreaterThan1: items_to_return_length > 1,
                // @property {Number} itemsToReturnLength
                itemsToReturnLength: items_to_return_length,
                // @property {Booelan} showInvalidLines
                showInvalidLines: !!invalid_lines.length,
                // @property {Number} invalidLinesLength
                invalidLinesLength: invalid_lines.length,
                // @property {String} comments
                comments: this.comments || "",
                // @property {Boolean} showBackToAccount
                showBackToAccount:
                    Configuration.get("siteSettings.sitetype") === "STANDARD",
                countries: _.values(this.countries),
                selectedCountry:this.selectedCountry,
                isCountryAndStatePresent: !!(selectedCountry && states),
                states: states
              };
            },
          }
      );
    },
  };
});
