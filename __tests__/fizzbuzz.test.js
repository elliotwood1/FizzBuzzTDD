const fizzBuzzChecker = require("../fizzbuzz");

describe("fizzBuzzChecker", function() {
  it("should return the number if it is not divisble by three or five", function() {
    expect(fizzBuzzChecker(1)).toEqual(1);
  });
  it("should return 'fizz' if the argument is divisible by three", function() {
    expect(fizzBuzzChecker(3)).toEqual("fizz");
  });
  it("should return 'buzz' if the argument is divisible by five", function() {
    expect(fizzBuzzChecker(5)).toEqual("buzz");
  });
  it("should return 'fizz buzz' if the argument is divisible by three and five", function() {
    expect(fizzBuzzChecker(15)).toEqual("fizz buzz");
  });
});
