/*
 * Translated default messages for bootstrap-select.
 * Locale: KH (Khmer)
 * Region: kM (Khmer)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '釣樶灧釣撫灅釣夺灀釣⑨煉釣溼灨釣斸灦釣撫瀲釤掅灇釣踞灍釣氠灳釣�',
    noneResultsText: '釣樶灧釣撫灅釣夺灀釣涐瀾釤掅瀿釣曖灈 {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} 釣掅灦釣忈灮釣娽焸釣涐灁釣夺灀釣囜煉釣氠灳釣�" : "{0} 釣掅灦釣忈灮釣娽焸釣涐灁釣夺灀釣囜煉釣氠灳釣�";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? '釣堘灦釣撫瀶釣涐煁釣娽焸釣撫瀫釤嗎瀻釣忈煁 ( {n} 釣掅灦釣忈灮釣⑨瀼釣丰灁釣氠灅釣�)' : '釣⑨瀼釣丰灁釣氠灅釣夺瀳釣夺灀釣娽灈釤嬦瀶釤傖灀釣�釤嗎瀻釣忈煁 ( {n} 釣掅灦釣忈灮)',
        (numGroup == 1) ? '釣娽焸釣撫瀫釤嗎瀻釣忈煁釣�釤掅灇釣会灅釣堘灦釣撫瀶釣涐煁 ( {n} 釣⑨瀼釣丰灁釣氠灅釣夺瀿釣夺瀼釣�)' : '釣⑨瀼釣丰灁釣氠灅釣夺瀫釤掅灇釣会灅釣堘灦釣撫瀶釣涐煁釣娽焸釣撫瀫釤嗎瀻釣忈煁 ( {n} 釣掅灦釣忈灮)'
      ];
    },
    selectAllText: '釣囜煉釣氠灳釣熲�嬦灆釣�鈥嬦瀾釣夺焼釣勧灑釣熱煁',
    deselectAllText: '釣樶灧釣撫瀲釤掅灇釣踞灍鈥嬦灆釣�鈥嬦瀾釣夺焼釣勧灑釣�',
    multipleSeparator: ', '
  };
})(jQuery);
