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

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var args, options, prepared, installed, created;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _argv2.default)();

          case 2:
            args = _context.sent;
            _context.next = 5;
            return (0, _options2.default)(args);

          case 5:
            options = _context.sent;
            _context.next = 8;
            return (0, _dependencies.prepare)(options);

          case 8:
            prepared = _context.sent;
            _context.next = 11;
            return (0, _dependencies.install)(prepared);

          case 11:
            installed = _context.sent;
            _context.next = 14;
            return (0, _files2.default)(options);

          case 14:
            created = _context.sent;


            (0, _clear2.default)();

            console.log(created);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function wooo() {
    return _ref.apply(this, arguments);
  }

  return wooo;
}();