// function nameDecorator(target: any, key: string): any {
//   const descriptor: PropertyDescriptor = {
//     writable: false
//   };
//   return descriptor;
// }

// 修改的并不是实例上的属性 而是原型上的属性
function nameDecorator(target: any, key: string): any {
  target[key] = 'yuan';
}

class Test {
  @nameDecorator
  name = 'yosef';
}

const test = new Test();
console.log(test.name); // yosef
console.log((test as any).__proto__.name); // yuan
