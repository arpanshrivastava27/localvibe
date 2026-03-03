/**
 * LocalVibe V2 — i18n Module
 */

const I18N = {
    en: {
        appName: 'LocalVibe',
        search: 'Search places, dishes, vibes...',
        cat: { all: 'All', food: 'Food', cafe: 'Cafés', heritage: 'Heritage', park: 'Parks', shopping: 'Shopping', nightlife: 'Nightlife' },
        sort: { nearest: 'Nearest', popular: 'Popular', rated: 'Top Rated', reviewed: 'Most Reviewed' },
        ui: {
            discover: 'Discover', places: 'places', reviews: 'reviews', visitors: 'visitors',
            directions: 'Get Directions', mustTry: 'Must Try', hours: 'Hours', nearYou: 'near you',
            loading: 'Finding places...', noResults: 'Nothing nearby', locating: 'Getting location...',
            locationFallback: 'Showing Hauz Khas, Delhi',
            passing: 'PASSING BY', tapToExplore: 'Tap to explore',
            welcome: 'WELCOME TO', explore: 'Start Exploring',
            history: 'HISTORICAL SIGNIFICANCE', timeline: 'Timeline', photoSpots: 'Photo Spots', timeToSpend: 'Time',
            thingsToTry: 'THINGS TO TRY', mostOrdered: 'Most Ordered', fanFav: 'Fan Favorite', hiddenGem: 'Hidden Gem',
            bestTime: 'Best Time', safety: 'Tips'
        }
    },
    hi: {
        appName: 'लोकलवाइब',
        search: 'जगह, व्यंजन, वाइब्स खोजें...',
        cat: { all: 'सभी', food: 'खाना', cafe: 'कैफे', heritage: 'विरासत', park: 'पार्क', shopping: 'शॉपिंग', nightlife: 'नाइटलाइफ' },
        sort: { nearest: 'नज़दीक', popular: 'लोकप्रिय', rated: 'रेटिंग', reviewed: 'रिव्यू' },
        ui: {
            discover: 'खोजें', places: 'जगहें', reviews: 'रिव्यू', visitors: 'आगंतुक',
            directions: 'दिशा-निर्देश', mustTry: 'ज़रूर ट्राई करें', hours: 'समय', nearYou: 'आपके पास',
            loading: 'जगहें खोज रहे हैं...', noResults: 'पास में कुछ नहीं', locating: 'लोकेशन ले रहे हैं...',
            locationFallback: 'हौज़ खास, दिल्ली दिखा रहे हैं',
            passing: 'यहाँ से गुज़र रहे हैं', tapToExplore: 'एक्सप्लोर करें',
            welcome: 'स्वागत है', explore: 'एक्सप्लोर शुरू करें',
            history: 'ऐतिहासिक महत्व', timeline: 'टाइमलाइन', photoSpots: 'फोटो स्पॉट', timeToSpend: 'समय',
            thingsToTry: 'ज़रूर ट्राई करें', mostOrdered: 'सबसे ज़्यादा ऑर्डर', fanFav: 'पसंदीदा', hiddenGem: 'छुपा रत्न',
            bestTime: 'सबसे अच्छा समय', safety: 'टिप्स'
        }
    },
    es: {
        appName: 'LocalVibe',
        search: 'Buscar lugares, platos...',
        cat: { all: 'Todo', food: 'Comida', cafe: 'Cafés', heritage: 'Patrimonio', park: 'Parques', shopping: 'Compras', nightlife: 'Nocturno' },
        sort: { nearest: 'Cercano', popular: 'Popular', rated: 'Valorado', reviewed: 'Reseñas' },
        ui: {
            discover: 'Descubrir', places: 'lugares', reviews: 'reseñas', visitors: 'visitantes',
            directions: 'Direcciones', mustTry: 'Imprescindible', hours: 'Horario', nearYou: 'cerca',
            loading: 'Buscando...', noResults: 'Nada cerca', locating: 'Ubicando...',
            locationFallback: 'Mostrando Hauz Khas, Delhi',
            passing: 'PASANDO POR', tapToExplore: 'Toca para explorar',
            welcome: 'BIENVENIDO A', explore: 'Explorar',
            history: 'IMPORTANCIA HISTÓRICA', timeline: 'Historia', photoSpots: 'Fotos', timeToSpend: 'Tiempo',
            thingsToTry: 'QUÉ PROBAR', mostOrdered: 'Más Pedido', fanFav: 'Favorito', hiddenGem: 'Secreto',
            bestTime: 'Mejor hora', safety: 'Consejos'
        }
    },
    fr: {
        appName: 'LocalVibe',
        search: 'Rechercher lieux, plats...',
        cat: { all: 'Tout', food: 'Cuisine', cafe: 'Cafés', heritage: 'Patrimoine', park: 'Parcs', shopping: 'Shopping', nightlife: 'Nocturne' },
        sort: { nearest: 'Proche', popular: 'Populaire', rated: 'Noté', reviewed: 'Avis' },
        ui: {
            discover: 'Découvrir', places: 'lieux', reviews: 'avis', visitors: 'visiteurs',
            directions: 'Itinéraire', mustTry: 'À Essayer', hours: 'Heures', nearYou: 'près',
            loading: 'Chargement...', noResults: 'Rien à proximité', locating: 'Localisation...',
            locationFallback: 'Affichage de Hauz Khas, Delhi',
            passing: 'VOUS PASSEZ', tapToExplore: 'Touchez pour explorer',
            welcome: 'BIENVENUE À', explore: 'Explorer',
            history: 'IMPORTANCE HISTORIQUE', timeline: 'Chronologie', photoSpots: 'Photos', timeToSpend: 'Durée',
            thingsToTry: 'À ESSAYER', mostOrdered: 'Plus Commandé', fanFav: 'Favori', hiddenGem: 'Secret',
            bestTime: 'Meilleur moment', safety: 'Conseils'
        }
    },
    de: {
        appName: 'LocalVibe',
        search: 'Orte, Gerichte suchen...',
        cat: { all: 'Alle', food: 'Essen', cafe: 'Cafés', heritage: 'Erbe', park: 'Parks', shopping: 'Shopping', nightlife: 'Nachtleben' },
        sort: { nearest: 'Nächste', popular: 'Beliebt', rated: 'Bewertet', reviewed: 'Rezensionen' },
        ui: {
            discover: 'Entdecken', places: 'Orte', reviews: 'Bewertungen', visitors: 'Besucher',
            directions: 'Navigation', mustTry: 'Muss man probieren', hours: 'Zeiten', nearYou: 'in der Nähe',
            loading: 'Suche...', noResults: 'Nichts in der Nähe', locating: 'Standort...',
            locationFallback: 'Zeige Hauz Khas, Delhi',
            passing: 'SIE PASSIEREN', tapToExplore: 'Tippen zum Entdecken',
            welcome: 'WILLKOMMEN IN', explore: 'Entdecken',
            history: 'HISTORISCHE BEDEUTUNG', timeline: 'Zeitleiste', photoSpots: 'Fotos', timeToSpend: 'Dauer',
            thingsToTry: 'PROBIEREN', mostOrdered: 'Meistbestellt', fanFav: 'Favorit', hiddenGem: 'Geheimtipp',
            bestTime: 'Beste Zeit', safety: 'Tipps'
        }
    },
    ja: {
        appName: 'ローカルバイブ',
        search: '場所、料理を検索...',
        cat: { all: 'すべて', food: 'フード', cafe: 'カフェ', heritage: '遺産', park: '公園', shopping: '買物', nightlife: '夜' },
        sort: { nearest: '近い', popular: '人気', rated: '評価', reviewed: 'レビュー' },
        ui: {
            discover: '発見', places: '件', reviews: 'レビュー', visitors: '訪問者',
            directions: '道順', mustTry: '必食', hours: '営業時間', nearYou: '近く',
            loading: '検索中...', noResults: '近くに何もない', locating: '位置情報...',
            locationFallback: 'デリーを表示',
            passing: '通過中', tapToExplore: 'タップして探索',
            welcome: 'ようこそ', explore: '探索開始',
            history: '歴史的意義', timeline: '年表', photoSpots: '撮影', timeToSpend: '所要時間',
            thingsToTry: 'おすすめ', mostOrdered: '人気No.1', fanFav: 'お気に入り', hiddenGem: '穴場',
            bestTime: 'ベストタイム', safety: 'ヒント'
        }
    }
};

let currentLang = 'en';

function detectLanguage() {
    const b = navigator.language?.substring(0, 2) || 'en';
    if (I18N[b]) currentLang = b;
    return currentLang;
}

function setLanguage(lang) {
    if (I18N[lang]) { currentLang = lang; document.documentElement.lang = lang; return true; }
    return false;
}

function t(path) {
    const keys = path.split('.');
    let r = I18N[currentLang];
    for (const k of keys) { r = r?.[k]; if (r === undefined) break; }
    if (r !== undefined) return r;
    // Fallback to English
    r = I18N.en;
    for (const k of keys) r = r?.[k];
    return r || path;
}

function getAvailableLanguages() {
    return [
        { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
        { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
        { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
        { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵' }
    ];
}
