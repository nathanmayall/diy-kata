const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns all zeroes if number is zero", () => {
    const result = humanCatDogYears(0);
    const expected = [0, 0, 0];
    expect(result).toEqual(expected);
  });
  it("returns 1, 15, 15 when number is 1", () => {
    const result = humanCatDogYears(1);
    const expected = [1, 15, 15];
    expect(result).toEqual(expected);
  });
  it("returns 2, 24, 24 when number is 2", () => {
    const result = humanCatDogYears(2);
    const expected = [2, 24, 24];
    expect(result).toEqual(expected);
  });
  it("returns 3, 28, 29 when number is 2", () => {
    const result = humanCatDogYears(3);
    const expected = [3, 28, 29];
    expect(result).toEqual(expected);
  });
  it("returns 4, 32, 34 when number is 4", () => {
    const result = humanCatDogYears(4);
    const expected = [4, 32, 34];
    expect(result).toEqual(expected);
  });
});

// Look Ma, no handlebars!!!
