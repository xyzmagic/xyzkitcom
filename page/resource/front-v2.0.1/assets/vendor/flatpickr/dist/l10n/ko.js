/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.ko = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Korean = {
      weekdays: {
        shorthand: ["鞚�", "鞗�", "頇�", "靾�", "氇�", "旮�", "韱�"],
        longhand: ["鞚检殧鞚�", "鞗旍殧鞚�", "頇旍殧鞚�", "靾橃殧鞚�", "氇╈殧鞚�", "旮堨殧鞚�", "韱犾殧鞚�"]
      },
      months: {
        shorthand: ["1鞗�", "2鞗�", "3鞗�", "4鞗�", "5鞗�", "6鞗�", "7鞗�", "8鞗�", "9鞗�", "10鞗�", "11鞗�", "12鞗�"],
        longhand: ["1鞗�", "2鞗�", "3鞗�", "4鞗�", "5鞗�", "6鞗�", "7鞗�", "8鞗�", "9鞗�", "10鞗�", "11鞗�", "12鞗�"]
      },
      ordinal: function ordinal() {
        return "鞚�";
      }
    };
    fp.l10ns.ko = Korean;
    var ko = fp.l10ns;

    exports.Korean = Korean;
    exports.default = ko;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
