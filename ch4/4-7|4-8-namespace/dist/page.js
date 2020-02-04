"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Header';
            document.body.appendChild(Elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Content';
            document.body.appendChild(Elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Footer';
            document.body.appendChild(Elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
