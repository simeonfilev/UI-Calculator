/*global QUnit, opaTest*/

sap.ui.define([
	"sap/ui/acad/calculator/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) {
	"use strict";

	QUnit.module("Input Validation");

	opaTest("All Elements are displaying correctly", function (Given,When, Then) {
		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.acad.calculator"
			}
		});

		//When.onTheAppPage.iPressTheOneIdButton();
		Then.onTheAppPage.iShouldFindTheOneIdButton();
		Then.onTheAppPage.iShouldFindTheTwoIdButton();
		Then.onTheAppPage.iShouldFindTheThreeIdButton();
		Then.onTheAppPage.iShouldFindTheFourIdButton();
		Then.onTheAppPage.iShouldFindTheFiveIdButton();
		Then.onTheAppPage.iShouldFindTheSixIdButton();
		Then.onTheAppPage.iShouldFindTheSevenIdButton();
		Then.onTheAppPage.iShouldFindTheEightIdButton();
		Then.onTheAppPage.iShouldFindTheNineIdButton();
		Then.onTheAppPage.iShouldFindTheZeroIdButton();
		Then.onTheAppPage.iShouldFindTheLeftParenthesisIdButton();
		Then.onTheAppPage.iShouldFindTheMultiplyIdButton();
		Then.onTheAppPage.iShouldFindTheSumIdButton();
		Then.onTheAppPage.iShouldFindTheSubtractIdButton();
		Then.onTheAppPage.iShouldFindTheRightParenthesisIdButton();
		Then.onTheAppPage.iShouldFindTheDivideIdButton();
		Then.onTheAppPage.iShouldFindCalculateButton();
		
		Then.iTeardownMyApp();
	});
	opaTest("Is adding value to input on button press", function(Given,When,Then){
		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.acad.calculator"
			}
		});
		When.onTheAppPage.iPressTheTwoIdButton();
		When.onTheAppPage.iPressTheMultiplyIdButton();
		When.onTheAppPage.iPressTheFourIdButton();
		Then.onTheAppPage.iShouldSeeNewValInInputField("2*4");
		Then.iTeardownMyApp();
	});

	opaTest("Prints invalid expression on wrong expression",function(Given,When,Then){
		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.acad.calculator"
			}
		});
		When.onTheAppPage.iPressTheTwoIdButton();
		When.onTheAppPage.iPressTheLeftParenthesisIdButton();
		When.onTheAppPage.iPressTheLeftParenthesisIdButton();
		When.onTheAppPage.iPressTheFourIdButton();
		When.onTheAppPage.iPressCalculateButton();
		Then.onTheAppPage.iShouldFindAnswerField("0");

		Then.iTeardownMyApp();
	});

	opaTest("Is calculating expression correctly",function(Given,When,Then){
		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.acad.calculator"
			}
		});
		When.onTheAppPage.iPressTheTwoIdButton();
		When.onTheAppPage.iPressTheMultiplyIdButton();
		When.onTheAppPage.iPressTheFourIdButton();
		When.onTheAppPage.iPressCalculateButton();
		Then.onTheAppPage.iShouldFindAnswerField("8");

		Then.iTeardownMyApp();
	});
	opaTest("Returns 0 on Null expression",function(Given,When,Then){
		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.acad.calculator"
			}
		});
		When.onTheAppPage.iPressCalculateButton();
		Then.onTheAppPage.iShouldFindAnswerField("0");

		Then.iTeardownMyApp();
	});
	opaTest("Returns 0 on Invalid expression",function(Given,When,Then){
		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.acad.calculator"
			}
		});
		When.onTheAppPage.iPressTheMultiplyIdButton();
		When.onTheAppPage.iPressTheMultiplyIdButton();
		When.onTheAppPage.iPressCalculateButton();
		Then.onTheAppPage.iShouldFindAnswerField("0");

		Then.iTeardownMyApp();
	});
});