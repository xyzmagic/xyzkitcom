/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.gr = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Greek = {
      weekdays: {
        shorthand: ["螝蠀", "螖蔚", "韦蟻", "韦蔚", "螤苇", "螤伪", "危维"],
        longhand: ["螝蠀蟻喂伪魏萎", "螖蔚蠀蟿苇蟻伪", "韦蟻委蟿畏", "韦蔚蟿维蟻蟿畏", "螤苇渭蟺蟿畏", "螤伪蟻伪蟽魏蔚蠀萎", "危维尾尾伪蟿慰"]
      },
      months: {
        shorthand: ["螜伪谓", "桅蔚尾", "螠维蟻", "螒蟺蟻", "螠维喂", "螜慰蠉", "螜慰蠉", "螒蠉纬", "危蔚蟺", "螣魏蟿", "螡慰苇", "螖蔚魏"],
        longhand: ["螜伪谓慰蠀维蟻喂慰蟼", "桅蔚尾蟻慰蠀维蟻喂慰蟼", "螠维蟻蟿喂慰蟼", "螒蟺蟻委位喂慰蟼", "螠维喂慰蟼", "螜慰蠉谓喂慰蟼", "螜慰蠉位喂慰蟼", "螒蠉纬慰蠀蟽蟿慰蟼", "危蔚蟺蟿苇渭尾蟻喂慰蟼", "螣魏蟿蠋尾蟻喂慰蟼", "螡慰苇渭尾蟻喂慰蟼", "螖蔚魏苇渭尾蟻喂慰蟼"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      weekAbbreviation: "螘尾未",
      rangeSeparator: " 苇蠅蟼 ",
      scrollTitle: "螠蔚蟿伪魏蠀位萎蟽蟿蔚 纬喂伪 蟺蟻慰蟽伪蠉尉畏蟽畏",
      toggleTitle: "螝维谓蟿蔚 魏位喂魏 纬喂伪 伪位位伪纬萎",
      amPM: ["螤螠", "螠螠"]
    };
    fp.l10ns.gr = Greek;
    var gr = fp.l10ns;

    exports.Greek = Greek;
    exports.default = gr;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
