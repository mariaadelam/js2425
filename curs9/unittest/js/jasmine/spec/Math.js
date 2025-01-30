//This is test
describe("helloWorld", () => {
  it("returns Hello World", () => {
    var actual = helloWorld();
    expect(actual).toBe("Hello World");
  });
  it("returns Hello ", () => {
    var actual = helloWorld();
    expect(actual).toContain("Hello");
  });
});

describe("math sum", function () {
  //Spec for sum operation
  it("suma dintre 3 si 5", function(){
    //expect (sum(3,5)).toEqual(8);
    expect(sum(3,5)).toBe(8);
  });
});

describe("math sum2", function () {
  //Spec for sum operation
  it("suma dintre 1.4 si 1.3 = 2.7", function(){
    //expect (sum(3,5)).toEqual(8);
    expect(sum(1.4,1.3)).toEqual(2.7);
  });
  it("suma dintre 0.1 si 0.7 = 0.8", function(){
    //expect (sum(3,5)).toEqual(8);
    expect(sum(0.1,0.7)).toEqual(0.8);
  });
});