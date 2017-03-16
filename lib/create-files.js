'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFiles;

var _fsExtra = require('fs-extra');

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _path = require('path');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFiles(directory) {
  var pth = (0, _fsExtra.realpathSync)(process.cwd());

  (0, _fsExtra.copy)((0, _path.join)(pth, '/files'), directory, function (err) {
    if (err) {
      return (0, _utils.red)('Couldn\'t create some files. + ' + err);
    }

    (0, _clear2.default)();

    (0, _utils.green)('Successfully created wooo\'s files and installed dependencies.');
    (0, _utils.bold)('-------------------------------------------------------------');
    (0, _utils.green)('Redux is ready for use!');
    (0, _utils.blue)('Build something awesome :)');
    (0, _utils.bold)('-------------------------------------------------------------');
  });
}