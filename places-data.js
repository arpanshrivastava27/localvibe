/**
 * LocalVibe V2 — Enriched Places Data
 * Includes: menu items with rankings, monument history, area briefings
 */

// ─── Area Briefings ────────────────────────────────────
const AREA_BRIEFINGS = {
    'Hauz Khas': {
        name: 'Hauz Khas',
        nameHi: 'हौज़ खास',
        tagline: 'Where ancient ruins meet modern art',
        taglineHi: 'जहाँ प्राचीन खंडहर आधुनिक कला से मिलते हैं',
        description: 'A 13th-century royal reservoir turned into Delhi\'s coolest creative district. Art galleries, boutique cafés, and a deer park surrounding Mughal ruins.',
        descriptionHi: '13वीं सदी का शाही जलाशय जो दिल्ली का सबसे कूल क्रिएटिव डिस्ट्रिक्ट बन गया।',
        mustDo: [
            { emoji: '🏰', text: 'Walk through the 700-year-old fort ruins at sunset' },
            { emoji: '🦌', text: 'Spot deer and peacocks at Deer Park' },
            { emoji: '☕', text: 'Café-hop through the village lanes' }
        ],
        bestTime: 'Late afternoon → sunset (4 PM – 7 PM)',
        vibe: 'artsy',
        safetyTip: 'Well-lit and safe until 11 PM. The village lanes can be narrow.',
        bounds: { minLat: 28.545, maxLat: 28.555, minLng: 77.195, maxLng: 77.205 }
    },
    'Connaught Place': {
        name: 'Connaught Place',
        nameHi: 'कनॉट प्लेस',
        tagline: 'The heart of New Delhi since 1933',
        taglineHi: '1933 से नई दिल्ली का दिल',
        description: 'A grand colonial-era circular marketplace. White-pillared corridors hide legendary restaurants, secret underground markets, and Delhi\'s best people-watching.',
        descriptionHi: 'भव्य औपनिवेशिक काल का गोलाकार बाज़ार। सफ़ेद स्तंभों वाले गलियारे।',
        mustDo: [
            { emoji: '🥧', text: 'Grab Wenger\'s patties — a 1926 institution' },
            { emoji: '🏛️', text: 'Find Agrasen Ki Baoli — a hidden stepwell' },
            { emoji: '🛍️', text: 'Bargain at Janpath Market' }
        ],
        bestTime: 'Evening (5 PM – 9 PM) for the full buzz',
        vibe: 'bustling',
        safetyTip: 'Very safe and well-policed. Watch for touts near Palika Bazaar.',
        bounds: { minLat: 28.625, maxLat: 28.638, minLng: 77.215, maxLng: 77.225 }
    },
    'Chandni Chowk': {
        name: 'Chandni Chowk',
        nameHi: 'चाँदनी चौक',
        tagline: 'Asia\'s oldest and most chaotic food paradise',
        taglineHi: 'एशिया का सबसे पुराना और सबसे अराजक फ़ूड पैराडाइज़',
        description: 'A 350-year-old market built by Shah Jahan. Every lane has a legendary food stall. The sounds, smells, and chaos are the experience itself.',
        descriptionHi: 'शाहजहाँ द्वारा बनाया गया 350 साल पुराना बाज़ार। हर गली में एक दिग्गज फ़ूड स्टॉल।',
        mustDo: [
            { emoji: '🫓', text: 'Eat parathas at 200-year-old Paranthe Wali Gali' },
            { emoji: '🍖', text: 'Have kebabs at Karim\'s near Jama Masjid' },
            { emoji: '🕌', text: 'Climb Jama Masjid minaret for panoramic views' }
        ],
        bestTime: 'Morning (8 AM – 11 AM) for breakfast street food',
        vibe: 'chaotic',
        safetyTip: 'Very crowded. Keep belongings close. Best explored on foot or e-rickshaw.',
        bounds: { minLat: 28.648, maxLat: 28.662, minLng: 77.225, maxLng: 77.240 }
    }
};

