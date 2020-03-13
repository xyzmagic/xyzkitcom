/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.et = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Estonian = {
      weekdays: {
        shorthand: ["P", "E", "T", "K", "N", "R", "L"],
        longhand: ["P眉hap盲ev", "Esmasp盲ev", "Teisip盲ev", "Kolmap盲ev", "Neljap盲ev", "Reede", "Laup盲ev"]
      },
      months: {
        shorthand: ["Jaan", "Veebr", "M盲rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
        longhand: ["Jaanuar", "Veebruar", "M盲rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      },
      weekAbbreviation: "N盲d",
      rangeSeparator: " kuni ",
      scrollTitle: "Keri, et suurendada",
      toggleTitle: "Kl玫psa, et vahetada"
    };
    fp.l10ns.et = Estonian;
    var et = fp.l10ns;

    exports.Estonian = Estonian;
    exports.default = et;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
