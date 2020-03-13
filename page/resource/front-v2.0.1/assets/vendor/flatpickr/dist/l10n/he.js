/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.he = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Hebrew = {
      weekdays: {
        shorthand: ["讗", "讘", "讙", "讚", "讛", "讜", "讝"],
        longhand: ["专讗砖讜谉", "砖谞讬", "砖诇讬砖讬", "专讘讬注讬", "讞诪讬砖讬", "砖讬砖讬", "砖讘转"]
      },
      months: {
        shorthand: ["讬谞讜壮", "驻讘专壮", "诪专抓", "讗驻专壮", "诪讗讬", "讬讜谞讬", "讬讜诇讬", "讗讜讙壮", "住驻讟壮", "讗讜拽壮", "谞讜讘壮", "讚爪诪壮"],
        longhand: ["讬谞讜讗专", "驻讘专讜讗专", "诪专抓", "讗驻专讬诇", "诪讗讬", "讬讜谞讬", "讬讜诇讬", "讗讜讙讜住讟", "住驻讟诪讘专", "讗讜拽讟讜讘专", "谞讜讘诪讘专", "讚爪诪讘专"]
      }
    };
    fp.l10ns.he = Hebrew;
    var he = fp.l10ns;

    exports.Hebrew = Hebrew;
    exports.default = he;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
