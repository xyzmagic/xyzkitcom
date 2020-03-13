/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.tr = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Turkish = {
      weekdays: {
        shorthand: ["Paz", "Pzt", "Sal", "脟ar", "Per", "Cum", "Cmt"],
        longhand: ["Pazar", "Pazartesi", "Sal谋", "脟ar艧amba", "Per艧embe", "Cuma", "Cumartesi"]
      },
      months: {
        shorthand: ["Oca", "艦ub", "Mar", "Nis", "May", "Haz", "Tem", "A臒u", "Eyl", "Eki", "Kas", "Ara"],
        longhand: ["Ocak", "艦ubat", "Mart", "Nisan", "May谋s", "Haziran", "Temmuz", "A臒ustos", "Eyl眉l", "Ekim", "Kas谋m", "Aral谋k"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "Art谋rmak i莽in kayd谋r谋n",
      toggleTitle: "A莽/Kapa",
      amPM: ["脰脰", "脰S"]
    };
    fp.l10ns.tr = Turkish;
    var tr = fp.l10ns;

    exports.Turkish = Turkish;
    exports.default = tr;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
