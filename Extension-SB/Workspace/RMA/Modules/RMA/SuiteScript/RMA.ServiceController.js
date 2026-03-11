define("HitPoint.RMA.RMA.ServiceController", ["ServiceController", "Configuration"], function (
  ServiceController,
  Configuration
) {
  "use strict";

  return ServiceController.extend({
    name: "HitPoint.RMA.RMA.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      });
    },

    uploadFile: function (data, id) {
      var FOLDERID = Configuration.get("rma.AttachmentsFolderID");
      var fileUploaded = false;
      for (var i = 0; i < data.length; i++) {
        var fileExtension = data[i].filetype;
        var fileName = data[i].fileName;
        var file = data[i].filedata;
        if (fileExtension == "pdf") {
          var newFile = nlapiCreateFile(fileName, "PDF", file);
          fileUploaded = true;
        }
        if (fileExtension == "JPEG" || fileExtension == "jpeg") {
          var newFile = nlapiCreateFile(fileName, "JPGIMAGE", file);
          fileUploaded = true;
        }
        if (fileExtension == "JPG" || fileExtension == "jpg") {
          var newFile = nlapiCreateFile(fileName, "JPGIMAGE", file);
          fileUploaded = true;
        }

        if (fileUploaded) {
          newFile.setFolder(FOLDERID);
          var newFileId = nlapiSubmitFile(newFile);
          if (newFileId) {
            nlapiAttachRecord("file", newFileId, "returnauthorization", id);
          }
        }
      }
    },
    post: function post() {
      try {

        var self = this;
        var lines = self.data.lines;
        var files = self.data.files;
        var newReturnAuthorization = nlapiCreateRecord('returnauthorization');
        newReturnAuthorization.setFieldValue('customform', Configuration.get("rma.RMAForm"))
        newReturnAuthorization.setFieldValue('entity', self.data.customerid); // Set your customer internal ID
        newReturnAuthorization.setFieldValue('custbody_store_contact_name	', self.data.storecontact);
        newReturnAuthorization.setFieldValue('custbody_store_phone', self.data.storephone);
        newReturnAuthorization.setFieldValue('custbody_store_email', self.data.storeemail);
        newReturnAuthorization.setFieldValue('custbody_country', self.data.country);
        newReturnAuthorization.setFieldValue('custbody_state', self.data.state);
        newReturnAuthorization.setFieldValue('custbody_address', self.data.address);
        newReturnAuthorization.setFieldValue('custbody_account_name', self.data.accountname);
        newReturnAuthorization.setFieldValue('custbody_hc_order_type', Configuration.get("rma.OrderType"));
        newReturnAuthorization.setFieldValue('location',Configuration.get("rma.ReturnsLocation"));
        newReturnAuthorization.setFieldValue('email', self.data.customeremail);
        for (var index = 0; index < lines.length; index++) {
          self.addItem(newReturnAuthorization, lines[index].sku, parseInt(lines[index].qnty), lines[index].description, lines[index].resoan, lines[index].serialnumber);
        }
        var returnAuthorizationId = nlapiSubmitRecord(newReturnAuthorization, true);
        if (files) {
          self.uploadFile(files, returnAuthorizationId);
        }
        return { recid: returnAuthorizationId, status: true };

      } catch (error) {
        return { recid: JSON.stringify(error), status: false };

      }
    }
    , addItem: function (returnAuthorization, itemId, quantity, description, returnD, serialnumber) {
      returnAuthorization.selectNewLineItem('item');
      returnAuthorization.setCurrentLineItemValue('item', 'item', itemId);
      returnAuthorization.setCurrentLineItemValue('item', 'quantity', quantity);
      returnAuthorization.setCurrentLineItemValue('item', 'taxcode', -7);
      returnAuthorization.setCurrentLineItemValue('item', 'location', Configuration.get("rma.ReturnsLocation"));
      returnAuthorization.setCurrentLineItemValue('item', 'description', description);
      returnAuthorization.setCurrentLineItemValue('item', 'custcol_reason_return', returnD);
      returnAuthorization.setCurrentLineItemValue('item', 'custcol_hc_serial_number', serialnumber);
      returnAuthorization.commitLineItem('item');
    },

    put: function put() {
      // not implemented
    },

    delete: function () {
      // not implemented
    }
  });
});
