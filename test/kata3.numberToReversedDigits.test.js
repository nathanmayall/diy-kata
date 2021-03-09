const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    const array = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    const result = numberToReversedDigits(array);
    expect(expected).toEqual(result);
  });
});
