/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.lv = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Latvian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["Sv", "P", "Ot", "Tr", "Ce", "Pk", "Se"],
        longhand: ["Sv膿tdiena", "Pirmdiena", "Otrdiena", "Tre拧diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Mai", "Apr", "J奴n", "J奴l", "Aug", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Janv膩ris", "Febru膩ris", "Marts", "Apr墨lis", "Maijs", "J奴nijs", "J奴lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"]
      },
      rangeSeparator: " l墨dz "
    };
    fp.l10ns.lv = Latvian;
    var lv = fp.l10ns;

    exports.Latvian = Latvian;
    exports.default = lv;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
