// The function take a number and return the sum of all numbers from 1 to the number passed in
function sumRange(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
}

console.log("SumRange: ", sumRange(3));

// The function returns the base^exp
function power(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * power(base, exp - 1);
  }
}

console.log("power: ", power(2, 4));

// The function returns the factorial of a number (x * x-1 * x-2 * x-3 *....> x-1 )
function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("factorial : ", factorial(5));

// The function accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
function all(array, callback) {
  if (array.length === 0) {
    return true;
  } else if (callback(array[0])) {
    array.shift();
    return all(array, callback);
  } else {
    return false;
  }
}

console.log(
  "all: ",
  all([1, 2, 9], function (n) {
    return n < 7;
  })
);

// The function takes in an array of numbers and returns the product of them all
function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  } else {
    return array.shift() * productOfArray(array);
  }
}

console.log("productOfArray: ", productOfArray([1, 2, 3, 10]));

// The function searches for a value in a nested object. It returns true if the object contains that value.
function contains(object, value) {
  for (let key in object) {
    if (typeof object[key] === "object") {
      return contains(object[key], value);
    }

    if (object[key] === value) return true;
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log("contains: ", contains(nestedObject, "foo2"));

// return the total number of integers stored inside the array
function totalIntegers(multiDimensionalArray) {
  if (multiDimensionalArray.length === 0) return 0;

  let total = 0;
  let first = multiDimensionalArray.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(multiDimensionalArray);
}

console.log(
  "totalIntegers: ",
  totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])
);

// The function sums squares of numbers in list that may contain more lists
function sumSquares(numbers) {
  if (numbers.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (Array.isArray(numbers[i])) {
      total += sumSquares(numbers[i]);
    } else {
      total += numbers[i] * numbers[i];
    }
  }
  return total;
}

console.log("sumSquares: ", sumSquares([10, [[10], 10], [10]]));

// The function return an array containing repetitions of the number argument
function replicate(times, number) {
  if (times <= 0) return [];
  return [number].concat(replicate(times - 1, number));
}

console.log("replicate: ", replicate(3, 69));

// Fibonacci Series Up to n Terms
function fibs(nr) {
  const arr = [];
  let n1 = 0;
  let n2 = 1;
  let nextTerm = undefined;
  for (let i = 0; i <= nr; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    arr[i] = nextTerm;
  }

  return arr;
}

console.log("Fibonacci Series", fibs(8));

function fibsRec(nr, current = 0, next = 1, result = []) {
  if (nr <= 0) {
    return result;
  } else {
    result.push(current);
    return fibsRec(nr - 1, next, current + next, result);
  }
}

console.log("fibsRec: ", fibsRec(8));
