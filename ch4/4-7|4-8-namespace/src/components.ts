namespace Components {
  export class Header {
    constructor() {
      const Elem = document.createElement('div');
      Elem.innerText = 'This is Header';
      document.body.appendChild(Elem);
    }
  }

  export class Content {
    constructor() {
      const Elem = document.createElement('div');
      Elem.innerText = 'This is Content';
      document.body.appendChild(Elem);
    }
  }

  export class Footer {
    constructor() {
      const Elem = document.createElement('div');
      Elem.innerText = 'This is Footer';
      document.body.appendChild(Elem);
    }
  }
}
