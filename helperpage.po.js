var XLSX = require('C://Users//asharma26//node_modules//xlsx');

var helperFunction = function(){
	
	var that = this;
	
	/*
	name : navigateUrl
	description : For redirecting to provided URL
	param : String :- for URL
	created by : Ankur
	
	*/
	
	this.navigateUrl = function(URL){
		console.log("Redirecting to :- " + URL);
		browser.get(URL);
		browser.sleep(2000);
	};
	
	/*
	name : clickOnElement
	description : For clicking on any elment
	param: String, String, First for Locator and another one for LocatorType
	created by : Ankur
	
	*/
	
	this.clickOnElement = function(LocatorType,Locator){
		
		switch(LocatorType){			
		 case "XPath":
			element(by.xpath(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "Css":
			element(by.css(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "LinkText":
			element(by.linkText(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "ButtonText":
			element(by.buttonText(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "Model":
			element(by.model(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "Binding":
			element(by.binding(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "PartialButtonText":
			element(by.partialButtonText(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "ClassName":
			element(by.className(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 case "ID":
			element(by.id(Locator)).click();
			console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
			break;
		 default:
			console.log("You have either provided wrong locator " +Locator+ " or wrong LocatorType "+LocatorType);
		}
    };
	
	/*
	name : inputInField
	description : For putting value into the field
	param: String, String,String :- First for Locator and another one for LocatorType and the last one for provided value
	created by : Ankur
	
	*/
	
	this.inputInField = function(LocatorType, Locator,  Value){
		
		switch(LocatorType){			
		 case "XPath":
			element(by.xpath(Locator)).clear();
			element(by.xpath(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "Css":
		    element(by.css(Locator)).clear();
			element(by.css(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "LinkText":
			element(by.linkText(Locator)).clear();
			element(by.linkText(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "ButtonText":
			element(by.buttonText(Locator)).clear();
			element(by.buttonText(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "Model":
			element(by.model(Locator)).clear();
			element(by.model(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "Binding":
			element(by.binding(Locator)).clear();
			element(by.binding(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "PartialButtonText":
			element(by.partialButtonText(Locator)).clear();
			element(by.partialButtonText(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "ClassName":
			element(by.className(Locator)).clear();
			element(by.className(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 case "ID":
			element(by.id(Locator)).clear();
			element(by.id(Locator)).sendKeys(Value);
			console.log("Element "+ Locator + " value is entered through locatorType " + LocatorType);
			break;
		 default:
			console.log("You have either provided wrong locator " +Locator+ " or wrong LocatorType "+LocatorType);
		}
    };
	
	/*
	name : generateRandomNumber
	description : For generating a random Number
	param: Int for the sequence of number
	created by : Ankur
	
	*/
	
	this.generateRandomNumber = function(Value){
        var str = '';
        for(var i=0;i<Value;i++)
        {
            str += Math.floor(Math.random()*7) + 1;
        }
        var randomNumber = parseInt(str,10);
        console.log(randomNumber);
		return randomNumber;
    };
	
	
	
	/*
	name : verifyText
	description : For verifyting the verifyText verifyLinkText verifyButtonText verifyTitle
	param: String, String for the sequence of matching titles
	created by : Ankur	
	*/
	
	this.verifyText = function(val1, val2){
		expect(val1).toEqual(val2);
	};
	
	
	/*
	name : verifySelected 
	description : For verifyting selection of elements
	param: String for the locator to whom we want to check
	created by : Ankur	
	*/
	
	this.verifyRadioCheckboxSelection = function(LocatorType, Locator){
		
		switch(LocatorType){			
		 case "XPath":
			expect(element(by.xpath(Locator)).isSelected()).toBeTruthy();			
			break;
		 case "Css":
		    expect(element(by.css(Locator)).isSelected()).toBeTruthy();			
			break;
		 case "LinkText":
			expect(element(by.linkText(Locator)).isSelected()).toBeTruthy();			
			break;
		 case "ButtonText":
			expect(element(by.buttonText(Locator)).isSelected()).toBeTruthy();		
			break;
		 case "Model":
			expect(element(by.model(Locator)).isSelected()).toBeTruthy();		
			break;
		 case "Binding":
			expect(element(by.binding(Locator)).isSelected()).toBeTruthy();
			break;
		 case "PartialButtonText":
			expect(element(by.partialButtonText(Locator)).isSelected()).toBeTruthy();			
			break;
		 case "ClassName":
			expect(element(by.className(Locator)).isSelected()).toBeTruthy();			
			break;
		 case "ID":
			expect(element(by.id(Locator)).isSelected()).toBeTruthy();			
			break;
		 default:
			console.log("You have either provided wrong locator " +Locator+ " or wrong LocatorType "+LocatorType);
		}	
	};	
	
	
	/*
	name : read_Values_In_Json
	description : For reading data in xlsx and returned in json format
	param: Workbook object
	created by : Ankur	
	*/
	
	this.read_Values_In_Json = function(workbook){
	 var result = [];
		workbook.SheetNames.forEach(function(sheetName) {
			var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
			if(roa.length > 0){
				result[sheetName] = roa;
			}
		});
		return result;
	};
	
	/*
	name : read_Values_In_CSV
	description : For reading data in xlsx and returned in csv format
	param: Workbook object
	created by : Ankur	
	*/
	
	this.read_Values_In_CSV = function(workbook){
	var result = [];
		workbook.SheetNames.forEach(function(sheetName) {
			var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
			if(csv.length > 0){				
				result.push(csv);
			}
		});		
		return result;
	};
	
	
	/*
	name : returnValuesFromArray
	description : For reading data in xlsx and returned in csv format
	param: Workbook object
	created by : Ankur	
	*/
	
	this.returnValuesFromArray = function(arr,index){		
		var firstValue = arr[0];
		var value = firstValue.split(",");		
		return value[index];
	};
	
	/*
	name : createFileInJsonFormat
	description : For writing json object data into a specified json file
	param: jsonObject for the data you want to write in file and fileName for the name of the file
	created by : Ankur	
	*/
	
	this.createFileInJsonFormat = function(jsonObj, fileName){
		
		
	};
	
			
};
module.exports = helperFunction;
