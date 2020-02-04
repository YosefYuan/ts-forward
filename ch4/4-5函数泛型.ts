// 泛型 generic 泛指的类型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

join<string, string>('1', '1');
join(1, 1);

function anotherJoin<T, P>(first: T, second: P): T {
  return first;
}

// T[]
function map<T>(params: string[]) {
  // function map<T>(params: Array<T>) { 等价于上述写法
  return params;
}

map<string>(['string']);
