// ts -> .d.ts 翻译文件 @types/superagent -> js

import superagent from 'superagent';

class Crowller {
  // https://git.imooc.com/coding-412/source-code 密码更新地址
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

  async getRawHtml() {
    const result = await superagent.get(this.url);
    console.dir(result);
  }

  constructor() {
    this.getRawHtml();
  }
}

const crowller = new Crowller();
