<p align="center">
  <img title="" src="https://kocisov.github.io/wooo/static/deer.svg" alt="" width="200" />
</p>

# Wooo [![Build Status](https://travis-ci.org/Kocisov/wooo.svg?branch=master)](https://travis-ci.org/Kocisov/wooo) [![npm](https://img.shields.io/npm/v/redux-wooo.svg)](http://npmjs.com/redux-wooo) [![davidm](https://david-dm.org/kocisov/wooo.svg)](https://david-dm.org/kocisov/wooo) [![Code Climate](https://codeclimate.com/github/Kocisov/wooo/badges/gpa.svg)](https://codeclimate.com/github/Kocisov/wooo)
> Tool that helps you add Redux to your React project without pain

## Main goal of wooo
Let users write one command instead of creating 5 folders, 10+ files and installing 4 dependencies for Redux to get going.

## So, what does wooo do?
**Wooo** does install required dependencies and create [template files](https://github.com/Kocisov/wooo/tree/master/templates) in specified path with:
  1. One [duck](https://github.com/erikras/ducks-modular-redux) module for user login/logout
  2. One stateless Component with CSS
  3. React-router and react-router-redux reducer (You can choose v4 or v3 (default) template)
  4. Redux store configuration for production and development by process.env.NODE_ENV check
  5. One Container with connected props by connect() function

**This is pretty much just fast scaffolding, not actual code! But it can be edited to be production-ready with few more lines.**

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
  --help, -h                Show Wooo's usage.
  --version, -v             Show Wooo's version.
  --template, -t [name]     Specify which template should Wooo create (templates directory)
  --npm, -n                 Use npm for installing dependencies. (Wooo uses Yarn by default)
  --dir, -d [path]          Directory, where do you want to create files by Wooo. (Dependencies are written into package.json (yarn creates new package.json if it is not present) in current directory)
```

**Default path for files is src folder in your current location in command line!**

## Contribution
If you want to add template, just fork the repo and add your template files in folder into [/template](https://github.com/Kocisov/wooo/tree/master/templates).

This is not ideal and in the future Wooo will have better system for this.
