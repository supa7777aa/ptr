
var Jasmine2HtmlReporter = require('C:\\Users\\Ankur\\node_modules\\protractor-jasmine2-html-reporter');

// An example configuration file.
exports.config = {
  
  directConnect: true,


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
   beforeLaunch : function(){
	  console.log('beforeLaunch');
   },
  
  onPrepare : function(){
	 console.log('onPrepare'); 
	 jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
          savePath: 'e2e/target/screenshots',
		  screenshotsFolder : 'images',
		  takeScreenshots: true,
		  takeScreenshotsOnlyOnFailures: false,
		  fixedScreenshotName: true,
		  consolidate: false,
		  fileName: 'Report'
        }));
		
  },
  
  onComplete : function(){
	 console.log('onComplete'); 
  },
  
  onCleanUp : function(){
	  console.log('on Clean Up'); 
  },
  
  afterLaunch : function(){
	  console.log('after Launch'); 
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['.//e2e/spec/smoke/test_spec.js'],
  
  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
