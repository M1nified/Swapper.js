class Swap {
    static clean(obj) {
        for (let member in obj)
            delete obj[member];
        Array.isArray(obj) && (obj.length = 0);
    }
    static do(a, b) {
        let tmp = new Object;
        Object.assign(tmp, a);
        Swap.clean(a);
        Object.assign(a, b);
        Swap.clean(b);
        Object.assign(b, tmp);
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Swap;
}
//# sourceMappingURL=swapper.js.map