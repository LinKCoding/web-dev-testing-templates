// console.log = function () { }
const { expect } = require('chai');
const rewire = require('rewire');

describe('', function () {
  it('', function () {
    let appModule;
    try {
        appModule = rewire("../main.js")
    } catch (e) {
        expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }

    let varLearnerDeclares
    try {
        varLearnerDeclares = appModule.__get__("varLearnerDeclares");
    } catch (e) {
        expect(true, 'Did you declare a `varLearnerDeclares` variable/function?').to.equal(false);
    }

    expect(varLearnerDeclares, 'Did you ...?').to.be.a('<dataType>')
    expect(varLearnerDeclares(), 'Did you ...?').to.deep.equal.('<Exact value here>')
  });
});
