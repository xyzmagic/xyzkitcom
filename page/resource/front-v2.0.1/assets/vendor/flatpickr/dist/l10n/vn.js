/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.vn = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Vietnamese = {
      weekdays: {
        shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        longhand: ["Ch峄� nh岷璽", "Th峄� hai", "Th峄� ba", "Th峄� t瓢", "Th峄� n膬m", "Th峄� s谩u", "Th峄� b岷"]
      },
      months: {
        shorthand: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
        longhand: ["Th谩ng m峄檛", "Th谩ng hai", "Th谩ng ba", "Th谩ng t瓢", "Th谩ng n膬m", "Th谩ng s谩u", "Th谩ng b岷", "Th谩ng t谩m", "Th谩ng ch铆n", "Th谩ng m瓢峄漣", "Th谩ng 11", "Th谩ng 12"]
      },
      firstDayOfWeek: 1
    };
    fp.l10ns.vn = Vietnamese;
    var vn = fp.l10ns;

    exports.Vietnamese = Vietnamese;
    exports.default = vn;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
