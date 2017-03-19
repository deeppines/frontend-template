# Frontend template
Config for quick start web project with Gulp

[![Build Status](https://travis-ci.org/egorkir/frontend-template.svg?branch=master)](https://travis-ci.org/egorkir/frontend-template)

1. [Features](#features)
2. [How it use](#howto)
3. [Main tasks](#maintasks)
4. [Sass guide](https://github.com/egorkir/sass-guide)
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

## <a name="license"></a> License
[The MIT License (MIT)](https://github.com/egorkir/frontend-template/blob/master/LICENSE)
