'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _argv = require('./argv');

var _argv2 = _interopRequireDefault(_argv);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _dependencies = require('./dependencies');

var _files = require('./files');

var _files2 = _interopRequireDefault(_files);

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* () {
    const args = yield (0, _argv2.default)();
    const options = yield (0, _options2.default)(args);
    const prepared = yield (0, _dependencies.prepare)(options);
    const installed = yield (0, _dependencies.install)(prepared);
    const created = yield (0, _files2.default)(options);

    (0, _clear2.default)();

    console.log(created);
  });

  function wooo() {
    return _ref.apply(this, arguments);
  }

  return wooo;
})();