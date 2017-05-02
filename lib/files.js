'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFiles;

var _fsExtra = require('fs-extra');

var _path = require('path');

var _fn = require('./fn');

function createFiles({ dir, template }) {
  let tmplt;

  const ad = (0, _fsExtra.realpathSync)(process.cwd());
  const p = (0, _path.resolve)(__dirname, `../templates/${template}`);

  const resolvedDir = (0, _path.resolve)(ad, dir);

  console.log((0, _fn.white)(`Wooo will create files in ${resolvedDir} directory.`));

  if ((0, _fsExtra.existsSync)(p)) {
    tmplt = p;
  } else {
    tmplt = (0, _path.resolve)(__dirname, `../templates/default`);

    console.log((0, _fn.red)(`Template ${template} was not found!`));

    console.log((0, _fn.yellow)(`Installing default template instead...`));
  }

  (0, _fsExtra.copySync)(tmplt, resolvedDir);

  return (0, _fn.green)(`Wooo!!! Everything is done.
Let's build something cool.`);
}