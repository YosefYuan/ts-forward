const userInfo: any = undefined;

function catchError(errMsg: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function() {
      try {
        fn();
      } catch (e) {
        console.log(errMsg);
      }
    };
  };
}
class Test {
  @catchError('get userInfo.name error')
  getName() {
    return userInfo.name;
  }
  @catchError('get userInfo.age error')
  getAge() {
    return userInfo.age;
  }
}

const test = new Test();
test.getName();
test.getAge();
