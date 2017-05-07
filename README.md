# Frontend template
[![Build Status](https://travis-ci.org/egorkir/frontend-template.svg?branch=master)](https://travis-ci.org/egorkir/frontend-template)
[![devDependencies Status](https://david-dm.org/egorkir/frontend-template/dev-status.svg)](https://david-dm.org/egorkir/frontend-template?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/egorkir/frontend-template/blob/master/LICENSE)

Config for quick start web project with Gulp

1. [Features](#features)
2. [How it use](#howto)
3. [Main tasks](#maintasks)
4. [Files and folders structure](#structure)
5. [License](#license)

## <a name="features"></a> Features
+ Fast and easy collector (gulp)
+ Server and synchronous site testing in the browser (using the browser-sync)
+ Autosubstitution of vendor prefixes in CSS (autoprefixer)
+ SASS preprocessor (gulp-sass)
+ CSS formatting (gulp-csscomb)
+ Any files concatenation (gulp-rigger)
+ Compiled files package in zip (gulp-zip)
+ Errors output without stopping gulp (gulp-plumber)
+ Sort HTML attributes (posthtml-attrs-sorter)
+ Merge and sort media queries in external file (gulp-merge-media-queries)
+ Build of png sprites (gulp-spritesmith)
+ Pug template and HTML preprocessor (gulp-pug)
+ HTML formatting (gulp-prettify)

## <a name="howto"></a> How it use
- Install <a href="https://nodejs.org">node.js+npm</a> and <a href="https://git-scm.com/downloads">Git</a>
- Install <a href="http://bower.io/">Bower</a> (once!)

```js
$ npm install -g bower
```
- Copy files in the working directory and run it in the console.<br>
- Initialize git in working directory

```js
$ git init
```
- Install npm dependencies

```js
$ npm i
```
- Start gulp

```js
$ gulp
```

- In browser open page with address <a href="http://localhost:9000/">http://localhost:9000/</a>

## <a name="maintasks"></a> Main tasks
+ `gulp vendor` download vendor plugins and filtered files
+ `gulp build` compile a project
+ `gulp dev` compile a project and launches watchers/server
+ `gulp zip` compile a project in zip

## <a name="structure"></a> Files and folders structure
```
frontend-template/                     # Project root
├── psd                                # Layout psd files folder
├── web                                # Compiled files
├── dest                               # Folder with zip archives
├── source                             # Source files
│   ├── fonts                          # Custom fonts folder
│   ├── images                         # Images folder
│   │   ├── content                    # Content Images folder
│   │   └── sprites                    # Static files
│   ├── js                             # Scripts folder
│   |   ├── custom                     # Custom scripts folder
│   |   ├── functions                  # Functions scripts
│   │   └── common.js                  # Common JavaScript file
│   ├── modules                        # Modules folder
│   ├── scss                           # Scss style folder
│   |   ├── core                       # JavaScript files
│   |   ├── components                 # Components style folder
│   |   ├── vendors                    # JavaScript files
│   |   ├── _common.scss               # Other style
│   |   ├── _media.scss                # @media
│   |   └── style.scss                 # Config styles file
│   └── index.pug                      # Index pug template file
|
├── .eslintignore                      # JavaScript linter config
├── .eslintrc                          # JavaScript linter config
├── .pug-lintrc                        # Pug linter config
├── .scss-lint.yml                     # Scss linter config
├── bower.json                         # Bower config
├── package.json                       # Dependencies for node.js
├── .csscomb.json                      # csscomb config
├── .travis.yml                        # TravisCI config
├── gulpfile.js                        # gulp.js config
├── browserslist                       # Autoprefixer browser list
├── LICENSE                            # License
└── README.md                          # File you read
```

## <a name="license"></a> License
[The MIT License (MIT)](https://github.com/egorkir/frontend-template/blob/master/LICENSE)
