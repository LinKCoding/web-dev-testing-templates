// console.log = function() {};
const { expect } = require('chai');
const fs = require('fs');
const rewire = require('rewire');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    const logged = [];
    const consoleMock = {
      console: {
        log: (...args) => logged.push(...args)
      }
    }

    const appModule = rewire('../main.js');
    appModule.__set__(consoleMock);

    const functionThatLogs = appModule.__get__('functionThatLogs');
    functionThatLogs();

    expect(logged[0], 'Did you log ...?').to.include('<Logged message>');
  });
});
