/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.cat = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Catalan = {
      weekdays: {
        shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        longhand: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
      },
      months: {
        shorthand: ["Gen", "Febr", "Mar莽", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
        longhand: ["Gener", "Febrer", "Mar莽", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]
      },
      ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "猫";

        switch (s % 10) {
          case 1:
            return "r";

          case 2:
            return "n";

          case 3:
            return "r";

          case 4:
            return "t";

          default:
            return "猫";
        }
      },
      firstDayOfWeek: 1
    };
    fp.l10ns.cat = Catalan;
    var cat = fp.l10ns;

    exports.Catalan = Catalan;
    exports.default = cat;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
