(function() {
  'use strict';

  window._ = {};

  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0,n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    return n === undefined ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0), array.length);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    } else {
      for (var i in collection){
        iterator(collection[i], i, collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    var result = [];

    _.each(collection, function(item){
      if (test(item)){
        result.push(item);
      }
    });

    return result;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
  
    return _.filter(collection, function(){
      return !test.apply(this, arguments);
    });

  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {

    var values = {};

    return _.filter(array, function(item){
      if (values[item] === undefined){
        values[item] = 1;
        return true;
      } else {
        return false;
      }
    });

  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var result = [];
    _.each(collection, function(item, index){
      result.push(iterator(item, index, collection));
    });

    return result;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, accumulator) {
    var result = accumulator;
    _.each(collection, function(item){
      if (result === undefined){
        result = item;
      } else {
        result = iterator(result, item);
      }
    });
    return result;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
    //GOOD POINT TO MAKE
      //cannot use return (predicate(item) && result)
      //because it will return a value that is 
      //truthy or falsy, not
      //true or false
        // if (predicate(item) && result){
        //   return true;
        // }
        //   return false;

      //another thing you can do is coerce falsy to be false
      //and truthy to be true
      //equivalent to casting it to a boolean
  _.every = function(collection, iterator) {

    var predicate = iterator;
    if (predicate === undefined) {
      predicate = _.identity;
    }

    return _.reduce(collection, function(result, item) {
      return !!(predicate(item) && result);
    }, true);

  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {

    return !(_.every(collection, function() {
      if (iterator === undefined) {
        return !_.identity.apply(this, arguments);
      } else {
        return !iterator.apply(this, arguments);
      }
    }));

    // var predicate = iterator;

    // return _.reduce(collection, function(result, item) {
    //   if (predicate === undefined) {
    //     if (item || result){
    //       return true;
    //     }
    //       return false;
    //   } else {
    //     if (iterator(item) || result){
    //       return true;
    //     }
    //       return false;
    //   }
    // }, false);

  };


  /**
   * OBJECTS
   * =======
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {

    if (arguments.length === 1){
      return obj;
    }
    else {
      _.each(arguments, function(item){
        _.each(item, function(value, key){
          obj[key] = value;
        });
      });
    }
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
     if (arguments.length === 1){
      return obj;
    }
    else {
      _.each(arguments, function(item){
        _.each(item, function(value, key){
          if (obj[key] === undefined) {
            obj[key] = value;
          }
        });
      });
    }
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   * Function decorators!!!!!
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var alreadyCalled = false;
    var result;

    return function() {
      if (!alreadyCalled) {
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      return result;
    };
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function takes only one argument and that it is a primitive.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    
    var cache = {};

    return function() {
    //safer to iterate over arguments than use slice 
    // var args = Array.prototype.slice.call(arguments);
      var args = _.map(arguments, _.identity);

      if (cache[args] === undefined) {
        cache[args] = func.apply(null, args);
      }
      return cache[args];
    }
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {  
   
    var funcArgs = Array.prototype.slice.call(arguments, 2);

    setTimeout(function() {
      return func.apply(null, funcArgs);
    }, wait);

  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  _.shuffle = function(array) {
 
    var result = array.slice(0);
    var index, temp;

    _.each(result, function(value, key){
      index = Math.floor(Math.random() * key);
      temp = value;
      result[key] = result[index];
      result[index] = temp;
    });

    return result;
  };

  // Calls the method named by functionOrKey on each value in the list.
  _.invoke = function(collection, functionOrKey, args) {
    if (typeof functionOrKey == 'function') {
      return _.map(collection, function(obj){
        return functionOrKey.apply(obj, args);
      });
    } else {
      //runs specific method on each item in array
      return _.map(collection, function(obj){
        return obj[functionOrKey].apply(obj, args);
      });
    }
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {

    //handle case to sort by "length" keyword
    if (iterator === "length") {
      iterator = function(value) {
        return value.length;
      }
    }

    var result = collection;

    //step one: object must become an array of properties
    //if it isn't already
    if (!Array.isArray(result)) {
      result = _.map(collection, function(item, index) {
        return {
                'key': index,
                'value': item
              }
      });
    }

    //implement using selection sort
    //selection sort iterates through array
    //and swaps the nth index with the nth smallest 
    //value in the remaining un-sorted array

    var swap = function(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }

    var selectMinimumIndex = function(array, startIndex) {
      var minValue = iterator(array[startIndex]);
      var minIndex = startIndex;
      for (var i = startIndex+1; i < array.length; i++) {
        //accomodate undefined
        if ((iterator(array[i]) < minValue) || (minValue === undefined)) {
          minIndex = i;
          minValue = iterator(array[i]);
        }
      }
      return minIndex;
    }

    _.each(result, function(item, index) {
      swap(result, index, selectMinimumIndex(result, index));
    });

    return result;
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
    var args = _.map(arguments, _.identity);

    var largest = _.reduce(args, function(largest, array) {
      if (array.length > largest) {
        return array.length
      } else {
        return largest;
      }
    },0);

    //create an array the size of the largest array in args
    var results = Array(largest);

    _.each(results, function(item, index) {
      results[index] = _.pluck(args, index);
    });

    return results;
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
    var results = [];
    var recursive = function(obj) {
      if (Array.isArray(obj)) {
        _.each(obj, function(elt){
          recursive(elt);
        });
      } else {
        results.push(obj);
      }
      return results;
    }
    return recursive(nestedArray);
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
    var args = _.map(arguments, _.identity);
    var first_array = args[0];
    var remaining_arrays = args.slice(1);

    return _.filter(first_array, function(elt) {
      return _.every(remaining_arrays, function(array) {
          return _.contains(array, elt);
        });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var args = _.map(arguments, _.identity);
    var first_array = args[0];
    var remaining_arrays = _.flatten(args.slice(1));

    return _.reject(first_array, function(elt) {
      return _.contains(remaining_arrays, elt);
    });
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  _.throttle = function(func, wait) {

    //more complicated throttle function
   
    //return the throttled function
    var last, timeout;
    return function () {
      var funcArgs = _.map(arguments, _.identity);
      //get current time
      var now = Date.now();

      if (last && now < last + wait) {
        clearTimeout(timeout);
        timeout = 
        setTimeout(function () {
          last = now;
          func.apply(null, funcArgs);
        }, wait);
      } else {
        last = now;
        func.apply(null, funcArgs);
      }
    };

    //simple throttle function

    // var timeout = false;
    // return function() {
    //   var args = _.map(arguments, _.identity);
    //   if(!timeout) {
    //     func.apply(null, args);
    //     timeout = true;
    //     setTimeout(function() {
    //       timeout = false;
    //     }, wait);
    //   }
    // }

  };
}());
