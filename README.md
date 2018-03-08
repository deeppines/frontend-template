# Frontend template

[![Build Status](https://travis-ci.org/deeppines/frontend-template.svg?branch=master)](https://travis-ci.org/deeppines/frontend-template)
[![devDependencies Status](https://david-dm.org/deeppines/frontend-template/dev-status.svg)](https://david-dm.org/deeppines/frontend-template?type=dev)
[![GitHub version](https://badge.fury.io/gh/deeppines%2Ffrontend-template.svg)](https://github.com/deeppines/frontend-template)
[![GitHub release](https://img.shields.io/github/release/deeppines/frontend-template.svg)](https://github.com/deeppines/frontend-template/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/deeppines/frontend-template/blob/master/LICENSE)

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
+ CSS min (gulp-csso)
+ Any files concatenation (gulp-rigger)
+ Compiled files package in zip (gulp-zip)
+ Errors output without stopping gulp (gulp-plumber)
+ Sort HTML attributes (posthtml-attrs-sorter)
+ Merge and sort media queries in external file (gulp-merge-media-queries)
+ Build of png sprites (gulp-spritesmith)
+ Pug template and HTML preprocessor (gulp-pug)
+ HTML formatting (gulp-prettify)

## <a name="howto"></a> How it use

+ Install [node.js+npm](https://nodejs.org) and [Git](https://git-scm.com/downloads)
+ Install [Bower](http://bower.io/) (once!)

```js
 npm install -g bower
```

+ Copy files in the working directory and run it in the console.<br>
+ Initialize git in working directory

```js
 git init
```

+ Install npm dependencies

```js
 npm i
```

+ Start gulp

```js
 gulp
```

+ In browser open page with address [localhost:9000](http://localhost:9000/)

## <a name="maintasks"></a> Main tasks

+ `gulp vendor` download vendor plugins and filtered files
+ `gulp build` compile a project
+ `gulp dev` compile a project and launches watchers/server
+ `gulp zip` compile a project in zip
+ `gulp clean` del web folder

## <a name="structure"></a> Files and folders structure

```doc
frontend-template/                     # Project root
├── psd                                # Layout psd files folder
├── web                                # Compiled files
├── dest                               # Folder with zip archives
├── source                             # Source files
│   ├── fonts                          # Custom fonts folder
│   ├── images                         # Images folder
│   │   ├── content                    # Content Images folder
│   │   └── sprites                    # Sprites images folder
│   ├── js                             # JavaScript folder
│   |   ├── custom                     # Custom scripts folder
│   |   ├── functions                  # Functions scripts
│   │   └── common.js                  # Common JavaScript file
│   ├── layouts                        # Layouts folder
│   ├── modules                        # Modules folder
│   ├── pages                          # Pages folder
│   ├── scss                           # Scss style folder
│   |   ├── core                       # Base style, variables, mixins etc
│   |   ├── components                 # Components style folder
│   |   ├── vendors                    # Vendors plugins style
│   |   ├── _common.scss               # Other style
│   |   └── style.scss                 # Config styles file
│   └── index.pug                      # Index pug template file
|
├── .eslintignore                      # JavaScript linter config
├── .eslintrc                          # JavaScript linter config
├── .pug-lintrc                        # Pug linter config
├── .scss-lint.yml                     # Scss linter config
├── .csscomb.json                      # csscomb config
├── .travis.yml                        # TravisCI config
├── bower.json                         # Bower config
├── package.json                       # Dependencies for node.js
├── gulpfile.js                        # gulp.js config
├── browserslist                       # Autoprefixer browser list
├── LICENSE                            # License
└── README.md                          # File you read
```

## <a name="license"></a> License

[The MIT License (MIT)](https://github.com/deeppines/frontend-template/blob/master/LICENSE)
