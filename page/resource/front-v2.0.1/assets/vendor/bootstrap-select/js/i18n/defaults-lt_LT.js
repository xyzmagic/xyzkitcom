/*
 * Translated default messages for bootstrap-select.
 * Locale: LT (Lithuanian)
 * Region: LT (Lithuania)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Niekas nepasirinkta',
    noneResultsText: 'Niekas nesutapo su {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} elementas pasirinktas" : "{0} elementai(-懦) pasirinkta";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Pasiekta riba ({n} elementas daugiausiai)' : 'Riba pasiekta ({n} elementai(-懦) daugiausiai)',
        (numGroup == 1) ? 'Grup臈s riba pasiekta ({n} elementas daugiausiai)' : 'Grup臈s riba pasiekta ({n} elementai(-懦) daugiausiai)'
      ];
    },
    selectAllText: 'Pasirinkti visus',
    deselectAllText: 'Atmesti visus',
    multipleSeparator: ', '
  };
})(jQuery);
