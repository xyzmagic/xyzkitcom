(function($) {
  $.extend($.summernote.lang, {
    'tr-TR': {
      font: {
        bold: 'Kal谋n',
        italic: '陌talik',
        underline: 'Alt谋 莽izili',
        clear: 'Temizle',
        height: 'Sat谋r y眉ksekli臒i',
        name: 'Yaz谋 Tipi',
        strikethrough: '脺st眉 莽izili',
        subscript: 'Alt Simge',
        superscript: '脺st Simge',
        size: 'Yaz谋 tipi boyutu'
      },
      image: {
        image: 'Resim',
        insert: 'Resim ekle',
        resizeFull: 'Orjinal boyut',
        resizeHalf: '1/2 boyut',
        resizeQuarter: '1/4 boyut',
        floatLeft: 'Sola hizala',
        floatRight: 'Sa臒a hizala',
        floatNone: 'Hizalamay谋 kald谋r',
        shapeRounded: '艦ekil: Yuvarlat谋lm谋艧 K枚艧e',
        shapeCircle: '艦ekil: Daire',
        shapeThumbnail: '艦ekil: K.Resim',
        shapeNone: '艦ekil: Yok',
        dragImageHere: 'Buraya s眉r眉kleyin',
        dropImage: 'Resim veya metni b谋rak谋n',
        selectFromFiles: 'Dosya se莽in',
        maximumFileSize: 'Maksimum dosya boyutu',
        maximumFileSizeError: 'Maksimum dosya boyutu a艧谋ld谋.',
        url: 'Resim ba臒lant谋s谋',
        remove: 'Resimi Kald谋r',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video ba臒lant谋s谋',
        insert: 'Video ekle',
        url: 'Video ba臒lant谋s谋?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion veya Youku)'
      },
      link: {
        link: 'Ba臒lant谋',
        insert: 'Ba臒lant谋 ekle',
        unlink: 'Ba臒lant谋y谋 kald谋r',
        edit: 'Ba臒lant谋y谋 d眉zenle',
        textToDisplay: 'G枚r眉nt眉lemek i莽in',
        url: 'Ba臒lant谋 adresi?',
        openInNewWindow: 'Yeni pencerede a莽'
      },
      table: {
        table: 'Tablo',
        addRowAbove: 'Yukar谋 sat谋r ekle',
        addRowBelow: 'A艧a臒谋 sat谋r ekle',
        addColLeft: 'Sola s眉tun ekle',
        addColRight: 'Sa臒a s眉tun ekle',
        delRow: 'Sat谋r谋 sil',
        delCol: 'S眉tunu sil',
        delTable: 'Tabloyu sil'
      },
      hr: {
        insert: 'Yatay 莽izgi ekle'
      },
      style: {
        style: 'Bi莽im',
        p: 'p',
        blockquote: 'Al谋nt谋',
        pre: '脰nbi莽imli',
        h1: 'Ba艧l谋k 1',
        h2: 'Ba艧l谋k 2',
        h3: 'Ba艧l谋k 3',
        h4: 'Ba艧l谋k 4',
        h5: 'Ba艧l谋k 5',
        h6: 'Ba艧l谋k 6'
      },
      lists: {
        unordered: 'Madde i艧aretli liste',
        ordered: 'Numaral谋 liste'
      },
      options: {
        help: 'Yard谋m',
        fullscreen: 'Tam ekran',
        codeview: 'HTML Kodu'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'Girintiyi art谋r',
        indent: 'Girintiyi azalt',
        left: 'Sola hizala',
        center: 'Ortaya hizala',
        right: 'Sa臒a hizala',
        justify: 'Yasla'
      },
      color: {
        recent: 'Son renk',
        more: 'Daha fazla renk',
        background: 'Arka plan rengi',
        foreground: 'Yaz谋 rengi',
        transparent: 'Seffafl谋k',
        setTransparent: '艦effafl谋臒谋 ayarla',
        reset: 'S谋f谋rla',
        resetToDefault: 'Varsay谋lanlara s谋f谋rla'
      },
      shortcut: {
        shortcuts: 'K谋sayollar',
        close: 'Kapat',
        textFormatting: 'Yaz谋 bi莽imlendirme',
        action: 'Eylem',
        paragraphFormatting: 'Paragraf bi莽imlendirme',
        documentStyle: 'Bi莽im',
        extraKeys: '陌lave anahtarlar'
      },
      help: {
        'insertParagraph': 'Paragraf ekler',
        'undo': 'Son komudu geri al谋r',
        'redo': 'Son komudu yineler',
        'tab': 'Girintiyi art谋r谋r',
        'untab': 'Girintiyi azalt谋r',
        'bold': 'Kal谋n yazma stilini ayarlar',
        'italic': '陌talik yazma stilini ayarlar',
        'underline': 'Alt谋 莽izgili yazma stilini ayarlar',
        'strikethrough': '脺st眉 莽izgili yazma stilini ayarlar',
        'removeFormat': 'Bi莽imlendirmeyi temizler',
        'justifyLeft': 'Yaz谋y谋 sola hizalar',
        'justifyCenter': 'Yaz谋y谋 ortalar',
        'justifyRight': 'Yaz谋y谋 sa臒a hizalar',
        'justifyFull': 'Yaz谋y谋 her iki tarafa yazlar',
        'insertUnorderedList': 'Madde i艧aretli liste ekler',
        'insertOrderedList': 'Numaral谋 liste ekler',
        'outdent': 'Aktif paragraf谋n girintisini azalt谋r',
        'indent': 'Aktif paragraf谋n girintisini art谋r谋r',
        'formatPara': 'Aktif blo臒un bi莽imini paragraf (p) olarak de臒i艧tirir',
        'formatH1': 'Aktif blo臒un bi莽imini ba艧l谋k 1 (h1) olarak de臒i艧tirir',
        'formatH2': 'Aktif blo臒un bi莽imini ba艧l谋k 2 (h2) olarak de臒i艧tirir',
        'formatH3': 'Aktif blo臒un bi莽imini ba艧l谋k 3 (h3) olarak de臒i艧tirir',
        'formatH4': 'Aktif blo臒un bi莽imini ba艧l谋k 4 (h4) olarak de臒i艧tirir',
        'formatH5': 'Aktif blo臒un bi莽imini ba艧l谋k 5 (h5) olarak de臒i艧tirir',
        'formatH6': 'Aktif blo臒un bi莽imini ba艧l谋k 6 (h6) olarak de臒i艧tirir',
        'insertHorizontalRule': 'Yatay 莽izgi ekler',
        'linkDialog.show': 'Ba臒lant谋 ayar kutusunu g枚sterir'
      },
      history: {
        undo: 'Geri al',
        redo: 'Yinele'
      },
      specialChar: {
        specialChar: '脰ZEL KARAKTERLER',
        select: '脰zel Karakterleri se莽in'
      }
    }
  });
})(jQuery);
