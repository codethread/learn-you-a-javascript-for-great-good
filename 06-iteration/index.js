// count needs to be updated in the while loop body
// to prevent our while loop running for ever
function howMuchBamboo(numberOfBamboo) {
  let totalBamboo = '';
  let count = 0;

  while (count < numberOfBamboo) {
    totalBamboo = totalBamboo + 'bamboo ';
  }

  return totalBamboo;
}

// you'll need to do something with angelicas chocolate drops here
// in the while loop body
// or she won't be very happy
function angelicaWantsDoubleChocolateDrops(n) {
  let chocolateDrops = 1;
  let count = 1;

  while (count < n) {
    count++;
  }

  return chocolateDrops;
}

// the condition has been ommited here
// you'll need to write a condition using `max` and `multipleOf5`
// so that our function works
function highestMultipleOf5Before(max) {
  let multipleOf5 = 0;

  while () {
    multipleOf5 = multipleOf5 + 5;
  }

  return multipleOf5;
}

// write a factorial function taking one argument which returns it's factorial result
// eg factorial 4 would be 24 (1 x 2 x 3 x 4) = 24
function factorial() {}

// write a fibonacci sequence generator that when given an argument n
// returns the nth number in the fibonacci sequence
// eg fibonacci given n = 1 should return 1, as 1 is the 1st number
// in the fibonaci sequence
function fibonacci() {}

export {
  howMuchBamboo,
  angelicaWantsDoubleChocolateDrops,
  highestMultipleOf5Before,
  factorial,
  fibonacci,
};
