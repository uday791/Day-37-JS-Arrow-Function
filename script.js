// ==========================================
// ARROW FUNCTION
// ==========================================

// 1. WITHOUT INPUT & WITHOUT RETURN
// Print numbers from 1 to 15.

let printNumbers = () => {
  for (let i = 1; i <= 15; i++) {
    console.log(i);
  }
};

printNumbers();

// 2. WITHOUT INPUT & WITHOUT RETURN
// Print the multiplication table of 9.

let multiplicationTable = () => {
  let num = 9;

  for (let i = 1; i <= 10; i++) {
    console.log(num, "X", i, "=", num * i);
  }
};

multiplicationTable();

// 3. WITHOUT INPUT & WITHOUT RETURN
// Print all odd numbers from 1 to 40.

let printOdd = () => {
  for (let i = 1; i <= 40; i++) {
    if (i % 2 != 0) {
      console.log(i, "Odd");
    }
  }
};

printOdd();

// 4. WITHOUT INPUT & WITHOUT RETURN
// Print a right-angled star pattern with 5 rows.

let starPattern = () => {
  let rows = 5;

  for (let i = 1; i <= rows; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {
      output = output + "* ";
    }

    console.log(output);
  }
};

starPattern();

// 5. WITHOUT INPUT & WITHOUT RETURN
// Print Fibonacci series up to 8 terms.

let fibonacci = () => {
  let terms = 8;
  let a = 0;
  let b = 1;

  for (let i = 1; i <= terms; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
  }
};

fibonacci();

// ==========================================
// 2. WITH INPUT & WITHOUT RETURN
// ==========================================

// 6. Check whether a given number is Positive,
// Negative, or Zero.

let checkPositiveNegative = (num) => {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
};

checkPositiveNegative(-7);

// 7. Print the multiplication table of a given number.

let printTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(num, "X", i, "=", num * i);
  }
};

printTable(7);

// 8. Print all even numbers between two given numbers.

let printEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      console.log(i, "Even");
    }
  }
};

printEven(5, 20);

// 9. Print all prime numbers between two given numbers.

let printPrimes = (start, end) => {
  for (let i = start; i <= end; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count += 1;
      }
    }

    if (count == 2) {
      console.log("Prime", i);
    }
  }
};

printPrimes(5, 25);

// 10. Print an inverted star pattern with N rows.

let invertedPattern = (rows) => {
  for (let i = rows; i >= 1; i--) {
    let output = "";

    for (let j = 1; j <= i; j++) {
      output = output + "* ";
    }

    console.log(output);
  }
};

invertedPattern(6);

// ==========================================
// 3. WITHOUT INPUT & WITH RETURN
// ==========================================

// 11. Return the sum of all even numbers from 1 to 100.

let sumOfEven = () => {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }

  return sum;
};

console.log(sumOfEven());

// 12. Return whether a fixed number is a Strong number.

let checkStrong = () => {
  let num = 40585;
  let temp = num;
  let sum = 0;

  while (temp != 0) {
    let lastDigit = temp % 10;
    let factorial = 1;

    for (let i = 1; i <= lastDigit; i++) {
      factorial = factorial * i;
    }

    sum = sum + factorial;

    temp = parseInt(temp / 10);
  }

  if (sum == num) {
    return "Strong number";
  } else {
    return "Not a strong number";
  }
};

console.log(checkStrong());

// 13. Return the reverse of a fixed number.

let reverseNumber = () => {
  let num = 4567;
  let reverse = 0;

  while (num != 0) {
    let lastDigit = num % 10;

    reverse = reverse * 10 + lastDigit;

    num = parseInt(num / 10);
  }

  return reverse;
};

console.log(reverseNumber());

// 14. Return the count of numbers divisible by 4
// from 1 to 100.

let countDivisible = () => {
  let count = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 4 == 0) {
      count += 1;
    }
  }

  return count;
};

console.log(countDivisible());

// 15. Return the first 8 Fibonacci terms.
// Returns the last generated term.

let fibonacciTerm = () => {
  let a = 0;
  let b = 1;

  for (let i = 1; i <= 8; i++) {
    let next = a + b;

    a = b;
    b = next;
  }

  return a;
};

console.log(fibonacciTerm());

// ==========================================
// 4. WITH INPUT & WITH RETURN
// ==========================================

// 16. Return whether a number is Even or Odd.

let checkEvenOdd = (num) => {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkEvenOdd(17));

// 17. Return the reverse of a given number.

let reverseGivenNumber = (num) => {
  let reverse = 0;

  while (num != 0) {
    let lastDigit = num % 10;

    reverse = reverse * 10 + lastDigit;

    num = parseInt(num / 10);
  }

  return reverse;
};

console.log(reverseGivenNumber(4567));

// 18. Return whether a number is Prime.

let checkPrime = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }

  if (count == 2) {
    return "Prime";
  } else {
    return "Not prime";
  }
};

console.log(checkPrime(17));

// 19. Return whether a number is a Perfect Number.

let checkPerfect = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum = sum + i;
    }
  }

  if (sum == num) {
    return "Perfect number";
  } else {
    return "Not a perfect number";
  }
};

console.log(checkPerfect(28));

// 20. Return the sum of two given numbers.

let addNumbers = (a, b) => {
  let result = a + b;

  return result;
};

console.log(addNumbers(15, 27));
