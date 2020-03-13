/*
 * Translated default messages for bootstrap-select.
 * Locale: FR (French; Fran莽ais)
 * Region: FR (France)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Aucune s茅lection',
    noneResultsText: 'Aucun r茅sultat pour {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected > 1) ? "{0} 茅l茅ments s茅lectionn茅s" : "{0} 茅l茅ment s茅lectionn茅";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll > 1) ? 'Limite atteinte ({n} 茅l茅ments max)' : 'Limite atteinte ({n} 茅l茅ment max)',
        (numGroup > 1) ? 'Limite du groupe atteinte ({n} 茅l茅ments max)' : 'Limite du groupe atteinte ({n} 茅l茅ment max)'
      ];
    },
    multipleSeparator: ', ',
    selectAllText: 'Tout s茅lectionner',
    deselectAllText: 'Tout d茅s茅lectionner',
  };
})(jQuery);
