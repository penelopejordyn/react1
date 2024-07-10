const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("formats small numbers correctly", () => {
    expect(addCommas(123)).toBe("123");
    expect(addCommas(1234)).toBe("1,234");
  });

  test("formats large numbers correctly", () => {
    expect(addCommas(123456789)).toBe("123,456,789");
  });

  test("handles negative numbers", () => {
    expect(addCommas(-1234)).toBe("-1,234");
  });

  test("handles decimal numbers", () => {
    expect(addCommas(1234.56)).toBe("1,234.56");
  });

  test("returns 'NaN' for non-numeric inputs", () => {
    expect(addCommas('abc')).toBe('NaN');
    expect(addCommas(undefined)).toBe('NaN');
  });
});

