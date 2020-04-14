# AEP Griffon SDK Cordova Plugin  

Coming soon

<!---

- [Prerequisites](#prerequisites)  
- [Using the Plugin](#using-the-plugin)  
- [Running Test](#running-tests)
- [Sample](#sample)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [Licensing](#licensing)  

## Prerequisites  

Cordova is distributed via [Node Package Management](https://www.npmjs.com/) (aka - `npm`).  

In order to install and build Cordova applications you will need to have `Node.js` installed. [Install Node.js](https://nodejs.org/en/).  

Once Node.js is installed, you can install the Cordova framework from terminal:  

```  
sudo npm install -g cordova  
```  
## Using the Plugin  

To start using the AEP Griffon SDK for Cordova, navigate to the directory of your Cordova app and install the plugin:  

```  
cordova plugin add https://git.corp.adobe.com/dms-mobile/cordova-acpgriffon.git  
```  

  Check out the documentation for help with APIs .

  ## Running Tests
  Install cordova-paramedic `https://github.com/apache/cordova-paramedic`
  ```bash
  npm install -g cordova-paramedic
  ```

  Run the tests
  ```
  cordova-paramedic --platform ios --plugin . --verbose
  ```
  ```
  cordova-paramedic --platform android --plugin . --verbose
  ```

  ## Sample

  A Cordova app for testing the plugin is located in the `https://git.corp.adobe.com/dms-mobile/cordova-samples`. The app is configured for both iOS and Android platforms.  

  ## Usage
  ##### Getting the SDK version:
  ```js
  ACPGriffon.extensionVersion(function(version){  
      console.log(version);
  }, function(error){  
      console.log(error);  
  });
  ```
  ##### Registering the extension with ACPCore:  

   > Note: It is required to initialize the SDK via native code inside your AppDelegate and MainApplication for iOS and Android respectively. For more information see how to initialize [Core](https://aep-sdks.gitbook.io/docs/getting-started/initialize-the-sdk).  
  #####  **iOS**  
  ```objective-c
  #import "ACPGriffon.h"  
  [ACPGriffon registerExtension];
  ```  
  #####  **Android:**  
  ```java
  import com.adobe.marketing.mobile.Griffon;
  Griffon.registerExtension();
  ```
  ##### Starting the Griffon session:
  ```js
  ACPGriffon.startSession(url, function(response) {  
      console.log("Success in starting Griffon session");  
  }, function(error){  
      console.log(error);  
  });
  ```
  ## Contributing

Looking to contribute to this project? Please review our [Contributing guidelines](.github/CONTRIBUTING.md) prior to opening a pull request.  

We look forward to working with you!
  ## Licensing  
  See [LICENSING](LICENSE)

  -->
