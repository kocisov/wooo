#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

require('babel-polyfill');

var _wooorc = require('./wooorc');

var _wooorc2 = _interopRequireDefault(_wooorc);

var _installDeps = require('./install-deps');

var _installDeps2 = _interopRequireDefault(_installDeps);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _createFiles = require('./create-files');

var _createFiles2 = _interopRequireDefault(_createFiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs2.default.alias('v', 'version').alias('d', 'dir').alias('n', 'npm').argv;

(0, _options2.default)(argv).then(function (opts) {
  (0, _wooorc2.default)(opts).then(function (depOpts) {
    (0, _installDeps2.default)(depOpts).then(function (directory) {
      (0, _createFiles2.default)(directory);
    });
  });
});