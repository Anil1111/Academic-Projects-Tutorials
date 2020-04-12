const _ = {
  // node clamp.js to test each method
  clamp(num, lBound, uBound) {
    const lowerClampedValue = Math.max(num, lBound);
    const clampedValue = Math.min(lowerClampedValue, uBound);
    return clampedValue;
  },

  inRange(num, startVal, endVal) {
    if (endVal === undefined) {
      endVal = startVal;
      startVal = 0;
    };
    if (startVal > endVal) {
      let tempVal = startVal;
      startVal = endVal;
      endVal = tempVal;
    };
    const isInRange = (startVal <= num && endVal > num) ? true : false;
    return isInRange;
  },

  words(str) {
    const words = str.split(' ');
    return words;
  },

  pad(str, len) {
    if (str.length > 0 && str.length <= len) {
      let startPaddingLength  = Math.floor((len - str.length) / 2);
      let endPaddingLength  = len - (str.length + startPaddingLength);
      let paddedString  = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
      return paddedString;

    } else {
      return str;
    };    
  },

  has(object, key) {
    const hasValue = typeof object[key] === 'undefined' ? true: false;
    return !hasValue;
  },

  invert(object) {
    let invertedObject  = {};

    for (let key in object) {
      const originalValue = object[key];
      // invertedObject[originalValue] = key;
      invertedObject = {originalValue: key};
    };
    return invertedObject ;
  },

  findKey(object, predicate ) {
    for (let key in object) {
      const predicateReturnValue  = predicate (object[key]);
      if (predicateReturnValue ) {
        return key;
      };
    };
    return undefined;
  },

  drop(arr, num) {
    if (num === undefined) {
      num = 1;
    };
    // const droppedArray  = arr.splice(0, num);
    // return arr;
    const droppedArray = arr.slice(num, arr.length);
    return droppedArray;
  },

  dropWhile(arr, predicate) {
    // const dropNumber  = arr.findIndex(item => {
    //   const predicateState = predicate(item, arr.indexOf(item), arr);
    //   return !predicateState;
    // });
    // const droppedArray = this.drop(arr, dropNumber );
    // return droppedArray;
    const dropNumber  = arr.findIndex((item, index) => {  //** 
      const predicateState = predicate(item, index, arr);
      return !predicateState;
    });
    const droppedArray = this.drop(arr, dropNumber );
    return droppedArray;
  },

  chunk(array, size = 1) {
    let newArr = [];

    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i+size);
      newArr.push(arrayChunk);
    };
    console.log(newArr);
    return newArr;
  }
};




// Do not write or modify code below this line.
module.exports = _;
