function getNameDescriptor(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log('target', target);
  console.log('key', key);
  console.log('descriptor', descriptor);
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDescriptor
  getName() {
    return this.name;
  }
}
