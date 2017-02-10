#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const execSync = require('child_process').execSync
const fs = require('fs-extra')

const exec = (command, env) =>
  execSync(command, { stdio: 'inherit', env })

const files = [
  'components/Header/Header.css',
  'components/Header/Header.js',
  'components/Header/Header.test.js',
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
const useDir = argv.dir || '.'

clear()

console.log(chalk.yellow('Installing dependencies with yarn.'))
exec(`yarn add redux react-redux redux-thunk react-router react-router-redux`)

console.log(chalk.yellow(`Creating files in ${useDir} directory.`))
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
