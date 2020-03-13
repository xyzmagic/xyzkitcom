/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.si = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Sinhala = {
      weekdays: {
        shorthand: ["喽�", "喾�", "喽�", "喽�", "喽多穵鈥嵿痘", "喾冟窉", "喾冟窓"],
        longhand: ["喽夃痘喾掄动喾�", "喾冟冻喾斷动喾�", "喽呧稛喾勦痘喾斷穩喾忇动喾�", "喽多动喾忇动喾�", "喽多穵鈥嵿痘喾勦穬喾娻洞喽窉喽编穵喽窂", "喾冟窉喽氞窋喽秽窂喽窂", "喾冟窓喽编穬喾斷痘喾忇动喾�"]
      },
      months: {
        shorthand: ["喽⑧侗", "喽脆窓喽�", "喽膏窂喽秽穵", "喽呧洞喾娾�嵿痘喾�", "喽膏窅喽亨窉", "喽⑧窋喽编窉", "喽⑧窎喽洁窉", "喽呧稖喾�", "喾冟窅喽脆穵", "喽斷稓喾�", "喽编窚喾�喾�", "喽窓喾冟窅"],
        longhand: ["喽⑧侗喾�喾忇痘喾�", "喽脆窓喽多痘喾�喾忇痘喾�", "喽膏窂喽秽穵喽窋", "喽呧洞喾娾�嵿痘喾氞督喾�", "喽膏窅喽亨窉", "喽⑧窋喽编窉", "喽⑧窎喽洁窉", "喽呧稖喾澿穬喾娻董喾�", "喾冟窅喽脆穵喽窅喽膏穵喽多痘喾�", "喽斷稓喾娻董喾澿抖喽秽穵", "喽编窚喾�喾愢陡喾娻抖喽秽穵", "喽窓喾冟窅喽膏穵喽多痘喾�"]
      }
    };
    fp.l10ns.si = Sinhala;
    var si = fp.l10ns;

    exports.Sinhala = Sinhala;
    exports.default = si;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
