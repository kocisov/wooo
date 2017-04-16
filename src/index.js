#!/usr/bin/env node
import yargs from 'yargs';
import 'babel-polyfill';

import checkRc from './wooorc';
import installDeps from './install-deps';
import options from './options';
import createFiles from './create-files';

const argv = yargs
  .alias('v', 'version')
  .alias('d', 'dir')
  .alias('n', 'npm')
  .alias('t', 'template').argv;

options(argv).then(opts => {
  checkRc(opts).then(depOpts => {
    installDeps(depOpts).then(directory => {
      createFiles(directory);
    });
  });
});
