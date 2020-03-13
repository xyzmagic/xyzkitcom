/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.sk = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Slovak = {
      weekdays: {
        shorthand: ["Ned", "Pon", "Ut", "Str", "艩tv", "Pia", "Sob"],
        longhand: ["Nede木a", "Pondelok", "Utorok", "Streda", "艩tvrtok", "Piatok", "Sobota"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "M谩j", "J煤n", "J煤l", "Aug", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Janu谩r", "Febru谩r", "Marec", "Apr铆l", "M谩j", "J煤n", "J煤l", "August", "September", "Okt贸ber", "November", "December"]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " do ",
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp.l10ns.sk = Slovak;
    var sk = fp.l10ns;

    exports.Slovak = Slovak;
    exports.default = sk;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
