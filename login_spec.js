var Helper = require('..//po/helperpage.po.js'), helper = new Helper();
var ConnectDB = require('..//po/connectSQLDB.po.js'), connectdb = new ConnectDB();
var Login = require('..//po/Loginpage.po.js'), login = new Login();
var XL = require('C://Users//asharma26//node_modules//xlsx');
var JSON = require('C://Users//asharma26//node_modules//json-stable-stringify');
var Locators = require('..//Data/Locators.json');
var queries = require('..//Data/Queries.json');
var Data = require('..//Data/Data.json');


describe('Hallwaze Home Page',function(){
	
	var Workbook = XL.readFile('C:\\Users\\asharma26\\Desktop\\Protractor\\e2e\\Data\\Data.csv');
	var jsonobject;
	
	beforeEach(function(){
		browser.ignoreSynchronization = true;		
		browser.manage().timeouts().setScriptTimeout(60*20*1000);
	});
	
	xit('Launching URL',function(){
		helper.navigateUrl('https://www.hallwaze.com/');
		//browser.driver.manage().window().maximize();
		var value = Locators.Login[0].signInButtonPath;		
		helper.clickOnElement('XPath',value);	
		browser.sleep(3000);
	});
	
	xit('Sign In',function(){
		var emailField = Locators.SignIn[0].emailTextField;
		var nextButton = Locators.SignIn[0].nextTextField;
		var pwdField = Locators.SignIn[0].pwdTextField;
		var signIn = Locators.SignIn[0].signInButton;
		var username = Data.SignIn[0].username;
		var pwd = Data.SignIn[0].pwd;
		
		helper.inputInField('XPath',emailField,username);
		helper.clickOnElement('XPath',nextButton);
		browser.sleep(2000);
		helper.inputInField('Css',pwdField,pwd);
		helper.clickOnElement('XPath',signIn);
		browser.sleep(4000);
	});
	
	xit('Read Value through CSV',function(){		
		var values = helper.read_Values_In_CSV(Workbook);
		console.log("VALUES : " +values);
		var firstValue = helper.returnValuesFromArray(values,'0');
		console.log("FIRST : " + firstValue);		
	});
	
	it('Read data from sql and convert it into json format',function(){
		connectdb.connection.query(queries.selectQuery, function(err,rows){
		if(!err){
			console.log(rows);
			jsonobject  = JSON(rows);
			console.log("JSON Object : " +jsonobject);
			username = rows[0].email;
			password = rows[0].password;
			console.log(username + ", " + password);		
		};
	});
	});
	
	
	
	
	
	
});