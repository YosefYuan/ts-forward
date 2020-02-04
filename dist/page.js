define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Header = /** @class */ (function () {
        function Header() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Header';
            document.body.appendChild(Elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Content';
            document.body.appendChild(Elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var Elem = document.createElement('div');
            Elem.innerText = 'This is Footer';
            document.body.appendChild(Elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
