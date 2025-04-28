// @module HitPoint.RMA.RMA
define('HitPoint.RMA.RMA.View'
	, [
		'hp_rma_rma.tpl'
		, 'HitPoint.RMA.RMA.Model'
		, 'Backbone'
		, 'Utils'
		, 'Configuration'
		, 'Item.Collection'
		, 'underscore'
		, 'Backbone.FormView'
		, 'GlobalViews.Message.View'
		, 'Profile.Model'
	]
	, function (
		hp_rma_rma_tpl
		, RMAModel
		, Backbone
		, Utils
		, Configuration
		, ItemCollection
		, _
		, BackboneFormView
		, GlobalViewsMessageView
		, ProfileModel
	) {
		'use strict';
		// @class HitPoint.RMA.RMA.View @extends Backbone.View
		return Backbone.View.extend({
			template: hp_rma_rma_tpl
			, title: Utils.translate('Return Products'),

			page_header: Utils.translate('Return Products'),

			initialize: function (options) {
				this.model = new RMAModel();
				this.UploadfilesArray = [];
				this.totalSize = 0;
				this.model.set("multifilearray", { file: [], size: 0 });
			}
			, events: {
				'click .rma-new-plus-icon': "addProduct",
				'click .rma-new-remove-icon': "removeProduct",
				'submit form': 'saveForm',
				"change .file-img": "uploadFile",
				"change #fileUploadVald": "validateFile",
				"change [data-action='clear-error']": "clearError"

			}
			, clearError: function (e) {
				$(`[data-type=${$(e.currentTarget).attr('name')}]`).empty();
			}
			, removeProduct: function (e) {
				var prod_no = $(e.currentTarget).data('prod');
				var line = $('.rma-return-prod[data-prod='+prod_no+']');
				if (line.length > 0) {
					line.remove();
				}
			}
			, addProduct: function (e) {
				var prod_no = $(e.currentTarget).parent().prev().data('prod') + 1;
				let sku_list = ' <select type="text" data-action="clear-error" name="sku_' + prod_no + '"data-id="product-1-sku" class="rma-type">'
					+ '<option value="">Select An Item</option>';
				_.each(this.rma_items.models, function (itms) {
					let opt = `<option value="${itms.get('internalid')}">${itms.get('displayname')}</option>`;
					sku_list = sku_list + opt;
				});
				sku_list = sku_list + '</select>' + '<div data-type="sku_' + prod_no + '"></div>';
				let htm = '<div class="rma-return-prod" data-prod=' + prod_no + '>'
					+ '<div style="display: flex; justify-content: space-between;"><h5 class="rma-return-info">Return Product ' + prod_no + '</h5>'
					+ '<div style="display: flex;"><i class="rma-new-remove-icon" data-prod='+ prod_no +' ></i></div></div>'
					+ '<div class="rma-flex">'
					+ ' <div class="rma-flex-wrap col-md-4">'
					+ '<label for="SKU">Item Description *</label>'
					+ '<div data-validation="control">'
					+ sku_list
					+ '</div> </div>'
					+ '<div class="rma-flex-wrap col-md-5">'
					+ '<label for="itemdescription">Memo *</label>'
					+ '<input type="text" data-action="clear-error" name="itemdes_' + prod_no + '"class="ram-input-fld" value="">'
					+ '<div data-type="itemdes_' + prod_no + '"></div>'
					+ '</div>'
					+ '<div class="rma-flex-wrap col-md-3" data-validation="control-group">'
					+ '<label for="itemdescription">Quantity *</label>'
					+ '<div data-validation="control">'
					+ '<input type="number" data-action="clear-error" name="qunty_' + prod_no + '"class="rma-type" value="" min="1" step="1">'
					+ '<div data-type="qunty_' + prod_no + '"></div>'
					+ '</div>'
					+ '</div>'
					+ '</div>'
					+ '<div class="rma-flex">'
					+ '<div class="rma-flex-wrap-1 col-md-6" data-validation="control-group">'
					+ '<label for="SerialNumber">Serial Number</label>'
					+ '<div data-validation="control">'
					+ '<input type="text"  name="serialnumber_' + prod_no + '"class="">'
					+ '<div data-type="serialnumber_' + prod_no + '"></div>'
					+ '</div>'
					+ '</div>'
					+ '<div class="rma-flex-wrap-2 col-md-6" data-validation="control-group">'
					+ '<label for="Reason for Return">Reason for Return *</label>'
					+ '<div data-validation="control">'
					+ ' <select type="text" data-action="clear-error" name="reasonreturn_' + prod_no + '" id="reasonreturn" class="rma-reson-return-select" multiple>';
				_.each(Configuration.get('returnAuthorization.reasons'), function (itms) {
					const opt = `<option value="${itms.text}">${itms.text}</option>`;
					htm = htm + opt;
				});
				htm = htm + '</select>  <div data-type="reasonreturn_' + prod_no + '"></div></div>'
					+ ' </div>'
					+ '</div>'
					+ ' </div>';
				$('.rma-add-retrun-sec').before(htm);
			}
			, beforeShowContent: function () {
				let self = this;
				let promise = jQuery.Deferred();
				jQuery.get('/api/items?fieldset=search', function (res) {
					let itm = res.items.map(inf => {
						if (inf.onlinecustomerprice_detail.onlinecustomerprice != "") {
							return inf;
						}
					});
					itm = itm.filter(a=>a).map(a => {
						let brand = a.displayname.split(" ");
						brand.pop();
						brand = brand.join(" ");
						return {...a, brand }
					}).sort((a,b) => {
						let order = ['OpenFit', 'OpenRun Standard', 'OpenRun MINI', 'OpenRun Pro Standard', 'OpenRun Pro MINI', 'OpenMove','OpenSwim'];
						return order.indexOf(a.brand) - order.indexOf(b.brand);
					})
					self.rma_items = (res && res.total > 0) ? new ItemCollection(_.compact(itm)) : [];
					promise.resolve();
				});
				return promise;
			}
			, validateFile: function () {
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

			}
			, erorrMsg: function (id, msg) {
				const placeholder = $(`[data-type="${id}"]`);
				const global_view_message = new GlobalViewsMessageView({
					message: msg,
					type: 'error',
					closable: true
				});
				placeholder.html(global_view_message.render().$el.html());
			}
			, success: function (id, msg) {
				const placeholder = $(`[data-type="${id}"]`);
				const global_view_message = new GlobalViewsMessageView({
					message: msg,
					type: 'success',
					closable: true
				});
				placeholder.html(global_view_message.render().$el.html());
			}
			, saveForm: function (e) {
				e.preventDefault();
				let isSubmit = false;
				const fileInput = document.getElementById('fileUploadVald');
				let validationMessage = document.getElementById('validationMessage');
				validationMessage.textContent = '';
				let form_data = $('#rma-form').serializeArray();
				let line_length = $('.rma-return-prod').length;
				let data = {};
				let obj = {};
				let lines = [];
				data.lines = lines;
				data.storecontact = $('[name="storecontact"]').val();
				data.country = $('[name="country"]').val();
				data.state = $('[name="state"]').val();
				data.address = $('[name="address"]').val();
				data.storephone = $('[name="storephone"]').val();
				data.storeemail = $('[name="storeemail"]').val();
				data.customerid = ProfileModel.getInstance().id;
				data.customeremail = ProfileModel.getInstance().get('email');

				data.files = this.model.get('multifilearray').file;
				var maxSize = 15 * 1024 * 1024;

				let totalSize = this.model.get('multifilearray').size;
				let isLoggedIn = ProfileModel.getInstance().get('isLoggedIn') === 'T' ? true : false;

				if (totalSize > maxSize) {
					validationMessage.textContent = 'Total file size exceeds 15MB limit.';
					fileInput.value = "";
					return;
				}

				if (!isLoggedIn) {
					return this.erorrMsg('rma-form-msg', 'Login is required');
				}
				if ($('[name="accountname"]').val() === "") {
					this.erorrMsg(`accountname`, "Account Name is required");
					return;
				} else {
					data.accountname = $('[name="accountname"]').val();
					isSubmit = true;
				}
				let concatResoan = "";
				for (i = 1; i <= line_length; i++) {
					let serialnumber = $(`[name="serialnumber_${i}"]`).val();
					let sku = $(`[name="sku_${i}"]`).val();
					let qnty = $(`[name="qunty_${i}"]`).val();
					let description = $(`[name="itemdes_${i}"]`).val();
					let resoan = $(`[name="reasonreturn_${i}"]`).val();
					let resoanLen = $(`[name="reasonreturn_${i}"]`).val().length;
					if (sku != "" && qnty != "" && description != "" && resoan != "") {
						if (resoanLen > 1) {
							_.each(resoan, (vl) => { concatResoan = concatResoan + `${vl}\n`; });
						} else {
							concatResoan = resoan[0];
						}
						lines.push({ sku: sku, qnty: qnty, description: description, resoan: concatResoan, serialnumber: serialnumber });

						isSubmit = true;
					}

					if (sku === "") {
						this.erorrMsg(`sku_${i}`, "SKU is required");
						isSubmit = false;

					}
					if (qnty === "") {
						this.erorrMsg(`qunty_${i}`, 'Quantity is required');
						isSubmit = false;

					}
					if (description === "") {
						this.erorrMsg(`itemdes_${i}`, "Item Description is required");
						isSubmit = false;

					}
					if (resoan === "") {
						this.erorrMsg(`reasonreturn_${i}`, 'Reason for Return is required');
						isSubmit = false;

					}

					if (!isSubmit) {
						return;
					}
				}
				if (isSubmit && isLoggedIn) {
					this.model.save(data).done(res => {
						if (res.recid && res.status) {
							$("#rma-form").get(0).reset();
							this.success('rma-form-msg', `Your request was successfully submitted #${res.recid}.`);
						} else {
							this.erorrMsg('rma-form-msg', res.recid);
						}
					});
				}
			}
			, uploadFile: function (e) {

				var input = e.target.value;
				var files = e.target.files;
				var self = this;
				if (self.UploadfilesArray.length > 0) {
					self.UploadfilesArray = [];
				}

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
			}
			//@method getContext @return HitPoint.RMA.RMA.View.Context
			, getContext: function getContext() {
				//@class HitPoint.RMA.RMA.View.Context
				let resoan_for_return = Configuration.get('returnAuthorization.reasons');
				let inactive = Configuration.get('rma.Inactive');
				let isLoggedIn = ProfileModel.getInstance().isLoggedIn();
				let accountName = ProfileModel.getInstance().get("companyname");
				return {
					resoan_for_return: resoan_for_return,
					models: this.rma_items.models,
					isLoggedIn: isLoggedIn,
					accountName: accountName,
					inactive:inactive
				};
			}
		});
			console.log("🚀 ~ e:", e)
	});
