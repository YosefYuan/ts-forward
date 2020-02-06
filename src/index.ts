function paramDecorator(target: any, method: string, paramIndex: number) {
  console.log('target', target);
  console.log('method', typeof method); // method_name -> string
  console.log('paramIndex', paramIndex);
}

class Test {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);
  }
}

const test = new Test();
test.getInfo('yosef', 31);
