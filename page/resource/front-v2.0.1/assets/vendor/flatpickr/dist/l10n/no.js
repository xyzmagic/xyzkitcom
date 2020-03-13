/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.no = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Norwegian = {
      weekdays: {
        shorthand: ["S酶n", "Man", "Tir", "Ons", "Tor", "Fre", "L酶r"],
        longhand: ["S酶ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L酶rdag"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        longhand: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " til ",
      weekAbbreviation: "Uke",
      scrollTitle: "Scroll for 氓 endre",
      toggleTitle: "Klikk for 氓 veksle",
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp.l10ns.no = Norwegian;
    var no = fp.l10ns;

    exports.Norwegian = Norwegian;
    exports.default = no;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
