#!/usr/bin/env node
const chalk = require('chalk')
const clear = require('clear')
const execSync = require('child_process').execSync
const fs = require('fs-extra')

clear()

const exec = (command, env) =>
  execSync(command, { stdio: 'inherit', env })

const argv = require('minimist')(process.argv.slice(2))
const useDir = argv.dir || '.'

console.log(chalk.yellow('Installing dependencies with yarn.'))
exec(`yarn add redux react-redux redux-thunk react-router react-router-redux`)

console.log(chalk.yellow(`Creating files in ${useDir} directory.`))
fs.copy(__dirname + '/files', useDir, err => {
  if (err) {
    return console.error('Couldn\'t create files.', err)
  }

  console.log()
  console.log(chalk.green('Successfully created wooo\'s files'))
  console.log(chalk.blue('Redux is ready for use!'))
})
