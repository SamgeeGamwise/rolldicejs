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
Dice.roll(dnd: string) -> number
Dice.roll(numOfSides: number) -> number
Dice.roll(count: number, numOfSides: number) -> number
Dice.roll(count: number, numOfSides: number, details: boolean) -> number[]
```

## Usage

```
Dice.roll("2d6") -> 5
Dice.roll(20) -> 14
Dice.roll(2, 6) -> 7
Dice.roll(4, 6, true) -> [6, 2, 4, 2]
```