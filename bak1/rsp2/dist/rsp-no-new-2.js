"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function nonew(c) {
    return new Proxy(c, {
        apply: (t, _, a) => new t(...a)
    });
}
const nonewdec = () => nonew;
// @nonewdec()
// class A implements AI {
//   x: number;
//   constructor() {
//     this.x = 0;
//   }
//   a() {
//     return this.x+=1;
//   }
// }
let A = class A {
    constructor() {
        this.x = 0;
    }
    apply() {
    }
    call() {
    }
    bind() {
    }
    a() {
        return this.x += 1;
    }
};
A = __decorate([
    nonewdec(),
    __metadata("design:paramtypes", [])
], A);
const B = nonew(class B extends A {
    a() {
        return this.x += 2;
    }
});
const o = {
    'new A()': new A(),
    // 'A()': A(),
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
//# sourceMappingURL=rsp-no-new-2.js.map