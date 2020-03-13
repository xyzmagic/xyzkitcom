/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.ru = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Russian = {
      weekdays: {
        shorthand: ["袙褋", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜"],
        longhand: ["袙芯褋泻褉械褋械薪褜械", "袩芯薪械写械谢褜薪懈泻", "袙褌芯褉薪懈泻", "小褉械写邪", "效械褌胁械褉谐", "袩褟褌薪懈褑邪", "小褍斜斜芯褌邪"]
      },
      months: {
        shorthand: ["携薪胁", "肖械胁", "袦邪褉褌", "袗锌褉", "袦邪泄", "袠褞薪褜", "袠褞谢褜", "袗胁谐", "小械薪", "袨泻褌", "袧芯褟", "袛械泻"],
        longhand: ["携薪胁邪褉褜", "肖械胁褉邪谢褜", "袦邪褉褌", "袗锌褉械谢褜", "袦邪泄", "袠褞薪褜", "袠褞谢褜", "袗胁谐褍褋褌", "小械薪褌褟斜褉褜", "袨泻褌褟斜褉褜", "袧芯褟斜褉褜", "袛械泻邪斜褉褜"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      rangeSeparator: " 鈥� ",
      weekAbbreviation: "袧械写.",
      scrollTitle: "袩褉芯泻褉褍褌懈褌械 写谢褟 褍胁械谢懈褔械薪懈褟",
      toggleTitle: "袧邪卸屑懈褌械 写谢褟 锌械褉械泻谢褞褔械薪懈褟",
      amPM: ["袛袩", "袩袩"],
      yearAriaLabel: "袚芯写"
    };
    fp.l10ns.ru = Russian;
    var ru = fp.l10ns;

    exports.Russian = Russian;
    exports.default = ru;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
