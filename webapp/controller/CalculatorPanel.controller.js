sap.ui.define([
  "sap/ui/core/mvc/Controller",
], function (Controller) {
  "use strict";

  return Controller.extend("sap.ui.acad.calculator.controller", {

    calculate: function () {
      var sExpression = this.getView().getModel().getProperty("/calculator/expression");

      var sEndpoint = "http://localhost:8085/calculator/expressions";
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
        oModel.setProperty("/calculator/expression", "0");
      }
      oxhr.onload = function () {
        if (oxhr.status == 200) {
          var oJSONData = JSON.parse(this.responseText);
          var dAnswer = oJSONData['answer'];
          oModel.setProperty("/calculator/answer", dAnswer);
          oModel.setProperty("/calculator/expression", dAnswer);

          var oXHRNewHistory = new XMLHttpRequest();
          oXHRNewHistory.open("GET", sURL, true);
          oXHRNewHistory.send();
          oXHRNewHistory.onload = function () {
            if (oXHRNewHistory.status == 200) {
              var oJSONData = JSON.parse(this.responseText);
              var oJSONExpressions = oJSONData["expressions"];
              var oJSONReversedResult = [];
              var length = oJSONExpressions.length;
              for (var i = length - 1; i >= 0; i--) {
                oJSONReversedResult.push(oJSONExpressions[i]);
              }
              oModel.setProperty("/tableHistory", oJSONReversedResult);
              oModel.refresh();
            }
          }
        } else {
          oModel.setProperty("/calculator/answer", "INVALID EXPRESSION");
          oModel.setProperty("/calculator/expression", "0");
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