// ─── Places Data ──────────────────────────────────────
const CURATED_PLACES = {
    hauzKhas: [
        {
            id: 'hk-1',
            name: 'Yeti - The Himalayan Kitchen',
            nameHi: 'येती - द हिमालयन किचन',
            category: 'food',
            cuisine: 'Tibetan · Nepalese',
            lat: 28.5494, lng: 77.2001,
            rating: 4.5, reviewCount: 3842, visitorCount: 18500, priceLevel: 2,
            signatureDish: { name: 'Thukpa Noodle Soup', emoji: '🍜', nameHi: 'थुक्पा नूडल सूप' },
            menuHighlights: [
                { rank: 1, name: 'Thukpa Noodle Soup', emoji: '🍜', tag: 'Most Ordered', orders: '12K+', price: '₹280' },
                { rank: 2, name: 'Momos (Steamed)', emoji: '🥟', tag: 'Fan Favorite', orders: '9.5K+', price: '₹220' },
                { rank: 3, name: 'Tingmo with Shapta', emoji: '🫓', tag: 'Hidden Gem', orders: '3.2K+', price: '₹320' }
            ],
            vibe: 'Cozy Himalayan hideout with stunning deer park views',
            vibeHi: 'हिरण पार्क के शानदार दृश्य के साथ आरामदायक हिमालयी ठिकाना',
            hours: '12:00 PM – 11:00 PM',
            tags: ['cozy', 'view', 'authentic'],
            image: '🏔️',
            pingMessage: 'You\'re near Yeti! Their Thukpa is legendary — perfect soul food 🍜'
        },
        {
            id: 'hk-2',
            name: 'Naivedyam',
            nameHi: 'नैवेद्यम',
            category: 'food',
            cuisine: 'South Indian',
            lat: 28.5502, lng: 77.1993,
            rating: 4.6, reviewCount: 5120, visitorCount: 28000, priceLevel: 1,
            signatureDish: { name: 'Ghee Roast Masala Dosa', emoji: '🥞', nameHi: 'घी रोस्ट मसाला डोसा' },
            menuHighlights: [
                { rank: 1, name: 'Ghee Roast Masala Dosa', emoji: '🥞', tag: 'Most Ordered', orders: '22K+', price: '₹180' },
                { rank: 2, name: 'Filter Coffee', emoji: '☕', tag: 'Fan Favorite', orders: '18K+', price: '₹60' },
                { rank: 3, name: 'Chettinad Chicken', emoji: '🍗', tag: 'Most Reviewed', orders: '8K+', price: '₹280' }
            ],
            vibe: 'Legendary South Indian breakfast — always a queue, always worth it',
            vibeHi: 'प्रसिद्ध दक्षिण भारतीय नाश्ता — हमेशा कतार, हमेशा इसके लायक',
            hours: '8:00 AM – 10:30 PM',
            tags: ['legendary', 'breakfast', 'budget-friendly'],
            image: '🌿',
            pingMessage: 'Naivedyam is right here! Their dosas have a cult following 🥞'
        },
        {
            id: 'hk-3',
            name: 'Amour Bistro',
            nameHi: 'अमोर बिस्ट्रो',
            category: 'food',
            cuisine: 'European · Continental',
            lat: 28.5489, lng: 77.2010,
            rating: 4.3, reviewCount: 2890, visitorCount: 15200, priceLevel: 3,
            signatureDish: { name: 'Truffle Mushroom Risotto', emoji: '🍄', nameHi: 'ट्रफल मशरूम रिसोट्टो' },
            menuHighlights: [
                { rank: 1, name: 'Truffle Mushroom Risotto', emoji: '🍄', tag: 'Most Ordered', orders: '6K+', price: '₹580' },
                { rank: 2, name: 'Sangria Pitcher', emoji: '🍷', tag: 'Fan Favorite', orders: '5K+', price: '₹650' },
                { rank: 3, name: 'Tiramisu', emoji: '🍰', tag: 'Must Try', orders: '4K+', price: '₹350' }
            ],
            vibe: 'Rooftop magic — sunset cocktails with a view of Hauz Khas fort',
            vibeHi: 'छत पर जादू — हौज़ खास किले के दृश्य के साथ सनसेट कॉकटेल',
            hours: '12:00 PM – 1:00 AM',
            tags: ['rooftop', 'romantic', 'sunset'],
            image: '🌅',
            pingMessage: 'Amour is right above you! Head to the rooftop for sunset magic 🌅'
        },
        {
            id: 'hk-4',
            name: 'Coast Café',
            nameHi: 'कोस्ट कैफे',
            category: 'cafe',
            cuisine: 'Café · Mediterranean',
            lat: 28.5497, lng: 77.1998,
            rating: 4.4, reviewCount: 4100, visitorCount: 22000, priceLevel: 2,
            signatureDish: { name: 'Cold Brew & Avocado Toast', emoji: '☕', nameHi: 'कोल्ड ब्रू और एवोकाडो टोस्ट' },
            menuHighlights: [
                { rank: 1, name: 'Cold Brew Coffee', emoji: '☕', tag: 'Most Ordered', orders: '15K+', price: '₹220' },
                { rank: 2, name: 'Avocado Toast', emoji: '🥑', tag: 'Fan Favorite', orders: '11K+', price: '₹320' },
                { rank: 3, name: 'Shakshuka', emoji: '🍳', tag: 'Hidden Gem', orders: '4K+', price: '₹380' }
            ],
            vibe: 'The café where creatives come to think — bring your laptop',
            vibeHi: 'वो कैफे जहाँ क्रिएटिव लोग सोचने आते हैं',
            hours: '9:00 AM – 11:00 PM',
            tags: ['work-friendly', 'aesthetic', 'brunch'],
            image: '💻',
            pingMessage: 'Coast Café is perfect for a break! Best cold brew in Delhi ☕'
        },
        {
            id: 'hk-5',
            name: 'Hauz Khas Fort & Deer Park',
            nameHi: 'हौज़ खास किला और डियर पार्क',
            category: 'heritage',
            lat: 28.5495, lng: 77.2015,
            rating: 4.7, reviewCount: 12500, visitorCount: 85000, priceLevel: 0,
            signatureDish: { name: 'Sunset at the Ruins', emoji: '🏰', nameHi: 'खंडहरों पर सूर्यास्त' },
            menuHighlights: [
                { rank: 1, name: 'Sunset from the ruins', emoji: '🌅', tag: 'Must See', orders: '' },
                { rank: 2, name: 'Deer & Peacock spotting', emoji: '🦚', tag: 'Experience', orders: '' },
                { rank: 3, name: 'Tomb photography', emoji: '📸', tag: 'Photo Spot', orders: '' }
            ],
            heritage: {
                builtIn: '1276 AD',
                builtBy: 'Sultan Alauddin Khalji',
                era: 'Delhi Sultanate',
                significance: 'A royal reservoir ("hauz") and Islamic seminary complex built to supply water to Siri Fort. The ruins include a madrasa, several pavilions, and the tomb of Firoz Shah Tughlaq. Now surrounded by a deer park with spotted deer and peacocks.',
                significanceHi: 'सिरी किले को पानी की आपूर्ति के लिए बनाया गया शाही जलाशय। खंडहरों में एक मदरसा, कई मंडप, और फ़िरोज़ शाह तुग़लक़ का मक़बरा शामिल है।',
                timeline: [
                    { year: '1276', event: 'Reservoir built by Sultan Alauddin Khalji' },
                    { year: '1352', event: 'Madrasa & mosque added by Firoz Shah Tughlaq' },
                    { year: '1354', event: 'Firoz Shah buried here in his own tomb' },
                    { year: '1960s', event: 'Deer Park established around the ruins' },
                    { year: '2000s', event: 'Hauz Khas Village emerges as creative hub' }
                ],
                timeToSpend: '1.5 – 2 hours',
                photoSpots: ['Arched corridors at sunset', 'Reflection in the lake', 'Peacocks on tomb walls']
            },
            vibe: 'A 13th-century fort surrounded by peacocks and wild deer — Delhi\'s best kept secret',
            vibeHi: '13वीं सदी का किला मोरों और जंगली हिरणों से घिरा',
            hours: 'Sunrise – Sunset',
            tags: ['heritage', 'nature', 'photography'],
            image: '🏰',
            pingMessage: 'You\'re at a 750-year-old Sultanate fort! Walk through the ruins at sunset 🏰'
        },
        {
            id: 'hk-6',
            name: 'Social Hauz Khas',
            nameHi: 'सोशल हौज़ खास',
            category: 'nightlife',
            cuisine: 'Bar · Indian Fusion',
            lat: 28.5491, lng: 77.2005,
            rating: 4.2, reviewCount: 6780, visitorCount: 42000, priceLevel: 2,
            signatureDish: { name: 'LIIT & Loaded Nachos', emoji: '🍸', nameHi: 'LIIT और लोडेड नाचोज़' },
            menuHighlights: [
                { rank: 1, name: 'Long Island Iced Tea', emoji: '🍸', tag: 'Most Ordered', orders: '25K+', price: '₹395' },
                { rank: 2, name: 'Loaded Nachos', emoji: '🧀', tag: 'Fan Favorite', orders: '18K+', price: '₹345' },
                { rank: 3, name: 'Social Burger', emoji: '🍔', tag: 'Hidden Gem', orders: '7K+', price: '₹375' }
            ],
            vibe: 'Work by day, party by night — the co-working bar that never sleeps',
            vibeHi: 'दिन में काम, रात में पार्टी',
            hours: '10:00 AM – 1:00 AM',
            tags: ['nightlife', 'co-working', 'party'],
            image: '🎵',
            pingMessage: 'Social is buzzing tonight! Great LIITs and loaded nachos 🍸'
        },
        {
            id: 'hk-7',
            name: 'Rose Garden',
            nameHi: 'गुलाब बाग़',
            category: 'park',
            lat: 28.5510, lng: 77.1985,
            rating: 4.3, reviewCount: 2100, visitorCount: 35000, priceLevel: 0,
            signatureDish: { name: 'Morning Walks & Roses', emoji: '🌹', nameHi: 'सुबह की सैर और गुलाब' },
            menuHighlights: [
                { rank: 1, name: 'Dawn walk among roses', emoji: '🌹', tag: 'Best At Dawn', orders: '' },
                { rank: 2, name: 'Bird watching', emoji: '🐦', tag: 'Hidden Activity', orders: '' },
                { rank: 3, name: 'Reading nook benches', emoji: '📖', tag: 'Local Secret', orders: '' }
            ],
            vibe: 'Quiet mornings with 50+ varieties of roses — a local favorite',
            vibeHi: 'गुलाब की 50+ किस्मों के साथ शांत सुबह',
            hours: '5:00 AM – 8:00 PM',
            tags: ['peaceful', 'morning', 'nature'],
            image: '🌸',
            pingMessage: 'Rose Garden is gorgeous right now! 50+ varieties of roses 🌹'
        },
        {
            id: 'hk-8',
            name: 'Elma\'s Bakery',
            nameHi: 'एल्मा बेकरी',
            category: 'food',
            cuisine: 'Bakery · European',
            lat: 28.5505, lng: 77.2008,
            rating: 4.5, reviewCount: 1950, visitorCount: 12000, priceLevel: 2,
            signatureDish: { name: 'Almond Croissant', emoji: '🥐', nameHi: 'बादाम क्रोसां' },
            menuHighlights: [
                { rank: 1, name: 'Almond Croissant', emoji: '🥐', tag: 'Most Ordered', orders: '8K+', price: '₹180' },
                { rank: 2, name: 'Sourdough Loaf', emoji: '🍞', tag: 'Local Favorite', orders: '5K+', price: '₹350' },
                { rank: 3, name: 'Lavender Latte', emoji: '💜', tag: 'Must Try', orders: '3K+', price: '₹220' }
            ],
            vibe: 'Parisian vibes in the heart of Delhi — the croissants are life-changing',
            vibeHi: 'दिल्ली के दिल में पेरिसियन वाइब्स',
            hours: '8:00 AM – 9:00 PM',
            tags: ['pastry', 'european', 'cozy'],
            image: '🥐',
            pingMessage: 'Elma\'s is right here! Their almond croissant is life-changing 🥐'
        }
    ],

    connaughtPlace: [
        {
            id: 'cp-1',
            name: 'Wenger\'s',
            nameHi: 'वेंगर्स',
            category: 'food',
            cuisine: 'Bakery · Patisserie',
            lat: 28.6328, lng: 77.2197,
            rating: 4.4, reviewCount: 8900, visitorCount: 55000, priceLevel: 1,
            signatureDish: { name: 'Chicken Patties', emoji: '🥧', nameHi: 'चिकन पैटीज़' },
            menuHighlights: [
                { rank: 1, name: 'Chicken Patties', emoji: '🥧', tag: 'Most Ordered', orders: '45K+', price: '₹85' },
                { rank: 2, name: 'Fruit Pastry', emoji: '🍰', tag: 'Fan Favorite', orders: '28K+', price: '₹120' },
                { rank: 3, name: 'Veg Puff', emoji: '🫓', tag: 'Budget King', orders: '35K+', price: '₹55' }
            ],
            vibe: 'Since 1926 — the patties are a Delhi institution',
            vibeHi: '1926 से — पैटीज़ दिल्ली की संस्था हैं',
            hours: '10:00 AM – 8:00 PM',
            tags: ['heritage', 'iconic', 'budget-friendly'],
            image: '🏛️',
            pingMessage: 'You\'re near Wenger\'s! 100-year-old bakery — grab the legendary chicken patties 🥧'
        },
        {
            id: 'cp-2',
            name: 'Farzi Café',
            nameHi: 'फ़र्ज़ी कैफे',
            category: 'food',
            cuisine: 'Modern Indian',
            lat: 28.6315, lng: 77.2205,
            rating: 4.3, reviewCount: 6200, visitorCount: 38000, priceLevel: 3,
            signatureDish: { name: 'Dal Chawal Arancini', emoji: '🍛', nameHi: 'दाल चावल अरान्चिनी' },
            menuHighlights: [
                { rank: 1, name: 'Dal Chawal Arancini', emoji: '🍛', tag: 'Most Ordered', orders: '14K+', price: '₹445' },
                { rank: 2, name: 'Naughty Nani Cocktail', emoji: '🍹', tag: 'Fan Favorite', orders: '11K+', price: '₹525' },
                { rank: 3, name: 'Mishti Doi Cheesecake', emoji: '🍮', tag: 'Hidden Gem', orders: '5K+', price: '₹395' }
            ],
            vibe: 'Indian food reimagined — molecular gastronomy meets street food',
            vibeHi: 'भारतीय खाना फिर से कल्पित',
            hours: '12:00 PM – 1:00 AM',
            tags: ['innovative', 'instagram-worthy', 'molecular'],
            image: '🧪',
            pingMessage: 'Farzi Café! Try the Dal Chawal Arancini — Indian food reimagined 🧪'
        },
        {
            id: 'cp-3',
            name: 'Janpath Market',
            nameHi: 'जनपथ मार्केट',
            category: 'shopping',
            lat: 28.6290, lng: 77.2180,
            rating: 4.1, reviewCount: 3500, visitorCount: 95000, priceLevel: 1,
            signatureDish: { name: 'Bargain Junk Jewelry', emoji: '💎', nameHi: 'सस्ते ज्वेलरी सौदे' },
            menuHighlights: [
                { rank: 1, name: 'Junk jewelry & accessories', emoji: '💎', tag: 'Best Buy', orders: '' },
                { rank: 2, name: 'Boho bags & clutches', emoji: '👜', tag: 'Trending', orders: '' },
                { rank: 3, name: 'Handmade candles', emoji: '🕯️', tag: 'Local Find', orders: '' }
            ],
            vibe: 'The ultimate bargain hunt — start at half the price they quote',
            vibeHi: 'सबसे बेहतरीन सौदेबाज़ी',
            hours: '10:00 AM – 8:00 PM',
            tags: ['shopping', 'bargain', 'souvenirs'],
            image: '🛍️',
            pingMessage: 'Janpath Market! Pro tip: Start bargaining at HALF their quote 🛍️'
        },
        {
            id: 'cp-4',
            name: 'Kwality Restaurant',
            nameHi: 'क्वालिटी रेस्तरां',
            category: 'food',
            cuisine: 'North Indian · Mughlai',
            lat: 28.6332, lng: 77.2190,
            rating: 4.2, reviewCount: 4200, visitorCount: 42000, priceLevel: 2,
            signatureDish: { name: 'Butter Chicken', emoji: '🍗', nameHi: 'बटर चिकन' },
            menuHighlights: [
                { rank: 1, name: 'Butter Chicken', emoji: '🍗', tag: 'Most Ordered', orders: '32K+', price: '₹485' },
                { rank: 2, name: 'Dal Makhani', emoji: '🥘', tag: 'Fan Favorite', orders: '24K+', price: '₹345' },
                { rank: 3, name: 'Gulab Jamun', emoji: '🍩', tag: 'Perfect Ending', orders: '15K+', price: '₹165' }
            ],
            vibe: 'Old-school Delhi fine dining — where butter chicken dreams come true',
            vibeHi: 'पुरानी दिल्ली फाइन डाइनिंग',
            hours: '12:00 PM – 11:30 PM',
            tags: ['classic', 'fine-dining', 'mughlai'],
            image: '👑',
            pingMessage: 'Kwality! Their butter chicken has been perfected over decades 🍗'
        },
        {
            id: 'cp-5',
            name: 'Agrasen Ki Baoli',
            nameHi: 'अग्रसेन की बावली',
            category: 'heritage',
            lat: 28.6265, lng: 77.2245,
            rating: 4.6, reviewCount: 9800, visitorCount: 62000, priceLevel: 0,
            signatureDish: { name: 'Photography at the Steps', emoji: '📸', nameHi: 'सीढ़ियों पर फ़ोटोग्राफ़ी' },
            menuHighlights: [
                { rank: 1, name: 'Symmetrical step photos', emoji: '📸', tag: 'Photo Spot', orders: '' },
                { rank: 2, name: 'Early morning solitude', emoji: '🌅', tag: 'Best At Dawn', orders: '' },
                { rank: 3, name: 'Architectural study', emoji: '📐', tag: 'For Nerds', orders: '' }
            ],
            heritage: {
                builtIn: '14th century (estimated)',
                builtBy: 'Attributed to the legendary King Agrasen',
                era: 'Medieval Period',
                significance: 'One of Delhi\'s oldest and most stunning stepwells with 108 steps descending into the earth. A protected monument that was featured in Aamir Khan\'s "PK" movie. The symmetrical arched corridors create one of Delhi\'s most Instagrammable spots.',
                significanceHi: '108 सीढ़ियों वाली दिल्ली की सबसे पुरानी और सबसे शानदार बावली। आमिर ख़ान की "PK" फ़िल्म में दिखी।',
                timeline: [
                    { year: '~14th C.', event: 'Stepwell constructed, attributed to Agrasen' },
                    { year: '1800s', event: 'Fell into disuse during British colonial era' },
                    { year: '1958', event: 'Protected under Archaeological Survey of India' },
                    { year: '2014', event: 'Featured in Bollywood film "PK" — tourism surge' }
                ],
                timeToSpend: '30 – 45 minutes',
                photoSpots: ['Top-down from entrance', 'Symmetrical corridor arches', 'Bottom looking up']
            },
            vibe: 'A 14th-century stepwell hidden in plain sight — featured in PK movie',
            vibeHi: '14वीं सदी की बावली सबके सामने छुपी',
            hours: '7:00 AM – 5:00 PM',
            tags: ['heritage', 'photography', 'hidden-gem'],
            image: '🏛️',
            pingMessage: 'Agrasen Ki Baoli! A 14th-century stepwell with 108 steps — insane photos 📸'
        }
    ],

    chandniChowk: [
        {
            id: 'cc-1',
            name: 'Paranthe Wali Gali',
            nameHi: 'पराठे वाली गली',
            category: 'food',
            cuisine: 'Street Food · North Indian',
            lat: 28.6562, lng: 77.2310,
            rating: 4.5, reviewCount: 11200, visitorCount: 120000, priceLevel: 1,
            signatureDish: { name: 'Stuffed Parathas (50+ varieties)', emoji: '🫓', nameHi: 'भरवां पराठे (50+ किस्में)' },
            menuHighlights: [
                { rank: 1, name: 'Aloo Paratha with Rabri', emoji: '🫓', tag: 'Most Ordered', orders: '50K+', price: '₹80' },
                { rank: 2, name: 'Rabri Paratha', emoji: '🍮', tag: 'Legendary', orders: '35K+', price: '₹100' },
                { rank: 3, name: 'Papad Paratha', emoji: '🥙', tag: 'Wildcard Pick', orders: '15K+', price: '₹90' }
            ],
            vibe: '200-year-old lane of parathas — try the rabri one, thank me later',
            vibeHi: '200 साल पुरानी पराठों की गली',
            hours: '9:00 AM – 11:00 PM',
            tags: ['legendary', 'street-food', 'must-visit'],
            image: '🔥',
            pingMessage: 'STOP! You\'re at Paranthe Wali Gali! 200-year-old parathas — try the Rabri Paratha 🫓🔥'
        },
        {
            id: 'cc-2',
            name: 'Karim\'s',
            nameHi: 'करीम्स',
            category: 'food',
            cuisine: 'Mughlai · Kebabs',
            lat: 28.6558, lng: 77.2335,
            rating: 4.4, reviewCount: 15000, visitorCount: 180000, priceLevel: 2,
            signatureDish: { name: 'Mutton Burrah Kebab', emoji: '🍖', nameHi: 'मटन बुर्रा कबाब' },
            menuHighlights: [
                { rank: 1, name: 'Mutton Burrah Kebab', emoji: '🍖', tag: 'Most Ordered', orders: '68K+', price: '₹320' },
                { rank: 2, name: 'Chicken Jahangiri', emoji: '🍗', tag: 'Royal Recipe', orders: '45K+', price: '₹380' },
                { rank: 3, name: 'Badam Pasanda', emoji: '🥩', tag: 'Chef\'s Special', orders: '22K+', price: '₹420' }
            ],
            vibe: 'Since 1913, feeding royalty and commoners alike — the OG Mughlai',
            vibeHi: '1913 से, राजाओं और आम लोगों दोनों को खिला रहा',
            hours: '7:00 AM – 12:00 AM',
            tags: ['heritage', 'non-veg', 'legendary'],
            image: '🍖',
            pingMessage: 'Karim\'s is RIGHT HERE! Since 1913 — their kebabs are from Mughal royal recipes 🍖'
        },
        {
            id: 'cc-3',
            name: 'Old Famous Jalebi Wala',
            nameHi: 'ओल्ड फेमस जलेबी वाला',
            category: 'food',
            cuisine: 'Sweets · Street Food',
            lat: 28.6555, lng: 77.2300,
            rating: 4.3, reviewCount: 8900, visitorCount: 95000, priceLevel: 1,
            signatureDish: { name: 'Hot Crispy Jalebis', emoji: '🍩', nameHi: 'गर्म कुरकुरी जलेबी' },
            menuHighlights: [
                { rank: 1, name: 'Hot Jalebis (fresh)', emoji: '🍩', tag: 'Most Ordered', orders: '80K+', price: '₹60/plate' },
                { rank: 2, name: 'Jalebi + Rabri combo', emoji: '🥛', tag: 'Pro Combo', orders: '40K+', price: '₹100' },
                { rank: 3, name: 'Morning Jalebi (6 AM)', emoji: '🌅', tag: 'Best At Dawn', orders: '20K+', price: '₹60/plate' }
            ],
            vibe: 'Watch them being fried LIVE — best eaten at dawn with rabri',
            vibeHi: 'लाइव तलते हुए देखें',
            hours: '6:00 AM – 9:00 PM',
            tags: ['sweets', 'street-food', 'iconic'],
            image: '🍩',
            pingMessage: 'Jalebi Wala is HERE! Watch them fry jalebis LIVE — grab the hot ones 🍩'
        },
        {
            id: 'cc-4',
            name: 'Jama Masjid',
            nameHi: 'जामा मस्जिद',
            category: 'heritage',
            lat: 28.6507, lng: 77.2334,
            rating: 4.7, reviewCount: 22000, visitorCount: 250000, priceLevel: 0,
            signatureDish: { name: 'Panoramic Old Delhi Views', emoji: '🕌', nameHi: 'पुरानी दिल्ली का मनोरम दृश्य' },
            menuHighlights: [
                { rank: 1, name: 'Minaret climb for views', emoji: '🔭', tag: 'Must Do', orders: '' },
                { rank: 2, name: 'Prayer hall architecture', emoji: '🕌', tag: 'Awe-Inspiring', orders: '' },
                { rank: 3, name: 'Courtyard at sunset', emoji: '🌅', tag: 'Best At Sunset', orders: '' }
            ],
            heritage: {
                builtIn: '1644–1656 AD',
                builtBy: 'Mughal Emperor Shah Jahan',
                era: 'Mughal Empire',
                significance: 'India\'s largest mosque, built by the same emperor who built the Taj Mahal. The courtyard can hold 25,000 worshippers. Climbing the southern minaret offers a 360° panoramic view of Old Delhi — one of the most breathtaking urban views in India.',
                significanceHi: 'भारत की सबसे बड़ी मस्जिद, उसी सम्राट ने बनाई जिसने ताज महल बनवाया था। प्रांगण में 25,000 श्रद्धालु समा सकते हैं।',
                timeline: [
                    { year: '1644', event: 'Construction begins under Shah Jahan' },
                    { year: '1656', event: 'Completed after 12 years with 5,000 workers' },
                    { year: '1857', event: 'British forces occupied it during the Revolt' },
                    { year: '1947', event: 'Became a symbol of Indian independence' }
                ],
                timeToSpend: '1 – 1.5 hours',
                photoSpots: ['Top of southern minaret', 'Central courtyard reflection pool', 'Red sandstone facade at golden hour']
            },
            vibe: 'India\'s largest mosque — climb the minaret for a view that\'ll change your perspective',
            vibeHi: 'भारत की सबसे बड़ी मस्जिद — मीनार पर चढ़ें',
            hours: '7:00 AM – 6:30 PM',
            tags: ['heritage', 'architecture', 'must-visit'],
            image: '🕌',
            pingMessage: 'JAMA MASJID! Built by Shah Jahan (yes, Taj Mahal guy). Climb the minaret! 🕌'
        },
        {
            id: 'cc-5',
            name: 'Natraj Dahi Bhalle',
            nameHi: 'नटराज दही भल्ले',
            category: 'food',
            cuisine: 'Street Food · Chaat',
            lat: 28.6560, lng: 77.2295,
            rating: 4.5, reviewCount: 7600, visitorCount: 68000, priceLevel: 1,
            signatureDish: { name: 'Dahi Bhalla', emoji: '🥣', nameHi: 'दही भल्ला' },
            menuHighlights: [
                { rank: 1, name: 'Dahi Bhalla', emoji: '🥣', tag: 'Most Ordered', orders: '55K+', price: '₹80' },
                { rank: 2, name: 'Aloo Tikki', emoji: '🥔', tag: 'Fan Favorite', orders: '38K+', price: '₹70' },
                { rank: 3, name: 'Gol Gappe', emoji: '💧', tag: 'Refreshing', orders: '42K+', price: '₹50' }
            ],
            vibe: 'The chaat king of Chandni Chowk — one bite and you\'ll understand the hype',
            vibeHi: 'चांदनी चौक का चाट राजा',
            hours: '10:00 AM – 10:00 PM',
            tags: ['street-food', 'chaat', 'iconic'],
            image: '🥣',
            pingMessage: 'Natraj Dahi Bhalle! The chaat king of Chandni Chowk — get the dahi bhalla 🥣'
        }
    ]
};

