/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.th = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Thai = {
      weekdays: {
        shorthand: ["喔覆", "喔�", "喔�", "喔�", "喔炧袱", "喔�", "喔�"],
        longhand: ["喔覆喔椸复喔曕涪喙�", "喔堗副喔權笚喔｀箤", "喔副喔囙竸喔侧福", "喔炧父喔�", "喔炧袱喔副喔笟喔斷傅", "喔ㄠ父喔佮福喙�", "喙�喔覆喔｀箤"]
      },
      months: {
        shorthand: ["喔�.喔�.", "喔�.喔�.", "喔∴傅.喔�.", "喙�喔�.喔�.", "喔�.喔�.", "喔∴复.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�."],
        longhand: ["喔∴竵喔｀覆喔勦浮", "喔佮父喔∴笭喔侧笧喔编笝喔樴箤", "喔∴傅喔權覆喔勦浮", "喙�喔∴俯喔侧涪喔�", "喔炧袱喔┼笭喔侧竸喔�", "喔∴复喔栢父喔權覆喔⑧笝", "喔佮福喔佮笌喔侧竸喔�", "喔复喔囙斧喔侧竸喔�", "喔佮副喔權涪喔侧涪喔�", "喔曕父喔ム覆喔勦浮", "喔炧袱喔ㄠ笀喔脆竵喔侧涪喔�", "喔樴副喔權抚喔侧竸喔�"]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " 喔栢付喔� ",
      scrollTitle: "喙�喔ム阜喙堗腑喔權箑喔炧阜喙堗腑喙�喔炧复喙堗浮喔福喔粪腑喔ム笖",
      toggleTitle: "喔勦弗喔脆竵喙�喔炧阜喙堗腑喙�喔涏弗喔掂箞喔⑧笝",
      ordinal: function ordinal() {
        return "";
      }
    };
    fp.l10ns.th = Thai;
    var th = fp.l10ns;

    exports.Thai = Thai;
    exports.default = th;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
