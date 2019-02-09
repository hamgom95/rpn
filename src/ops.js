const { popN } = require("./stack");

const createOp = (func, argsIn, argsOut, symbol) => Object.assign(stack => {
    const args = (argsIn === undefined) ? stack : popN(stack, argsIn);
    const ret = func(...args);
    const res = (argsOut == 1) ? [ret] : ret;
    return (argsIn === undefined) ? res : [...stack, ...res];
}, {symbol, argsIn, argsOut});

module.exports = {
    plus: createOp((a,b) => a+b, 2, 1, "+"),
    mul: createOp((a,b) => a*b, 2, 1, "*"),

    minus: createOp((a,b) => b-a, 2, 1, "-"),
    div: createOp((a,b) => b/a, 2, 1, "/"),
    mod: createOp((a,b) => b%a, 2, 1, "%"),
    pow: createOp((a,b) => Math.pow(b, a), 2, 1, "^"),

    percent: createOp(a => a / 100, 1, 1, "/100"),
    inc: createOp(a => a+1, 1, 1, "++"),
    dec: createOp(a => a-1, 1, 1, "--"),
    abs: createOp(a => Math.abs(a), 1, 1, "|a|"),
    neg: createOp(a => -a, 1, 1),
    sqrt: createOp(a => Math.sqrt(a), 1, 1, "√"),
    sin: createOp(a => Math.sin(a), 1, 1, "sin"),
    cos: createOp(a => Math.cos(a), 1, 1, "cos"),
    tan: createOp(a => Math.tan(a), 1, 1, "tan"),

    ln: createOp(a => Math.ln(a), 1, 1),
    log: createOp(a => Math.log(a), 1, 1),

    random: createOp(a => Math.random(a), 1, 1),
    round: createOp(a => Math.round(a), 1, 1),

    drop: createOp(_ => [], 1, 0),
    dup: createOp(a => [a, a], 1, 2),
    over: createOp((a, b) => [b, a, b], 2, 3),
    swap: createOp((a, b) => [a, b], 2, 2),
    rot: createOp((a, b, c) => [b, a, c], 3, 3),

    sort: createOp((...args) => args.sort((a, b) => a-b)),
    reverse: createOp((...args) => args.reverse()),

    length: createOp((...args) => args.sort((a, b) => a-b), undefined, 1),
    min: createOp((...args) => Math.min(...args), undefined, 1),
    max: createOp((...args) => Math.max(...args), undefined, 1),
    sum: createOp((...args) => args.reduce((acc, val) => acc + val, 0), undefined, 1),
    prod: createOp((...args) => args.reduce((acc, val) => acc * val, 1), undefined, 1),
    avg: createOp((...args) => args.reduce((acc, val) => acc + val, 0) / args.length, undefined, 1),
    reset: createOp((...args) => [], undefined, 0),
    pi: createOp(() => Math.PI, 0, 1, "𝜋"),
    euler: createOp(() => Math.E, 0, 1, "e"),
};