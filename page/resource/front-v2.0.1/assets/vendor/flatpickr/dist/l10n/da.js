/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.da = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Danish = {
      weekdays: {
        shorthand: ["s酶n", "man", "tir", "ons", "tors", "fre", "l酶r"],
        longhand: ["s酶ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l酶rdag"]
      },
      months: {
        shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        longhand: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
      },
      ordinal: function ordinal() {
        return ".";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " til ",
      weekAbbreviation: "uge"
    };
    fp.l10ns.da = Danish;
    var da = fp.l10ns;

    exports.Danish = Danish;
    exports.default = da;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
