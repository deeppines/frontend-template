# Frontend template documentation

Config for quick start web project with Gulp

## Contribution

Please report issues/bugs, feature requests and suggestions for improvements to the [issue tracker][issue].

## Changelog

Notable changes to this project documented in this file - [changelog.md][changelog]

## Features

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

## How it use

+ Install [node.js](https://nodejs.org)
+ Install [Bower](http://bower.io/) (once!)

  ```bash
  npm install -g bower
  ```

### With npm

+ Clone or [download](https://github.com/deeppines/frontend-template/tree/master) the project

  ```bash
  git clone git@github.com:deeppines/frontend-template.git -b master --depth 1 my-project
  ```

+ Install npm dependencies

  ```bash
  npm i
  ```

+ Start gulp

  ```bash
  gulp
  ```

#### Main tasks

+ `gulp vendor` download vendor plugins and filtered files
+ `gulp build` compile a project
+ `gulp dev` compile a project and launches watchers/server
+ `gulp zip` compile a project in zip
+ `gulp clean` del web folder

### With yarn

+ install the [Yarn](https://yarnpkg.com/en/docs/install)
+ Clone or [download](https://github.com/deeppines/frontend-template/tree/master) the project

  ```bash
  git clone git@github.com:deeppines/frontend-template.git -b master --depth 1 my-project
  ```

+ Go to project folder and run

  ```bash
  yarn run setup
  ```

+ Start gulp

  ```bash
  yarn run gulp
  ```

#### Main tasks

+ `yarn run vendor` download vendor plugins and filtered files
+ `yarn run build` compile a project
+ `yarn run dev` compile a project and launches watchers/server
+ `yarn run zip` compile a project in zip
+ `yarn run clean` del web folder

## Modules list

+ meta module
+ social module

## Mixins list

+ absolute-center-x
+ absolute-center-y
+ absolute-center
+ imgresponsive
+ placeholder
+ clearfix
+ nobutton
+ nolist
+ nolink
+ size

## Files and folders structure

```doc
frontend-template/                     # Project root
├── psd                                # Layout psd files folder
├── web                                # Compiled files
├── dest                               # Folder with zip archives
├── docs                               # Documentation
├── source                             # Source files
│   ├── components                     # Components folder
│   ├── pages                          # Pages folder
│   ├── static
│   │   ├── images                     # Images folder
│   │   │   ├── content                # Content Images folder
│   │   │   └── sprites                # Sprites images folder
│   │   ├── js                         # JavaScripts folder
│   │   │   ├── custom                 # Custom scripts folder
│   │   │   ├── functions              # Functions scripts
│   │   │   └── common.js              # Common JavaScript file
│   │   ├── scss                       # Scss style folder
│   │   │   ├── core                   # Base style, variables, mixins etc
│   │   │   ├── vendors                # Vendors plugins style
│   │   │   ├── _common.scss           # Other style
│   │   │   └── style.scss             # Config styles file
│   │   └── fonts                      # Custom fonts folder
│   └── views                          # Views folder
│
├── .editorconfig                      # Editor config file
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

## License

[The MIT License (MIT)][license]

[license]:https://github.com/deeppines/frontend-template/blob/master/LICENSE
[changelog]:https://github.com/deeppines/frontend-template/blob/master/CHANGELOG.md
[issue]:https://github.com/deeppines/frontend-template/issues
