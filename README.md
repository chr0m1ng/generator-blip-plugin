# Generator blip Plugin

> Yeoman generator for a blip Plugin and ready to Kubernetes and helm.

[![NPM Version][npm-badge]][npm-url]
[![Downloads][npm-downloads-badge]][npm-downloads-url]
[![Travis Status][travis-badge]][travis-url]
[![CircleCI Status][circleci-badge]][circleci-url]
[![AppVeyor Status][appveyor-badge]][appveyor-url]
[![Coveralls Status][coveralls-badge]][coveralls-url]
[![License][license-badge]][license-url]

## File Structure

Assuming your folder is called `blip-plugin-project`.
Whatever name you choose will replace all occurrences of that string in the project

```json
 📁blip-plugin-project
 |__📁charts
    |__📁blip-plugin-project
    |   |__📁templates
    |   |   |__📃{_helpers.tpl}
    |   |   |__📃{autoscale.yaml}
    |   |   |__📃{deployment.yaml}
    |   |   |__📃{ingress.yaml}
    |   |   |__📃{secrets.yaml}
    |   |   |__📃{service.yaml}
    |   |__📃{.helmignore}
    |   |__📃{Chart.yaml}
    |   |__📃{values.yaml}
 |__📁src
    |__📁api
    |   |__📃{application-service.js}
    |   |__📃{common-service.js}
    |__📁components
    |   |__📁SomeComponent
    |   |   |__📃{SomeComponent.js}
    |   |   |__📃{index.js}
    |__📁contexts
    |   |__📃{CommonContext.js}
    |__📁hooks
    |   |__📃{content-localizer.js}
    |__📁reducers
    |   |__📃{common-reducer.js}
    |__📃{_globals.scss}
    |__⚙️{appsettings.json}
    |__📃{index.js}
    |__📃{index.scss}
    |__📃{service-worker.js}
|__📁test
|   |__📃{README.md}
|__⚙️.editorconfig
|__⚙️.eslintignore
|__⚙️.eslintrc
|__⚙️.gitattributes
|__⚙️.gitignore
|__⚙️.prettierrc
|__🐋Dockerfile
|__⚙️jsconfig.json
|__⚙️LICENSE
|__⚙️package.json
|__⚙️README.md
```

## Usage

### Generate without install Yeoman

```bash
# Create a directory for your project && Change into directory
$ mkdir my-plugin-name && cd my-plugin-name

# Generate a project
$ npm init yo generator-blip-plugin
```

### Generate installing Yeoman

- Install Yeoman

```bash
# npm: installed yeoman globally
$ npm install -g yo
```

- Install Generator

```bash
# npm: installed blip plugin generator
$ npm install -g generator-blip-plugin
```

- Creating a project

```bash
# mkdir: created dir `my-plugin-name`
# cd: navigated to dir `my-plugin-name`
$ mkdir my-plugin-name && cd my-plugin-name

# yo: ask questions and generate blip plugin project
$ yo blip-plugin
```

- Running project

| Action                                     | Usage               |
|--------------------------------------------|---------------------|
| Create the `dependencies` and `files` JSON | `npm run prepare`   |
| Linting code                               | `npm run lint`      |
| Running unit tests                         | `npm run jest`      |
| Running lint + tests                       | `npm test`          |
| Running code coverage                      | `npm run coverage`  |
| Sending coverage results to Coveralls.io   | `npm run coveralls` |

## Development

### IF YOU ADD NEW FILES OR DEPENDENCIES TO THE TEMPLATE YOU MUST RUN PREPARE SCRIPT

```bash
# npm: run prepare script which creates dependencies.json and files.json
$ npm run prepare
```

### Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [npm](https://www.npmjs.com/)
- Install Yeoman CLI

```bash
# npm: installed yeoman globally
$ npm install -g yo
```

### Clone the repo

```bash
# git: clone this repo
$ git clone https://github.com/chr0m1ng/generator-blip-plugin.git
```

### Run generator

```bash
# Change into directory
$ cd generator-blip-plugin

# Link generator
$ npm link

# Run generator
$ yo blip-plugin
```

## Author

- [Gabriel Santos](https://twitter.com/alitalvez)

This generator was created based on original [oss generator](https://github.com/robertoachar/generator-oss-project) created by [Roberto Achar](https://twitter.com/robertoachar).

## License

[MIT](https://github.com/chr0m1ng/generator-blip-plugin/blob/master/LICENSE)

[npm-badge]: https://img.shields.io/npm/v/generator-blip-plugin.svg
[npm-url]: https://www.npmjs.com/package/generator-blip-plugin
[npm-downloads-badge]: https://img.shields.io/npm/dt/generator-blip-plugin.svg
[npm-downloads-url]: https://www.npmjs.com/package/generator-blip-plugin
[travis-badge]: https://travis-ci.org/chr0m1ng/generator-blip-plugin.svg?branch=master
[travis-url]: https://travis-ci.org/chr0m1ng/generator-blip-plugin
[circleci-badge]: https://circleci.com/gh/chr0m1ng/generator-blip-plugin/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/chr0m1ng/generator-blip-plugin
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/chr0m1ng/generator-blip-plugin?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/chr0m1ng/generator-blip-plugin
[coveralls-badge]: https://coveralls.io/repos/github/chr0m1ng/generator-blip-plugin/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/chr0m1ng/generator-blip-plugin?branch=master
[license-badge]: https://img.shields.io/github/license/chr0m1ng/generator-blip-plugin.svg
[license-url]: https://opensource.org/licenses/MIT
