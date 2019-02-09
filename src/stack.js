class StackArgError extends Error {
    constructor(minArgs, actualArgs, message) {
        super(message || `Not enough stack arguments for operation: ${minArgs} required`);
        this.minArgs = minArgs;
        this.actualArgs = actualArgs;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, StackArgError);
        }
    }
}

const popN = (stack, n) => {
    const res = [];
    if (stack.length < n) {
        throw new StackArgError(n, stack.length);
    }

    for (let i = 0; i < n; i++) {
        const item = stack.pop();
        res.push(item);
    }
    return res;
}

module.exports = {
    StackArgError,
    popN,
};