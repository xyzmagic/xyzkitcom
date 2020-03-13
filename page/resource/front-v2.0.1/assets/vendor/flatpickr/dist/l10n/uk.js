/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.uk = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Ukrainian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["袧写", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜"],
        longhand: ["袧械写褨谢褟", "袩芯薪械写褨谢芯泻", "袙褨胁褌芯褉芯泻", "小械褉械写邪", "效械褌胁械褉", "袩'褟褌薪懈褑褟", "小褍斜芯褌邪"]
      },
      months: {
        shorthand: ["小褨褔", "袥褞褌", "袘械褉", "袣胁褨", "孝褉邪", "效械褉", "袥懈锌", "小械褉", "袙械褉", "袞芯胁", "袥懈褋", "袚褉褍"],
        longhand: ["小褨褔械薪褜", "袥褞褌懈泄", "袘械褉械蟹械薪褜", "袣胁褨褌械薪褜", "孝褉邪胁械薪褜", "效械褉胁械薪褜", "袥懈锌械薪褜", "小械褉锌械薪褜", "袙械褉械褋械薪褜", "袞芯胁褌械薪褜", "袥懈褋褌芯锌邪写", "袚褉褍写械薪褜"]
      }
    };
    fp.l10ns.uk = Ukrainian;
    var uk = fp.l10ns;

    exports.Ukrainian = Ukrainian;
    exports.default = uk;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
