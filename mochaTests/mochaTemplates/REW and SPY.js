// console.log = function() {}
const { expect } = require('chai');
const rewire = require('rewire');
var sinon = require('sinon');

describe('', function () {
    it('', function () {
      try {
        var appModule = rewire("../main.js");
      } catch (e) {
        expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
      }

      let varLearnerDeclares
      try {
        varLearnerDeclares = appModule.__get__("varLearnerDeclares");
      } catch (e) {
        expect(true, 'Did you declare a `varLearnerDeclares` variable/function?').to.equal(false);
      }

      var methodSpy = sinon.spy(<object>.prototype, '<method>')
      varLearnerDeclares();

      expect(methodSpy.called, "Did you call `method()` inside the function `varLearnerDeclares()`?").to.be(true);
    });
});
