/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.eo = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Esperanto = {
      firstDayOfWeek: 1,
      rangeSeparator: " 臐is ",
      weekAbbreviation: "Sem",
      scrollTitle: "Rulumu por pligrandigi la valoron",
      toggleTitle: "Klaku por 艥alti",
      weekdays: {
        shorthand: ["Dim", "Lun", "Mar", "Mer", "拇a怒", "Ven", "Sab"],
        longhand: ["diman膲o", "lundo", "mardo", "merkredo", "牡a怒do", "vendredo", "sabato"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "A怒g", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a怒gusto", "septembro", "oktobro", "novembro", "decembro"]
      },
      ordinal: function ordinal() {
        return "-a";
      }
    };
    fp.l10ns.eo = Esperanto;
    var eo = fp.l10ns;

    exports.Esperanto = Esperanto;
    exports.default = eo;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
