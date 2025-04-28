// HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define("HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt", [
  "HitPoint.ReturnAuthorizationExt.ReturnAuthorizationExt.ServiceController",
  "ReturnAuthorization.Model",
  "Configuration",
  "underscore"
], function (
    ReturnAuthorizationExtServiceController,
    ReturnAuthorizationModel,
    Configuration,
    _
) {
  "use strict";

  ReturnAuthorizationModel.create = function (data) {
    var return_authorization = nlapiTransformRecord(
        data.type,
        data.id,
        "returnauthorization",
        {customform:Configuration.get("rma.RMAForm")}
    );
    //
    var transaction_lines = this.getTransactionLines(data.id);
    // this.setLines(return_authorization, data.lines, transaction_lines);
    var line_count = return_authorization.getLineItemCount('item');
    var add_line = true;
    var i = 1;
    while (i <= line_count) {
      var line_item_value = return_authorization.getLineItemValue('item', 'id', i);
      add_line = this.findLine(line_item_value, data.lines);
      if (add_line) {
        var transaction_line = _.findWhere(transaction_lines, {
          line: line_item_value
        });
        if (transaction_line) {
          return_authorization.setLineItemValue(
              'item',
              'rate',
              i,
              transaction_line.rate
          );
        }
        return_authorization.setLineItemValue('item', 'quantity', i, add_line.quantity);
        return_authorization.setLineItemValue('item', 'location', i, Configuration.get("rma.ReturnsLocation"));
        return_authorization.setLineItemValue('item', 'custcol_memo', i, add_line.memo);//memo
        return_authorization.setLineItemValue('item', 'custcol_reason_return', i, add_line.reason);
        return_authorization.setLineItemValue('item', 'custcol_hc_serial_number', i, add_line.serialnumber);
        i++;
      }else {
        return_authorization.removeLineItem('item', i);
        line_count--;
      }
    }

    return_authorization.setFieldValue("memo", data.memo);
    return_authorization.setFieldValue("custbody_store_contact_name",data.storecontact);
    return_authorization.setFieldValue("custbody_country",data.country);
    return_authorization.setFieldValue("custbody_state",data.state);
    return_authorization.setFieldValue("custbody_address",data.address);
    return_authorization.setFieldValue("custbody_address2",data.address2);
    return_authorization.setFieldValue("custbody_city",data.city);
    return_authorization.setFieldValue("custbody_zipcode",data.zipcode);
    return_authorization.setFieldValue("custbody_store_phone",data.storephone);
    return_authorization.setFieldValue("custbody_store_email",data.storeemail);
    return_authorization.setFieldValue('custbody_hc_order_type', Configuration.get("rma.OrderType"));
    return_authorization.setFieldValue('location',Configuration.get("rma.ReturnsLocation"));
    var RMAID = nlapiSubmitRecord(return_authorization);
    return RMAID;
  };

  ReturnAuthorizationModel.getExtraLineFields = function (result, record, i) {
    result.reason =
        this.result.recordtype === 'creditmemo' ? '' : record.getLineItemValue('item', 'custcol_reason_return', i);
  };
});
