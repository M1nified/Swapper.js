class Swapper {
  // features
  static obj(a: Object, b: Object) {
    let tmp = new Object;
    Object.assign(tmp, a);
    Swapper.clean(a);
    Object.assign(a, b);
    Swapper.clean(b);
    Object.assign(b, tmp);
  }
  static elem(obj: Object, prop1: string, prop2?: string) {
    if (typeof obj !== 'object') throw "First argument must be an object!";
    if (typeof prop2 === 'undefined') {
      [prop1, prop2] = Swapper.parseNames(prop1 + ' ' + prop2);
    }
    let tmp = obj[prop1];
    obj[prop1] = obj[prop2];
    obj[prop2] = tmp;
  }
  // helpers
  static clean(obj: Object) {
    for (let member in obj) delete obj[member];
    Array.isArray(obj) && (obj.length = 0);
  }
  static parseNames(names: string): string[] {
    let regexp = /[\s\t,;]+/;
    return names.split(regexp);
  }
}

declare var module;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Swapper;
}