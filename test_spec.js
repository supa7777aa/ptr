var Login = require('..//po/Loginpage.po.js'),login = new Login();

describe('Angularjs Homepage', function() {
	
	
	beforeEach(function(){
		browser.ignoreSynchronization = true;
	});
	
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');
		
	//browser.get('https://www.hallwaze.com/');
    element(by.model('yourName')).sendKeys('Julie');
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');	
	//login.SignIn();	
	browser.sleep(4000);
	
  });

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoList.todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
	
  });
});
