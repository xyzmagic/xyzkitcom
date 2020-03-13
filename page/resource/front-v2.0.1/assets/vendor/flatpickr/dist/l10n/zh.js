/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.zh = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Mandarin = {
      weekdays: {
        shorthand: ["鍛ㄦ棩", "鍛ㄤ竴", "鍛ㄤ簩", "鍛ㄤ笁", "鍛ㄥ洓", "鍛ㄤ簲", "鍛ㄥ叚"],
        longhand: ["鏄熸湡鏃�", "鏄熸湡涓�", "鏄熸湡浜�", "鏄熸湡涓�", "鏄熸湡鍥�", "鏄熸湡浜�", "鏄熸湡鍏�"]
      },
      months: {
        shorthand: ["涓�鏈�", "浜屾湀", "涓夋湀", "鍥涙湀", "浜旀湀", "鍏湀", "涓冩湀", "鍏湀", "涔濇湀", "鍗佹湀", "鍗佷竴鏈�", "鍗佷簩鏈�"],
        longhand: ["涓�鏈�", "浜屾湀", "涓夋湀", "鍥涙湀", "浜旀湀", "鍏湀", "涓冩湀", "鍏湀", "涔濇湀", "鍗佹湀", "鍗佷竴鏈�", "鍗佷簩鏈�"]
      },
      rangeSeparator: " 鑷� ",
      weekAbbreviation: "鍛�",
      scrollTitle: "婊氬姩鍒囨崲",
      toggleTitle: "鐐瑰嚮鍒囨崲 12/24 灏忔椂鏃跺埗"
    };
    fp.l10ns.zh = Mandarin;
    var zh = fp.l10ns;

    exports.Mandarin = Mandarin;
    exports.default = zh;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
