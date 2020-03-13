/*
 * Translated default messages for bootstrap-select.
 * Locale: FI (Finnish)
 * Region: FI (Finland)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Ei valintoja',
    noneResultsText: 'Ei hakutuloksia {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} valittu" : "{0} valitut";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Valintojen maksimim盲盲r盲 ({n} saavutettu)' : 'Valintojen maksimim盲盲r盲 ({n} saavutettu)',
        (numGroup == 1) ? 'Ryhm盲n maksimim盲盲r盲 ({n} saavutettu)' : 'Ryhm盲n maksimim盲盲r盲 ({n} saavutettu)'
      ];
    },
    selectAllText: 'Valitse kaikki',
    deselectAllText: 'Poista kaikki',
    multipleSeparator: ', '
  };
})(jQuery);
