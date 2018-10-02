# Component Tests
## CodeEditor or OutputTerminal Tests from the drop down menu
Use Case:
+ These tests are for when you want to test the code written in the code editor and/or the terminal for some regex/text

Benefits:
+ Allows you to test for both code and output
+ Simple to set up and use
+ Can be used for any languages

Limitations:
+ Regex can get quite expansive
+ Could be hard to allow for multiple passable conditions (allow flexibility for how to write the code/solution)
+ Commented out code WILL still be read

### Notes:
+ These tests will check for a regex or a set of regex.
+ These cannot be tested locally.
  + However, since we're testing regex, you can use the sites to test your regex:
    + http://regexr.com
    + https://regex101.com
+ You can NOT use ES6 in these tests.
+ You CAN test different components in a single componentTest!
+ If a `{pass: true}` object is returned, the test will pass.
  + Even if a conditional that returns `{pass: false}` object is true
  + Think of these tests as JavaScript files that execute callbacks and have access to Codecademy objects and their methods:
    + Components.CodeEditor.codeContains
    + Components.OutputTerminal.hasOutput
    + Components.OutputTerminal.hasError

### Specific to CodeEditor
+ You MUST supply a file to `Components.CodeEditor.codeContains(<file goes here>, <regex here>)`

### Specific to OutputTerminal
+ If you are expecting an error (not best practice), but if you must, you can use:
  + Components.OutputTerminal.hasError(<regex for error>)
