/*
 * D峄媍h c谩c v膬n b岷 m岷穋 膽峄媙h cho bootstrap-select.
 * Locale: VI (Vietnamese)
 * Region: VN (Vi峄噒 Nam)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Ch瓢a ch峄峮',
    noneResultsText: 'Kh么ng c贸 k岷縯 qu岷� cho {0}',
    countSelectedText: function (numSelected, numTotal) {
      return "{0} m峄 膽茫 ch峄峮";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Kh么ng th峄� ch峄峮 (gi峄沬 h岷 {n} m峄)',
        'Kh么ng th峄� ch峄峮 (gi峄沬 h岷 {n} m峄)'
      ];
    },
    selectAllText: 'Ch峄峮 t岷 c岷�',
    deselectAllText: 'B峄� ch峄峮',
    multipleSeparator: ', '
  };
})(jQuery);
