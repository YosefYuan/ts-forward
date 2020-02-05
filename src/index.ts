function testDecorator() {
  return function<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'yuan';
      getName() {
        return this.name;
      }
    };
  };
}

const Test = testDecorator()(
  class {
    constructor(public name: string) {}
  }
);

const test = new Test('yosef');
console.log(test.getName());
