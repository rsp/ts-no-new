
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
// (<any>A).name='An';
Object.defineProperty(A, 'name', { value: 'A' });

class $B extends $A {
  a() {
    return this.x+=2;
  }
}
type B = $B;
const B: MC<B> = nn($B);
Object.defineProperty(B, 'name', { value: 'B' });

const o: { [s: string]: A }= {
  'new A()': new A(),
  'A()': A(),
  'new B()': new B(),
  'B()': B(),
};

console.log('$A.name:', $A.name);
console.log('A.name:', A.name);
console.log('$B.name:', $B.name);
console.log('B.name:', B.name);

for (let k in o) {
  const x: A = o[k];
  console.log(`---\nx = ${k}`);
  console.log('console.log(x):', x);
  console.log('x instanceof A:', x instanceof A);
  console.log('x instanceof $A:', x instanceof $A);
  console.log('x instanceof B:', x instanceof B);
  console.log('x instanceof $B:', x instanceof $B);
  console.log('x instanceof Proxy:', x instanceof Proxy);
  console.log('x.constructor.name:', x.constructor.name);
  console.log('x.constructor == A:', x.constructor == A);
  console.log('x.constructor == $A:', x.constructor == $A);
  console.log('x.constructor == B:', x.constructor == B);
  console.log('x.constructor == $B:', x.constructor == $B);
  console.log('x.a():', x.a());
  console.log('x.a():', x.a());
  console.log('x.a():', x.a());
}
