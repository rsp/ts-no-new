"use strict";
function nn(C) {
    return new Proxy(C, {
        apply: (t, _, a) => new t(...a)
    });
}
class $A {
    constructor() {
        this.x = 0;
    }
    a() {
        return this.x += 1;
    }
}
const A = nn($A);
// (<any>A).name='An';
Object.defineProperty(A, 'name', { value: 'A' });
class $B extends $A {
    a() {
        return this.x += 2;
    }
}
const B = nn($B);
Object.defineProperty(B, 'name', { value: 'B' });
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
    console.log('x.a():', x.a());
    console.log('x.a():', x.a());
    console.log('x.a():', x.a());
}
//# sourceMappingURL=rsp-no-new-4.js.map