/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.sq = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Albanian = {
      weekdays: {
        shorthand: ["Di", "H毛", "Ma", "M毛", "En", "Pr", "Sh"],
        longhand: ["E Diel", "E H毛n毛", "E Mart毛", "E M毛rkur毛", "E Enjte", "E Premte", "E Shtun毛"]
      },
      months: {
        shorthand: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "N毛n", "Dhj"],
        longhand: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N毛ntor", "Dhjetor"]
      }
    };
    fp.l10ns.sq = Albanian;
    var sq = fp.l10ns;

    exports.Albanian = Albanian;
    exports.default = sq;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
