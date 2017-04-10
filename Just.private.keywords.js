var key = require('keyword');

// npm install dictionaryjs
var Dictionary = require('dictionaryjs');
var dict = new Dictionary();

var JustPrivateKeywords = {

    "Just.SetKeywordVarValue": [
        "Just.GetValueFromParams", ["$1", "type"], "=> $type",
        "Just.GetValueFromParams", ["$1", "name"], "=> $name",
        "Just.GetValueFromParams", ["$1", "value"], "=> $value",
        "Just.SetKeywordVarValueFunc", ["$type", "$name", "$value"], "=> $lastvarvalue"
    ],

	"Navigate" : function(next,url){		
		browser.get(url);
	},

    "Just.SetKeywordVarValueFunc": function(next, varType, varName, varValue) {
        var value;

        switch(varType){
            case "RANDOM":
                value = Math.floor(Math.random() * Math.pow(10, varValue));
                break;
            case "CONSTANT":
            default:
                value = varValue;
        }

        dict.set('#' + varName + '#', value);
        next(varValue);
    },


    "Just.GetKeywordVarValue": function(next, obj, varValue) {
        //console.log("Just.GetKeywordVarValue: " + varValue)
        obj.value = varValue;
        next(varValue);
    },

    "Just.AssertValue": function(next, expectedValue, value) {
        expect(value).toEqual(expectedValue);
        next();
    },

    "Just.AssertGreaterThan": function(next, value, lesserValue ) {
        expect(value > lesserValue).toBeTruthy();
        next();
    },

    "Just.AssertContainsText": function(next, textToLookIn, textToLookFor ) {
        console.log('in Just.AssertContainsText');
        console.log('lodeal is: ' + textToLookFor + ' in ' + textToLookIn ) ;
        var found = true;
        if(textToLookFor !== '' && textToLookIn.indexOf(textToLookFor) < 0){
            found = false;
        }
        expect(found).toBeTruthy();
        console.log('FOUND? : ' + found);
        next();
    },

    "Just.GetValueFromParams": function(next, params, paramName) {
        try {
            var value = eval("params." + paramName);
            if(value == undefined) {
                next("")
            }
            else {
                if (dict.has(value)){   // param is #variable# and "entirely" in the dictionary
                    value = dict.get(value)
                } else {
                    if (value.lastIndexOf("#") > value.indexOf("#")){ // param contains at least two #s so try replacing all #variable# in the dictionary
                        dict.forEach(function(dicKey, dicValue) {
                            value = value.replace(dicKey, dicValue);
                        });
                    }
                }
                next(value)
            }
        }
        catch(err) {
            next("");
        }
    },

    "Just.Wait": function(next,delay) {
        browser.sleep(delay);
    },

	"clickOnElement" : function(next, Locator , LocatorType){
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
	},


	"inputInField" : function(next, Locator , LocatorType, Value){
		switch(LocatorType){
            case "XPath":
                element(by.xpath(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "Css":
                element(by.css(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "LinkText":
                element(by.linkText(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "ButtonText":
                element(by.buttonText(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "Model":
                element(by.model(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "Binding":
                element(by.binding(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "PartialButtonText":
                element(by.partialButtonText(Locator)).sendKeys(Value));
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "ClassName":
                element(by.className(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            case "ID":
                element(by.id(Locator)).sendKeys(Value);
                console.log("Element "+ Locator + " is clicked through locatorType " + LocatorType);
                break;
            default:
                console.log("You have either provided wrong locator " +Locator+ " or wrong LocatorType "+LocatorType);

	},

	"getRandomNumber" : function(next ,Value){
        var str = '';
        for(var i=0;i<Value;i++)
        {
            str += Math.floor(Math.random()*7) + 1;
        }
        var randomNumber = parseInt(str,10);
        console.log(randomNumber);
        next(randomNumber);
    }


};

module.exports = JustPrivateKeywords;

