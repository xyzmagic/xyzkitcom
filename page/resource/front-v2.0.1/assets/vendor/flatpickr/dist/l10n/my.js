/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.my = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Burmese = {
      weekdays: {
        shorthand: ["醼斸�结��", "醼溼��", "醼傖��", "醼熱�搬��", "醼�醼坚��", "醼炨�贬��", "醼斸��"],
        longhand: ["醼愥�斸�勧�横�贯�傖�斸�结��", "醼愥�斸�勧�横�贯�溼��", "醼♂�勧�横�贯�傖��", "醼椺��掅�贯�撫�熱�搬��", "醼�醼坚��炨�曖�愥�贬��", "醼炨�贬���醼坚��", "醼呩�斸��"]
      },
      months: {
        shorthand: ["醼囜�斸��", "醼栣��", "醼欋�愥��", "醼曖�坚��", "醼欋��", "醼囜�结�斸��", "醼溼���勧��", "醼炨��", "醼呩��醼�", "醼♂�贬���醼�", "醼斸���", "醼掅��"],
        longhand: ["醼囜�斸�横�斸�濁��涐��", "醼栣�贬�栣�贬��横�濁��涐��", "醼欋�愥��", "醼п�曖�坚��", "醼欋��", "醼囜�结�斸��", "醼囜�搬�溼���勧��", "醼炨�坚�傖��愥��", "醼呩��醼横�愥�勧�横�樶��", "醼♂�贬���醼横�愥���樶��", "醼斸���濁�勧�横�樶��", "醼掅��囜�勧�横�樶��"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      }
    };
    fp.l10ns.my = Burmese;
    var my = fp.l10ns;

    exports.Burmese = Burmese;
    exports.default = my;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
