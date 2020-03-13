/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.fr = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var French = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
        longhand: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
      },
      months: {
        shorthand: ["janv", "f茅vr", "mars", "avr", "mai", "juin", "juil", "ao没t", "sept", "oct", "nov", "d茅c"],
        longhand: ["janvier", "f茅vrier", "mars", "avril", "mai", "juin", "juillet", "ao没t", "septembre", "octobre", "novembre", "d茅cembre"]
      },
      ordinal: function ordinal(nth) {
        if (nth > 1) return "";
        return "er";
      },
      rangeSeparator: " au ",
      weekAbbreviation: "Sem",
      scrollTitle: "D茅filer pour augmenter la valeur",
      toggleTitle: "Cliquer pour basculer"
    };
    fp.l10ns.fr = French;
    var fr = fp.l10ns;

    exports.French = French;
    exports.default = fr;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
