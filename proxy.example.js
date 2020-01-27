const staff = {
  name: "Jane Doe",
  age: 25
}
const handler = {
  get: (target, name) => {
    name in target ? console.log(target[name]) : console.log('404 not found');
  },
  set: (target, name, value) => {
    target[name] = value;
  }
}
const staffProxy = new Proxy(staff, handler);
console.log(staffProxy)

// staffProxy.name // => "Jane Doe"
// staffProxy.age // => 25
// staffProxy.age = 30
// staffProxy.age // => 30
// staffProxy.position // => '404 not found'