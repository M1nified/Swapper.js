class Swap {
  static clean(obj: Object) {
    for (let member in obj) delete obj[member];
    Array.isArray(obj) && (obj.length = 0);
  }
  static do(a: Object, b: Object) {
    let tmp = new Object;
    Object.assign(tmp, a);
    Swap.clean(a);
    Object.assign(a, b);
    Swap.clean(b);
    Object.assign(b, tmp);
  }
}

declare var module;
if (typeof module !== 'undefined') {
  module.exports = Swap;
}