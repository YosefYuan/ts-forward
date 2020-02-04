// ES6 模块化
declare module 'jquery' {
  interface jqueryInstance {
    html: (html: string) => jqueryInstance;
  }

  // 混合类型
  function $(readyFunc: () => void): void;
  function $(selector: string): jqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
