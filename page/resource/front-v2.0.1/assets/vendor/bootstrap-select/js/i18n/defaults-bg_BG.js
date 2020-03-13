/*
 * Translated default messages for bootstrap-select.
 * Locale: BG (Bulgaria)
 * Region: BG (Bulgaria)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '袧懈褖芯 懈蟹斜褉邪薪芯',
    noneResultsText: '袧褟屑邪 褉械蟹褍谢褌邪褌 蟹邪 {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} 懈蟹斜褉邪薪 械谢械屑械薪褌" : "{0} 懈蟹斜褉邪薪懈 械谢械屑械薪褌邪";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? '袥懈屑懈褌邪 械 写芯褋褌懈谐薪邪褌 ({n} 械谢械屑械薪褌 屑邪泻褋懈屑褍屑)' : '袥懈屑懈褌邪 械 写芯褋褌懈谐薪邪褌 ({n} 械谢械屑械薪褌邪 屑邪泻褋懈屑褍屑)',
        (numGroup == 1) ? '袚褉褍锌芯胁懈褟 谢懈屑懈褌 械 写芯褋褌懈谐薪邪褌 ({n} 械谢械屑械薪褌 屑邪泻褋懈屑褍屑)' : '袚褉褍锌芯胁懈褟 谢懈屑懈褌 械 写芯褋褌懈谐薪邪褌 ({n} 械谢械屑械薪褌邪 屑邪泻褋懈屑褍屑)'
      ];
    },
    selectAllText: '袠蟹斜械褉懈 胁褋懈褔泻懈',
    deselectAllText: '袪邪蟹屑邪褉泻懈褉邪泄 胁褋懈褔泻懈',
    multipleSeparator: ', '
  };
})(jQuery);
