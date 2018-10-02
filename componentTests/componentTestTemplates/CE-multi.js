Tests.componentTest(function (Components) {
  var checks = [
    {
      msg: 'Did you ... ?',
      regex: /One thing to check in CODE EDITOR/
    },
    {
      msg: 'Did you ... ?',
      regex: /Another thing to check in CODE EDITOR/
    }
  ];
  for (var i = 0; i < checks.length; i++) {
    if (!Components.CodeEditor.codeContains('main.js', checks[i].regex)) {
      return {
        pass: false,
        errors: {
          friendly: checks[i].msg,
          component: 'PersistentCodeEditor'
        }
      };
    }
  }
  return { pass: true };
}, callback);
