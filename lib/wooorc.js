'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkRc;

var _fsExtra = require('fs-extra');

var _utils = require('./utils');

function checkRc() {
  return new Promise(function (res) {
    (0, _fsExtra.stat)('./.wooorc', function (err) {
      if (err && err.code === 'ENOENT') {
        (0, _utils.blue)('.wooorc file was not found in current directory.');

        res({
          manager: 'yarn',
          router: 'v4'
        });
      } else {
        (0, _fsExtra.readFile)('./.wooorc', function (e, r) {
          res(JSON.parse(r));
        });
      }
    });
  });
}