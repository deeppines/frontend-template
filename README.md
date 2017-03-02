# Frontend template
Config for quick start web project with Gulp

1. [Features](#features)
2. [How it use](#howto)
3. [Main tasks](#maintasks)
4. [Sass guide](https://github.com/egorkir/sass-guide)

## <a name="features"></a> Features
+ Fast and easy collector (gulp)
+ Server and synchronous site testing in the browser (using the browser-sync)
+ Autosubstitution of vendor prefixes in CSS (autoprefixer)
+ SASS preprocessor (gulp-sass)
+ CSS formatting (gulp-csscomb)
+ Any files concatenation (gulp-rigger)
+ Compiled files package in zip (gulp-zip)

## <a name="howto"></a> How it use
##### - Install <a href="https://nodejs.org">node.js+npm</a> and <a href="https://git-scm.com/downloads">Git</a>
##### - Install <a href="http://bower.io/">Bower</a>

```js
$ npm install -g bower
```
Скопируйте файлы в рабочую директорию и запустите в ней консоль.<br>
Инициализируем в рабочей дериктории git

```js
$ git init
```
Запускаем npm

```js
$ npm i
```
Стартуем проект и запускаем сборщик

```js
$ gulp
```
## <a name="maintasks"></a> Main tasks
+ `gulp bower` download vendor plugins and filtered files
+ `gulp build` compile a project
+ `gulp dev` compile a project and launches watchers/server
+ `gulp zip` compile a project in zip
