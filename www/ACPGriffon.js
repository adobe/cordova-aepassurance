/*
 Copyright 2020 Adobe. All rights reserved.
 This file is licensed to you under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License. You may obtain a copy
 of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under
 the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 OF ANY KIND, either express or implied. See the License for the specific language
 governing permissions and limitations under the License.
 */

var ACPGriffon = (function() {
    var exec = require('cordova/exec');
	var ACPGriffon = (typeof exports !== 'undefined') && exports || {};
	var PLUGIN_NAME = "ACPGriffon_Cordova";
	// ===========================================================================
	// public APIs
	// ===========================================================================

    // Gets the current Griffon extension version.
    ACPGriffon.extensionVersion = function (success, error) {
        var FUNCTION_NAME = "extensionVersion";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }

        exec(success, error, PLUGIN_NAME, FUNCTION_NAME, []);
    };

    // Starts Griffon session
    ACPGriffon.startSession = function (url, success, error) {
        var FUNCTION_NAME = "startSession";

        if (success && !isFunction(success)) {
            printNotAFunction("success", FUNCTION_NAME);
            return;
        }

        if (error && !isFunction(error)) {
            printNotAFunction("error", FUNCTION_NAME);
            return;
        }

        if (!isString(url)) {
            printNotAString("griffonSessionUrl", FUNCTION_NAME);
            return;
        }	

        exec(success, error, PLUGIN_NAME, FUNCTION_NAME, [url]);
    }; 

    return ACPGriffon;
}());

module.exports = ACPGriffon;

// ===========================================================================
// input sanitization
// ===========================================================================

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function printNotAString(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be a String.");
}

function isFunction (value) {
    return typeof value === 'function';
}

function printNotAFunction(paramName, functionName) {
    console.log("Ignoring call to '" + functionName + "'. The '" + paramName + "' parameter is required to be a function.");
}