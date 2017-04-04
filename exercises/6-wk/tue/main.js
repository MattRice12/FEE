// function Maybe (val) {
//   const value = val;
//
//   this.withDefault = function (fallback) {
//     if (value === null || value === undefined) {
//       return fallback;
//     } else {
//       return value;
//     }
//   }
//
//   this.then = function (callback) {
//     if (value === null || value === undefined) {
//       return new Maybe(value)
//     } else {
//       return new Maybe(callback(value))
//     }
//   }
// }

const Maybe = function (value) {
  const val = value;

  this.withDefault = function  (fallback) {
    if (val === null || val === undefined) {
      return fallback;
    } else {
      return val;
    }
  }

  this.then = function (callback) {
    if (val === null || val === undefined) {
      return new Maybe(val)
    } else {
      return new Maybe( callback(val) )
    }
  }
}



let someUndefined = new Maybe(undefined);
let someNumber = new Maybe(50);

console.log(someUndefined.withDefault(0)); // 0
console.log(someNumber.withDefault(0)); // 50

let biggerNum = someNumber.then(function (n) {
  return n * 100;
});

console.log(biggerNum.withDefault(0)); // 5000

let biggerUndefined = someUndefined.then(function (n) {
  return n * 100;
});

console.log(biggerUndefined.withDefault(0)); // 0
