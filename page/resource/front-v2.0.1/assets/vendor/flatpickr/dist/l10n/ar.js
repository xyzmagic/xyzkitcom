/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.ar = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Arabic = {
      weekdays: {
        shorthand: ["兀丨丿", "丕孬賳賷賳", "孬賱丕孬丕亍", "兀乇亘毓丕亍", "禺賲賷爻", "噩賲毓丞", "爻亘鬲"],
        longhand: ["丕賱兀丨丿", "丕賱丕孬賳賷賳", "丕賱孬賱丕孬丕亍", "丕賱兀乇亘毓丕亍", "丕賱禺賲賷爻", "丕賱噩賲毓丞", "丕賱爻亘鬲"]
      },
      months: {
        shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        longhand: ["賷賳丕賷乇", "賮亘乇丕賷乇", "賲丕乇爻", "兀亘乇賷賱", "賲丕賷賵", "賷賵賳賷賵", "賷賵賱賷賵", "兀睾爻胤爻", "爻亘鬲賲亘乇", "兀賰鬲賵亘乇", "賳賵賮賲亘乇", "丿賷爻賲亘乇"]
      }
    };
    fp.l10ns.ar = Arabic;
    var ar = fp.l10ns;

    exports.Arabic = Arabic;
    exports.default = ar;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