// Category metadata
const CATEGORIES = {
    food: { icon: '🍕', label: 'Food', color: '#FF6B6B' },
    cafe: { icon: '☕', label: 'Cafés', color: '#D4A76A' },
    heritage: { icon: '🏛️', label: 'Heritage', color: '#818cf8' },
    park: { icon: '🌳', label: 'Parks', color: '#34d399' },
    shopping: { icon: '🛍️', label: 'Shopping', color: '#fb923c' },
    nightlife: { icon: '🎭', label: 'Nightlife', color: '#c084fc' }
};

const SORT_MODES = {
    nearest: { label: 'Nearest', icon: '📍' },
    popular: { label: 'Most Popular', icon: '🔥' },
    rated: { label: 'Top Rated', icon: '⭐' },
    reviewed: { label: 'Most Reviewed', icon: '💬' }
};

function getAllCuratedPlaces(lat, lng, radiusKm = 15) {
    const all = [];
    Object.values(CURATED_PLACES).forEach(locality => {
        locality.forEach(place => {
            const dist = haversineDistance(lat, lng, place.lat, place.lng);
            if (dist <= radiusKm) all.push({ ...place, distance: dist });
        });
    });
    return all;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function sortPlaces(places, mode) {
    const s = [...places];
    switch (mode) {
        case 'nearest': s.sort((a, b) => a.distance - b.distance); break;
        case 'popular': s.sort((a, b) => b.visitorCount - a.visitorCount); break;
        case 'rated': s.sort((a, b) => b.rating - a.rating); break;
        case 'reviewed': s.sort((a, b) => b.reviewCount - a.reviewCount); break;
    }
    return s;
}

function filterByCategory(places, cat) {
    if (!cat || cat === 'all') return places;
    return places.filter(p => p.category === cat);
}

function formatDistance(km) {
    return km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`;
}

function formatVisitors(count) {
    return count >= 1000 ? `${(count / 1000).toFixed(count >= 100000 ? 0 : 1)}K` : count.toString();
}

function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.3;
    let h = '';
    for (let i = 0; i < full; i++) h += '<span class="star full">★</span>';
    if (half) h += '<span class="star half">★</span>';
    for (let i = 0; i < 5 - full - (half ? 1 : 0); i++) h += '<span class="star empty">☆</span>';
    return h;
}

function getPriceLevel(level) {
    return level === 0 ? 'Free' : '₹'.repeat(level);
}

function detectArea(lat, lng) {
    for (const [key, area] of Object.entries(AREA_BRIEFINGS)) {
        const b = area.bounds;
        if (lat >= b.minLat && lat <= b.maxLat && lng >= b.minLng && lng <= b.maxLng) {
            return area;
        }
    }
    return null;
}
