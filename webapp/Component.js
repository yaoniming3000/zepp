sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"epp/epp/model/models",
	"epp/epp/controller/EmailDialog"
], function (UIComponent, Device, JSONModel, models, EmailDialog) {
	"use strict";

	return UIComponent.extend("epp.epp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			//Init Json model
			var oJsonModel = new JSONModel();
			oJsonModel.setData({
				user: "",
				emailBody: "123",
				HTML: "<em><strong>Important Notes:</strong></em><ol><li style=\"font-size: 14px;" + 
					  "font-style: italic; font-weight: bold; list-style-position: outside;\"><strong style=\"font-size: 14px;\">" +
					  "Not all stores show a price for tyres:</strong><br><span style=\"font-weight: normal; font-size: 14px;\">" +
					  "You must select a store that shows tyre prices for the <strong style=\"font-size: 14px;\">Family &amp; Friends discount</strong> to work. " +
					  "If you select a store and cannot see a tyre price, then please select another store.</span></li><br>" +
					  "<li style=\"font-size: 14px; font-style: italic; font-weight: bold; list-style-position: outside;\">" +
					  "<strong style=\"font-size: 14px;\">“Low Stock” items cannot be booked:</strong><br><span style=\"font-weight: normal; font-size: 14px;\">" +
					  "Where a <strong style=\"font-size: 14px;\">“Low Stock”</strong> item is seen - you will not be able to proceed. " +
					  "Stock must be available in the Warehouse of the store selected to be able to transact. If you see a tyre with \"Low Stock\", do not select it" +
					  "- please select another tyre.</span></li></ol>"
			});

			this.setModel(oJsonModel, "Header");

			// var mParameters = {
			// 	method: "GET",
			// 	success: function (oReturn, oRequest) {
			// 		oJsonModel.setProperty("/user", oReturn.results[0].UserNameT);
			// 	},
			// 	error: function () {}
			// };
			// var oModel = this.getModel();
			// oModel.callFunction("/GetHeader", mParameters);

			// set dialog
			this.emailDialog = new EmailDialog();
			this.emailDialog._component = this;
		}
	});
});