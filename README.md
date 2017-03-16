<p align="center">
  <img title="" src="https://kocisov.github.io/wooo/static/deer.svg" alt="" width="250" />
</p>

# Wooo [![Build Status](https://travis-ci.org/Kocisov/wooo.svg?branch=next)](https://travis-ci.org/Kocisov/wooo) [![npm](https://img.shields.io/npm/v/redux-wooo.svg)](http://npmjs.com/redux-wooo) [![davidm](https://david-dm.org/kocisov/wooo.svg)](https://david-dm.org/kocisov/wooo) [![Code Climate](https://codeclimate.com/github/Kocisov/wooo/badges/gpa.svg)](https://codeclimate.com/github/Kocisov/wooo)
> Tool that helps you add Redux to your React project without pain

[https://kocisov.github.io/wooo/](https://kocisov.github.io/wooo/)

## Main goal of wooo
Let users write one command/file instead of creating 5 folders, 10+ files and installing 5 dependencies for Redux to get going.

## So, what does wooo do?
Install required dependencies and Create [files](https://github.com/Kocisov/wooo/tree/master/files) in specified path with:
  1. One [duck](https://github.com/erikras/ducks-modular-redux) module
  2. One Stateless Component with CSS
  3. React-router and react-router-redux reducer (You can choose v4 or v3)
  4. Redux store configuration for production and development by process.env.NODE_ENV check
  5. App Container with connect()

**This is just fast scaffolding, not actual code!**

## Installation
```bash
# with yarn
$ yarn global add redux-wooo

# with npm
$ npm install -g redux-wooo
```

## Usage
**You can choose one of two options for using wooo:**

### Option 1
1. Create ```.wooorc``` file in project directory with settings
```js
{
  "manager": "yarn", // package-manager [yarn / npm]
  "router": "v4", // react-router version [v3 / v4]
  "directory": "./src" // path for wooo's files
}
```
2. Run command ```wooo``` in directory

### Option 2
**Use CLI commands**
```
wooo [options]
  --version, -v           Show redux-wooo's version.
  --npm, -n               Use npm for installing dependencies. (wooo uses Yarn by default)
  --dir, -d [path]        Directory, where do you want to create files by wooo. (Dependencies are written into package.json (if available) in current directory)
```

**Default path for files is your current location in command line!**
