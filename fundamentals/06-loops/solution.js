function howMuchBamboo(numberOfBamboo) {
  let totalBamboo = '';
  let count = 0;

  while (count < numberOfBamboo) {
    totalBamboo = totalBamboo + 'bamboo ';
    count++;
  }

  return totalBamboo;
}

function angelicaWantsDoubleChocolateDrops(n) {
  let chocolateDrops = 1;
  let count = 1;

  while (count < n) {
    chocolateDrops = chocolateDrops * 2;
    count++;
  }

  return chocolateDrops;
}

function highestMultipleOf5Before(max) {
  let multipleOf5 = 0;

  while (multipleOf5 < (max - 5)) {
    multipleOf5 = multipleOf5 + 5;
  }

  return multipleOf5;
}

function factorial(x) {
  let sum = 1;

  for (let y = 1; y <= x; y++)  {
    sum *= y;
  }

  return sum;
}

function fibonacci(number) {

    let previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
};
