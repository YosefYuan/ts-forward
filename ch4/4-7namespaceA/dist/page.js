"use strict";
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Header';
            document.body.appendChild(Elem);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Content';
            document.body.appendChild(Elem);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Footer';
            document.body.appendChild(Elem);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
