// console.log = function() {};
const rewire = require('rewire'),
const { assert, expect } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let appModule
    try {
      appModule = rewire('../main.js');
    } catch(e) {
      expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }

    let varLearnerDeclares
    try {
        varLearnerDeclares = appModule.__get__("varLearnerDeclares");
    } catch (e) {
        expect(true, 'Did you declare a `varLearnerDeclares` variable/function?').to.equal(false);
    }

    expect(varLearnerDeclares, 'Did you ...?').to.be.a('<dataType>');

    let structureOne = function() {
      const varLearnerDeclares = () => {}
    };

    let isMatchOne = Structured.match(code, structureOne)

    assert.isOk(isMatchOne, 'Did you write `varLearnerDeclares` as an arrow function using the `const` keyword?')
  });
});
