

type cA = () => A;

function nonew<X extends Function>(c: X): AI {
  return (new Proxy(c, {
    apply: (t, i, a) => new (<any>t)(...a)
  }) as any as AI);
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

// @nonewdec()
class A {
  x: number;
  apply() {
  }
  call() {
  }
  bind() {
  }
  constructor() {
    this.x = 0;
  }
  a() {
    return this.x+=1;
  }
}

interface AI {
  new (): A;
  (): A;
}

const B = nonew(
  class B extends A {
    a() {
      return this.x+=2;
    }
  });
  
const x = A();
console.log('x instanceof A:', x instanceof A);
console.log('x instanceof B:', x instanceof B);
console.log('x instanceof Proxy:', x instanceof Proxy);
console.log(x.a());
console.log(x.a());
console.log(x.a());
