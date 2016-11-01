class Swap {
    static clean(obj) {
        for (let member in obj)
            delete obj[member];
        Array.isArray(obj) && (obj.length = 0);
    }
    static do(a, b) {
    }
}
if (typeof module !== 'undefined') {
    module.exports = Swap;
}
//# sourceMappingURL=swap.js.map