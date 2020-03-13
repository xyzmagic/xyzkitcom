/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.bg = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Bulgarian = {
      weekdays: {
        shorthand: ["袧写", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜"],
        longhand: ["袧械写械谢褟", "袩芯薪械写械谢薪懈泻", "袙褌芯褉薪懈泻", "小褉褟写邪", "效械褌胁褗褉褌褗泻", "袩械褌褗泻", "小褗斜芯褌邪"]
      },
      months: {
        shorthand: ["携薪褍", "肖械胁", "袦邪褉褌", "袗锌褉", "袦邪泄", "挟薪懈", "挟谢懈", "袗胁谐", "小械锌", "袨泻褌", "袧芯械", "袛械泻"],
        longhand: ["携薪褍邪褉懈", "肖械胁褉褍邪褉懈", "袦邪褉褌", "袗锌褉懈谢", "袦邪泄", "挟薪懈", "挟谢懈", "袗胁谐褍褋褌", "小械锌褌械屑胁褉懈", "袨泻褌芯屑胁褉懈", "袧芯械屑胁褉懈", "袛械泻械屑胁褉懈"]
      }
    };
    fp.l10ns.bg = Bulgarian;
    var bg = fp.l10ns;

    exports.Bulgarian = Bulgarian;
    exports.default = bg;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
