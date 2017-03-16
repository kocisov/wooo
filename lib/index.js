#!/usr/bin/env node
'use strict';

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _wooorc = require('./wooorc');

var _wooorc2 = _interopRequireDefault(_wooorc);

var _installDeps = require('./install-deps');

var _installDeps2 = _interopRequireDefault(_installDeps);

var _options2 = require('./options');

var _options3 = _interopRequireDefault(_options2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs2.default.alias('v', 'version').alias('d', 'dir').alias('n', 'npm').argv;

(0, _clear2.default)();

(0, _options3.default)(argv).checkRc(_options).then(function (opts) {
  (0, _installDeps2.default)(opts);
});
/*
  .then(dir => {
    addFiles(dir)
  })
*/