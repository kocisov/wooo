#!/usr/bin/env node
import clear from 'clear'
import yargs from 'yargs'

import checkRc from './wooorc'
import installDeps from './install-deps'
import options from './options'

const argv = yargs
  .alias('v', 'version')
  .alias('d', 'dir')
  .alias('n', 'npm')
  .argv

clear()

options(argv)
  .checkRc(_options)
  .then(opts => {
    installDeps(opts)
  })
/*
  .then(dir => {
    addFiles(dir)
  })
*/
