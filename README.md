# wooo [![npm](https://img.shields.io/npm/v/redux-wooo.svg)]() [![davidm](https://david-dm.org/kocisov/wooo.svg)]()
> Add redux scaffholding into your folder

## What it does?
Creates [files](https://github.com/Kocisov/wooo/tree/master/files) in specified path with:
  1. Two containers
  2. One [duck](https://github.com/erikras/ducks-modular-redux) module
  3. React-router and react-router-redux reducer
  4. Redux store configuration for production and development

**This is just fast scaffholding, not actual code!**

## Installation
```bash
npm install -g redux-wooo

# in your package, you will need to install these packages
npm install --save redux redux-thunk react-router react-redux react-router-redux
```

## Usage
```bash
wooo path-for-files
```

**Default path is your current location in bash!**