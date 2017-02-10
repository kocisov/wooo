# wooo [![npm](https://img.shields.io/npm/v/redux-wooo.svg)]() [![davidm](https://david-dm.org/kocisov/wooo.svg)]() [![Code Climate](https://codeclimate.com/github/Kocisov/wooo/badges/gpa.svg)](https://codeclimate.com/github/Kocisov/wooo)
> Add redux scaffolding into your folder

## What it does?
Install required dependencies and Create [files](https://github.com/Kocisov/wooo/tree/master/files) in specified path with:
  1. One [duck](https://github.com/erikras/ducks-modular-redux) module
  2. One stateless component with CSS and Rendering test
    - Structured as
    ```
    /components
      /Header
        /Header.js
        /Header.css
        /Header.test.js
    ```
  3. React-router and react-router-redux reducer
  4. Redux store configuration for production and development
  5. Two containers

**This is just fast scaffolding, not actual code!**

## Installation
> Yarn is required since version 0.0.9

```bash
$ [sudo] yarn global add redux-wooo
```

## Usage
```
wooo [args]
  --dir [path]             Directory, where wooo create files dependencies
```

**Default path is your current location in bash!**
