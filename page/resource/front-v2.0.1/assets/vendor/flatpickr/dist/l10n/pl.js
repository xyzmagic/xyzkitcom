/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.pl = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Polish = {
      weekdays: {
        shorthand: ["Nd", "Pn", "Wt", "艢r", "Cz", "Pt", "So"],
        longhand: ["Niedziela", "Poniedzia艂ek", "Wtorek", "艢roda", "Czwartek", "Pi膮tek", "Sobota"]
      },
      months: {
        shorthand: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa藕", "Lis", "Gru"],
        longhand: ["Stycze艅", "Luty", "Marzec", "Kwiecie艅", "Maj", "Czerwiec", "Lipiec", "Sierpie艅", "Wrzesie艅", "Pa藕dziernik", "Listopad", "Grudzie艅"]
      },
      rangeSeparator: " do ",
      weekAbbreviation: "tydz.",
      scrollTitle: "Przwi艅 aby zwi臋kszy膰",
      toggleTitle: "Kliknij aby prze艂膮czy膰",
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp.l10ns.pl = Polish;
    var pl = fp.l10ns;

    exports.Polish = Polish;
    exports.default = pl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
