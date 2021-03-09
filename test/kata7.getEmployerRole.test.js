const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const data = [
      { name: "Satti", role: "Developer" },
      { name: "Jenny", role: "Sales Associate" },
      { name: "Javid", role: "Human Recommended Reading Assistant" },
    ];
    const expected = "Developer";
    const result = getEmployerRole("Satti", data);
    expect(result).toEqual(expected);
  });
  test("returns not found if not found", () => {
    const data = [
      { name: "Satti", role: "Developer" },
      { name: "Jenny", role: "Sales Associate" },
      { name: "Javid", role: "Human Recommended Reading Assistant" },
    ];
    const expected = "Not found!";
    const result = getEmployerRole("Nathan", data);
    expect(result).toEqual(expected);
  });
});
