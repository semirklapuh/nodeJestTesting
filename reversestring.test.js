const reverseString = require("./reversestring");

test("Should be a reversed string", () => {
  expect(reverseString).toBeDefined();
});

test("Should be a reversed string", () => {
  expect(reverseString("semir")).toEqual("rimes");
});

test("Should be a reversed string with uppercase", () => {
  expect(reverseString("Semir")).toEqual("rimes");
});
