const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    const result = reachDestination(100, 10);
    const expected = "I should be there in 10 hours";
    expect(result).toEqual(expected);
  });
  test("rounds to nearest 0.5 hour", () => {
    const result = reachDestination(44, 10);
    const expected = "I should be there in 4.5 hours";
    expect(result).toEqual(expected);
  });
});
