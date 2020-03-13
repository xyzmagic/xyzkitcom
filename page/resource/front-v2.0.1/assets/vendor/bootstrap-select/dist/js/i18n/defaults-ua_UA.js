/*!
 * Bootstrap-select v1.13.2 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '袧褨褔芯谐芯 薪械 胁懈斜褉邪薪芯',
    noneResultsText: '袟斜褨谐褨胁 薪械 蟹薪邪泄写械薪芯 {0}',
    countSelectedText: '袙懈斜褉邪薪芯 {0} 褨蟹 {1}',
    maxOptionsText: ['袛芯褋褟谐薪褍褌邪 屑械卸邪 ({n} {var} 屑邪泻褋懈屑褍屑)', '袛芯褋褟谐薪褍褌邪 屑械卸邪 胁 谐褉褍锌褨 ({n} {var} 屑邪泻褋懈屑褍屑)', ['items', 'item']],
    multipleSeparator: ', ',
    selectAllText: '袙懈斜褉邪褌懈 胁褋械',
    deselectAllText: '小泻邪褋褍胁邪褌懈 胁懈斜褨褉 褍褋褨'
  };
})(jQuery);


}));
