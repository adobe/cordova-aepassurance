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

exports.defineAutoTests = function () {
    describe('(AEPAssurance.extensionVersion)', function () {
        beforeEach(function() {
            spyOn(console, 'log');
        })
        it('should exist', function () {
            expect(AEPAssurance.extensionVersion).toBeDefined();
        });
        it('should be a function', function () {
            expect(typeof AEPAssurance.extensionVersion === "function").toBe(true);
        });
        it('should print log to console stating success is not function', function() {
            AEPAssurance.extensionVersion("url", "success", function() {})
            expect(console.log).toHaveBeenCalled();
        });
        it('should print log to console stating error is not function', function() {
            AEPAssurance.extensionVersion(function() {}, "error")
            expect(console.log).toHaveBeenCalled();
        });
        it('check if the result is a string', function (done) {
            AEPAssurance.extensionVersion(function(result) {
                expect(typeof result === "string").toBe(true);
                done();
            }, function() {});
        });
    });

    describe('(AEPAssurance.startSession)', function() {
        beforeEach(function() {
            spyOn(console, 'log');
        })
        it('should exist', function () {
            expect(AEPAssurance.extensionVersion).toBeDefined();
        });
        it('should be a function', function () {
            expect(typeof AEPAssurance.extensionVersion === "function").toBe(true);
        });
        it('should print log to console stating success is not function', function() {
            AEPAssurance.startSession("url", "success", function() {})
            expect(console.log).toHaveBeenCalled();
        });
        it('should print log to console stating error is not function', function() {
            AEPAssurance.startSession("url", function() {}, "error")
            expect(console.log).toHaveBeenCalled();
        });
    });
};
