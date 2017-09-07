'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function (filename) {
  const p = path.resolve('.', filename);
  if (fs.existsSync(p)) {
    console.log(`inject ${p}`);
    const inject = require(p);
    if (typeof inject === 'function') {
      return inject;
    } else if (typeof inject === 'object') {
      return function () { return inject; }
    } else {
      throw new Error(`Inject file "${p}" should be an object or function!`);
    }
  } else {
    return function (obj) { return obj; }
  }
}