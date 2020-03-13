/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.pa = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Punjabi = {
      weekdays: {
        shorthand: ["啜愢à", "啜膏啜�", "啜┌啜椸ú", "啜﹣喋编ě", "啜掂﹢啜�", "啜膏喋佮┍啜曕ò", "啜膏啜ㄠ喋编啜�"],
        longhand: ["啜愢à啜掂ň啜�", "啜膏啜ǖ啜距ò", "啜┌啜椸ú啜掂ň啜�", "啜﹣喋编ě啜掂ň啜�", "啜掂﹢啜班ǖ啜距ò", "啜膏喋佮┍啜曕ò啜掂ň啜�", "啜膏啜ㄠ喋编啜班ǖ啜距ò"]
      },
      months: {
        shorthand: ["啜溹è", "啜啜�", "啜ň啜�", "啜呧í喋嵿ò喋�", "啜▓", "啜溹﹤啜�", "啜溹﹣啜侧ň", "啜呧", "啜膏à喋�", "啜呧〞", "啜ㄠǖ喋�", "啜︵ǜ喋�"],
        longhand: ["啜溹è啜掂ò喋�", "啜啜班ǖ啜班﹢", "啜ň啜班", "啜呧í喋嵿ò喋堗ú", "啜▓", "啜溹﹤啜�", "啜溹﹣啜侧ň啜�", "啜呧啜膏à", "啜膏à喋班ì啜�", "啜呧〞啜む﹤啜ò", "啜ㄠǖ喋班ì啜�", "啜︵ǜ喋班ì啜�"]
      }
    };
    fp.l10ns.pa = Punjabi;
    var pa = fp.l10ns;

    exports.Punjabi = Punjabi;
    exports.default = pa;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
