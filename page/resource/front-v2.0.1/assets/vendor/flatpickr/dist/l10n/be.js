/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.be = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Belarusian = {
      weekdays: {
        shorthand: ["袧写", "袩薪", "袗褳", "小褉", "效褑", "袩褌", "小斜"],
        longhand: ["袧褟写蟹械谢褟", "袩邪薪褟写蟹械谢邪泻", "袗褳褌芯褉邪泻", "小械褉邪写邪", "效邪褑胁械褉", "袩褟褌薪褨褑邪", "小褍斜芯褌邪"]
      },
      months: {
        shorthand: ["小褌褍", "袥褞褌", "小邪泻", "袣褉邪", "孝褉邪", "效褝褉", "袥褨锌", "袞薪褨", "袙械褉", "袣邪褋", "袥褨褋", "小薪械"],
        longhand: ["小褌褍写蟹械薪褜", "袥褞褌褘", "小邪泻邪胁褨泻", "袣褉邪褋邪胁褨泻", "孝褉邪胁械薪褜", "效褝褉胁械薪褜", "袥褨锌械薪褜", "袞薪褨胁械薪褜", "袙械褉邪褋械薪褜", "袣邪褋褌褉褘褔薪褨泻", "袥褨褋褌邪锌邪写", "小薪械卸邪薪褜"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      rangeSeparator: " 鈥� ",
      weekAbbreviation: "孝褘写.",
      scrollTitle: "袩褉邪泻褉褍褑褨褑械 写谢褟 锌邪胁械谢褨褔褝薪薪褟",
      toggleTitle: "袧邪褑褨褋薪褨褑械 写谢褟 锌械褉邪泻谢褞褔褝薪薪褟",
      amPM: ["袛袩", "袩袩"],
      yearAriaLabel: "袚芯写"
    };
    fp.l10ns.be = Belarusian;
    var be = fp.l10ns;

    exports.Belarusian = Belarusian;
    exports.default = be;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
