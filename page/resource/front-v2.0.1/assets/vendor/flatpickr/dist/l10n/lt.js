/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.lt = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Lithuanian = {
      weekdays: {
        shorthand: ["S", "Pr", "A", "T", "K", "Pn", "艩"],
        longhand: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre膷iadienis", "Ketvirtadienis", "Penktadienis", "艩e拧tadienis"]
      },
      months: {
        shorthand: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spl", "Lap", "Grd"],
        longhand: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu啪臈", "Bir啪elis", "Liepa", "Rugpju虅tis", "Rugse虈jis", "Spalis", "Lapkritis", "Gruodis"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "-a";
      },
      weekAbbreviation: "Sav",
      scrollTitle: "Keisti laik膮 pel臈s rateliu",
      toggleTitle: "Perjungti laiko format膮"
    };
    fp.l10ns.lt = Lithuanian;
    var lt = fp.l10ns;

    exports.Lithuanian = Lithuanian;
    exports.default = lt;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
