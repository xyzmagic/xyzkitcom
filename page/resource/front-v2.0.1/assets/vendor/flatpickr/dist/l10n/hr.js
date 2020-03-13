/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.hr = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Croatian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["Ned", "Pon", "Uto", "Sri", "膶et", "Pet", "Sub"],
        longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "膶etvrtak", "Petak", "Subota"]
      },
      months: {
        shorthand: ["Sij", "Velj", "O啪u", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        longhand: ["Sije膷anj", "Velja膷a", "O啪ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"]
      }
    };
    fp.l10ns.hr = Croatian;
    var hr = fp.l10ns;

    exports.Croatian = Croatian;
    exports.default = hr;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
