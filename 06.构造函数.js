function Person(name, age) {
  this.name = "李三";
  this.age = 18;
  this.run = function () {
    console.log("参数", name, age);
    console.log("this", this.name, this.age);
  };
}

function Person1(name, age) {
  Person.apply(this, [name, age]);
  this.name = name;
}
let p1 = new Person1("李四", 81);
p1.run();
console.log(p1);
const arr = [1, 2, 3];
console.log(typeof arr);

function isType(data) {
  if (typeof data === "object") {
    return Object.prototype.toString.call(data).slice(8, -1);
  } else {
    return typeof data;
  }
}

function fn(a, b) {
  console.log(a);
  var a = 5;
  console.log(a);
  var b = 10;
  console.log(b);
}
fn(2, 3);
