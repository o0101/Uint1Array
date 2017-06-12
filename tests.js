"use strict";
{
  const Uint1Array = require('./index.js');
  const TESTS = [
    [ 'sort', '0001111111' ],
    [ 'reverse', '0111111010' ],
    [ 'map', '1111111111', x => x + 1 ],
    [ 'map', '1010000001', x => x ^ 1 ]
  ];

  test();

  function test() {
    test_display();
    test_methods();
    test_bitfield();
    test_readme_1();
    test_readme_2();
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

  function exec( target, method, ...args ) {
    const result = target[method](...args);
    return result.join('');
  }

}
