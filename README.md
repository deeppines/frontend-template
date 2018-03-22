# Frontend template

[![Build Status](https://travis-ci.org/deeppines/frontend-template.svg?branch=master)](https://travis-ci.org/deeppines/frontend-template)
[![devDependencies Status](https://david-dm.org/deeppines/frontend-template/dev-status.svg)](https://david-dm.org/deeppines/frontend-template?type=dev)
[![GitHub version](https://badge.fury.io/gh/deeppines%2Ffrontend-template.svg)](https://github.com/deeppines/frontend-template)
[![GitHub release](https://img.shields.io/github/release/deeppines/frontend-template.svg)](https://github.com/deeppines/frontend-template/releases)
[![changelog](https://img.shields.io/badge/link-changelog-blue.svg)](https://github.com/deeppines/frontend-template/blob/master/CHANGELOG.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/deeppines/frontend-template/blob/master/LICENSE)

Config for quick start web project with Gulp

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

## Contribution

Please report issues/bugs, feature requests and suggestions for improvements to the [issue tracker][issue].

## Documentation

See more in full documentation - [link][documentation].

[issue]:https://github.com/deeppines/frontend-template/issues
[documentation]:https://github.com/deeppines/frontend-template/blob/master/docs/fulldoc.md
