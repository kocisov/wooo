<p align="center">
  <img title="" src="https://kocisov.github.io/wooo/static/deer.svg" alt="" width="250" />
</p>

# Wooo [![Build Status](https://travis-ci.org/Kocisov/wooo.svg?branch=master)](https://travis-ci.org/Kocisov/wooo) [![npm](https://img.shields.io/npm/v/redux-wooo.svg)](http://npmjs.com/redux-wooo) [![davidm](https://david-dm.org/kocisov/wooo.svg)](https://david-dm.org/kocisov/wooo) [![Code Climate](https://codeclimate.com/github/Kocisov/wooo/badges/gpa.svg)](https://codeclimate.com/github/Kocisov/wooo)
> Tool that helps you add Redux to your React project without pain

## Main goal of wooo
Let users write one command instead of creating 5 folders, 10+ files and installing 4 dependencies for Redux to get going.

## So, what does wooo do?
Install required dependencies and Create [files](https://github.com/Kocisov/wooo/tree/master/files) in specified path with:
  1. One [duck](https://github.com/erikras/ducks-modular-redux) module
  2. One Stateless Component with CSS
  3. React-router and react-router-redux reducer (You can choose v4 or v3)
  4. Redux store configuration for production and development by process.env.NODE_ENV check
  5. App Container with connect()

**This is just fast scaffolding, not actual code!**

## Installation
**Node version 6 or higher is required!**
```bash
# with yarn
$ yarn global add redux-wooo

# with npm
$ npm install -g redux-wooo
```

## Usage
```
wooo [options]
  --version, -v           Show redux-wooo's version.
  --template, -t [name]   Specify which template should Wooo create (templates directory)
  --npm, -n               Use npm for installing dependencies. (wooo uses Yarn by default)
  --dir, -d [path]        Directory, where do you want to create files by wooo. (Dependencies are written into package.json (yarn creates new package.json if is not existing) in current directory)
```

**Default path for files is src folder in your current location in command line!**
