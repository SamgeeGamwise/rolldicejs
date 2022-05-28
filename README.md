# JavaScript Dice Roller

Slim and simple dice roller

## Install

**Install with npm**
```
$ npm install rolldicejs
```
**Install with yarn**
```
$ yarn add rolldicejs
```

## Start using in your app

```js
// ESM
import Dice from 'rolldicejs';

// CommonJs
const Dice = require('rolldicejs').default;
```

## Docs

```
Dice.roll(numOfSides: number) -> number
Dice.roll(count: number, numOfSides: number) -> number
Dice.roll(count: number, numOfSides: number, details: boolean) -> number[]
```