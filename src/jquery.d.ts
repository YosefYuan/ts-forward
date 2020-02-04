// 定义全局变量
// declare var $: (params: () => void) => void;

// 定义全局函数
interface jqueryInstance {
  html: (html: string) => jqueryInstance;
}

// 函数重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): jqueryInstance;

// 对象-类型定义， 类-类型定义，命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {}
  }
}

// 使用interface语法实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): jqueryInstance;
// }
// declare var $: JQuery;
