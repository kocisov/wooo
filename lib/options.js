'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _package = require('../package.json');

var _fn = require('./fn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (args) {
    let opts = {
      template: 'default',
      manager: 'yarn',
      dir: './src'
    };

    if (args.version) {
      (0, _clear2.default)();
      console.log((0, _fn.white)(`Wooo's current version is ${_package.version}.`));
      process.exit();
    }

    if (args.template && args.template.length > 0) {
      opts.template = args.template;
    }

    if (args.npm) {
      opts.manager = 'npm';
    }

    if (args.dir && args.dir.length > 0) {
      opts.dir = args.dir;
    }

    return opts;
  });

  function checkOptions(_x) {
    return _ref.apply(this, arguments);
  }

  return checkOptions;
})();