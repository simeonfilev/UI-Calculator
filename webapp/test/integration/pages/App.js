sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press",
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
                },
                iPressTheTwoIdButton: function () {
                    return this.waitFor({
                        id: "2",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '2' button and clicked it")},
                        errorMessage: "Did not find the '2' button on the CalculatorPanel view"
                    });
                },
                iPressThThreeIdButton: function () {
                    return this.waitFor({
                        id: "3",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '3' button and clicked it")},
                        errorMessage: "Did not find the '3' button on the CalculatorPanel view"
                    });
                },
                iPressTheFourIdButton: function () {
                    return this.waitFor({
                        id: "4",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '4' button and clicked it")},
                        errorMessage: "Did not find the '4' button on the CalculatorPanel view"
                    });
                },
                iPressTheFiveIdButton: function () {
                    return this.waitFor({
                        id: "5",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '5' button and clicked it")},
                        errorMessage: "Did not find the '5' button on the CalculatorPanel view"
                    });
                },
                iPressTheSixIdButton: function () {
                    return this.waitFor({
                        id: "6",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '6' button and clicked it")},
                        errorMessage: "Did not find the '6' button on the CalculatorPanel view"
                    });
                },
                iPressTheSevenIdButton: function () {
                    return this.waitFor({
                        id: "7",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '7' button and clicked it")},
                        errorMessage: "Did not find the '7' button on the CalculatorPanel view"
                    });
                },
                iPressTheEightIdButton: function () {
                    return this.waitFor({
                        id: "8",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '8' button and clicked it")},
                        errorMessage: "Did not find the '8' button on the CalculatorPanel view"
                    });
                },
                iPressTheNineIdButton: function () {
                    return this.waitFor({
                        id: "9",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '9' button and clicked it")},
                        errorMessage: "Did not find the '9' button on the CalculatorPanel view"
                    });
                },
                iPressTheZeroIdButton: function () {
                    return this.waitFor({
                        id: "0",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '0' button and clicked it")},
                        errorMessage: "Did not find the '0' button on the CalculatorPanel view"
                    });
                },
                iPressTheLeftParenthesisIdButton: function () {
                    return this.waitFor({
                        id: "leftPar",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '(' button and clicked it")},
                        errorMessage: "Did not find the '(' button on the CalculatorPanel view"
                    });
                },
                iPressTheRightParenthesisIdButton: function () {
                    return this.waitFor({
                        id: "rightPar",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the ')' button and clicked it")},
                        errorMessage: "Did not find the ')' button on the CalculatorPanel view"
                    });
                },
                iPressTheMultiplyIdButton: function () {
                    return this.waitFor({
                        id: "multButton",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '*' button and clicked it")},
                        errorMessage: "Did not find the '*' button on the CalculatorPanel view"
                    });
                },
                iPressTheDivideIdButton: function () {
                    return this.waitFor({
                        id: "divButton",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '/' button and clicked it")},
                        errorMessage: "Did not find the '/' button on the CalculatorPanel view"
                    });
                },
                iPressTheSubtractIdButton: function () {
                    return this.waitFor({
                        id: "subtButton",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '-' button and clicked it")},
                        errorMessage: "Did not find the '-' button on the CalculatorPanel view"
                    });
                },
                iPressTheSumIdButton: function () {
                    return this.waitFor({
                        id: "sumButton",
                        viewName: sViewName,
                        actions: new Press(),
                        success:function(){ Opa5.assert.ok(true,"found the '+' button and clicked it")},
                        errorMessage: "Did not find the '+' button on the CalculatorPanel view"
                    });
                },

                iPressCalculateButton:function(){
                  return this.waitFor({
                        id: "calculateButton",
                        viewName: sViewName,
                        actions: new Press(),
                        success: function(){
                            Opa5.assert.ok(true,"found the calculate button");
                        },
                        errorMessage: "Did not find the 'calculateButton' button on the CalculatorPanel view"})
                }
            },

            assertions: {
                iShouldFindTheOneIdButton:function(){
                    return this.waitFor({
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "Found the '1' button");
                        },
                        errorMessage: "Did not find the '1' button"
                    });
                },
                iShouldFindTheTwoIdButton: function () {
                    return this.waitFor({
                        id: "2",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '2' button and clicked it")},
                        errorMessage: "Did not find the '2' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheThreeIdButton: function () {
                    return this.waitFor({
                        id: "3",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '3' button and clicked it")},
                        errorMessage: "Did not find the '3' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheFourIdButton: function () {
                    return this.waitFor({
                        id: "4",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '4' button and clicked it")},
                        errorMessage: "Did not find the '4' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheFiveIdButton: function () {
                    return this.waitFor({
                        id: "5",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '5' button and clicked it")},
                        errorMessage: "Did not find the '5' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheSixIdButton: function () {
                    return this.waitFor({
                        id: "6",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '6' button and clicked it")},
                        errorMessage: "Did not find the '6' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheSevenIdButton: function () {
                    return this.waitFor({
                        id: "7",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '7' button and clicked it")},
                        errorMessage: "Did not find the '7' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheEightIdButton: function () {
                    return this.waitFor({
                        id: "8",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '8' button and clicked it")},
                        errorMessage: "Did not find the '8' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheNineIdButton: function () {
                    return this.waitFor({
                        id: "9",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '9' button and clicked it")},
                        errorMessage: "Did not find the '9' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheZeroIdButton: function () {
                    return this.waitFor({
                        id: "0",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '0' button and clicked it")},
                        errorMessage: "Did not find the '0' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheLeftParenthesisIdButton: function () {
                    return this.waitFor({
                        id: "leftPar",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '(' button and clicked it")},
                        errorMessage: "Did not find the '(' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheRightParenthesisIdButton: function () {
                    return this.waitFor({
                        id: "rightPar",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the ')' button and clicked it")},
                        errorMessage: "Did not find the ')' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheMultiplyIdButton: function () {
                    return this.waitFor({
                        id: "multButton",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '*' button and clicked it")},
                        errorMessage: "Did not find the '*' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheDivideIdButton: function () {
                    return this.waitFor({
                        id: "divButton",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '/' button and clicked it")},
                        errorMessage: "Did not find the '/' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheSubtractIdButton: function () {
                    return this.waitFor({
                        id: "subtButton",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '-' button and clicked it")},
                        errorMessage: "Did not find the '-' button on the CalculatorPanel view"
                    });
                },
                iShouldFindTheSumIdButton: function () {
                    return this.waitFor({
                        id: "sumButton",
                        viewName: sViewName,
                        success:function(){ Opa5.assert.ok(true,"found the '+' button and clicked it")},
                        errorMessage: "Did not find the '+' button on the CalculatorPanel view"
                    });
                },

                iShouldFindCalculateButton:function(){
                  return this.waitFor({
                        id: "calculateButton",
                        viewName: sViewName,
                        success: function(){
                            Opa5.assert.ok(true,"found the calculate button");
                        },
                        errorMessage: "Did not find the 'calculateButton' button on the CalculatorPanel view"})
                },

                iShouldSeeNewValInInputField: function (expression) {
                    return this.waitFor({
                        id: "expressionField",
                        viewName: sViewName,
                        success: function (oInputField) {
                            var sValueToCheck = (oInputField["_lastValue"]);
                            Opa5.assert.strictEqual(sValueToCheck, expression, "Expression entered correctly");
                        },
                    });
                },
                
                iShouldFindAnswerField:function(expression){
                    return this.waitFor({
                        id: "expressionField",
                        viewName: sViewName,
                        timeout: 1, 
                        check:function(oAnswerField){
                            var sValue = oAnswerField.mProperties.value;
                            if(sValue == expression){
                                return true;
                            }
                            return false;
                        },
                        success: function (oAnswerField) {
                            var sValueToCheck = oAnswerField.mProperties.value;
                            Opa5.assert.strictEqual(sValueToCheck, expression, "Expression entered correctly");
                        },
                        errorMessage: "didn't calculate correctly"
                    });
                
                }
            }
        }
    });
});