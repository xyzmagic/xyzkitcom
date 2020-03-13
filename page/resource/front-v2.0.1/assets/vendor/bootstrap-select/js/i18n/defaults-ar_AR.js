/*!
 * Translated default messages for bootstrap-select.
 * Locale: AR (Arabic)
 * Author: Yasser Lotfy <y_l@alive.com>
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '賱賲 賷鬲賲 廿禺鬲賷丕乇 卮卅',
    noneResultsText: '賱丕 鬲賵噩丿 賳鬲丕卅噩 賲胤丕亘賯丞 賱賭 {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} 禺賷丕乇 鬲賲 廿禺鬲賷丕乇賴" : "{0} 禺賷丕乇丕鬲 鬲賲鬲 廿禺鬲賷丕乇賴丕";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? '鬲禺胤賶 丕賱丨丿 丕賱賲爻賲賵丨 ({n} 禺賷丕乇 亘丨丿 兀賯氐賶)' : '鬲禺胤賶 丕賱丨丿 丕賱賲爻賲賵丨 ({n} 禺賷丕乇丕鬲 亘丨丿 兀賯氐賶)',
        (numGroup == 1) ? '鬲禺胤賶 丕賱丨丿 丕賱賲爻賲賵丨 賱賱賲噩賲賵毓丞 ({n} 禺賷丕乇 亘丨丿 兀賯氐賶)' : '鬲禺胤賶 丕賱丨丿 丕賱賲爻賲賵丨 賱賱賲噩賲賵毓丞 ({n} 禺賷丕乇丕鬲 亘丨丿 兀賯氐賶)'
      ];
    },
    selectAllText: '廿禺鬲賷丕乇 丕賱噩賲賷毓',
    deselectAllText: '廿賱睾丕亍 廿禺鬲賷丕乇 丕賱噩賲賷毓',
    multipleSeparator: '貙 '
  };
})(jQuery);
