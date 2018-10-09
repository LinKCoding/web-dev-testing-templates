# Mocha Tests
Use Case:
+ These tests are for when you want to test the JavaScript that a learner has written

Benefits:
+ Selection of multiple tests to choose from that can be mixed and matched.
+ Code Evaluation
  + Rewire allows functions and variables to be read
  + Sinon allows tracking of methods
+ Structured parses code differently from writing raw regex

Limitations:
+ Works for node (backend), if working with the browser, will not have access to other files like **index.html**

### Notes:
+ When running mocha tests in the LE, make sure you've included an empty `test` folder inside the workspace. Otherwise, you'll get an error and your mocha tests won't run.
+ In **mochaTemplates**, there are a few boilerplate templates you can use
+ REW refers to rewire tests
+ STR refers to structured tests
+ SPY refers to sinon tests that uses spies
+ Copy and paste the template inside **main.js** and then edit as needed

### To run locally:
+ In mocha test templates, you'll notice that each file has a commented out `console.log()`, this is to prevent an error from showing up in the LE. While testing locally, leave it commented out.
+ Edit the code inside **test/testFile.js**
+ Add what code you want to test inside **main.js**
+ Every change should be saved to the file(s) before testing
+ To run the test, in your local terminal, run `mocha <file location of testFile.js>`

#### Structured Test:
+ Documentation: https://github.com/Khan/structuredjs
+ Tests that code is written in a specific format
+ Similar to regex, but the code is parsed differently: http://esprima.org
+ Code is NOT evaluated
+ Can be difficult to test for specific values (e.g. strings), which is why varCallbacks is necessary
+ Mostly uses chai assert: https://www.chaijs.com/api/assert/

#### Rewired Test:
+ Documentation: https://github.com/jhnns/rewire
+ Great for grabbing variables and functions and checking values
+ Code can be evaluated
+ Mostly uses chai expects: https://www.chaijs.com/api/bdd/

#### Sinon Test:
+ Documentation: https://sinonjs.org/releases/v4.0.0/spies/
+ Used in conjunction with rewire tests to check if certain methods have been called
