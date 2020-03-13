/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.mk = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Macedonian = {
      weekdays: {
        shorthand: ["袧械", "袩芯", "袙褌", "小褉", "效械", "袩械", "小邪"],
        longhand: ["袧械写械谢邪", "袩芯薪械写械谢薪懈泻", "袙褌芯褉薪懈泻", "小褉械写邪", "效械褌胁褉褌芯泻", "袩械褌芯泻", "小邪斜芯褌邪"]
      },
      months: {
        shorthand: ["袌邪薪", "肖械胁", "袦邪褉", "袗锌褉", "袦邪褬", "袌褍薪", "袌褍谢", "袗胁谐", "小械锌", "袨泻褌", "袧芯械", "袛械泻"],
        longhand: ["袌邪薪褍邪褉懈", "肖械胁褉褍邪褉懈", "袦邪褉褌", "袗锌褉懈谢", "袦邪褬", "袌褍薪懈", "袌褍谢懈", "袗胁谐褍褋褌", "小械锌褌械屑胁褉懈", "袨泻褌芯屑胁褉懈", "袧芯械屑胁褉懈", "袛械泻械屑胁褉懈"]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "袧械写.",
      rangeSeparator: " 写芯 "
    };
    fp.l10ns.mk = Macedonian;
    var mk = fp.l10ns;

    exports.Macedonian = Macedonian;
    exports.default = mk;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
