// console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const sampleFunct = () => {
      }
    };

    let structureTwo = function() {
      const sampleFunct = () => {
        return '<Acceptable Value>'
      }
    };

    let structureThree = function() {
      const sampleFunct = () => {
        return '<Another Acceptable Value>'
      }
    };

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    let isMatchThree = Structured.match(code, structureThree);

    assert.isOk(isMatchOne, 'Did you define `sampleFunct()` as a function expression using the `const` keyword?');
    assert.isOk(isMatchTwo || isMatchThree, "Did you return ________ inside the function body of `sampleFunct()`?");
  });
});
