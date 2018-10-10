# webSCT or jQuery Expects tests
Use Case:
+ These tests are for when you are checking code in an HTML file.

Benefits:
+ Can test DOM directly
+ Can use either jQuery expects or vanilla JS for webSCT tests
+ Allows learners to have flexibility in how they write their code since we're testing outcome/output

Limitations:
+ Can't read code directly, can be problematic if you want a particular method
  + Only tests frontend.
+ Can't check that eventListener has been triggered, browser will refresh after the "Run" button is clicked
+ Can't combine tests (e.g. mocha or componentTest)
+ Must be in pre-ES6 code. 

### To run locally:
+ The sandbox folder will contain the code necessary to run your tests locally (if you need to restore to default, duplicate the **default** folder).
+ Change the **index.html** page (and any other files) as needed, but make sure you include a `<script>` element below the `<body>` to test your HTML.
+ Add your code inside the `<script>` element at the end OR add your code to **testFile.js** and link to it through a `<script>` element.
+ Then open **index.html** in your browser along with the console. You will see errors show up in console.
+ Every change you make to your test will need you to save your file and refresh the browser.

### Testing:
+ You can write jQuery Expects tests: https://github.com/Codecademy/jquery-expect
+ You can also write vanilla JS tests that manipulate the DOM.
  + For an error to show up, use `throw Error('Did you ... ?')` for it to show up to learners
