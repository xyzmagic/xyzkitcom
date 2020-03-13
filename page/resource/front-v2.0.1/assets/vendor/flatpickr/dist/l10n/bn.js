/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.bn = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Bangla = {
      weekdays: {
        shorthand: ["唳班Μ唳�", "唳膏唳�", "唳唰嵿唳�", "唳唳�", "唳唳灌Ω唰嵿Κ唳む", "唳多唳曕唳�", "唳多Θ唳�"],
        longhand: ["唳班Μ唳苦Μ唳距Π", "唳膏唳Μ唳距Π", "唳唰嵿唳侧Μ唳距Π", "唳唳оΜ唳距Π", "唳唳灌Ω唰嵿Κ唳む唳唳�", "唳多唳曕唳班Μ唳距Π", "唳多Θ唳苦Μ唳距Π"]
      },
      months: {
        shorthand: ["唳溹唳ㄠ", "唳唳唳班", "唳唳班唳�", "唳忇Κ唰嵿Π唳苦Σ", "唳", "唳溹唳�", "唳溹唳侧唳�", "唳嗋", "唳膏唳唳熰", "唳呧唰嵿唰�", "唳ㄠΝ唰�", "唳∴唳膏"],
        longhand: ["唳溹唳ㄠ唳唳距Π唰�", "唳唳唳班唳唳距Π唰�", "唳唳班唳�", "唳忇Κ唰嵿Π唳苦Σ", "唳", "唳溹唳�", "唳溹唳侧唳�", "唳嗋唳膏唳�", "唳膏唳唳熰唳唳Π", "唳呧唰嵿唰嬥Μ唳�", "唳ㄠΝ唰囙Ξ唰嵿Μ唳�", "唳∴唳膏唳唳Π"]
      }
    };
    fp.l10ns.bn = Bangla;
    var bn = fp.l10ns;

    exports.Bangla = Bangla;
    exports.default = bn;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
