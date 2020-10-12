"use strict";
import assert from 'assert';
import Uint1Array from './index.js';

const TESTS = [
  [ 'sort', '0001111111' ],
  [ 'reverse', '0111111010' ],
  [ 'map', '1010000001',  x => x + 1 ],
  [ 'map', '1010000001', x => x ^ 1 ]
];

test();

function test() {
  test_display();
  test_methods();
  test_bitfield();
  test_readme_1();
  test_readme_2();
  test_readme_3();
  test_constructor();
  console.log("Tests pass.");
}

function test_display() {
  const bits = new Uint1Array(128);
  console.log("Bits", bits );  
}

function test_methods() {
  const source = [0,1,0,1,1,1,1,1,1,0];
  let score = 0;
  TESTS.forEach( ([method, expected, ...args]) => {
    const subject = new Uint1Array( Array.from( source ) );
    const result = exec( subject, method, ...args );
    const score_1 = result == expected ? "PASS" : "FAIL";
    if ( score_1 == "PASS" ) score += 1;
    console.log( `Test ${method} expected ${expected}, got ${result}, OK? ${score_1}` );
  });
  console.log( `Tests: ${ TESTS.length }, PASSED: ${ score }, FAILED : ${ TESTS.length - score }` );
}

function test_bitfield() {
  const source = new Uint32Array([ 2378462, 324578634, 3458743 ]);
  const bits = new Uint1Array( source );
  console.log( source, bits+'');
  const bitfield = new Uint1Array( source.buffer ); 
  console.log( source, bitfield+'');
}

function test_readme_1() {
  const coerced_bits = new Uint1Array( [1,2,3,0] );
  console.log( `${coerced_bits}` ); // Uint1Array [ 1, 1, 1, 0 ]
}

function test_readme_2() {
  const message = "JAVASCRIPT ROCKS";
  const byte_values = message.split('').map( c => c.charCodeAt(0) );

  const bytes = new Uint8Array( byte_values );
  const bit_field = new Uint1Array( bytes.buffer );

  console.log( `${bit_field}` ); // Uint1Array [ ] 
}

function test_readme_3() {
  // From a length
  var uint8 = new Uint1Array(2);
  uint8[0] = 42;
  console.log(uint8[0]); // 1
  console.log(uint8.length); // 2
  console.log(Uint1Array.BYTES_PER_ELEMENT); // 0.125

  // From an array
  var arr = new Uint1Array([21,31]);
  console.log(arr[1]); // 1

  // From another TypedArray's buffer
  var x = new Uint8Array([21, 31]);
  var y = new Uint1Array(x.buffer);
  console.log(""+y); // 

  // From an ArrayBuffer
  var buffer = new ArrayBuffer(8);
  var z = new Uint1Array(buffer, 1, 4);

  // From an iterable 
  var iterable = function*(){ yield* [1,0,1]; }(); 
  var uint8 = new Uint1Array(iterable); 
  console.log( ""+uint8 );
  // Uint1Array[1, 0, 1]
}

function exec( target, method, ...args ) {
  const result = target[method](...args);
  return result.join('');
}

function test_constructor() {
  const empty = new Uint1Array;
  const x = new Uint8Array([21, 32]);
  const y = new Uint1Array(x);
  assert.strictEqual(y+'', '1,0');
  assert.strictEqual(Object.prototype.toString.call(y), '[object Uint1Array]');
}
