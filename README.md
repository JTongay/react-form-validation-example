## TSX React Starter Kit
This is a starter kit for bootstrapping React applications in TypeScript. Complete with unit/integration testing platforms, material ui, starter error boundary, and written in a modern React style (v16.8)

## Motivation
When trying to bootstrap a new React application, it can sometimes be a headache. Sure, create-react-app is a thing and it has extensions, but I couldn't find any that had exactly what I wanted. So then I decided to create my own shell React App with everything I wanted, and maybe one day I will make this an extension of create-react-app.

## Build status
** Doesn't work for now **

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)
 
## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used

<b>Built with</b>
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://material-ui.com/)
- [SASS](https://sass-lang.com/)

<b>Tested with</b>
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress](https://www.cypress.io/)

## Installation
- Install project dependencies
```shell
yarn install
```
- Install integration test dependencies
```shell
cd integration/
yarn install
```

## Tests
There are two different test suites and methodologies. Unit and Integration tests.

### Unit Tests
Unit tests run automatically as part of the dev build server, but if you were to want to run them independently:

```shell
yarn test
```

### Integration Tests (Cypress)
Cypress is a testing framework that is meant to be used along-side your application.

- Start your dev server in one shell tab
```shell
yarn start
```
- In another shell tab, move into the integration directory
```shell
cd integration/
```
- Open the Cypress test runner in the integration directory
```shell
yarn start
```
- Click on your test files to run, or click the button to run all specs

## How to use?
This project follows traditional React design patterns. Presentation/Functional components, Hooks, Error Boundaries, etc. Folder structure should be self explanatory, but components live in components/, feature components live in sections/ and any shared services like in services/

## Contribute

** Contribution guideline coming soon... **


## License
MIT © [Joseph Tongay](http://josephtongay.me)
