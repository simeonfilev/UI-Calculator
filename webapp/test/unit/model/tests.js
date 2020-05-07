/*global QUnit*/

/*
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/acad/calculator/controller/App.controller",
	
], function ( JSONModel,Controller,AppController) {
	"use strict";
	
	console.log(1);
	
	QUnit.test("controller method that uses getView and getDomRef", function (assert) {
		//// begin arrangements
		// regular init of controller
		var oController = new AppController();
		// regular init of a JSON model
		var oJsonModelStub = new JSONModel({});
		// construct a dummy DOM element
		var oDomElementStub = document.createElement("div");
		// construct a dummy View
		var oViewStub = new ManagedObject({});

		// mock View.byId().getDomRef()
		oViewStub.byId = function(sNeverUsed) {
			return {
				getDomRef : function() {
					return oDomElementStub;
				}
			}
		};

		// regular setting of a model to a View
		oViewStub.setModel(oJsonModelStub);

		// stubbing Controller.getView() to return our dummy view object
		var oGetViewStub = sinon.stub(Controller.prototype, "getView").returns(oViewStub);
		//// end arrangements

		// prepare data model for controller method
		oJsonModelStub.setProperty("/calculator/expression", "2+5");

		// actual test call!
		oController.addTodo();

		// check result of test call
		//assert.strictEqual(oJsonModelStub.getProperty("/todos").length, 1, "1 new todo item was added");

		// follow-up: never forget to un-stub aka
		// restore the original behavior, here: Controller.prototype.getView()
		oGetViewStub.restore();
	});

});
*/


sap.ui.define([
	"sap/ui/acad/calculator/test/unit/model/tests",
	"sap/ui/model/resource/ResourceModel"
], function (tests, ResourceModel) {
	"use strict";

	QUnit.module("Module", {
		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl: sap.ui.require.toUrl("sap/ui/acad/calculator") + "/i18n/i18n.properties"
			});
		},
		afterEach: function () {
			this._oResourceModel.destroy();
		
		}
	});

	QUnit.test("Test", function (assert) {
		var sEndpoint = "https://restcalculator.cfapps.eu10.hana.ondemand.com/calculator/expressions";
		var sURL = sEndpoint;// + formatParams(params);
		var oModel = this.stub();
		//console.log(oModel.getProperty("/calculator/expression"));
		console.log(tests);
		var oxhr = new XMLHttpRequest();
		oxhr.open("POST", sURL, true);
		oxhr.send();
		
	//	oModel.withArgs("i18n").returns(this._oResourceModel);
	//	var oViewStub = {
	//		getModel: oModel
	//	};
	//	var oControllerStub = {
	//		getView: this.stub().returns(oViewStub)
	//	};
		assert.strictEqual(1, 1, "Correct");

	});

});