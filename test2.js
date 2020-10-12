const Uint1Array = require('.').default;

console.log({Uint1Array});

const message = "JAVASCRIPT ROCKS";
const chars = message.split('').map( c => c.charCodeAt(0) );

const buf = new ArrayBuffer(chars.length);
const bytes = new Uint8Array(buf);
const bits = new Uint1Array(buf);

bytes.set(chars);

console.log(`${bits}`); 
