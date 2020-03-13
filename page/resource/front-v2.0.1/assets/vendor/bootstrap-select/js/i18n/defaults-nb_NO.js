/*
 * Translated default messages for bootstrap-select.
 * Locale: NB (Norwegian; Bokm氓l)
 * Region: NO (Norway)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Ingen valgt',
    noneResultsText: 'S酶ket gir ingen treff {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} alternativ valgt" : "{0} alternativer valgt";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Grense n氓dd (maks {n} valg)' : 'Grense n氓dd (maks {n} valg)',
        (numGroup == 1) ? 'Grense for grupper n氓dd (maks {n} grupper)' : 'Grense for grupper n氓dd (maks {n} grupper)'
      ];
    },
    selectAllText: 'Merk alle',
    deselectAllText: 'Fjern alle',
    multipleSeparator: ', '
  };
})(jQuery);
