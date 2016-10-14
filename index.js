#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const fs = require('fs-extra')
const shelljs = require('shelljs')
const ora = require('ora')

const files = [
  'containers/App.js',
  'containers/Input.js',
  'modules/index.js',
  'modules/loadingStatus.js',
  'store/index.js',
  'store/configureStore.dev.js',
  'store/configureStore.prod.js',
  'index.js',
]

const argv = require('minimist')(process.argv.slice(2))
let _p = argv._[0] || '.'

clear()

const firstSpinner = ora({
  text: 'Installing dependencies\n',
  color: 'yellow',
  spinner: 'dots3'
}).start()
shelljs.exec('npm install --save react react-dom redux react-redux redux-thunk react-router react-router-redux')
firstSpinner.succeed()

const secondSpinner = ora({
  text: `Creating your files into ${_p} directory`,
  color: 'yellow',
  spinner: 'dots3'
}).start()
setTimeout(() => {
  files.forEach(file => {
    try {
      let data = fs.readFileSync(`${__dirname}/files/${file}`, 'utf-8')
      fs.outputFile(`${_p}/${file}`, data, err => {
        if (err) {
          console.log(chalk.red(`Couldn't create file ${_p}/${file}`))
        }
        console.log(chalk.green(`Successfully created ${_p}/${file}`))
      })
    } catch (err) {
      console.log(chalk.red(`Couldn't read file ${file}`))
    }
  })
  secondSpinner.succeed()
}, 1000)
