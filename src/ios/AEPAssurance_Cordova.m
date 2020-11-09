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

/********* AEPAssurance_Cordova.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import <AEPAssurance/AEPAssurance.h>

@interface AEPAssurance_Cordova : CDVPlugin

- (void)extensionVersion:(CDVInvokedUrlCommand*)command;
- (void)startSession:(CDVInvokedUrlCommand*)command;

@end

@implementation AEPAssurance_Cordova

- (void)extensionVersion:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        CDVPluginResult* pluginResult = nil;
        NSString* extensionVersion = [AEPAssurance extensionVersion];

        if (extensionVersion != nil && [extensionVersion length] > 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:extensionVersion];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        }

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

- (void)startSession:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        NSURL* url = [NSURL URLWithString:[command.arguments objectAtIndex:0]];
        [AEPAssurance startSession:url];
        [self.commandDelegate sendPluginResult:nil callbackId:command.callbackId];
    }];
}

@end
