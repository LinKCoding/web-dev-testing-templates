// console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      sampleFunct($param);
    };

    let varCallbacks = [
      function($param){
        if($param.value !== 'Specified Value'){
          return {failure: 'Did you pass in an argument of \'Specified Value\'` in your function call?'}
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you call `sampleFunct()`?');
  });
});
