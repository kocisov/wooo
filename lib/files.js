'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFiles;

var _fsExtra = require('fs-extra');

var _path = require('path');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFiles(_ref) {
  var dir = _ref.dir,
      template = _ref.template;

  var tmplt = void 0;

  var ad = (0, _fsExtra.realpathSync)(process.cwd());
  var p = (0, _path.resolve)(__dirname, '../templates/' + template);

  console.log(_chalk2.default.white('Wooo will create files in ' + (0, _path.resolve)(ad, dir) + ' directory.'));

  if ((0, _fsExtra.existsSync)(p)) {
    tmplt = p;
  } else {
    tmplt = (0, _path.resolve)(__dirname, '../templates/default');

    console.log(_chalk2.default.red('Template ' + template + ' was not found!'));
    console.log(_chalk2.default.yellow('Installing default template instead...'));
  }

  // console.log(tmplt)
  (0, _fsExtra.copySync)(tmplt, (0, _path.resolve)(ad, dir));

  return _chalk2.default.green('Wooo!!! Everything is done.\nLet\'s build something cool.');
}