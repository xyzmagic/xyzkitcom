/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.sv = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Swedish = {
      firstDayOfWeek: 1,
      weekAbbreviation: "v",
      weekdays: {
        shorthand: ["S枚n", "M氓n", "Tis", "Ons", "Tor", "Fre", "L枚r"],
        longhand: ["S枚ndag", "M氓ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L枚rdag"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
      },
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp.l10ns.sv = Swedish;
    var sv = fp.l10ns;

    exports.Swedish = Swedish;
    exports.default = sv;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
