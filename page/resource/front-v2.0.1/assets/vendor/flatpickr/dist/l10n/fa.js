/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.fa = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Persian = {
      weekdays: {
        shorthand: ["蹖讴", "丿賵", "爻賴", "趩賴丕乇", "倬賳噩", "噩賲毓賴", "卮賳亘賴"],
        longhand: ["蹖讴鈥屫促嗀ㄙ�", "丿賵卮賳亘賴", "爻賴鈥屫促嗀ㄙ�", "趩賴丕乇卮賳亘賴", "倬賳趩鈥屫促嗀ㄙ�", "噩賲毓賴", "卮賳亘賴"]
      },
      months: {
        shorthand: ["跇丕賳賵蹖賴", "賮賵乇蹖賴", "賲丕乇爻", "丌賵乇蹖賱", "賲賴", "跇賵卅賳", "跇賵卅蹖賴", "丕賵鬲", "爻倬鬲丕賲亘乇", "丕讴鬲亘乇", "賳賵丕賲亘乇", "丿爻丕賲亘乇"],
        longhand: ["跇丕賳賵蹖賴", "賮賵乇蹖賴", "賲丕乇爻", "丌賵乇蹖賱", "賲賴", "跇賵卅賳", "跇賵卅蹖賴", "丕賵鬲", "爻倬鬲丕賲亘乇", "丕讴鬲亘乇", "賳賵丕賲亘乇", "丿爻丕賲亘乇"]
      },
      firstDayOfWeek: 6,
      ordinal: function ordinal() {
        return "";
      }
    };
    fp.l10ns.fa = Persian;
    var fa = fp.l10ns;

    exports.Persian = Persian;
    exports.default = fa;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
