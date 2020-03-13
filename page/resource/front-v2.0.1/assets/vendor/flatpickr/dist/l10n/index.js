/* flatpickr v4.5.1, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.index = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Arabic = {
      weekdays: {
        shorthand: ["兀丨丿", "丕孬賳賷賳", "孬賱丕孬丕亍", "兀乇亘毓丕亍", "禺賲賷爻", "噩賲毓丞", "爻亘鬲"],
        longhand: ["丕賱兀丨丿", "丕賱丕孬賳賷賳", "丕賱孬賱丕孬丕亍", "丕賱兀乇亘毓丕亍", "丕賱禺賲賷爻", "丕賱噩賲毓丞", "丕賱爻亘鬲"]
      },
      months: {
        shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        longhand: ["賷賳丕賷乇", "賮亘乇丕賷乇", "賲丕乇爻", "兀亘乇賷賱", "賲丕賷賵", "賷賵賳賷賵", "賷賵賱賷賵", "兀睾爻胤爻", "爻亘鬲賲亘乇", "兀賰鬲賵亘乇", "賳賵賮賲亘乇", "丿賷爻賲亘乇"]
      }
    };
    fp.l10ns.ar = Arabic;
    fp.l10ns;

    var fp$1 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Austria = {
      weekdays: {
        shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
      },
      months: {
        shorthand: ["J盲n", "Feb", "M盲r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        longhand: ["J盲nner", "Februar", "M盲rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "KW",
      rangeSeparator: " bis ",
      scrollTitle: "Zum 脛ndern scrollen",
      toggleTitle: "Zum Umschalten klicken"
    };
    fp$1.l10ns.at = Austria;
    fp$1.l10ns;

    var fp$2 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Belarusian = {
      weekdays: {
        shorthand: ["袧写", "袩薪", "袗褳", "小褉", "效褑", "袩褌", "小斜"],
        longhand: ["袧褟写蟹械谢褟", "袩邪薪褟写蟹械谢邪泻", "袗褳褌芯褉邪泻", "小械褉邪写邪", "效邪褑胁械褉", "袩褟褌薪褨褑邪", "小褍斜芯褌邪"]
      },
      months: {
        shorthand: ["小褌褍", "袥褞褌", "小邪泻", "袣褉邪", "孝褉邪", "效褝褉", "袥褨锌", "袞薪褨", "袙械褉", "袣邪褋", "袥褨褋", "小薪械"],
        longhand: ["小褌褍写蟹械薪褜", "袥褞褌褘", "小邪泻邪胁褨泻", "袣褉邪褋邪胁褨泻", "孝褉邪胁械薪褜", "效褝褉胁械薪褜", "袥褨锌械薪褜", "袞薪褨胁械薪褜", "袙械褉邪褋械薪褜", "袣邪褋褌褉褘褔薪褨泻", "袥褨褋褌邪锌邪写", "小薪械卸邪薪褜"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      rangeSeparator: " 鈥� ",
      weekAbbreviation: "孝褘写.",
      scrollTitle: "袩褉邪泻褉褍褑褨褑械 写谢褟 锌邪胁械谢褨褔褝薪薪褟",
      toggleTitle: "袧邪褑褨褋薪褨褑械 写谢褟 锌械褉邪泻谢褞褔褝薪薪褟",
      amPM: ["袛袩", "袩袩"],
      yearAriaLabel: "袚芯写"
    };
    fp$2.l10ns.be = Belarusian;
    fp$2.l10ns;

    var fp$3 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Bulgarian = {
      weekdays: {
        shorthand: ["袧写", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜"],
        longhand: ["袧械写械谢褟", "袩芯薪械写械谢薪懈泻", "袙褌芯褉薪懈泻", "小褉褟写邪", "效械褌胁褗褉褌褗泻", "袩械褌褗泻", "小褗斜芯褌邪"]
      },
      months: {
        shorthand: ["携薪褍", "肖械胁", "袦邪褉褌", "袗锌褉", "袦邪泄", "挟薪懈", "挟谢懈", "袗胁谐", "小械锌", "袨泻褌", "袧芯械", "袛械泻"],
        longhand: ["携薪褍邪褉懈", "肖械胁褉褍邪褉懈", "袦邪褉褌", "袗锌褉懈谢", "袦邪泄", "挟薪懈", "挟谢懈", "袗胁谐褍褋褌", "小械锌褌械屑胁褉懈", "袨泻褌芯屑胁褉懈", "袧芯械屑胁褉懈", "袛械泻械屑胁褉懈"]
      }
    };
    fp$3.l10ns.bg = Bulgarian;
    fp$3.l10ns;

    var fp$4 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Bangla = {
      weekdays: {
        shorthand: ["唳班Μ唳�", "唳膏唳�", "唳唰嵿唳�", "唳唳�", "唳唳灌Ω唰嵿Κ唳む", "唳多唳曕唳�", "唳多Θ唳�"],
        longhand: ["唳班Μ唳苦Μ唳距Π", "唳膏唳Μ唳距Π", "唳唰嵿唳侧Μ唳距Π", "唳唳оΜ唳距Π", "唳唳灌Ω唰嵿Κ唳む唳唳�", "唳多唳曕唳班Μ唳距Π", "唳多Θ唳苦Μ唳距Π"]
      },
      months: {
        shorthand: ["唳溹唳ㄠ", "唳唳唳班", "唳唳班唳�", "唳忇Κ唰嵿Π唳苦Σ", "唳", "唳溹唳�", "唳溹唳侧唳�", "唳嗋", "唳膏唳唳熰", "唳呧唰嵿唰�", "唳ㄠΝ唰�", "唳∴唳膏"],
        longhand: ["唳溹唳ㄠ唳唳距Π唰�", "唳唳唳班唳唳距Π唰�", "唳唳班唳�", "唳忇Κ唰嵿Π唳苦Σ", "唳", "唳溹唳�", "唳溹唳侧唳�", "唳嗋唳膏唳�", "唳膏唳唳熰唳唳Π", "唳呧唰嵿唰嬥Μ唳�", "唳ㄠΝ唰囙Ξ唰嵿Μ唳�", "唳∴唳膏唳唳Π"]
      }
    };
    fp$4.l10ns.bn = Bangla;
    fp$4.l10ns;

    var fp$5 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Catalan = {
      weekdays: {
        shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        longhand: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
      },
      months: {
        shorthand: ["Gen", "Febr", "Mar莽", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
        longhand: ["Gener", "Febrer", "Mar莽", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]
      },
      ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "猫";

        switch (s % 10) {
          case 1:
            return "r";

          case 2:
            return "n";

          case 3:
            return "r";

          case 4:
            return "t";

          default:
            return "猫";
        }
      },
      firstDayOfWeek: 1
    };
    fp$5.l10ns.cat = Catalan;
    fp$5.l10ns;

    var fp$6 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Czech = {
      weekdays: {
        shorthand: ["Ne", "Po", "脷t", "St", "膶t", "P谩", "So"],
        longhand: ["Ned臎le", "Pond臎l铆", "脷ter媒", "St艡eda", "膶tvrtek", "P谩tek", "Sobota"]
      },
      months: {
        shorthand: ["Led", "脷n", "B艡e", "Dub", "Kv臎", "膶er", "膶vc", "Srp", "Z谩艡", "艠铆j", "Lis", "Pro"],
        longhand: ["Leden", "脷nor", "B艡ezen", "Duben", "Kv臎ten", "膶erven", "膶ervenec", "Srpen", "Z谩艡铆", "艠铆jen", "Listopad", "Prosinec"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      },
      rangeSeparator: " do ",
      weekAbbreviation: "T媒d.",
      scrollTitle: "Rolujte pro zm臎nu",
      toggleTitle: "P艡epnout dopoledne/odpoledne",
      amPM: ["dop.", "odp."],
      yearAriaLabel: "Rok"
    };
    fp$6.l10ns.cs = Czech;
    fp$6.l10ns;

    var fp$7 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Welsh = {
      weekdays: {
        shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
        longhand: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"]
      },
      months: {
        shorthand: ["Ion", "Chwef", "Maw", "Ebr", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"],
        longhand: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal(nth) {
        if (nth === 1) return "af";
        if (nth === 2) return "ail";
        if (nth === 3 || nth === 4) return "ydd";
        if (nth === 5 || nth === 6) return "ed";
        if (nth >= 7 && nth <= 10 || nth == 12 || nth == 15 || nth == 18 || nth == 20) return "fed";
        if (nth == 11 || nth == 13 || nth == 14 || nth == 16 || nth == 17 || nth == 19) return "eg";
        if (nth >= 21 && nth <= 39) return "ain";
        return "";
      }
    };
    fp$7.l10ns.cy = Welsh;
    fp$7.l10ns;

    var fp$8 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Danish = {
      weekdays: {
        shorthand: ["s酶n", "man", "tir", "ons", "tors", "fre", "l酶r"],
        longhand: ["s酶ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l酶rdag"]
      },
      months: {
        shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        longhand: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
      },
      ordinal: function ordinal() {
        return ".";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " til ",
      weekAbbreviation: "uge"
    };
    fp$8.l10ns.da = Danish;
    fp$8.l10ns;

    var fp$9 = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var German = {
      weekdays: {
        shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
      },
      months: {
        shorthand: ["Jan", "Feb", "M盲r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        longhand: ["Januar", "Februar", "M盲rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "KW",
      rangeSeparator: " bis ",
      scrollTitle: "Zum 脛ndern scrollen",
      toggleTitle: "Zum Umschalten klicken"
    };
    fp$9.l10ns.de = German;
    fp$9.l10ns;

    var english = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";

        switch (s % 10) {
          case 1:
            return "st";

          case 2:
            return "nd";

          case 3:
            return "rd";

          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year"
    };

    var fp$a = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Esperanto = {
      firstDayOfWeek: 1,
      rangeSeparator: " 臐is ",
      weekAbbreviation: "Sem",
      scrollTitle: "Rulumu por pligrandigi la valoron",
      toggleTitle: "Klaku por 艥alti",
      weekdays: {
        shorthand: ["Dim", "Lun", "Mar", "Mer", "拇a怒", "Ven", "Sab"],
        longhand: ["diman膲o", "lundo", "mardo", "merkredo", "牡a怒do", "vendredo", "sabato"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "A怒g", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a怒gusto", "septembro", "oktobro", "novembro", "decembro"]
      },
      ordinal: function ordinal() {
        return "-a";
      }
    };
    fp$a.l10ns.eo = Esperanto;
    fp$a.l10ns;

    var fp$b = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Spanish = {
      weekdays: {
        shorthand: ["Dom", "Lun", "Mar", "Mi茅", "Jue", "Vie", "S谩b"],
        longhand: ["Domingo", "Lunes", "Martes", "Mi茅rcoles", "Jueves", "Viernes", "S谩bado"]
      },
      months: {
        shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      },
      ordinal: function ordinal() {
        return "潞";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " a "
    };
    fp$b.l10ns.es = Spanish;
    fp$b.l10ns;

    var fp$c = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Estonian = {
      weekdays: {
        shorthand: ["P", "E", "T", "K", "N", "R", "L"],
        longhand: ["P眉hap盲ev", "Esmasp盲ev", "Teisip盲ev", "Kolmap盲ev", "Neljap盲ev", "Reede", "Laup盲ev"]
      },
      months: {
        shorthand: ["Jaan", "Veebr", "M盲rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
        longhand: ["Jaanuar", "Veebruar", "M盲rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      },
      weekAbbreviation: "N盲d",
      rangeSeparator: " kuni ",
      scrollTitle: "Keri, et suurendada",
      toggleTitle: "Kl玫psa, et vahetada"
    };
    fp$c.l10ns.et = Estonian;
    fp$c.l10ns;

    var fp$d = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Persian = {
      weekdays: {
        shorthand: ["蹖讴", "丿賵", "爻賴", "趩賴丕乇", "倬賳噩", "噩賲毓賴", "卮賳亘賴"],
        longhand: ["蹖讴鈥屫促嗀ㄙ�", "丿賵卮賳亘賴", "爻賴鈥屫促嗀ㄙ�", "趩賴丕乇卮賳亘賴", "倬賳趩鈥屫促嗀ㄙ�", "噩賲毓賴", "卮賳亘賴"]
      },
      months: {
        shorthand: ["跇丕賳賵蹖賴", "賮賵乇蹖賴", "賲丕乇爻", "丌賵乇蹖賱", "賲賴", "跇賵卅賳", "跇賵卅蹖賴", "丕賵鬲", "爻倬鬲丕賲亘乇", "丕讴鬲亘乇", "賳賵丕賲亘乇", "丿爻丕賲亘乇"],
        longhand: ["跇丕賳賵蹖賴", "賮賵乇蹖賴", "賲丕乇爻", "丌賵乇蹖賱", "賲賴", "跇賵卅賳", "跇賵卅蹖賴", "丕賵鬲", "爻倬鬲丕賲亘乇", "丕讴鬲亘乇", "賳賵丕賲亘乇", "丿爻丕賲亘乇"]
      },
      firstDayOfWeek: 6,
      ordinal: function ordinal() {
        return "";
      }
    };
    fp$d.l10ns.fa = Persian;
    fp$d.l10ns;

    var fp$e = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Finnish = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        longhand: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
      },
      months: {
        shorthand: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kes盲", "Hein盲", "Elo", "Syys", "Loka", "Marras", "Joulu"],
        longhand: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes盲kuu", "Hein盲kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"]
      },
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp$e.l10ns.fi = Finnish;
    fp$e.l10ns;

    var fp$f = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var French = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
        longhand: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
      },
      months: {
        shorthand: ["janv", "f茅vr", "mars", "avr", "mai", "juin", "juil", "ao没t", "sept", "oct", "nov", "d茅c"],
        longhand: ["janvier", "f茅vrier", "mars", "avril", "mai", "juin", "juillet", "ao没t", "septembre", "octobre", "novembre", "d茅cembre"]
      },
      ordinal: function ordinal(nth) {
        if (nth > 1) return "";
        return "er";
      },
      rangeSeparator: " au ",
      weekAbbreviation: "Sem",
      scrollTitle: "D茅filer pour augmenter la valeur",
      toggleTitle: "Cliquer pour basculer"
    };
    fp$f.l10ns.fr = French;
    fp$f.l10ns;

    var fp$g = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Greek = {
      weekdays: {
        shorthand: ["螝蠀", "螖蔚", "韦蟻", "韦蔚", "螤苇", "螤伪", "危维"],
        longhand: ["螝蠀蟻喂伪魏萎", "螖蔚蠀蟿苇蟻伪", "韦蟻委蟿畏", "韦蔚蟿维蟻蟿畏", "螤苇渭蟺蟿畏", "螤伪蟻伪蟽魏蔚蠀萎", "危维尾尾伪蟿慰"]
      },
      months: {
        shorthand: ["螜伪谓", "桅蔚尾", "螠维蟻", "螒蟺蟻", "螠维喂", "螜慰蠉", "螜慰蠉", "螒蠉纬", "危蔚蟺", "螣魏蟿", "螡慰苇", "螖蔚魏"],
        longhand: ["螜伪谓慰蠀维蟻喂慰蟼", "桅蔚尾蟻慰蠀维蟻喂慰蟼", "螠维蟻蟿喂慰蟼", "螒蟺蟻委位喂慰蟼", "螠维喂慰蟼", "螜慰蠉谓喂慰蟼", "螜慰蠉位喂慰蟼", "螒蠉纬慰蠀蟽蟿慰蟼", "危蔚蟺蟿苇渭尾蟻喂慰蟼", "螣魏蟿蠋尾蟻喂慰蟼", "螡慰苇渭尾蟻喂慰蟼", "螖蔚魏苇渭尾蟻喂慰蟼"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      weekAbbreviation: "螘尾未",
      rangeSeparator: " 苇蠅蟼 ",
      scrollTitle: "螠蔚蟿伪魏蠀位萎蟽蟿蔚 纬喂伪 蟺蟻慰蟽伪蠉尉畏蟽畏",
      toggleTitle: "螝维谓蟿蔚 魏位喂魏 纬喂伪 伪位位伪纬萎",
      amPM: ["螤螠", "螠螠"]
    };
    fp$g.l10ns.gr = Greek;
    fp$g.l10ns;

    var fp$h = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Hebrew = {
      weekdays: {
        shorthand: ["讗", "讘", "讙", "讚", "讛", "讜", "讝"],
        longhand: ["专讗砖讜谉", "砖谞讬", "砖诇讬砖讬", "专讘讬注讬", "讞诪讬砖讬", "砖讬砖讬", "砖讘转"]
      },
      months: {
        shorthand: ["讬谞讜壮", "驻讘专壮", "诪专抓", "讗驻专壮", "诪讗讬", "讬讜谞讬", "讬讜诇讬", "讗讜讙壮", "住驻讟壮", "讗讜拽壮", "谞讜讘壮", "讚爪诪壮"],
        longhand: ["讬谞讜讗专", "驻讘专讜讗专", "诪专抓", "讗驻专讬诇", "诪讗讬", "讬讜谞讬", "讬讜诇讬", "讗讜讙讜住讟", "住驻讟诪讘专", "讗讜拽讟讜讘专", "谞讜讘诪讘专", "讚爪诪讘专"]
      }
    };
    fp$h.l10ns.he = Hebrew;
    fp$h.l10ns;

    var fp$i = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Hindi = {
      weekdays: {
        shorthand: ["啶班さ啶�", "啶膏啶�", "啶啶椸げ", "啶啶�", "啶椸啶班", "啶多啶曕啶�", "啶多え啶�"],
        longhand: ["啶班さ啶苦さ啶距ぐ", "啶膏啶さ啶距ぐ", "啶啶椸げ啶掂ぞ啶�", "啶啶оさ啶距ぐ", "啶椸啶班啶掂ぞ啶�", "啶多啶曕啶班さ啶距ぐ", "啶多え啶苦さ啶距ぐ"]
      },
      months: {
        shorthand: ["啶溹え", "啶ぐ", "啶ぞ啶班啶�", "啶呧お啷嵿ぐ啷囙げ", "啶", "啶溹啶�", "啶溹啶侧ぞ啶�", "啶呧", "啶膏た啶�", "啶呧啷嵿", "啶ㄠさ", "啶︵た"],
        longhand: ["啶溹え啶掂ぐ啷� ", "啶ぐ啶掂ぐ啷�", "啶ぞ啶班啶�", "啶呧お啷嵿ぐ啷囙げ", "啶", "啶溹啶�", "啶溹啶侧ぞ啶�", "啶呧啶膏啶� ", "啶膏た啶むぎ啷嵿が啶�", "啶呧啷嵿啷傕が啶�", "啶ㄠさ啶啶ぐ", "啶︵た啶膏ぎ啷嵿が啶�"]
      }
    };
    fp$i.l10ns.hi = Hindi;
    fp$i.l10ns;

    var fp$j = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Croatian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["Ned", "Pon", "Uto", "Sri", "膶et", "Pet", "Sub"],
        longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "膶etvrtak", "Petak", "Subota"]
      },
      months: {
        shorthand: ["Sij", "Velj", "O啪u", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        longhand: ["Sije膷anj", "Velja膷a", "O啪ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"]
      }
    };
    fp$j.l10ns.hr = Croatian;
    fp$j.l10ns;

    var fp$k = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Hungarian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
        longhand: ["Vas谩rnap", "H茅tf艖", "Kedd", "Szerda", "Cs眉t枚rt枚k", "P茅ntek", "Szombat"]
      },
      months: {
        shorthand: ["Jan", "Feb", "M谩r", "脕pr", "M谩j", "J煤n", "J煤l", "Aug", "Szep", "Okt", "Nov", "Dec"],
        longhand: ["Janu谩r", "Febru谩r", "M谩rcius", "脕prilis", "M谩jus", "J煤nius", "J煤lius", "Augusztus", "Szeptember", "Okt贸ber", "November", "December"]
      },
      ordinal: function ordinal() {
        return ".";
      },
      weekAbbreviation: "H茅t",
      scrollTitle: "G枚rgessen",
      toggleTitle: "Kattintson a v谩lt谩shoz"
    };
    fp$k.l10ns.hu = Hungarian;
    fp$k.l10ns;

    var fp$l = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Indonesian = {
      weekdays: {
        shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
        longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        longhand: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      }
    };
    fp$l.l10ns.id = Indonesian;
    fp$l.l10ns;

    var fp$m = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Italian = {
      weekdays: {
        shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        longhand: ["Domenica", "Luned矛", "Marted矛", "Mercoled矛", "Gioved矛", "Venerd矛", "Sabato"]
      },
      months: {
        shorthand: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        longhand: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "掳";
      },
      rangeSeparator: " al ",
      weekAbbreviation: "Se",
      scrollTitle: "Scrolla per aumentare",
      toggleTitle: "Clicca per cambiare"
    };
    fp$m.l10ns.it = Italian;
    fp$m.l10ns;

    var fp$n = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Japanese = {
      weekdays: {
        shorthand: ["鏃�", "鏈�", "鐏�", "姘�", "鏈�", "閲�", "鍦�"],
        longhand: ["鏃ユ洔鏃�", "鏈堟洔鏃�", "鐏洔鏃�", "姘存洔鏃�", "鏈ㄦ洔鏃�", "閲戞洔鏃�", "鍦熸洔鏃�"]
      },
      months: {
        shorthand: ["1鏈�", "2鏈�", "3鏈�", "4鏈�", "5鏈�", "6鏈�", "7鏈�", "8鏈�", "9鏈�", "10鏈�", "11鏈�", "12鏈�"],
        longhand: ["1鏈�", "2鏈�", "3鏈�", "4鏈�", "5鏈�", "6鏈�", "7鏈�", "8鏈�", "9鏈�", "10鏈�", "11鏈�", "12鏈�"]
      }
    };
    fp$n.l10ns.ja = Japanese;
    fp$n.l10ns;

    var fp$o = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Korean = {
      weekdays: {
        shorthand: ["鞚�", "鞗�", "頇�", "靾�", "氇�", "旮�", "韱�"],
        longhand: ["鞚检殧鞚�", "鞗旍殧鞚�", "頇旍殧鞚�", "靾橃殧鞚�", "氇╈殧鞚�", "旮堨殧鞚�", "韱犾殧鞚�"]
      },
      months: {
        shorthand: ["1鞗�", "2鞗�", "3鞗�", "4鞗�", "5鞗�", "6鞗�", "7鞗�", "8鞗�", "9鞗�", "10鞗�", "11鞗�", "12鞗�"],
        longhand: ["1鞗�", "2鞗�", "3鞗�", "4鞗�", "5鞗�", "6鞗�", "7鞗�", "8鞗�", "9鞗�", "10鞗�", "11鞗�", "12鞗�"]
      },
      ordinal: function ordinal() {
        return "鞚�";
      }
    };
    fp$o.l10ns.ko = Korean;
    fp$o.l10ns;

    var fp$p = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Kazakh = {
      weekdays: {
        shorthand: ["袞褋", "袛褋", "小c", "小褉", "袘褋", "袞屑", "小斜"],
        longhand: ["袞械泻褋械薪斜i", "袛爷泄褋械薪斜i", "小械泄褋械薪斜i", "小訖褉褋械薪斜i", "袘械泄褋械薪斜i", "袞冶屑邪", "小械薪斜i"]
      },
      months: {
        shorthand: ["覛邪遥", "袗覜锌", "袧邪褍", "小訖褍", "袦邪屑", "袦邪褍", "楔i谢", "孝邪屑", "覛褘褉", "覛邪蟹", "覛邪褉", "袞械谢"],
        longhand: ["覛邪遥褌邪褉", "袗覜锌邪薪", "袧邪褍褉褘蟹", "小訖褍i褉", "袦邪屑褘褉", "袦邪褍褋褘屑", "楔i谢写械", "孝邪屑褘蟹", "覛褘褉泻爷泄械泻", "覛邪蟹邪薪", "覛邪褉邪褕邪", "袞械谢褌芯覜褋邪薪"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      rangeSeparator: " 鈥� ",
      weekAbbreviation: "袗锌褌邪",
      scrollTitle: "耶谢泻械泄褌褍 爷褕褨薪 邪泄薪邪谢写褘褉褘遥褘蟹",
      toggleTitle: "袗褍褘褋褌褘褉褍 爷褕褨薪 斜邪褋褘遥褘蟹",
      amPM: ["孝袛", "孝袣"],
      yearAriaLabel: "袞褘谢"
    };
    fp$p.l10ns.kz = Kazakh;
    fp$p.l10ns;

    var fp$q = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Lithuanian = {
      weekdays: {
        shorthand: ["S", "Pr", "A", "T", "K", "Pn", "艩"],
        longhand: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre膷iadienis", "Ketvirtadienis", "Penktadienis", "艩e拧tadienis"]
      },
      months: {
        shorthand: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spl", "Lap", "Grd"],
        longhand: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu啪臈", "Bir啪elis", "Liepa", "Rugpju虅tis", "Rugse虈jis", "Spalis", "Lapkritis", "Gruodis"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "-a";
      },
      weekAbbreviation: "Sav",
      scrollTitle: "Keisti laik膮 pel臈s rateliu",
      toggleTitle: "Perjungti laiko format膮"
    };
    fp$q.l10ns.lt = Lithuanian;
    fp$q.l10ns;

    var fp$r = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Latvian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["Sv", "P", "Ot", "Tr", "Ce", "Pk", "Se"],
        longhand: ["Sv膿tdiena", "Pirmdiena", "Otrdiena", "Tre拧diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Mai", "Apr", "J奴n", "J奴l", "Aug", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Janv膩ris", "Febru膩ris", "Marts", "Apr墨lis", "Maijs", "J奴nijs", "J奴lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"]
      },
      rangeSeparator: " l墨dz "
    };
    fp$r.l10ns.lv = Latvian;
    fp$r.l10ns;

    var fp$s = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Macedonian = {
      weekdays: {
        shorthand: ["袧械", "袩芯", "袙褌", "小褉", "效械", "袩械", "小邪"],
        longhand: ["袧械写械谢邪", "袩芯薪械写械谢薪懈泻", "袙褌芯褉薪懈泻", "小褉械写邪", "效械褌胁褉褌芯泻", "袩械褌芯泻", "小邪斜芯褌邪"]
      },
      months: {
        shorthand: ["袌邪薪", "肖械胁", "袦邪褉", "袗锌褉", "袦邪褬", "袌褍薪", "袌褍谢", "袗胁谐", "小械锌", "袨泻褌", "袧芯械", "袛械泻"],
        longhand: ["袌邪薪褍邪褉懈", "肖械胁褉褍邪褉懈", "袦邪褉褌", "袗锌褉懈谢", "袦邪褬", "袌褍薪懈", "袌褍谢懈", "袗胁谐褍褋褌", "小械锌褌械屑胁褉懈", "袨泻褌芯屑胁褉懈", "袧芯械屑胁褉懈", "袛械泻械屑胁褉懈"]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "袧械写.",
      rangeSeparator: " 写芯 "
    };
    fp$s.l10ns.mk = Macedonian;
    fp$s.l10ns;

    var fp$t = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Mongolian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["袛邪", "袦褟", "袥褏", "袩爷", "袘邪", "袘褟", "袧褟"],
        longhand: ["袛邪胁邪邪", "袦褟谐屑邪褉", "袥褏邪谐胁邪", "袩爷褉褝胁", "袘邪邪褋邪薪", "袘褟屑斜邪", "袧褟屑"]
      },
      months: {
        shorthand: ["1-褉 褋邪褉", "2-褉 褋邪褉", "3-褉 褋邪褉", "4-褉 褋邪褉", "5-褉 褋邪褉", "6-褉 褋邪褉", "7-褉 褋邪褉", "8-褉 褋邪褉", "9-褉 褋邪褉", "10-褉 褋邪褉", "11-褉 褋邪褉", "12-褉 褋邪褉"],
        longhand: ["袧褝谐写爷谐褝褝褉 褋邪褉", "啸芯褢褉写褍谐邪邪褉 褋邪褉", "袚褍褉邪胁写褍谐邪邪褉 褋邪褉", "袛萤褉萤胁写爷谐褝褝褉 褋邪褉", "孝邪胁写褍谐邪邪褉 褋邪褉", "袟褍褉谐邪邪写褍谐邪邪褉 褋邪褉", "袛芯谢写褍谐邪邪褉 褋邪褉", "袧邪泄屑写褍谐邪邪褉 褋邪褉", "袝褋写爷谐褝褝褉 褋邪褉", "袗褉邪胁写褍谐邪邪褉 褋邪褉", "袗褉胁邪薪薪褝谐写爷谐褝褝褉 褋邪褉", "袗褉胁邪薪褏芯褢褉写褍谐邪邪褉 褋邪褉"]
      },
      rangeSeparator: "-褋 "
    };
    fp$t.l10ns.mn = Mongolian;
    fp$t.l10ns;

    var fp$u = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Malaysian = {
      weekdays: {
        shorthand: ["Min", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
        longhand: ["Minggu", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
        longhand: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      }
    };
    fp$u.l10ns;

    var fp$v = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Burmese = {
      weekdays: {
        shorthand: ["醼斸�结��", "醼溼��", "醼傖��", "醼熱�搬��", "醼�醼坚��", "醼炨�贬��", "醼斸��"],
        longhand: ["醼愥�斸�勧�横�贯�傖�斸�结��", "醼愥�斸�勧�横�贯�溼��", "醼♂�勧�横�贯�傖��", "醼椺��掅�贯�撫�熱�搬��", "醼�醼坚��炨�曖�愥�贬��", "醼炨�贬���醼坚��", "醼呩�斸��"]
      },
      months: {
        shorthand: ["醼囜�斸��", "醼栣��", "醼欋�愥��", "醼曖�坚��", "醼欋��", "醼囜�结�斸��", "醼溼���勧��", "醼炨��", "醼呩��醼�", "醼♂�贬���醼�", "醼斸���", "醼掅��"],
        longhand: ["醼囜�斸�横�斸�濁��涐��", "醼栣�贬�栣�贬��横�濁��涐��", "醼欋�愥��", "醼п�曖�坚��", "醼欋��", "醼囜�结�斸��", "醼囜�搬�溼���勧��", "醼炨�坚�傖��愥��", "醼呩��醼横�愥�勧�横�樶��", "醼♂�贬���醼横�愥���樶��", "醼斸���濁�勧�横�樶��", "醼掅��囜�勧�横�樶��"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      }
    };
    fp$v.l10ns.my = Burmese;
    fp$v.l10ns;

    var fp$w = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Dutch = {
      weekdays: {
        shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        longhand: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
      },
      months: {
        shorthand: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sept", "okt", "nov", "dec"],
        longhand: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "wk",
      rangeSeparator: " tot ",
      scrollTitle: "Scroll voor volgende / vorige",
      toggleTitle: "Klik om te wisselen",
      ordinal: function ordinal(nth) {
        if (nth === 1 || nth === 8 || nth >= 20) return "ste";
        return "de";
      }
    };
    fp$w.l10ns.nl = Dutch;
    fp$w.l10ns;

    var fp$x = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Norwegian = {
      weekdays: {
        shorthand: ["S酶n", "Man", "Tir", "Ons", "Tor", "Fre", "L酶r"],
        longhand: ["S酶ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L酶rdag"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        longhand: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " til ",
      weekAbbreviation: "Uke",
      scrollTitle: "Scroll for 氓 endre",
      toggleTitle: "Klikk for 氓 veksle",
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp$x.l10ns.no = Norwegian;
    fp$x.l10ns;

    var fp$y = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Punjabi = {
      weekdays: {
        shorthand: ["啜愢à", "啜膏啜�", "啜┌啜椸ú", "啜﹣喋编ě", "啜掂﹢啜�", "啜膏喋佮┍啜曕ò", "啜膏啜ㄠ喋编啜�"],
        longhand: ["啜愢à啜掂ň啜�", "啜膏啜ǖ啜距ò", "啜┌啜椸ú啜掂ň啜�", "啜﹣喋编ě啜掂ň啜�", "啜掂﹢啜班ǖ啜距ò", "啜膏喋佮┍啜曕ò啜掂ň啜�", "啜膏啜ㄠ喋编啜班ǖ啜距ò"]
      },
      months: {
        shorthand: ["啜溹è", "啜啜�", "啜ň啜�", "啜呧í喋嵿ò喋�", "啜▓", "啜溹﹤啜�", "啜溹﹣啜侧ň", "啜呧", "啜膏à喋�", "啜呧〞", "啜ㄠǖ喋�", "啜︵ǜ喋�"],
        longhand: ["啜溹è啜掂ò喋�", "啜啜班ǖ啜班﹢", "啜ň啜班", "啜呧í喋嵿ò喋堗ú", "啜▓", "啜溹﹤啜�", "啜溹﹣啜侧ň啜�", "啜呧啜膏à", "啜膏à喋班ì啜�", "啜呧〞啜む﹤啜ò", "啜ㄠǖ喋班ì啜�", "啜︵ǜ喋班ì啜�"]
      }
    };
    fp$y.l10ns.pa = Punjabi;
    fp$y.l10ns;

    var fp$z = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Polish = {
      weekdays: {
        shorthand: ["Nd", "Pn", "Wt", "艢r", "Cz", "Pt", "So"],
        longhand: ["Niedziela", "Poniedzia艂ek", "Wtorek", "艢roda", "Czwartek", "Pi膮tek", "Sobota"]
      },
      months: {
        shorthand: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa藕", "Lis", "Gru"],
        longhand: ["Stycze艅", "Luty", "Marzec", "Kwiecie艅", "Maj", "Czerwiec", "Lipiec", "Sierpie艅", "Wrzesie艅", "Pa藕dziernik", "Listopad", "Grudzie艅"]
      },
      rangeSeparator: " do ",
      weekAbbreviation: "tydz.",
      scrollTitle: "Przwi艅 aby zwi臋kszy膰",
      toggleTitle: "Kliknij aby prze艂膮czy膰",
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp$z.l10ns.pl = Polish;
    fp$z.l10ns;

    var fp$A = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Portuguese = {
      weekdays: {
        shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S谩b"],
        longhand: ["Domingo", "Segunda-feira", "Ter莽a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S谩bado"]
      },
      months: {
        shorthand: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        longhand: ["Janeiro", "Fevereiro", "Mar莽o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
      },
      rangeSeparator: " at茅 "
    };
    fp$A.l10ns.pt = Portuguese;
    fp$A.l10ns;

    var fp$B = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Romanian = {
      weekdays: {
        shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sam"],
        longhand: ["Duminic膬", "Luni", "Mar葲i", "Miercuri", "Joi", "Vineri", "S芒mb膬t膬"]
      },
      months: {
        shorthand: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
        longhand: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      }
    };
    fp$B.l10ns.ro = Romanian;
    fp$B.l10ns;

    var fp$C = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Russian = {
      weekdays: {
        shorthand: ["袙褋", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜"],
        longhand: ["袙芯褋泻褉械褋械薪褜械", "袩芯薪械写械谢褜薪懈泻", "袙褌芯褉薪懈泻", "小褉械写邪", "效械褌胁械褉谐", "袩褟褌薪懈褑邪", "小褍斜斜芯褌邪"]
      },
      months: {
        shorthand: ["携薪胁", "肖械胁", "袦邪褉褌", "袗锌褉", "袦邪泄", "袠褞薪褜", "袠褞谢褜", "袗胁谐", "小械薪", "袨泻褌", "袧芯褟", "袛械泻"],
        longhand: ["携薪胁邪褉褜", "肖械胁褉邪谢褜", "袦邪褉褌", "袗锌褉械谢褜", "袦邪泄", "袠褞薪褜", "袠褞谢褜", "袗胁谐褍褋褌", "小械薪褌褟斜褉褜", "袨泻褌褟斜褉褜", "袧芯褟斜褉褜", "袛械泻邪斜褉褜"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      rangeSeparator: " 鈥� ",
      weekAbbreviation: "袧械写.",
      scrollTitle: "袩褉芯泻褉褍褌懈褌械 写谢褟 褍胁械谢懈褔械薪懈褟",
      toggleTitle: "袧邪卸屑懈褌械 写谢褟 锌械褉械泻谢褞褔械薪懈褟",
      amPM: ["袛袩", "袩袩"],
      yearAriaLabel: "袚芯写"
    };
    fp$C.l10ns.ru = Russian;
    fp$C.l10ns;

    var fp$D = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Sinhala = {
      weekdays: {
        shorthand: ["喽�", "喾�", "喽�", "喽�", "喽多穵鈥嵿痘", "喾冟窉", "喾冟窓"],
        longhand: ["喽夃痘喾掄动喾�", "喾冟冻喾斷动喾�", "喽呧稛喾勦痘喾斷穩喾忇动喾�", "喽多动喾忇动喾�", "喽多穵鈥嵿痘喾勦穬喾娻洞喽窉喽编穵喽窂", "喾冟窉喽氞窋喽秽窂喽窂", "喾冟窓喽编穬喾斷痘喾忇动喾�"]
      },
      months: {
        shorthand: ["喽⑧侗", "喽脆窓喽�", "喽膏窂喽秽穵", "喽呧洞喾娾�嵿痘喾�", "喽膏窅喽亨窉", "喽⑧窋喽编窉", "喽⑧窎喽洁窉", "喽呧稖喾�", "喾冟窅喽脆穵", "喽斷稓喾�", "喽编窚喾�喾�", "喽窓喾冟窅"],
        longhand: ["喽⑧侗喾�喾忇痘喾�", "喽脆窓喽多痘喾�喾忇痘喾�", "喽膏窂喽秽穵喽窋", "喽呧洞喾娾�嵿痘喾氞督喾�", "喽膏窅喽亨窉", "喽⑧窋喽编窉", "喽⑧窎喽洁窉", "喽呧稖喾澿穬喾娻董喾�", "喾冟窅喽脆穵喽窅喽膏穵喽多痘喾�", "喽斷稓喾娻董喾澿抖喽秽穵", "喽编窚喾�喾愢陡喾娻抖喽秽穵", "喽窓喾冟窅喽膏穵喽多痘喾�"]
      }
    };
    fp$D.l10ns.si = Sinhala;
    fp$D.l10ns;

    var fp$E = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Slovak = {
      weekdays: {
        shorthand: ["Ned", "Pon", "Ut", "Str", "艩tv", "Pia", "Sob"],
        longhand: ["Nede木a", "Pondelok", "Utorok", "Streda", "艩tvrtok", "Piatok", "Sobota"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "M谩j", "J煤n", "J煤l", "Aug", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Janu谩r", "Febru谩r", "Marec", "Apr铆l", "M谩j", "J煤n", "J煤l", "August", "September", "Okt贸ber", "November", "December"]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " do ",
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp$E.l10ns.sk = Slovak;
    fp$E.l10ns;

    var fp$F = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Slovenian = {
      weekdays: {
        shorthand: ["Ned", "Pon", "Tor", "Sre", "膶et", "Pet", "Sob"],
        longhand: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "膶etrtek", "Petek", "Sobota"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " do ",
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp$F.l10ns.sl = Slovenian;
    fp$F.l10ns;

    var fp$G = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Albanian = {
      weekdays: {
        shorthand: ["Di", "H毛", "Ma", "M毛", "En", "Pr", "Sh"],
        longhand: ["E Diel", "E H毛n毛", "E Mart毛", "E M毛rkur毛", "E Enjte", "E Premte", "E Shtun毛"]
      },
      months: {
        shorthand: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "N毛n", "Dhj"],
        longhand: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N毛ntor", "Dhjetor"]
      }
    };
    fp$G.l10ns.sq = Albanian;
    fp$G.l10ns;

    var fp$H = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Serbian = {
      weekdays: {
        shorthand: ["Ned", "Pon", "Uto", "Sre", "膶et", "Pet", "Sub"],
        longhand: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "膶etvrtak", "Petak", "Subota"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "Ned.",
      rangeSeparator: " do "
    };
    fp$H.l10ns.sr = Serbian;
    fp$H.l10ns;

    var fp$I = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Swedish = {
      firstDayOfWeek: 1,
      weekAbbreviation: "v",
      weekdays: {
        shorthand: ["S枚n", "M氓n", "Tis", "Ons", "Tor", "Fre", "L枚r"],
        longhand: ["S枚ndag", "M氓ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L枚rdag"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        longhand: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
      },
      ordinal: function ordinal() {
        return ".";
      }
    };
    fp$I.l10ns.sv = Swedish;
    fp$I.l10ns;

    var fp$J = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Thai = {
      weekdays: {
        shorthand: ["喔覆", "喔�", "喔�", "喔�", "喔炧袱", "喔�", "喔�"],
        longhand: ["喔覆喔椸复喔曕涪喙�", "喔堗副喔權笚喔｀箤", "喔副喔囙竸喔侧福", "喔炧父喔�", "喔炧袱喔副喔笟喔斷傅", "喔ㄠ父喔佮福喙�", "喙�喔覆喔｀箤"]
      },
      months: {
        shorthand: ["喔�.喔�.", "喔�.喔�.", "喔∴傅.喔�.", "喙�喔�.喔�.", "喔�.喔�.", "喔∴复.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�.", "喔�.喔�."],
        longhand: ["喔∴竵喔｀覆喔勦浮", "喔佮父喔∴笭喔侧笧喔编笝喔樴箤", "喔∴傅喔權覆喔勦浮", "喙�喔∴俯喔侧涪喔�", "喔炧袱喔┼笭喔侧竸喔�", "喔∴复喔栢父喔權覆喔⑧笝", "喔佮福喔佮笌喔侧竸喔�", "喔复喔囙斧喔侧竸喔�", "喔佮副喔權涪喔侧涪喔�", "喔曕父喔ム覆喔勦浮", "喔炧袱喔ㄠ笀喔脆竵喔侧涪喔�", "喔樴副喔權抚喔侧竸喔�"]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " 喔栢付喔� ",
      scrollTitle: "喙�喔ム阜喙堗腑喔權箑喔炧阜喙堗腑喙�喔炧复喙堗浮喔福喔粪腑喔ム笖",
      toggleTitle: "喔勦弗喔脆竵喙�喔炧阜喙堗腑喙�喔涏弗喔掂箞喔⑧笝",
      ordinal: function ordinal() {
        return "";
      }
    };
    fp$J.l10ns.th = Thai;
    fp$J.l10ns;

    var fp$K = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Turkish = {
      weekdays: {
        shorthand: ["Paz", "Pzt", "Sal", "脟ar", "Per", "Cum", "Cmt"],
        longhand: ["Pazar", "Pazartesi", "Sal谋", "脟ar艧amba", "Per艧embe", "Cuma", "Cumartesi"]
      },
      months: {
        shorthand: ["Oca", "艦ub", "Mar", "Nis", "May", "Haz", "Tem", "A臒u", "Eyl", "Eki", "Kas", "Ara"],
        longhand: ["Ocak", "艦ubat", "Mart", "Nisan", "May谋s", "Haziran", "Temmuz", "A臒ustos", "Eyl眉l", "Ekim", "Kas谋m", "Aral谋k"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "Art谋rmak i莽in kayd谋r谋n",
      toggleTitle: "A莽/Kapa",
      amPM: ["脰脰", "脰S"]
    };
    fp$K.l10ns.tr = Turkish;
    fp$K.l10ns;

    var fp$L = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Ukrainian = {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ["袧写", "袩薪", "袙褌", "小褉", "效褌", "袩褌", "小斜"],
        longhand: ["袧械写褨谢褟", "袩芯薪械写褨谢芯泻", "袙褨胁褌芯褉芯泻", "小械褉械写邪", "效械褌胁械褉", "袩'褟褌薪懈褑褟", "小褍斜芯褌邪"]
      },
      months: {
        shorthand: ["小褨褔", "袥褞褌", "袘械褉", "袣胁褨", "孝褉邪", "效械褉", "袥懈锌", "小械褉", "袙械褉", "袞芯胁", "袥懈褋", "袚褉褍"],
        longhand: ["小褨褔械薪褜", "袥褞褌懈泄", "袘械褉械蟹械薪褜", "袣胁褨褌械薪褜", "孝褉邪胁械薪褜", "效械褉胁械薪褜", "袥懈锌械薪褜", "小械褉锌械薪褜", "袙械褉械褋械薪褜", "袞芯胁褌械薪褜", "袥懈褋褌芯锌邪写", "袚褉褍写械薪褜"]
      }
    };
    fp$L.l10ns.uk = Ukrainian;
    fp$L.l10ns;

    var fp$M = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Vietnamese = {
      weekdays: {
        shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        longhand: ["Ch峄� nh岷璽", "Th峄� hai", "Th峄� ba", "Th峄� t瓢", "Th峄� n膬m", "Th峄� s谩u", "Th峄� b岷"]
      },
      months: {
        shorthand: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
        longhand: ["Th谩ng m峄檛", "Th谩ng hai", "Th谩ng ba", "Th谩ng t瓢", "Th谩ng n膬m", "Th谩ng s谩u", "Th谩ng b岷", "Th谩ng t谩m", "Th谩ng ch铆n", "Th谩ng m瓢峄漣", "Th谩ng 11", "Th谩ng 12"]
      },
      firstDayOfWeek: 1
    };
    fp$M.l10ns.vn = Vietnamese;
    fp$M.l10ns;

    var fp$N = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Mandarin = {
      weekdays: {
        shorthand: ["鍛ㄦ棩", "鍛ㄤ竴", "鍛ㄤ簩", "鍛ㄤ笁", "鍛ㄥ洓", "鍛ㄤ簲", "鍛ㄥ叚"],
        longhand: ["鏄熸湡鏃�", "鏄熸湡涓�", "鏄熸湡浜�", "鏄熸湡涓�", "鏄熸湡鍥�", "鏄熸湡浜�", "鏄熸湡鍏�"]
      },
      months: {
        shorthand: ["涓�鏈�", "浜屾湀", "涓夋湀", "鍥涙湀", "浜旀湀", "鍏湀", "涓冩湀", "鍏湀", "涔濇湀", "鍗佹湀", "鍗佷竴鏈�", "鍗佷簩鏈�"],
        longhand: ["涓�鏈�", "浜屾湀", "涓夋湀", "鍥涙湀", "浜旀湀", "鍏湀", "涓冩湀", "鍏湀", "涔濇湀", "鍗佹湀", "鍗佷竴鏈�", "鍗佷簩鏈�"]
      },
      rangeSeparator: " 鑷� ",
      weekAbbreviation: "鍛�",
      scrollTitle: "婊氬姩鍒囨崲",
      toggleTitle: "鐐瑰嚮鍒囨崲 12/24 灏忔椂鏃跺埗"
    };
    fp$N.l10ns.zh = Mandarin;
    fp$N.l10ns;

    var l10n = {
      ar: Arabic,
      at: Austria,
      be: Belarusian,
      bg: Bulgarian,
      bn: Bangla,
      cat: Catalan,
      cs: Czech,
      cy: Welsh,
      da: Danish,
      de: German,
      default: Object.assign({}, english),
      en: english,
      eo: Esperanto,
      es: Spanish,
      et: Estonian,
      fa: Persian,
      fi: Finnish,
      fr: French,
      gr: Greek,
      he: Hebrew,
      hi: Hindi,
      hr: Croatian,
      hu: Hungarian,
      id: Indonesian,
      it: Italian,
      ja: Japanese,
      ko: Korean,
      kz: Kazakh,
      lt: Lithuanian,
      lv: Latvian,
      mk: Macedonian,
      mn: Mongolian,
      ms: Malaysian,
      my: Burmese,
      nl: Dutch,
      no: Norwegian,
      pa: Punjabi,
      pl: Polish,
      pt: Portuguese,
      ro: Romanian,
      ru: Russian,
      si: Sinhala,
      sk: Slovak,
      sl: Slovenian,
      sq: Albanian,
      sr: Serbian,
      sv: Swedish,
      th: Thai,
      tr: Turkish,
      uk: Ukrainian,
      vn: Vietnamese,
      zh: Mandarin
    };

    exports.default = l10n;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
