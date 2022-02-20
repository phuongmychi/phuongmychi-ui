import { __assign } from 'tslib';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import styleInject from '../node_modules/style-inject/dist/style-inject.es.js';
import { useState } from 'react';

var css_248z$3 = "#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n.button1 {\n  padding: 10px 24px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}";
styleInject(css_248z$3);

var Snackbar = function (_a) {
    var text = _a.text, buttontext = _a.buttontext;
    var hanleShow = function () {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    return (jsxs(Fragment, { children: [jsx("button", __assign({ style: {
                    padding: "8px",
                    width: "80px",
                }, className: "button1", onClick: hanleShow }, { children: buttontext }), void 0), jsx("div", __assign({ id: "snackbar" }, { children: text }), void 0)] }, void 0));
};

var css_248z$2 = ".card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n}\n\n.imgcard {\n  max-width: 300px;\n}\n\n.title {\n  color: grey;\n  font-size: 18px;\n}\n\nbutton {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 18px;\n}\n\na {\n  text-decoration: none;\n  font-size: 22px;\n  color: black;\n}\n\nbutton:hover,\na:hover {\n  opacity: 0.7;\n}";
styleInject(css_248z$2);

var ProfileCard = function (_a) {
    var name = _a.name, imgurl = _a.imgurl, jobtile = _a.jobtile; _a.facebook;
    return (jsxs("div", __assign({ className: "card" }, { children: [jsx("img", { src: imgurl, alt: name, className: "imgcard" }, void 0), jsx("h1", { children: name }, void 0), jsx("p", __assign({ className: "title" }, { children: jobtile }), void 0), jsx("p", { children: "Harvard University" }, void 0), jsxs("div", { children: [jsx("a", __assign({ href: "#" }, { children: jsx("i", { className: "fa fa-dribbble" }, void 0) }), void 0), jsx("a", __assign({ href: "#" }, { children: jsx("i", { className: "fa fa-twitter" }, void 0) }), void 0), jsx("a", __assign({ href: "#" }, { children: jsx("i", { className: "fa fa-linkedin" }, void 0) }), void 0), jsx("a", __assign({ href: "#" }, { children: jsx("i", { className: "fa fa-facebook" }, void 0) }), void 0)] }, void 0), jsx("p", { children: jsx("button", { children: "Contact" }, void 0) }, void 0)] }), void 0));
};

var css_248z$1 = ".glow {\n  font-size: 80px;\n  color: #fff;\n  text-align: center;\n  animation: glow 1s ease-in-out infinite alternate;\n}\n\n@keyframes glow {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\n  }\n  to {\n    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\n  }\n}";
styleInject(css_248z$1);

var Growingtext = function (_a) {
    var text = _a.text;
    return jsx("h1", __assign({ className: "glow" }, { children: text }), void 0);
};

var css_248z = "@charset \"UTF-8\";\n.accordion {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: 0.4s;\n  margin-top: 5px;\n}\n\n.active,\n.accordion:hover {\n  background-color: #ccc;\n}\n\n.accordion:after {\n  color: #777;\n  font-weight: bold;\n  float: right;\n  margin-left: 5px;\n}\n\n.active:after {\n  content: \"−\";\n}\n\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  border: 0.5px solid black;\n  margin-top: 10px;\n}";
styleInject(css_248z);

var Accordion = function (_a) {
    var text = _a.text, isOpen = _a.isOpen, textheader = _a.textheader;
    var _b = useState(isOpen), isOpenpanel = _b[0], setIsopen = _b[1];
    var hanldeOpen = function () {
        setIsopen(function (isOpenpanel) { return !isOpenpanel; });
    };
    return (jsxs(Fragment, { children: [jsx("button", __assign({ className: "accordion", onClick: hanldeOpen }, { children: textheader }), void 0), isOpenpanel ? (jsx("div", __assign({ className: "pannel" }, { children: jsx("p", __assign({ style: { paddingLeft: "16px" } }, { children: text }), void 0) }), void 0)) : null] }, void 0));
};

export { Accordion, Growingtext, ProfileCard, Snackbar };
