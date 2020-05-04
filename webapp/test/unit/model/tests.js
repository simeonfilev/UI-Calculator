/*global QUnit*/

sap.ui.require([
		"sap/ui/acad/calculator/controller/CalculatorPanel.controller",
	],
	function (Controller) {

	});


sap.ui.define([
	"sap/ui/acad/calculator/test/unit/model/tests",
	"sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
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
		var oModel = this.stub();
		oModel.withArgs("i18n").returns(this._oResourceModel);
		var oViewStub = {
			getModel: oModel
		};
		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};
		assert.strictEqual(1, 1, "Correct");

	});

});