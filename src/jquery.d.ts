// 定义全局变量
// declare var $: (params: () => void) => void;

// 定义全局函数
interface jqueryInstance {
  html: (html: string) => {};
}
// 重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): jqueryInstance;
