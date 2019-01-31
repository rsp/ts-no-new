
// rsp:
type NC<X> = { new (): X };
type FC<X> = { (): X };
type MC<X> = NC<X> & FC<X>;
function nn<X>(C: NC<X>): MC<X> {
  return new Proxy(C, {
    apply: (t, _, a) => new (<any>t)(...a)
  }) as MC<X>;
}

class _A {
  x: number;
  constructor() {
    this.x = 0;
  }
  a() {
    return this.x+=1;
  }
}
type A = _A;
const A: MC<A> = nn(_A);

class _B extends _A {
  a() {
    return this.x+=2;
  }
}
type B = _A;
const B: MC<B> = nn(_B);
  
const o: { [s: string]: A }= {
  'new A()': new A(),
  'A()': A(),
  'new B()': new B(),
  'B()': B(),
};

for (let k in o) {
  const x: A = o[k];
  console.log(`---\nx = ${k}`);
  console.log('console.log(x):', x);
  console.log('x instanceof A:', x instanceof A);
  console.log('x instanceof B:', x instanceof B);
  console.log('x instanceof Proxy:', x instanceof Proxy);
  console.log('x.a():', x.a());
  console.log('x.a():', x.a());
  console.log('x.a():', x.a());
}
