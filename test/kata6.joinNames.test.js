const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const result = joinNames([
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
    ]);
    const expected = "Bart, Lisa & Maggie";
    expect(result).toEqual(expected);
  });
  test("works for any length array", () => {
    const result = joinNames([
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
      { name: "Homer" },
      { name: "Marge" },
      { name: "Moe" },
      { name: "Barney" },
      { name: "Carl" },
    ]);
    const expected = "Bart, Lisa, Maggie, Homer, Marge, Moe, Barney & Carl";
    expect(result).toEqual(expected);
  });
});
