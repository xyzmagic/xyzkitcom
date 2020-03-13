/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.hi = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Hindi = {
      weekdays: {
        shorthand: ["啶班さ啶�", "啶膏啶�", "啶啶椸げ", "啶啶�", "啶椸啶班", "啶多啶曕啶�", "啶多え啶�"],
        longhand: ["啶班さ啶苦さ啶距ぐ", "啶膏啶さ啶距ぐ", "啶啶椸げ啶掂ぞ啶�", "啶啶оさ啶距ぐ", "啶椸啶班啶掂ぞ啶�", "啶多啶曕啶班さ啶距ぐ", "啶多え啶苦さ啶距ぐ"]
      },
      months: {
        shorthand: ["啶溹え", "啶ぐ", "啶ぞ啶班啶�", "啶呧お啷嵿ぐ啷囙げ", "啶", "啶溹啶�", "啶溹啶侧ぞ啶�", "啶呧", "啶膏た啶�", "啶呧啷嵿", "啶ㄠさ", "啶︵た"],
        longhand: ["啶溹え啶掂ぐ啷� ", "啶ぐ啶掂ぐ啷�", "啶ぞ啶班啶�", "啶呧お啷嵿ぐ啷囙げ", "啶", "啶溹啶�", "啶溹啶侧ぞ啶�", "啶呧啶膏啶� ", "啶膏た啶むぎ啷嵿が啶�", "啶呧啷嵿啷傕が啶�", "啶ㄠさ啶啶ぐ", "啶︵た啶膏ぎ啷嵿が啶�"]
      }
    };
    fp.l10ns.hi = Hindi;
    var hi = fp.l10ns;

    exports.Hindi = Hindi;
    exports.default = hi;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
