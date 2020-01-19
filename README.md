# :wind_chime: [Uint1Array](https://github.com/crislin2046/Uint1Array) ![npm downloads](https://img.shields.io/npm/dt/uint1array) ![version](https://img.shields.io/npm/v/uint1array)

JavaScript's missing TypedArray. Bit-level view of any underlying ArrayBuffer.

## API

The API simply mirrors a regular [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray). 

## Differences from the [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) API

The only two differences are that **Uint1Array** has special cases of the following standard `TypedArray` properties:

#### Uint1Array.BYTES_PER_ELEMENT

> Returns a number value of the element size. 

`BYTES_PER_ELEMENT` equals 0.125 in the case of an **Uint1Array**.

#### Uint1Array.length

> Static length property.

Static class member `length` value is 0 in the case of **Uint1Array**. 
For the actual length (number of bits), use `<Uint1Array>.length`.

# Get

`npm install --save uint1array`

# Using

You can use like an ordinary TypedArray:

```js
const message = "JAVASCRIPT ROCKS";
const chars = message.split('').map( c => c.charCodeAt(0) );

const buf = new ArrayBuffer(chars.length);
const bytes = new Uint8Array(buf);
const bits = new Uint1Array(buf);

bytes.set(chars);

console.log(`${bits}`); // Uint1Array [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0 ]
```

# More Information

- [Typed Arrays on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [Uint1Array on npm](https://www.npmjs.com/package/uint1array)




