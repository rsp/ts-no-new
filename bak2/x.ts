
const a = {
  then(cb: Function): void {
    setTimeout(() => cb(10), 1000);
  }
};

a.then((v) => {
  console.log(v);
});

