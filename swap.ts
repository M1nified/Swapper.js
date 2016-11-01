class Swap {
  static clean(obj: Object) {
    for (let member in obj) delete obj[member];
    Array.isArray(obj) && (obj.length = 0);
  }
  static do(a: any, b: any) {

  }
}

declare var module;
if (typeof module !== 'undefined') {
  module.exports = Swap;
}