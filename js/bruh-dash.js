var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {
  // returns the first element of an array
  first: function(arr) {
    return arr.shift();
  },

  // returns the last element of an array
  last: function(arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function(arr, str) {
    return arr.indexOf(str);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function(arr, str) {
    return arr.lastIndexOf(str);
  },

  // returns an array with all elements except for the last element
  initial: function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  // returns an array with all falsey values removed
  compact: function(arr) {
    return arr.filter(x => Boolean(x) === true);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function(arr, start, end) {
    return arr.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n) {
    if (n === undefined) {
      n = 1;
    }
    return arr.slice(n);
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (n === undefined) {
      n = 1;
    }
    if (n === 0) {
      return arr;
    }
    n = -n;
    arr.splice(n);
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function(arr, n) {
    if (n === undefined) {
      n = 1;
    }
    arr.splice(n);
    return arr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function(arr, n) {
    if (n === undefined) {
      n = 1;
    }
    if (n === 0) {
      return [];
    }
    n = -n;
    return arr.splice(n);
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {
    return arr.fill(val, start, end);
  },

  // removes all given values from an array
  pull: function(arr, ...val) {
    for (var i = 0; i < val.length; i++) {
      for (var k = 0; k < arr.length; k++) {
        if (arr[k] === val[i]) {
          arr.splice(k, 1);
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function(arr, index) {
    var arrResult = [];
    for (var i = 0; i < index.length; i++) {
      arrResult.push(...arr.slice(index[i], index[i] + 1));
    }
    return arrResult;
  },

  // creates an array excluding all the specified values
  without: function(arr, ...del) {
    var arrResult = [];

    arr.map(x => {
      if (!del.includes(x)) {
        arrResult.push(x);
      }
    });
    return arrResult;
  },

  // returns an array with specified values excluded
  difference: function(arr, exclude) {
    var arrResult = [];

    arr.map(x => {
      if (!exclude.includes(x)) {
        arrResult.push(x);
      }
    });
    return arrResult;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function() {},

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function() {},

  // creates an array of elements into groups of length of specified size
  chunk: function() {},

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {},

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {},

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {},

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {}
};
