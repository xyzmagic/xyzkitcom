/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.cs = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Czech = {
      weekdays: {
        shorthand: ["Ne", "Po", "脷t", "St", "膶t", "P谩", "So"],
        longhand: ["Ned臎le", "Pond臎l铆", "脷ter媒", "St艡eda", "膶tvrtek", "P谩tek", "Sobota"]
      },
      months: {
        shorthand: ["Led", "脷n", "B艡e", "Dub", "Kv臎", "膶er", "膶vc", "Srp", "Z谩艡", "艠铆j", "Lis", "Pro"],
        longhand: ["Leden", "脷nor", "B艡ezen", "Duben", "Kv臎ten", "膶erven", "膶ervenec", "Srpen", "Z谩艡铆", "艠铆jen", "Listopad", "Prosinec"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      },
      rangeSeparator: " do ",
      weekAbbreviation: "T媒d.",
      scrollTitle: "Rolujte pro zm臎nu",
      toggleTitle: "P艡epnout dopoledne/odpoledne",
      amPM: ["dop.", "odp."],
      yearAriaLabel: "Rok"
    };
    fp.l10ns.cs = Czech;
    var cs = fp.l10ns;

    exports.Czech = Czech;
    exports.default = cs;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
