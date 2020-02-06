function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log('target', target);
  console.log('key', key);
  console.log('descriptor', descriptor);
  // descriptor.writable = false;
}

class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

const test = new Test('yosef');
test.name = 'yuan';
console.log(test.name);
