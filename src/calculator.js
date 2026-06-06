function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

function factors(num) {
    const result = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }

    return result;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    factors
};