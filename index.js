"use strict";
{
  const typeNameMatcher = /\[object (\w+)]/;
  const $ = Symbol("[[Uint1ArrayInternal]]");
  const INTERNAL_FORMAT = Uint32Array;
  const TYPED_ARRAYS = new Set([
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "UInt32Array",
    "Float32Array",
    "Float64Array"
  ]);

  // classes 

    class Uint1ArrayPrivates {
      constructor( publics, { length : length = null, 
                  buffer : buffer = null, byteOffset : byteOffset = 0 } = {} ) {

        let internal;
        if ( !! buffer ) {
          length = buffer.byteLength * 8;
        } else if ( ! length ) {
          length = 0;
        }

        const wordBytes = INTERNAL_FORMAT.BYTES_PER_ELEMENT;
        const wordSize = wordBytes * 8;
        const wordSizeMask = wordSize - 1;
        const wordSizeShift = msb_index( wordSize );
        const wordCount = ( length + wordSizeMask ) >> wordSizeShift;

        if ( !! buffer ) {
          internal = new INTERNAL_FORMAT( buffer, byteOffset, wordCount );
        } else  {
          buffer = new ArrayBuffer( wordBytes * wordCount );
          internal = new INTERNAL_FORMAT( buffer );
        }

        let changed = true;

        Object.assign( this, {
          buffer, 
          byteOffset,
          changed,
          length,
          wordSize,
          wordSizeMask,
          wordSizeShift,
          internal
        });
      }
      toArray() {
        if ( ! this.changed ) {
          return this.array;
        }
        const array = this.array = new Array( this.length );
        for( let i = 0; i < this.length; i++ ) {
          array[i] = this.getBit(i);
        }
        this.changed = false;
        return array;
      }
      getBit( i ) {
        if ( i >= this.length ) {
          return;
        }
        const word_number = i >> this.wordSizeShift;
        const word_offset = i & this.wordSizeMask;
        const word = this.internal[word_number];
        const bit = (word >> word_offset)&1;
        return bit;
      }
      setBit( i, bit ) {
        if ( i >= this.length ) {
          return;
        }
        const word_number = i >> this.wordSizeShift;
        const word_offset = i & this.wordSizeMask;
        const word = this.internal[word_number];
        let new_word = word;
        new_word |= ( bit << word_offset ); // make it 1 if 1, no change if 0
        new_word &= ~((~bit&1) << word_offset ); // make it 0 if 0, no change if 1
        if ( word !== new_word ) {
          this.changed = true;
          this.internal[word_number] = new_word;
        }
        return bit;
      }
    }

    class Uint1Array {
      // Uint1Array constructor 
      
        constructor( arg , byteOffset, byteLength ) {
          // find the constructor invocation
          const argType = resolveTypeName(arg);
          
          let length, privates, temp;

          switch( argType ) {
            case "Number":
              arg = ~~arg; // integer part only
              length = arg;
              privates = new Uint1ArrayPrivates( this, { length } );
              break;
            case "ArrayBuffer":
              const buffer = arg;
              privates = new Uint1ArrayPrivates( this, { buffer } );
              break;
            case "Array":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "UInt32Array":
            case "Float32Array":
            case "Float64Array":
            case "Uint1Array":
              temp = create_from_iterable( arg );
              privates = new Uint1ArrayPrivates( this, { length : temp.length } );
              temp.forEach( (val, i) => privates.setBit( i, val ) );
              break;
              break;
            case "Undefined":
            case "Null":
            case "RegExp":
            case "Infinity":
              length = 0;
              privates = new Uint1ArrayPrivates( this, { length } );
              break;
            case "Object":
            default:
              temp = create_from_iterable( arg );
              privates = new Uint1ArrayPrivates( this, { length : temp.length } );
              temp.forEach( (val, i) => privates.setBit( i, val ) );
              break;
          }

          // for private internal properties
          Object.defineProperty( this, $, { get: () => privates } );

          // proxy for array-like bracket-accessor via index

          const accessorProxy = new BracketAccessorProxy( this );
          //this.__proto__ = accessorProxy;
          return accessorProxy;
          return this;
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
          const temp = create_from_iterable( iterable );
          return new Uint1Array( temp );
        }

        static of( ...items ) {
          return Uint1Array.from( items );
        }
      
      // Property slots on the instances

        get buffer() {
          return this[$].buffer;
        }

        get byteLength() {
          return ( this.length + 7 ) >> 3;
        }

        get byteOffset() {
          return this[$].byteOffset;
        }

        get length() {
          return this[$].length;
        }

      // Method slots on the instance

        copyWithin( ...args ) {
          //FIXME rewrite
          this[$].toArray().copyWithin( ...args );
          return this;
        }

        entries() {
          return this[$].toArray().entries();
        }

        every( ...args ) {
          return this[$].toArray().every( ...args );
        }

        fill( ...args ) {
          // FIXME rewrite
          this[$].toArray().fill( ...args );
          return this;
        }

        filter( ...args ) {
          return new Uint1Array( this[$].toArray().filter( ...args ) );
        }

        find( ...args ) {
          return this[$].toArray().find( ...args );
        }

        findIndex( ...args ) {
          return this[$].toArray().findIndex( ...args );
        }

        forEach( ...args ) {
          this[$].toArray().forEach( ...args );
        }

        includes( ...args ) {
          return this[$].toArray().includes( ...args );
        }

        indexOf( ...args ) {
          return this[$].toArray().indexOf( ...args );
        }

        join( ...args ) {
          return this[$].toArray().join( ...args );
        }

        keys( ...args ) {
          return this[$].toArray().keys( ...args );
        }

        lastIndexOf( ...args ) {
          return this[$].toArray().lastIndexOf( ...args );
        }

        map( ...args ) {
          return new Uint1Array( this[$].toArray().map( ...args ) );
        }

        reduce( ...args ) {
          return this[$].toArray().reduce( ...args );
        }

        reduceRight( ...args ) {
          return this[$].toArray().reduceRight( ...args );
        }

        reverse() {
          const temp = this[$].toArray().reverse();
          this.set( temp );
          return this;
        }

        set( arr, offset = 0 ) {
          //TODO : this has to be very solid
          const typeName = resolveTypeName(arr);
          // returning without doing nothing if the argument is 
          // neither an array nor a typedarray seems to be the 
          // implemented behaviour in the browser for <TypedArray>.set
          // and we do not differ here
          if ( typeName !== "Array" && ! TYPED_ARRAYS.has( typeName ) ) {
            return;
          }
          const last = Math.min( arr.length + offset, this.length );
          arr = arr.map( v => toBit( v ) );
          for( let i = offset; i < last; i++ ) {
            this[i] = arr[i-offset];
          }
        }

        slice( ...args ) {
          return new Uint1Array( this[$].toArray().slice( ...args ) );
        }

        sort( ...args ) {
          console.log( this, this[$], $ );
          const sorting = this[$].toArray().sort( ...args );
          this.set( sorting );
          return this;
        }

        subarray( ...args ) {
          return new Uint1Array( this[$].toArray().subarray( ...args ) );
        }

        values( ...args ) {
          return this[$].toArray().values( ...args );
        }

        toLocaleString( ...args ) {
          return this.toString().toLocaleString();
        }

        toString() {
          return `Uint1Array [ ${ this[$].toArray().join(', ') } ]`;
        }

        [Symbol.iterator]() {
          return this[$].toArray()[Symbol.iterator]();
        }
    }

  // array bracket-accessor proxy 

    function BracketAccessorProxy( typed_array_api ) {
      const privates = typed_array_api[$];
      const array_accessor_handler = {
        get( _, slot, surface ) {
          const i = typeof slot == "string" ? parseInt(slot) : slot;
          //console.log("Get", slot);
          if ( Number.isInteger( i ) ) {
            return privates.getBit( i );
          } else {
            return Reflect.get( typed_array_api, slot );
          }
        },
        set( _, slot, value, surface ) {
          const i = typeof slot == "string" ? parseInt(slot) : slot;
          //console.log("Set", slot, value );
          if ( Number.isInteger( i ) ) {
            const bit = toBit( value );
            privates.setBit( i, value );
            return true;
          } else {
            return Reflect.set( typed_array_api, slot, value );
          }
        }
      };
      return new Proxy( typed_array_api, array_accessor_handler );
    }

  // helpers
    
    function create_from_iterable( iterable ) {
      const temp = [];
      let length = 0;
      for( let item of iterable ) {
        const bit = toBit( item );
        temp.push( bit );
        length++;
      }
      return temp;
    }

    function format( u1 ) {
      let connector = ', ';
      if ( u1.length > 10 ) { 
        connector = ',\n\t';
      }
      return `Uint1Array [ ${ u1[$].toArray().join(connector) } ]`;
    }

    function msb_index( number ) {
      let i = 0;
      while( number >>= 1 ) {
        i++;
      }
      return i;
    }

    function toBit( thing ) {
      return !! thing ? 1 : 0;
    }

    function resolveTypeName( thing ) {
      return typeNameMatcher.exec( Object.prototype.toString.call( thing ) )[1];
    }

  // Node or browser, either is fine

  try { module.exports = Uint1Array; } catch( e ) { Object.assign( self, { Uint1Array } ); }
}
