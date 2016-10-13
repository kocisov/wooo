#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const fs = require('fs-extra')

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
let _p
if (!argv._[0] || !argv._[0].length > 0) {
  _p = '.'
} else {
  _p = argv._[0]
}

clear()
console.log(chalk.yellow(`Creating your files into ${_p} directory`))

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
