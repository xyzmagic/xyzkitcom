/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.mn = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Mongolian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["袛邪", "袦褟", "袥褏", "袩爷", "袘邪", "袘褟", "袧褟"],
        longhand: ["袛邪胁邪邪", "袦褟谐屑邪褉", "袥褏邪谐胁邪", "袩爷褉褝胁", "袘邪邪褋邪薪", "袘褟屑斜邪", "袧褟屑"]
      },
      months: {
        shorthand: ["1-褉 褋邪褉", "2-褉 褋邪褉", "3-褉 褋邪褉", "4-褉 褋邪褉", "5-褉 褋邪褉", "6-褉 褋邪褉", "7-褉 褋邪褉", "8-褉 褋邪褉", "9-褉 褋邪褉", "10-褉 褋邪褉", "11-褉 褋邪褉", "12-褉 褋邪褉"],
        longhand: ["袧褝谐写爷谐褝褝褉 褋邪褉", "啸芯褢褉写褍谐邪邪褉 褋邪褉", "袚褍褉邪胁写褍谐邪邪褉 褋邪褉", "袛萤褉萤胁写爷谐褝褝褉 褋邪褉", "孝邪胁写褍谐邪邪褉 褋邪褉", "袟褍褉谐邪邪写褍谐邪邪褉 褋邪褉", "袛芯谢写褍谐邪邪褉 褋邪褉", "袧邪泄屑写褍谐邪邪褉 褋邪褉", "袝褋写爷谐褝褝褉 褋邪褉", "袗褉邪胁写褍谐邪邪褉 褋邪褉", "袗褉胁邪薪薪褝谐写爷谐褝褝褉 褋邪褉", "袗褉胁邪薪褏芯褢褉写褍谐邪邪褉 褋邪褉"]
      },
      rangeSeparator: "-褋 "
    };
    fp.l10ns.mn = Mongolian;
    var mn = fp.l10ns;

    exports.Mongolian = Mongolian;
    exports.default = mn;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
