"use strict";
function nn(C) {
    return new Proxy(C, {
        apply: (t, _, a) => new t(...a)
    });
}
class _A {
    constructor() {
        this.x = 0;
    }
    a() {
        return this.x += 1;
    }
}
const A = nn(_A);
class _B extends _A {
    a() {
        return this.x += 2;
    }
}
const B = nn(_B);
const o = {
    'new A()': new A(),
    'A()': A(),
    'new B()': new B(),
    'B()': B(),
};
for (let k in o) {
    const x = o[k];
    console.log(`---\nx = ${k}`);
    console.log('console.log(x):', x);
    console.log('x instanceof A:', x instanceof A);
    console.log('x instanceof B:', x instanceof B);
    console.log('x instanceof Proxy:', x instanceof Proxy);
    console.log(x.a());
    console.log(x.a());
    console.log(x.a());
}
//# sourceMappingURL=rsp-no-new-3.js.map