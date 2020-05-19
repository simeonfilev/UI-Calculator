sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",

], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.acad.calculator.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				calculator: {
					expression: "",
					answer: "0",
				},
				
			};
			var oModel = new JSONModel(oData, true);

			var sURL = "http://localhost:8085/calculator/expressions";
			var oxhr = new XMLHttpRequest();
			oxhr.open("GET", sURL, true);
			oxhr.send();
			oxhr.onload = function () {
				if (oxhr.status == 200) {
					var oJSONData = JSON.parse(this.responseText);
					var oJSONExpressions = oJSONData["expressions"]	;
					var oJSONReversedResult = [];
					var length = oJSONExpressions.length;
					for (var i = length - 1; i >= 0; i--) {
						oJSONReversedResult.push(oJSONExpressions[i]);
					}
					
					oModel.setProperty("/tableHistory",oJSONReversedResult);
				}
			}
			oModel.updateBindings(true);
			oModel.refresh(true);
			this.setModel(oModel);

		},

	});
});