const ops = require("./ops");

const add = (stack, val, operations=ops) => {
    const op = operations[val];
    if (op === undefined) {
        stack.push(val);
    } else {
        stack = op(stack);
    }
    return stack;
};

const calc = (stack, operations = ops) => stack.reduce((stack, val) => add(stack, val, operations), []);

module.exports = {
    ops,
    calc,
    add,
};