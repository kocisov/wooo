#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const execSync = require('child_process').execSync
const fs = require('fs-extra')
const ora = require('ora')

const exec = (command, env) =>
  execSync(command, { stdio: 'inherit', env })

const files = [
  'components/Header/Header.css',
  'components/Header/Header.js',
  'containers/App.js',
  'containers/Home.js',
  'css/index.css',
  'index.js',
  'modules/index.js',
  'modules/loadingStatus.js',
  'store/configureStore.dev.js',
  'store/configureStore.prod.js',
  'store/index.js'
]

const argv = require('minimist')(process.argv.slice(2))
let useDir = argv.dir || '.'
let useYarn = argv.yarn || false

clear()

const firstSpinner = ora({
  text: 'Installing dependencies\n',
  color: 'yellow',
  spinner: 'dots3'
}).start()

exec(`${useYarn ? 'yarn add' : 'npm install --save'} react react-dom redux react-redux redux-thunk react-router react-router-redux`)

firstSpinner.succeed()

const secondSpinner = ora({
  text: `Creating your files into ${useDir} directory`,
  color: 'yellow',
  spinner: 'dots3'
}).start()

files.forEach(file => {
  try {
    let data = fs.readFileSync(`${__dirname}/files/${file}`, 'utf-8')
    fs.outputFile(`${useDir}/${file}`, data, err => {
      if (err) {
        console.log(chalk.red(`Couldn't create file ${useDir}/${file}`))
      }
      console.log(chalk.green(`Successfully created ${useDir}/${file}`))
    })
  } catch (err) {
    console.log(chalk.red(`Couldn't read file ${file}`))
  }
})

secondSpinner.succeed()
