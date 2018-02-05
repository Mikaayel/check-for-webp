[![npm version](https://badge.fury.io/js/check-for-webp.svg)](https://badge.fury.io/js/check-for-webp)
# check-for-webp

Client-side check for webp support in the browser based on Canvas (IE9+).

[caniuse](https://caniuse.com/#search=webp) webp browser coverage

## Installation
```
npm install check-for-webp
```
or 
```
yarn add check-for-webp
```

## How To Use
```
import webp from 'check-for-webp'
```
The check is done once and the result cached.

```
console.log(webp); // will output [boolean] true || false try it on FireFox and Chrome
```