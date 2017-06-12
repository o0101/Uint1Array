# Uint1Array - JavaScript's Missing TypedArray 

  The Uint1Array typed array represents an array of 1-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

  ## Syntax

  ```js
    new Uint1Array(); // *not* new in ES2017
    new Uint1Array(length);
    new Uint1Array(typedArray);
    new Uint1Array(object);
    new Uint1Array(buffer [, byteOffset [, length]]);
  ```

  For more information about the constructor syntax and the parameters, see [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

  ## Properties

  ### Uint1Array.BYTES_PER_ELEMENT

  Returns a number value of the element size. 0.125 in the case of an Uint1Array.

  ### Uint1Array.length

  Static length property whose value is 0. For the actual length (number of elements), see Uint1Array.prototype.length.

  ### Uint1Array.name

  Returns the string value of the constructor name. In the case of the Uint1Array type: "Uint1Array".

  ### Uint1Array.prototype

  Prototype for the TypedArray objects.

  ## Methods

  ### Uint1Array.from()

  Creates a new Uint1Array from an array-like or iterable object. See also Array.from().

  ### Uint1Array.of()
  
  Creates a new Uint1Array with a variable number of arguments. See also Array.of().

  ## Uint1Array prototype

  All Uint1Array objects inherit from %TypedArray%.prototype.

  ## Properties

  ### Uint1Array.prototype.constructor

  Returns the function that created an instance's prototype. This is the Uint1Array constructor by default.

  ### Uint1Array.prototype.buffer Read only

  Returns the ArrayBuffer referenced by the Uint1Array Fixed at construction time and thus read only.

  ### Uint1Array.prototype.byteLength Read only
  Returns the length (in bytes) of the Uint1Array. Fixed at construction time and thus read only.
  Uint1Array.prototype.byteOffset Read only
  Returns the offset (in bytes) of the Uint1Array from the start of its ArrayBuffer. Fixed at construction time and thus read only.
  Uint1Array.prototype.length Read only
  Returns the number of elements held in the Uint1Array. Fixed at construction time and thus read only.
  Methods

  Uint1Array.prototype.copyWithin()
  Copies a sequence of array elements within the array. See also Array.prototype.copyWithin().
  Uint1Array.prototype.entries()
  Returns a new Array Iterator object that contains the key/value pairs for each index in the array. See also Array.prototype.entries().
  Uint1Array.prototype.every()
  Tests whether all elements in the array pass the test provided by a function. See also Array.prototype.every().
  Uint1Array.prototype.fill()
  Fills all the elements of an array from a start index to an end index with a static value. See also Array.prototype.fill().
  Uint1Array.prototype.filter()
  Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also Array.prototype.filter().
  Uint1Array.prototype.find()
  Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. See also Array.prototype.find().
  Uint1Array.prototype.findIndex()
  Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also Array.prototype.findIndex().
  Uint1Array.prototype.forEach()
  Calls a function for each element in the array. See also Array.prototype.forEach().
  Uint1Array.prototype.includes() 
  Determines whether a typed array includes a certain element, returning true or false as appropriate. See also Array.prototype.includes().
  Uint1Array.prototype.indexOf()
  Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also Array.prototype.indexOf().
  Uint1Array.prototype.join()
  Joins all elements of an array into a string. See also Array.prototype.join().
  Uint1Array.prototype.keys()
  Returns a new Array Iterator that contains the keys for each index in the array. See also Array.prototype.keys().
  Uint1Array.prototype.lastIndexOf()
  Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also Array.prototype.lastIndexOf().
  Uint1Array.prototype.map()
  Creates a new array with the results of calling a provided function on every element in this array. See also Array.prototype.map().
  Uint1Array.prototype.move()  Unimplemented
  Former non-standard version of Uint1Array.prototype.copyWithin().
  Uint1Array.prototype.reduce()
  Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also Array.prototype.reduce().
  Uint1Array.prototype.reduceRight()
  Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also Array.prototype.reduceRight().
  Uint1Array.prototype.reverse()
  Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also Array.prototype.reverse().
  Uint1Array.prototype.set()
  Stores multiple values in the typed array, reading input values from a specified array.
  Uint1Array.prototype.slice()
  Extracts a section of an array and returns a new array. See also Array.prototype.slice().
  Uint1Array.prototype.some()
  Returns true if at least one element in this array satisfies the provided testing function. See also Array.prototype.some().
  Uint1Array.prototype.sort()
  Sorts the elements of an array in place and returns the array. See also Array.prototype.sort().
  Uint1Array.prototype.subarray()
  Returns a new Uint1Array from the given start and end element index.
  Uint1Array.prototype.values()
  Returns a new Array Iterator object that contains the values for each index in the array. See also Array.prototype.values().
  Uint1Array.prototype.toLocaleString()
  Returns a localized string representing the array and its elements. See also Array.prototype.toLocaleString().
  Uint1Array.prototype.toString()
  Returns a string representing the array and its elements. See also Array.prototype.toString().
  Uint1Array.prototype[@@iterator]()
  Returns a new Array Iterator object that contains the values for each index in the array.
  ExamplesEDIT
  Different ways to create a Uint1Array:

  // From a length
  var uint8 = new Uint1Array(2);
  uint8[0] = 42;
  console.log(uint8[0]); // 42
  console.log(uint8.length); // 2
  console.log(uint8.BYTES_PER_ELEMENT); // 1

  // From an array
  var arr = new Uint1Array([21,31]);
  console.log(arr[1]); // 31

  // From another TypedArray
  var x = new Uint1Array([21, 31]);
  var y = new Uint1Array(x);
  console.log(y[0]); // 21

  // From an ArrayBuffer
  var buffer = new ArrayBuffer(8);
  var z = new Uint1Array(buffer, 1, 4);

  // From an iterable 
  var iterable = function*(){ yield* [1,2,3]; }(); 
  var uint8 = new Uint1Array(iterable); 
  // Uint1Array[1, 2, 3]


# Why ? 


Bit fields are useful things. Handling binary data in JavaScript got a big boost with ES2017's Typed Arrays, new native constructs to enable views of binary data of different bit widths using an underlying `ArrayBuffer` of bytes.

Conspicuous in its absence was the Uint1Array, the bit field.

Now, for your pleasure, it has arrived. 

Unfortunately it doesn't have all the bells and whistles of a native implementation, particularly lacking is the beautiful output format of the console of the original typed arrays. However, no matter. It's still good.

The API is copied exactly from the spec. Submit a pull request or open an issue if you notice something is amiss, or if you see any way to improve it.

# Installing

`npm install uint1array`

or 

`bower install uint1array`

# Using

You can use like an ordinary typed array:

```js
  const coerced_bits = new Uint1Array( [1,2,3,0] );
  console.log( `${coerced_bits}` ); // Uint1Array [ 1, 1, 1, 0 ]
```

Or by passing a TypedArray's `.buffer` property, or any other `ArrayBuffer` you can use it as a bitfield view to the underlying TypedArray data.

```js
  const message = "JAVASCRIPT ROCKS";
  const byte_values = message.split('').map( c => c.charCodeAt(0) );

  const bytes = new Uint8Array( byte_values );
  const bit_field = new Uint1Array( bytes.buffer );

  console.log( `${bit_field}` ); // Uint1Array [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0 ]
```

# More Information

- [Typed Arrays on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)




