const arr = [4, 1, 3, 3, 3, 9, 5, 6, 7, 8, 9, 9];

// map
export function double() {
  return arr.map(x => x * 2);
}

export function squared() {
  return arr.map(x => x * x);
}

export function minus2() {
  return arr.map(x => (x - 2));
}

// e.g 1 becomes -1, 8 becomes -8
export function turnedNegative() {
  return arr.map(x => x * -1);
}

// turns each number into a string, e.g
// [1,4] becomes ['hello 1', 'hello 4']
export function helloNumber() {
  return arr.map(x => `hello ${x}`);
}

// [1,2] becomes ['1', '2']
export function asString() {
  // either with a 'constructor'
  // return arr.map(x => String(x))
  // or using casting
  return arr.map(x => `${x}`);
}

/**
   if number is less than 5 (e.g 3), turns into
   '3 is young!'

   if number is more than 5 (e.g 7), turns into
   '7 is old!'

   if number is 5, turns into
   '5 is just right'
 */
export function youngOrOld() {
  return arr.map((x) => {
    if (x < 5) {
      return `${x} is young!`;
    } if (x > 5) {
      return `${x} is old!`;
    }
    return `${x} is just right`;
  });
}

// filter
export function is3() {
  return arr.filter(x => x === 3);
}

export function isNot9() {
  return arr.filter(x => x !== 9);
}

export function lessThan5() {
  return arr.filter(x => x < 5);
}

export function moreThan4() {
  return arr.filter(x => x > 4);
}

export function between3And8() {
  return arr.filter(x => x > 3 && x < 8);
}

export function only3sAnd9s() {
  return arr.filter(x => x === 3 || x === 9);
}

export function whenDoubledStillLessThan6() {
  return arr.filter(x => (x * 2) < 6);
}

export function onlyEven() {
  return arr.filter(x => x % 2 === 0);
}

export function onlyOddOr4() {
  return arr.filter(x => x % 2 !== 0);
}

// sort
export function sortedAccending() {
  return Array.from(arr).sort();
}

export function sortedDescending() {
  return Array.from(arr).sort((a, b) => b - a);
}
