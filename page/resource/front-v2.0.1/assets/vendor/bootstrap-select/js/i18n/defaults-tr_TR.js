/*
 * Translated default messages for bootstrap-select.
 * Locale: TR (Turkey)
 * Region: TR (Europe)
 * Author: Serhan G眉ney
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Hi莽biri se莽ilmedi',
    noneResultsText: 'Hi莽bir sonu莽 bulunamad谋 {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} 枚臒e se莽ildi" : "{0} 枚臒e se莽ildi";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit a艧谋ld谋 (maksimum {n} say谋da 枚臒e )' : 'Limit a艧谋ld谋 (maksimum {n} say谋da 枚臒e)',
        (numGroup == 1) ? 'Grup limiti a艧谋ld谋 (maksimum {n} say谋da 枚臒e)' : 'Grup limiti a艧谋ld谋 (maksimum {n} say谋da 枚臒e)'
      ];
    },
    selectAllText: 'T眉m眉n眉 Se莽',
    deselectAllText: 'Se莽iniz',
    multipleSeparator: ', '
  };
})(jQuery);
