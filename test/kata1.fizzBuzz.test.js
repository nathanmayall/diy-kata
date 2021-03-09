const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    const result = fizzBuzz(12);
    const expected = "Fizz, 12";
    expect(result).toEqual(expected);
  });

  test("returns Buzz when passed a multiple of 5", () => {
    const result = fizzBuzz(10);
    const expected = "Buzz, 10";
    expect(result).toEqual(expected);
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    const result = fizzBuzz(30);
    const expected = "FizzBuzz, 30";
    expect(result).toEqual(expected);
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    const result = fizzBuzz(8);
    const expected = "8";
    expect(result).toEqual(expected);
  });
});
