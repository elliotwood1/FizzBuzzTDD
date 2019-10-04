const fizzBuzzChecker = require("../fizzbuzz");

describe("If a number is divisible by three replace it with the word 'fizz', if it's divisible by five replace the word with 'buzz' or if it's divisible by three and five then return 'fizz buzz'", function() {
  it("should return the number if it is not divisble by three or five", function() {
    expect(fizzBuzzChecker(1)).toEqual(1);
  });
  it("should check if the argument is divisble by three and return 'fizz' if true", function() {
    expect(fizzBuzzChecker(3)).toEqual("fizz");
  });
  it("should check if the argument is divisble by five and return 'buzz' if true", function() {
    expect(fizzBuzzChecker(5)).toEqual("buzz");
  });
  it("should check if the argument is divisble by three and five and return 'fizz buzz' if true", function() {
    expect(fizzBuzzChecker(15)).toEqual("fizz buzz");
  });
});
