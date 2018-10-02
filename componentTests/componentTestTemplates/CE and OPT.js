Tests.componentTest(function (Components) {
  if (!Components.CodeEditor.codeContains('main.js', /learner typed this in the CODE EDITOR/)) {
    return {
      pass: false,
      errors: {
        friendly: 'Did you ... ?',
        component: 'PersistentCodeEditor'
      }
    };
  }
  if (!Components.OutputTerminal.hasOutput(/check in CONSOLE/)) {
    return {
      pass: false,
      errors: {
        friendly: 'Did you ... ?',
        component: 'PersistentCodeEditor'
      }
    };
  }
  return { pass: true };
}, callback);
