"use strict";
{
  const typeNameMatcher = /\[object (\w+)]/;
  const $ = Symbol("[[Uint1ArrayInternal]]");

  // Node or browser, either is fine

  try { module.exports = Uint1Array; } catch( e ) { Object.assign( self, { Uint1Array } ); }

  class Uint1ArrayPrivates {
   
  }

  class Uint1Array {
    // Uint1Array constructor 
    
      constructor( thing ) {
        // find the constructor invocation
        const typeName = resolveTypeName( thing );
        
        // for private internal properties
        const privates = new Uint1ArrayPrivates( this );
        Object.defineProperty( this, $, { get: () => privates } );
      }
    
    // Static property slots on the constructor

      static get BYTES_PER_ELEMENT() {
        return 0.125;
      }
      static get name() {
        return "Uint1Array";
      }
      static get length() {
        return 0;
      }
      static get [Symbol.species]() {
        return this;
      }

    // Static method slots on the constructor 

      static from( iterable ) {
        const temp = [];
        let length = 0;
        for( let item of iterable ) {
          const bit = toBit( item );
          temp.push( bit );
          length++;
        }
        const internal = new Uint8ClampedArray( length );
        internal.set( temp );
        return new this( internal );
      }

      static of( ...items ) {
        return this.from( items );
      }

      // Property slots on the instances

      get buffer() {
        return this[$].buffer;
      }

      get byteLength() {
        return ( this.length + 7 ) >> 3;
      }

      get byteOffset() {
        return 0;
      }

      get length() {
        return this[$].length;
      }

    // Method slots on the instance

      copyWithin( ...args ) {
        this[$].internal.copyWithin( ...args );
        return this;
      }

      entries() {
        return this[$]..internal.entries();
      }

      every( ...args ) {
        return this[$].internal.every( ..args );
      }

      fill( ...args ) {
        this[$].internal.fill( ...args );
        return this;
      }

      filter( ...args ) {
        return new this( this[$].internal.filter( ...args ) );
      }

      find( ...args ) {
        return this[$].internal.find( ...args );
      }

      findIndex( ...args ) {
        return this[$].internal.findIndex( ...args );
      }

      forEach( ...args ) {
        this[$].internal.forEach( ...args );
      }

      includes( ...args ) {
        return this[$].internal.includes( ...args );
      }

      indexOf( ...args ) {
        return this[$].internal.indexOf( ...args );
      }

      join( ...args ) {
        return this[$].internal.join( ...args );
      }

      keys( ...args ) {
        return this[$].internal.keys( ...args );
      }

      lastIndexOf( ...args ) {
        return this[$].internal.lastIndexOf( ...args );
      }

      map( ...args ) {
        return new this( this[$].internal.map( ...args ) );
      }

      reduce( ...args ) {
        return this[$].internal.reduce( ...args );
      }

      reduceRight( ...args ) {
        return this[$].internal.reduceRight( ...args );
      }

      reverse( ...args ) {
        return new this( this[$].internal.reverse( ...args ) );
      }

      set( ...args ) {
        this[$].internal.set( ...args );
      }

      slice( ...args ) {
        return new this( this[$].internal.slice( ...args ) );
      }

      sort( ...args ) {
        return this[$].internal.sort( ...args );
      }

      subarray( ...args ) {
        return new this( this[$].internal.subarray( ...args ) );
      }

      values( ...args ) {
        return this[$].internal.values( ...args );
      }

      toLocaleString( ...args ) {
        return this[$].internal.toLocaleString( ...args );
      }

      toString( ...args ) {
        return this[$].internal.toString( ...args );
      }

      [Symbol.iterator]() {
        return this[$].internal[Symbol.iterator]();
      }
  }

  function toBit( thing ) {
    return !! thing ? 1 : 0;
  }

  function resolveTypeName( thing ) {
    return typeNameMatcher.exec( Object.prototype.toString.call( thing ) )[1];
  }
}
