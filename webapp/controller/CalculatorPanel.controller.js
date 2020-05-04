sap.ui.define([
  "sap/ui/core/mvc/Controller",
], function (Controller) {
  "use strict";

  return Controller.extend("sap.ui.acad.calculator.controller", {

    calculate: function () {
      var sExpression = this.getView().getModel().getProperty("/calculator/expression");

      var sEndpoint = "https://restcalculator.cfapps.eu10.hana.ondemand.com/calculator/expressions";
      var params = {
        expression: sExpression
      };
      var sURL = sEndpoint + formatParams(params);

      var oxhr = new XMLHttpRequest();
      oxhr.open("POST", sURL, true);
      oxhr.send();
      var oModel = this.getView().getModel();
      oxhr.onerror = function () {
        oModel.setProperty("/calculator/answer", "INVALID EXPRESSION");
        oModel.setProperty("/calculator/expression", "");
      }
      oxhr.onload = function () {
        if (oxhr.status == 200) {
          var oJSONData = JSON.parse(this.responseText);
          var dAnswer = oJSONData['answer'];
          oModel.setProperty("/calculator/answer", dAnswer);
        } else {
          oModel.setProperty("/calculator/answer", "INVALID EXPRESSION");
          oModel.setProperty("/calculator/expression", "");
        }
      }
    },
    addToExpression: function (e) {
      var sExpression = this.getView().getModel().getProperty("/calculator/expression");
      var oButton = e.getSource();
      var sButtonText = oButton.mProperties.text;
      var sNewExpression = sExpression + sButtonText;
      this.getView().getModel().setProperty("/calculator/expression", sNewExpression);

    }

  });

  function formatParams(params) {
    return "?" + Object
      .keys(params)
      .map(function (key) {
        return key + "=" + encodeURIComponent(params[key])
      })
      .join("&")
  }
});