function fizzBuzzChecker(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizz buzz";
  }
  if (number % 3 === 0) {
    return "fizz";
  }
  if (number % 5 === 0) {
    return "buzz";
  }
  return number;
}

module.exports = fizzBuzzChecker;
