/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.kz = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Kazakh = {
      weekdays: {
        shorthand: ["袞褋", "袛褋", "小c", "小褉", "袘褋", "袞屑", "小斜"],
        longhand: ["袞械泻褋械薪斜i", "袛爷泄褋械薪斜i", "小械泄褋械薪斜i", "小訖褉褋械薪斜i", "袘械泄褋械薪斜i", "袞冶屑邪", "小械薪斜i"]
      },
      months: {
        shorthand: ["覛邪遥", "袗覜锌", "袧邪褍", "小訖褍", "袦邪屑", "袦邪褍", "楔i谢", "孝邪屑", "覛褘褉", "覛邪蟹", "覛邪褉", "袞械谢"],
        longhand: ["覛邪遥褌邪褉", "袗覜锌邪薪", "袧邪褍褉褘蟹", "小訖褍i褉", "袦邪屑褘褉", "袦邪褍褋褘屑", "楔i谢写械", "孝邪屑褘蟹", "覛褘褉泻爷泄械泻", "覛邪蟹邪薪", "覛邪褉邪褕邪", "袞械谢褌芯覜褋邪薪"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      rangeSeparator: " 鈥� ",
      weekAbbreviation: "袗锌褌邪",
      scrollTitle: "耶谢泻械泄褌褍 爷褕褨薪 邪泄薪邪谢写褘褉褘遥褘蟹",
      toggleTitle: "袗褍褘褋褌褘褉褍 爷褕褨薪 斜邪褋褘遥褘蟹",
      amPM: ["孝袛", "孝袣"],
      yearAriaLabel: "袞褘谢"
    };
    fp.l10ns.kz = Kazakh;
    var kz = fp.l10ns;

    exports.Kazakh = Kazakh;
    exports.default = kz;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
