<img src="./demo/src/logo.png" height="40px" width="40px" text-align="center">

# React CatchyModals

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React CatchyModals is a collection of delightful and catchy modals that can be customized to fit into any project.

The modals have a variety of transitions and styles suited to any in-application notification purpose.

## Demo
[View Demo](https://mford008.github.io/catchy-react-modals/)
![GIF](http://g.recordit.co/OGsODeoDti.gif)

## Installation
```bash
npm install --save react-catchymodals   # using NPM
yarn add react-catchymodals             # using yarn
```
## How to Use
```javascript
import React, {Component} from 'react';
import { Modal } from 'react-catchymodals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal
          className="rec-modal"
          title="A Rectangular Modal"
          children="Your text"
      </div>
    );
  }
}
```
## Contribute
Please read CONTRIBUTING.md and submit a pull request to me.


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
