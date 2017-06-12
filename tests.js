"use strict";
{
  test();

  function test_display() {
    const Uint1Array = require('./index.js');
    const bits = new Uint1Array(128);
    console.log("Bits", bits );  
  }

  function test() {
    test_display();
  }
}
