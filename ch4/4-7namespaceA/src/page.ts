namespace Home {
  class Header {
    constructor() {
      const Elem = document.createElement('div');
      Elem.innerText = 'This is Header';
      document.body.appendChild(Elem);
    }
  }

  class Content {
    constructor() {
      const Elem = document.createElement('div');
      Elem.innerText = 'This is Content';
      document.body.appendChild(Elem);
    }
  }

  class Footer {
    constructor() {
      const Elem = document.createElement('div');
      Elem.innerText = 'This is Footer';
      document.body.appendChild(Elem);
    }
  }

  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
