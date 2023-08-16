var pipe = function (value) {
  let fnStack = [];
  return new Proxy(
    {},
    {
      get: function (target, property, receiver) {
        if (property === "do") {
          console.log(fnStack);
          const res = fnStack.reduce((prev, next) => {
            return next(prev);
          }, value);
          return res;
        } else {
          console.log(property);
          fnStack.push(window[property]);
          return receiver;
        }
      },
    }
  );
};

var add = (n) => n + 2;
var sub = (n) => n - 2;
var double = (n) => n * 2;
var pow = (n) => Math.pow(n, n);

var res = pipe(6).sub.add.double.pow.do;
console.log(res);
const arr = [1, 2, 3, 4, 5];
