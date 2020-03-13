(function($) {
  $.extend($.summernote.lang, {
    'ro-RO': {
      font: {
        bold: '脦ngro葯at',
        italic: '脦nclinat',
        underline: 'Subliniat',
        clear: '脦nl膬tur膬 formatare font',
        height: '脦n膬l葲ime r芒nd',
        name: 'Familie de fonturi',
        strikethrough: 'T膬iat',
        subscript: 'Indice',
        superscript: 'Exponent',
        size: 'Dimensiune font'
      },
      image: {
        image: 'Imagine',
        insert: 'Insereaz膬 imagine',
        resizeFull: 'Redimensioneaz膬 complet',
        resizeHalf: 'Redimensioneaz膬 1/2',
        resizeQuarter: 'Redimensioneaz膬 1/4',
        floatLeft: 'Aliniere la st芒nga',
        floatRight: 'Aliniere la dreapta',
        floatNone: 'Far膬 aliniere',
        shapeRounded: 'Form膬: Rotund',
        shapeCircle: 'Form膬: Cerc',
        shapeThumbnail: 'Form膬: Pictogram膬',
        shapeNone: 'Form膬: Nici una',
        dragImageHere: 'Trage o imagine sau un text aici',
        dropImage: 'Elibereaz膬 imaginea sau textul',
        selectFromFiles: 'Alege din fi艧iere',
        maximumFileSize: 'Dimensiune maxim膬 fi葯ier',
        maximumFileSizeError: 'Dimensiune maxim膬 fi葯ier dep膬葯it膬.',
        url: 'URL imagine',
        remove: '葮terge imagine',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Link video',
        insert: 'Insereaz膬 video',
        url: 'URL video?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion sau Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Insereaz膬 link',
        unlink: '脦nl膬tur膬 link',
        edit: 'Editeaz膬',
        textToDisplay: 'Text ce va fi afi艧at',
        url: 'La ce adres膬 URL trebuie s膬 conduc膬 acest link?',
        openInNewWindow: 'Deschidere 卯n fereastr膬 nou膬'
      },
      table: {
        table: 'Tabel',
        addRowAbove: 'Adaug膬 r芒nd deasupra',
        addRowBelow: 'Adaug膬 r芒nd dedesubt',
        addColLeft: 'Adaug膬 coloan膬 st芒nga',
        addColRight: 'Adaug膬 coloan膬 dreapta',
        delRow: '葮terge r芒nd',
        delCol: '葮terge coloan膬',
        delTable: '葮terge tabel'
      },
      hr: {
        insert: 'Insereaz膬 o linie orizontal膬'
      },
      style: {
        style: 'Stil',
        p: 'p',
        blockquote: 'Citat',
        pre: 'Preformatat',
        h1: 'Titlu 1',
        h2: 'Titlu 2',
        h3: 'Titlu 3',
        h4: 'Titlu 4',
        h5: 'Titlu 5',
        h6: 'Titlu 6'
      },
      lists: {
        unordered: 'List膬 neordonat膬',
        ordered: 'List膬 ordonat膬'
      },
      options: {
        help: 'Ajutor',
        fullscreen: 'M膬re艧te',
        codeview: 'Surs膬'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'Cre艧te identarea',
        indent: 'Scade identarea',
        left: 'Aliniere la st芒nga',
        center: 'Aliniere central膬',
        right: 'Aliniere la dreapta',
        justify: 'Aliniere 卯n bloc'
      },
      color: {
        recent: 'Culoare recent膬',
        more: 'Mai multe  culori',
        background: 'Culoarea fundalului',
        foreground: 'Culoarea textului',
        transparent: 'Transparent',
        setTransparent: 'Seteaz膬 transparent',
        reset: 'Reseteaz膬',
        resetToDefault: 'Revino la ini牛ial'
      },
      shortcut: {
        shortcuts: 'Scurt膬turi tastatur膬',
        close: '脦nchide',
        textFormatting: 'Formatare text',
        action: 'Ac牛iuni',
        paragraphFormatting: 'Formatare paragraf',
        documentStyle: 'Stil paragraf',
        extraKeys: 'Taste extra'
      },
      help: {
        'insertParagraph': 'Insereaz膬 paragraf',
        'undo': 'Revine la starea anterioar膬',
        'redo': 'Revine la starea ulterioar膬',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Seteaz膬 stil 卯ngro葯at',
        'italic': 'Seteaz膬 stil 卯nclinat',
        'underline': 'Seteaz膬 stil subliniat',
        'strikethrough': 'Seteaz膬 stil t膬iat',
        'removeFormat': '脦nl膬tur膬 formatare',
        'justifyLeft': 'Seteaz膬 aliniere st芒nga',
        'justifyCenter': 'Seteaz膬 aliniere centru',
        'justifyRight': 'Seteaz膬 aliniere dreapta',
        'justifyFull': 'Seteaz膬 aliniere bloc',
        'insertUnorderedList': 'Comutare list膬 neordinat膬',
        'insertOrderedList': 'Comutare list膬 ordonat膬',
        'outdent': '脦nl膬tur膬 indentare paragraf curent',
        'indent': 'Adaug膬 indentare paragraf curent',
        'formatPara': 'Schimb膬 formatarea selec葲iei 卯n paragraf',
        'formatH1': 'Schimb膬 formatarea selec葲iei 卯n H1',
        'formatH2': 'Schimb膬 formatarea selec葲iei 卯n H2',
        'formatH3': 'Schimb膬 formatarea selec葲iei 卯n H3',
        'formatH4': 'Schimb膬 formatarea selec葲iei 卯n H4',
        'formatH5': 'Schimb膬 formatarea selec葲iei 卯n H5',
        'formatH6': 'Schimb膬 formatarea selec葲iei 卯n H6',
        'insertHorizontalRule': 'Adaug膬 linie orizontal膬',
        'linkDialog.show': 'Insereaz膬 link'
      },
      history: {
        undo: 'Starea anterioar膬',
        redo: 'Starea ulterioar膬'
      },
      specialChar: {
        specialChar: 'CARACTERE SPECIALE',
        select: 'Alege caractere speciale'
      }
    }
  });
})(jQuery);
