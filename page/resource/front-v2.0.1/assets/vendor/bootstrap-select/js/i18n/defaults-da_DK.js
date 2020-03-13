/*
 * Translated default messages for bootstrap-select.
 * Locale: DA (Danish)
 * Region: DK (Denmark)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Intet valgt',
    noneResultsText: 'Ingen resultater fundet {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} valgt" : "{0} valgt";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Begr忙nsning n氓et (max {n} valgt)' : 'Begr忙nsning n氓et (max {n} valgte)',
        (numGroup == 1) ? 'Gruppe-begr忙nsning n氓et (max {n} valgt)' : 'Gruppe-begr忙nsning n氓et (max {n} valgte)'
      ];
    },
    selectAllText: 'Mark茅r alle',
    deselectAllText: 'Afmark茅r alle',
    multipleSeparator: ', '
  };
})(jQuery);
