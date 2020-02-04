// interface Item {
//   name: string;
// }

class DataManager<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

// const data = new DataManager([
//   {
//     name: '1'
//   }
// ]);
// const a = data.getItem(0);
// console.log('a', a);

// interface Test {
//   name: string;
// }
// const data = new DataManager<string>(['1']);

// 如何使用泛型作为一个具体的类型注解

const Hello = <T>(params: T) => {
  return params;
};
const func: <T>(params: T) => T = Hello;
