const jsfunc = require("./function");

test("returnTwo should return 2.", () => {
  expect(jsfunc.returnTwo()).toEqual(2);
});

test("greeting(james) should be Hello, James", () => {
  expect(jsfunc.greeting("James")).toEqual("Hello, James.");
});

test("greeting(Jill) should be Hello, Jill", () => {
  expect(jsfunc.greeting("Jill")).toEqual("Hello, Jill.");
});

describe("Math functions:", () => {
  test("expect add(1,2) to return 3", () => {
    expect(jsfunc.add(1, 2)).toEqual(3);
  });

  test("expect add(5,9) to return 14", () => {
    expect(jsfunc.add(5, 9)).toEqual(14);
  });

  test("expect multiply(5,9) to return 45", () => {
    expect(jsfunc.multiply(5, 9)).toEqual(45);
  });

  test("expect divide(10,5) to return 2", () => {
    expect(jsfunc.divide(10, 5)).toEqual(2);
  });

  test("expect subtract(5,9) to return -4", () => {
    expect(jsfunc.subtract(5, 9)).toEqual(-4);
  });
});
