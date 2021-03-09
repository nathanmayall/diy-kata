const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns a string "False" if passed a falsy argument', () => {
    const result = booleanToWord(0);
    const expected = "False";
    expect(result).toEqual(expected);
  });
  it('returns a string "True" if passed a truthy argument', () => {
    const result = booleanToWord(1);
    const expected = "True";
    expect(result).toEqual(expected);
  });
});
