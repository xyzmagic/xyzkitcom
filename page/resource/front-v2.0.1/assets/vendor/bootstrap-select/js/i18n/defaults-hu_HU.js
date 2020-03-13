/*
 * Translated default messages for bootstrap-select.
 * Locale: HU (Hungarian)
 * Region: HU (Hungary)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'V谩lasszon!',
    noneResultsText: 'Nincs tal谩lat {0}',
    countSelectedText: function (numSelected, numTotal) {
      return '{0} elem kiv谩lasztva';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Legfeljebb {n} elem v谩laszthat贸',
        'A csoportban legfeljebb {n} elem v谩laszthat贸'
      ];
    },
    selectAllText: 'Mind',
    deselectAllText: 'Egyik sem',
    multipleSeparator: ', '
  };
})(jQuery);
