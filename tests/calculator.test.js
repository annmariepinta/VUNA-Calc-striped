const {
    add,
    subtract,
    multiply,
    divide,
    factors
} = require("../src/calculator");

describe("Calculator Functions", () => {

    test("adds two numbers", () => {
        expect(add(5, 3)).toBe(8);
    });

    test("subtracts two numbers", () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test("multiplies two numbers", () => {
        expect(multiply(6, 7)).toBe(42);
    });

    test("divides two numbers", () => {
        expect(divide(20, 5)).toBe(4);
    });

    test("throws error when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow(
            "Cannot divide by zero"
        );
    });

});

describe("Factors Feature", () => {

    test("factors of 12", () => {
        expect(factors(12)).toEqual([1, 2, 3, 4, 6, 12]);
    });

    test("factors of 7", () => {
        expect(factors(7)).toEqual([1, 7]);
    });

    test("factors of 1", () => {
        expect(factors(1)).toEqual([1]);
    });

});