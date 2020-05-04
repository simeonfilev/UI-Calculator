/*global QUnit, opaTest*/

sap.ui.define([
	"sap/ui/acad/calculator/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) {
	"use strict";

	QUnit.module("Input Validation");

	opaTest("Should insert value on button press in input field", function (Given, When, Then) {
		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.acad.calculator"
			}
		});

		When.onTheAppPage.iPressTheOneIdButton();
		Then.onTheAppPage.iShouldSeeNewValInInputField();
		Then.iTeardownMyApp();
	});
});