define("HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.ServiceController", [
  "ServiceController",
  "HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt",
  "ReturnAuthorization.Model",
], function (
  ServiceController,
  ReturnAuthorizationExt,
  ReturnAuthorizationModel
) {
  "use strict";

  return ServiceController.extend({
    name: "HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {
        requireLogin: true,
        requirePermissions: {
          list: [
            ReturnAuthorizationModel.isSCISIntegrationEnabled
              ? "transactions.tranPurchasesReturns.1"
              : "transactions.tranRtnAuth.1",
            "transactions.tranFind.1",
          ],
        },
      },
      post: {
        requirePermissions: {
          extraList: ["transactions.tranRtnAuth.2"],
        },
      },
      put: {
        requirePermissions: {
          extraList: ["transactions.tranRtnAuth.2"],
        },
      },
    },

    get: function () {
      var recordtype = this.request.getParameter("recordtype");
      var id = this.request.getParameter("internalid");

      return id && recordtype
        ? ReturnAuthorizationModel.get(recordtype, id)
        : ReturnAuthorizationModel.list({
            order: this.request.getParameter("order"),
            sort: this.request.getParameter("sort"),
            from: this.request.getParameter("from"),
            to: this.request.getParameter("to"),
            page: this.request.getParameter("page"),
          });
    },

    post: function () {
      var id = ReturnAuthorizationModel.create(this.data);
      var data = this.data;
      if (data.files) {
        for (var j = 0; j < data.files.length; j++) {
          var body = data.files[j];
          var fileName = body.fileName;
          var file = body.file;
          var fileExtension = body.filetype;
          // nlapiLogExecution("ERROR", "fileName", fileName);
          if (file && fileExtension) {
            // var FOLDERID = 224754;
            var FOLDERID = 225559;
            var fileUploaded = false;
            if (fileExtension == "pdf") {
              var newFile = nlapiCreateFile(fileName, "PDF", file);
              fileUploaded = true;
            } else if (fileExtension == "JPEG" || fileExtension == "jpeg") {
              var newFile = nlapiCreateFile(fileName, "JPGIMAGE", file);
              fileUploaded = true;
            } else if (fileExtension == "JPG" || fileExtension == "jpg") {
              var newFile = nlapiCreateFile(fileName, "JPGIMAGE", file);
              fileUploaded = true;
            }
            //
            if (fileUploaded) {
              newFile.setFolder(FOLDERID);
              var newFileId = nlapiSubmitFile(newFile);
              if (newFileId) {
                nlapiAttachRecord("file", newFileId, "returnauthorization", id);
              }
            }
          }
        }
      }

      this.sendContent(
        ReturnAuthorizationModel.get("returnauthorization", id),
        {
          status: 201,
        }
      );
    },

    put: function () {
      var id = this.request.getParameter("internalid");
      ReturnAuthorizationModel.update(
        id,
        this.data,
        this.request.getAllHeaders()
      );
      this.sendContent(ReturnAuthorizationModel.get("returnauthorization", id));
    },

    delete: function () {
      // not implemented
    },
  });
});
