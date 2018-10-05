# Component Tests
## CodeEditor or OutputTerminal Tests from the drop down menu
Use Case:
+ These tests are for when you want to test the code written in the code editor and/or the terminal for some regex/text

Benefits:
+ Allows you to test for both code and output
+ Simple to set up and use
+ Can be used for any language

Limitations:
+ Regex can get quite expansive
+ Could be hard to allow for multiple passable conditions (allow flexibility for how to write the code/solution)
+ Commented out code WILL still be read

### Notes:
+ The **componentTestTemplates** folder contains CodeEditor(CE) and OutputTerminal(OPT) and combo CE + OPT test templates to test multiple regex.
  + If you want to test for single a single regex, selecting a CodeEditor/OutputTerminal test in Content Studio will generate boilerplate code for you.
+ These tests will check for a regex or a set of regex.
+ These cannot be tested locally.
  + However, since we're testing regex, you can use the sites to test your regex:
    + http://regexr.com
    + https://regex101.com
+ You can NOT use ES6 in these tests.
+ You CAN test different components in a single componentTest!
+ If a `{pass: true}` object is returned, the test will pass.
  + e.g.:
  ```js
  return {pass: true};
  if (!Components.OutputTerminal.hasOutput(checks[i].regex)) {
    return {
      pass: false,
      errors: {
        friendly: checks[i].msg,
        component: 'PersistentCodeEditor'
      }
    };
  }
  ```
  The `if` statement will never be checked since a `return` statement came first and the `{pass: true}` object will pass the checkpoint.
  + Think of these tests as JavaScript files that execute callbacks and have access to Codecademy objects and their methods:
    + `Components.CodeEditor.codeContains()`
    + `Components.OutputTerminal.hasOutput()`
    + `Components.OutputTerminal.hasError()`


### Specific to CodeEditor
+ You MUST supply a file to `Components.CodeEditor.codeContains(<file goes here>, <regex here>)`

### Specific to OutputTerminal
+ If you are expecting an error (not best practice), but if you must, you can use:
  + `Components.OutputTerminal.hasError(<regex for error>)`
