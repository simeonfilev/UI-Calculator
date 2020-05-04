sap.ui.define([
	"sap/ui/test/Opa5",
    "sap/ui/test/actions/Press",
    "sap/ui/test/actions/EnterText"
], function (Opa5, Press) {
	"use strict";

	var sViewName = "sap.ui.acad.calculator.view.CalculatorPanel";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheOneIdButton: function () {
					return this.waitFor({
						id: "1",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the '1' button on the CalculatorPanel view"
					});
				}
			},

			assertions: {
				iShouldSeeNewValInInputField: function () {
                    return this.waitFor({
                        id: "expressionField",
                        viewName: sViewName,
                        success : function (oInputField) {
                            var sValueToCheck = (oInputField["_lastValue"]);
                            Opa5.assert.strictEqual(sValueToCheck, "1", "Didn't insert value");
                        },
                    });
				}
			}
		}
	});
});