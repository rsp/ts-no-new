
// rsp:
type NC<X> = { new (): X };
type FC<X> = { (): X };
type MC<X> = NC<X> & FC<X>;
function nn<X>(C: NC<X>): MC<X> {
  return new Proxy(C, {
    apply: (t, _, a) => new (<any>t)(...a)
  }) as MC<X>;
}

class $A {
  x: number;
  constructor() {
    this.x = 0;
  }
  a() {
    return this.x+=1;
  }
}
type A = $A;
const A: MC<A> = nn($A);
(<any>A).name='An';


class $B extends $A {
  a() {
    return this.x+=2;
  }
}
type B = $B;
const B: MC<B> = nn($B);

const x = new B();
console.log('x instanceof A:', x instanceof A);
console.log('x instanceof $A:', x instanceof $A);
console.log('x instanceof B:', x instanceof B);
console.log('x instanceof $B:', x instanceof $B);
console.log('$A.name', $A.name);
console.log('A.name', A.name);
// console.log('x instanceof Proxy:', x instanceof Proxy);
console.log(x.a());
console.log(x.a());
console.log(x.a());
console.log(x);

for (let i = 0; i < 1000; i++) {
  
}

