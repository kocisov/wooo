# wooo [![npm](https://img.shields.io/npm/v/redux-wooo.svg)]() [![davidm](https://david-dm.org/kocisov/wooo.svg)]() [![Code Climate](https://codeclimate.com/github/Kocisov/wooo/badges/gpa.svg)](https://codeclimate.com/github/Kocisov/wooo)
> Add redux scaffolding into your folder

## What it does?
Install required dependencies and Create [files](https://github.com/Kocisov/wooo/tree/master/files) in specified path with:
  1. One [duck](https://github.com/erikras/ducks-modular-redux) module
  2. One stateless component with CSS
  3. React-router and react-router-redux reducer
  4. Redux store configuration for production and development / process.env.NODE_ENV check
  5. App Container with connect()

**This is just fast scaffolding, not actual code!**

## Installation
```bash
# with yarn
$ [sudo] yarn global add redux-wooo

# with npm
$ [sudo] npm install -g redux-wooo
```

## Usage
```
wooo [args]
  --version, -v            Show redux-wooo's version.
  --npm, -n                Use npm for installing dependencies. (wooo uses Yarn by default)
  --dir, -d [path]         Directory, where do you want to create files by wooo. (You should be in directory of package.json!)
```

**Default path is your current location in bash!**
