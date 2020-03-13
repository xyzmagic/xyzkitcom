/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.hu = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Hungarian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
        longhand: ["Vas谩rnap", "H茅tf艖", "Kedd", "Szerda", "Cs眉t枚rt枚k", "P茅ntek", "Szombat"]
      },
      months: {
        shorthand: ["Jan", "Feb", "M谩r", "脕pr", "M谩j", "J煤n", "J煤l", "Aug", "Szep", "Okt", "Nov", "Dec"],
        longhand: ["Janu谩r", "Febru谩r", "M谩rcius", "脕prilis", "M谩jus", "J煤nius", "J煤lius", "Augusztus", "Szeptember", "Okt贸ber", "November", "December"]
      },
      ordinal: function ordinal() {
        return ".";
      },
      weekAbbreviation: "H茅t",
      scrollTitle: "G枚rgessen",
      toggleTitle: "Kattintson a v谩lt谩shoz"
    };
    fp.l10ns.hu = Hungarian;
    var hu = fp.l10ns;

    exports.Hungarian = Hungarian;
    exports.default = hu;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
