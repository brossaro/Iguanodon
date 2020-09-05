var nextLang = "fr"

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "home": "HOME",
        "music": "MUSIC",
        "bio": "BIO",
        "contact": "CONTACT",
        "lang":"FR",
        "buyTheAlbum": "Buy Digital Album"
      }
    },
    fr: {
        translation: {
          "home": "ACCUEIL",
          "music": "MUSIQUE",
          "bio": "BIO",
          "contact": "CONTACT",
          "lang": "EN",
          "buyTheAlbum": "Acheter l'album numérique"
        }
    }
  }
}, function(err, t) {
    jqueryI18next.init(i18next, $);
    $('.i18n').localize();

    $("#lang-link").click(function() {
        
        if (nextLang === "en") {
            nextLang = "fr";
        }
        else {
            nextLang = "en";
        }
        i18next.changeLanguage(nextLang);
        $('.i18n').localize();
    });
});