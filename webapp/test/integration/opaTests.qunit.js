/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/acad/calculator/test/integration/InputValidation"
	], function () {
		QUnit.start();
	});
});