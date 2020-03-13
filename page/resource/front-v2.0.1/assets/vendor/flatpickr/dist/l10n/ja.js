/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.ja = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Japanese = {
      weekdays: {
        shorthand: ["鏃�", "鏈�", "鐏�", "姘�", "鏈�", "閲�", "鍦�"],
        longhand: ["鏃ユ洔鏃�", "鏈堟洔鏃�", "鐏洔鏃�", "姘存洔鏃�", "鏈ㄦ洔鏃�", "閲戞洔鏃�", "鍦熸洔鏃�"]
      },
      months: {
        shorthand: ["1鏈�", "2鏈�", "3鏈�", "4鏈�", "5鏈�", "6鏈�", "7鏈�", "8鏈�", "9鏈�", "10鏈�", "11鏈�", "12鏈�"],
        longhand: ["1鏈�", "2鏈�", "3鏈�", "4鏈�", "5鏈�", "6鏈�", "7鏈�", "8鏈�", "9鏈�", "10鏈�", "11鏈�", "12鏈�"]
      }
    };
    fp.l10ns.ja = Japanese;
    var ja = fp.l10ns;

    exports.Japanese = Japanese;
    exports.default = ja;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
