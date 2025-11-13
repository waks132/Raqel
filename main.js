// Tarot Card Data
const tarotCards = [
    {
        id: 1,
        name: "L'Intervalle",
        nameEn: "The Interval",
        meaning: "You were born in the space between two truths. This card speaks of transition, liminal spaces, and the beauty found in between states. You exist in a moment of pure potential.",
        advice: "Embrace the uncertainty. The space between is where magic happens.",
        image: "card01.png"
    },
    {
        id: 2,
        name: "La Fracture Sacrée",
        nameEn: "The Sacred Fracture",
        meaning: "What you believe you have lost is what forms you. This card reveals that your wounds are sacred, your breaks are blessings, and your fractures let the light in.",
        advice: "Honor your broken places. They are portals to your deepest wisdom.",
        image: "card02.png"
    },
    {
        id: 3,
        name: "L'Empreinte",
        nameEn: "The Imprint",
        meaning: "You don't know who you are, but you leave a geometry. This card speaks of unconscious patterns, the sacred geometry of your existence, and the mark you leave on the world.",
        advice: "Trust the patterns you create. Your soul knows its shape even when your mind does not.",
        image: "card03.png"
    },
    {
        id: 4,
        name: "La Mire",
        nameEn: "The Sight",
        meaning: "What you aim at is already reaching you. This card reveals that your desires are magnetic, your intentions are powerful, and what you seek is seeking you.",
        advice: "Aim with intention. The universe is already aligning with your vision.",
        image: "card04.png"
    },
    {
        id: 5,
        name: "L'Inversion",
        nameEn: "The Inversion",
        meaning: "What you dread follows you because it remembers you. This card speaks of shadow work, facing fears, and how our avoided aspects become our teachers.",
        advice: "Turn and face your shadow. It has gifts for you in its darkness.",
        image: "card05.png"
    },
    {
        id: 6,
        name: "L'Axe Dormant",
        nameEn: "The Sleeping Axis",
        meaning: "Even in forgetting, you vibrate straight. This card reveals your true nature persists even in unconsciousness, your essence remains aligned even when you feel lost.",
        advice: "Trust your inner compass. You are more aligned than you know.",
        image: "card06.png"
    },
    {
        id: 7,
        name: "L'Orbe Cassé",
        nameEn: "The Broken Orb",
        meaning: "It's through the cracks that your light passes. This card speaks of vulnerability as strength, brokenness as beauty, and how our imperfections are our greatest gifts.",
        advice: "Let your light shine through your cracks. Your broken places are your brightest.",
        image: "card07.png"
    },
    {
        id: 8,
        name: "L'Étincelle Silencieuse",
        nameEn: "The Silent Spark",
        meaning: "Fire doesn't shout. It returns. This card reveals the quiet power of persistence, the strength in silence, and how true power doesn't need to announce itself.",
        advice: "Let your actions speak. True power whispers while it transforms.",
        image: "card08.png"
    },
    {
        id: 9,
        name: "L'Anneau d'Absence",
        nameEn: "The Ring of Absence",
        meaning: "You are missing where you exist the most. This card speaks of paradox, of finding fullness in emptiness, and how absence can be a form of presence.",
        advice: "Embrace the void. In your emptiness, you are most complete.",
        image: "card09.png"
    },
    {
        id: 10,
        name: "L'Opale",
        nameEn: "The Opal",
        meaning: "Change without noise. Thus no one uproots you. This card reveals the power of quiet transformation, of changing without announcement, of evolving in silence.",
        advice: "Transform quietly. Your changes are sacred and need no announcement.",
        image: "card10.png"
    },
    {
        id: 11,
        name: "La Lame Nue",
        nameEn: "The Naked Blade",
        meaning: "What cuts you refines you. This card speaks of necessary pain, cutting away what no longer serves, and how sharp experiences shape our true form.",
        advice: "Welcome the blade. It carves you into your truest self.",
        image: "card11.png"
    },
    {
        id: 12,
        name: "La Suspension",
        nameEn: "The Suspension",
        meaning: "Stop here. The passage is here. This card reveals that stillness is a form of movement, that waiting is active, and that pause contains profound wisdom.",
        advice: "Embrace the pause. In stillness, you will find your way forward.",
        image: "card12.png"
    },
    {
        id: 13,
        name: "La Dissolution",
        nameEn: "The Dissolution",
        meaning: "Everything that dies makes you free. This card speaks of necessary endings, the freedom in letting go, and how death is always a form of liberation.",
        advice: "Let what must die, die. In every ending, you become more free.",
        image: "card13.png"
    },
    {
        id: 14,
        name: "La Cloche Creuse",
        nameEn: "The Hollow Bell",
        meaning: "Even what you don't hear guides you. This card reveals that silence speaks, that absence teaches, and that the unheard carries profound messages.",
        advice: "Listen to the silence. The hollow bell rings with truth.",
        image: "card14.png"
    },
    {
        id: 15,
        name: "L'Entrelacs",
        nameEn: "The Interlacing",
        meaning: "You are connected to what you still refuse. This card speaks of hidden connections, unconscious bonds, and how we are linked to what we resist.",
        advice: "Examine your resistances. They are bridges to your growth.",
        image: "card15.png"
    },
    {
        id: 16,
        name: "La Déchirure Lumineuse",
        nameEn: "The Luminous Tear",
        meaning: "What collapses shows you the exit. This card reveals that breakdown is breakthrough, that destruction reveals the way forward, and that collapse illuminates the path.",
        advice: "Welcome the collapse. It tears away illusion to reveal truth.",
        image: "card16.png"
    },
    {
        id: 17,
        name: "L'Algue Astral",
        nameEn: "The Astral Seaweed",
        meaning: "You drift toward your light. This card speaks of natural attraction, of being drawn to your destiny, and how you naturally flow toward your illumination.",
        advice: "Trust the current. You are being drawn to your highest self.",
        image: "card17.png"
    },
    {
        id: 18,
        name: "Le Miroir Sombre",
        nameEn: "The Dark Mirror",
        meaning: "You will see clearly when you stop fleeing your dark form. This card reveals that shadow integration brings clarity, and that facing darkness illuminates everything.",
        advice: "Face your shadow. In the dark mirror, you will find your light.",
        image: "card18.png"
    },
    {
        id: 19,
        name: "La Flamme Pleine",
        nameEn: "The Full Flame",
        meaning: "Your warmth is an offering, not a warning. This card speaks of authentic expression, of being a beacon rather than a warning, and how your true nature serves others.",
        advice: "Shine without apology. Your flame is meant to warm, not warn.",
        image: "card19.png"
    },
    {
        id: 20,
        name: "L'Écho",
        nameEn: "The Echo",
        meaning: "You hear what others silence. This card reveals sensitivity to hidden truths, the ability to hear what isn't spoken, and how you perceive the unexpressed.",
        advice: "Trust your sensitivity. You hear the truth that others cannot speak.",
        image: "card20.png"
    },
    {
        id: 21,
        name: "La Spirale Fixe",
        nameEn: "The Fixed Spiral",
        meaning: "You have already arrived. Begin again. This card speaks of cyclical completion, of finding the beginning in the end, and how arrival is also a new departure.",
        advice: "You are exactly where you need to be. From here, begin again.",
        image: "card21.png"
    },
    {
        id: 22,
        name: "L'Absent",
        nameEn: "The Absent",
        meaning: "What you don't grasp is what saves you. This card reveals that surrender is salvation, that letting go is receiving, and that absence can be the greatest presence.",
        advice: "Release your grip. What you let go will hold you.",
        image: "card22.png"
    }
];

// Spread types and their positions
const spreads = {
    'past-present-future': ['Past', 'Present', 'Future'],
    'situation-action-outcome': ['Situation', 'Action', 'Outcome'],
    'mind-body-spirit': ['Mind', 'Body', 'Spirit']
};

// Global variables
let selectedSpread = 'past-present-future';
let drawnCards = [];
let isDrawing = false;
let userState = {
    feeling: '',
    need: '',
    raqelResponse: ''
};

// DOM elements
const startReadingBtn = document.getElementById('start-reading');
const deck = document.getElementById('deck');
const selectedCardsDiv = document.getElementById('selected-cards');
const interpretationDiv = document.getElementById('interpretation');
const readingContent = document.getElementById('reading-content');
const newReadingBtn = document.getElementById('new-reading');
const spreadBtns = document.querySelectorAll('.spread-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
});

function initializeEventListeners() {
    // Start reading button
    startReadingBtn.addEventListener('click', scrollToReading);
    
    // Deck click handler
    deck.addEventListener('click', drawCards);
    
    // New reading button
    newReadingBtn.addEventListener('click', resetReading);
    
    // Spread selection buttons
    spreadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectSpread(this.dataset.spread);
        });
    });
    
    // Ritual section listeners
    const feelingBtns = document.querySelectorAll('.feeling-btn');
    const needBtns = document.querySelectorAll('.need-btn');
    const continueBtn = document.getElementById('continue-to-reading');
    
    feelingBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectFeeling(this.dataset.feeling);
        });
    });
    
    needBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectNeed(this.dataset.need);
        });
    });
    
    if (continueBtn) {
        continueBtn.addEventListener('click', showCardSelection);
    }
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function initializeAnimations() {
    // Fade in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

function scrollToReading() {
    document.getElementById('reading').scrollIntoView({
        behavior: 'smooth'
    });
}

function selectFeeling(feeling) {
    userState.feeling = feeling;
    
    // Update button states
    document.querySelectorAll('.feeling-btn').forEach(btn => {
        btn.classList.remove('bg-opacity-100');
        btn.classList.add('bg-opacity-50');
    });
    
    const selectedBtn = document.querySelector(`[data-feeling="${feeling}"]`);
    selectedBtn.classList.remove('bg-opacity-50');
    selectedBtn.classList.add('bg-opacity-100');
    
    checkRitualComplete();
    generateRaqelResponse();
}

function selectNeed(need) {
    userState.need = need;
    
    // Update button states
    document.querySelectorAll('.need-btn').forEach(btn => {
        btn.classList.remove('bg-opacity-100');
        btn.classList.add('bg-opacity-50');
    });
    
    const selectedBtn = document.querySelector(`[data-need="${need}"]`);
    selectedBtn.classList.remove('bg-opacity-50');
    selectedBtn.classList.add('bg-opacity-100');
    
    checkRitualComplete();
    generateRaqelResponse();
}

function generateRaqelResponse() {
    if (!userState.feeling || !userState.need) return;
    
    const responses = {
        'stress-clarity': "Je note : vous cherchez de la clarté dans un état de stress. Nous allons tirer 3 cartes pour éclairer ce point, pas pour prédire l'avenir.",
        'stress-calm': "Je comprends : vous avez besoin d'apaisement face au stress. Les cartes vont vous aider à nommer ce qui peut vous soutenir.",
        'stress-decision': "Je vois : vous êtes stressé(e) par une décision. Le tirage va clarifier les enjeux sans décider pour vous.",
        'stress-support': "Je perçois : vous avez besoin de soutien dans ce stress. Les cartes vont identifier vos ressources intérieures.",
        'confusion-clarity': "Parfait : vous cherchez de la clarté dans la confusion. Le tirage va structurer ce qui semble chaotique.",
        'confusion-calm': "Je comprends : la confusion vous déstabilise. Les cartes vont vous aider à retrouver un point d'ancrage.",
        'confusion-decision': "Je note : vous êtes confus(e) face à un choix. Le tirage va éclairer les différentes facettes.",
        'confusion-support': "Je vois : vous avez besoin de soutien pour traverser la confusion. Les cartes vont nommer vos alliés intérieurs.",
        'sadness-clarity': "Je perçois : vous cherchez du sens dans la tristesse. Les cartes vont éclairer ce qui se transforme.",
        'sadness-calm': "Je comprends : vous avez besoin d'apaisement. Le tirage va identifier ce qui peut vous nourrir.",
        'sadness-decision': "Je note : vous devez prendre une décision dans la tristesse. Les cartes vont clarifier vos besoins profonds.",
        'sadness-support': "Je vois : vous avez besoin de soutien dans la peine. Les cartes vont révéler vos ressources cachées.",
        'curiosity-clarity': "Excellent : votre curiosité cherche des réponses. Le tirage va nourrir votre exploration.",
        'curiosity-calm': "Je comprends : vous cherchez à apaiser votre mental curieux. Les cartes vont offrir un point d'ancrage.",
        'curiosity-decision': "Je note : votre curiosité s'oriente vers un choix. Le tirage va clarifier les possibles.",
        'curiosity-support': "Je vois : vous explorez avec besoin de soutien. Les cartes vont identifier vos alliés.",
        'peace-clarity': "Magnifique : depuis l'apaisement, vous cherchez une vision plus claire. Les cartes vont approfondir.",
        'peace-calm': "Je perçois : vous voulez maintenir cette paix. Le tirage va identifier ce à quoi vous attacher.",
        'peace-decision': "Je note : depuis la paix, vous devez choisir. Les cartes vont clarifier ce qui est aligné.",
        'peace-support': "Je vois : vous voulez partager cette paix. Les cartes vont nommer comment vous soutenir."
    };
    
    const responseKey = `${userState.feeling}-${userState.need}`;
    const responseText = responses[responseKey] || "Je comprends votre besoin. Les cartes vont vous aider à y voir plus clair.";
    
    userState.raqelResponse = responseText;
    
    const responseDiv = document.getElementById('raqel-response');
    const responseP = responseDiv.querySelector('p');
    responseP.textContent = responseText;
    responseDiv.classList.remove('hidden');
    
    // Animate response appearing
    anime({
        targets: responseDiv,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuad'
    });
}

function checkRitualComplete() {
    const continueBtn = document.getElementById('continue-to-reading');
    if (userState.feeling && userState.need) {
        continueBtn.disabled = false;
        continueBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function showCardSelection() {
    // Hide ritual section, show card selection
    document.getElementById('ritual-section').classList.add('hidden');
    document.getElementById('card-selection').classList.remove('hidden');
    
    // Scroll to card selection
    document.getElementById('card-selection').scrollIntoView({
        behavior: 'smooth'
    });
}

function selectSpread(spreadType) {
    selectedSpread = spreadType;
    
    // Update button states
    spreadBtns.forEach(btn => {
        btn.classList.remove('bg-yellow-600');
        btn.classList.add('bg-purple-800');
    });
    
    const selectedBtn = document.querySelector(`[data-spread="${spreadType}"]`);
    selectedBtn.classList.remove('bg-purple-800');
    selectedBtn.classList.add('bg-yellow-600');
    
    // Update card positions
    updateCardPositions();
}

function updateCardPositions() {
    const positions = spreads[selectedSpread];
    const cards = selectedCardsDiv.querySelectorAll('.reading-card');
    
    cards.forEach((card, index) => {
        const positionDiv = card.querySelector('.text-xs');
        if (positionDiv) {
            positionDiv.textContent = positions[index];
        }
    });
}

function drawCards() {
    if (isDrawing) return;
    isDrawing = true;
    
    // Animate deck
    anime({
        targets: deck,
        scale: [1, 0.8, 1],
        rotateY: [0, 180, 360],
        duration: 800,
        easing: 'easeInOutQuad',
        complete: function() {
            showSelectedCards();
        }
    });
}

function showSelectedCards() {
    // Hide deck, show selected cards
    deck.style.display = 'none';
    selectedCardsDiv.classList.remove('hidden');
    
    // Draw random cards
    drawnCards = [];
    const availableCards = [...tarotCards];
    
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        drawnCards.push(availableCards.splice(randomIndex, 1)[0]);
    }
    
    // Animate cards appearing
    const cards = selectedCardsDiv.querySelectorAll('.reading-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            anime({
                targets: card,
                scale: [0, 1],
                opacity: [0, 1],
                rotate: [Math.random() * 20 - 10, 0],
                duration: 600,
                easing: 'easeOutBack',
                complete: function() {
                    if (index === 2) {
                        setTimeout(showInterpretation, 500);
                    }
                }
            });
            
            // Update card content
            updateCardContent(card, drawnCards[index], index);
        }, index * 200);
    });
}

function updateCardContent(cardElement, cardData, position) {
    const img = document.createElement('img');
    img.src = cardData.image;
    img.alt = cardData.name;
    img.className = 'w-full h-full object-cover rounded-lg';
    
    cardElement.innerHTML = '';
    cardElement.appendChild(img);
    
    // Add click handler for card details
    cardElement.addEventListener('click', () => showCardDetails(cardData));
}

function showInterpretation() {
    interpretationDiv.classList.remove('hidden');
    
    // Animate interpretation appearing
    anime({
        targets: interpretationDiv,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        easing: 'easeOutQuad'
    });
    
    generateReading();
}

function generateReading() {
    const positions = spreads[selectedSpread];
    let readingHTML = '';
    
    // Add Raqel's contextual introduction
    readingHTML += `
        <div class="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h3 class="text-xl font-bold text-purple-800 mb-3">Votre accompagnement personnalisé</h3>
            <p class="text-purple-700">${userState.raqelResponse}</p>
            <p class="text-purple-600 text-sm mt-2 italic">Voici ce que les cartes révèlent pour vous aider à avancer :</p>
        </div>
    `;
    
    drawnCards.forEach((card, index) => {
        const position = positions[index];
        const wellbeingProtocol = generateWellbeingProtocol(card, position, index);
        
        readingHTML += `
            <div class="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-yellow-600">
                <div class="flex items-center mb-4">
                    <div class="w-20 h-28 bg-gray-200 rounded mr-6 overflow-hidden mystical-glow">
                        <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h4 class="text-2xl font-bold text-gray-800">${position}</h4>
                        <h5 class="text-xl font-semibold text-purple-800">${card.name}</h5>
                        <p class="text-sm text-gray-600 italic">${card.nameEn}</p>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h6 class="font-bold text-blue-800 mb-2">🪞 Miroir - Ce que la carte révèle</h6>
                        <p class="text-blue-700">${card.meaning}</p>
                    </div>
                    
                    <div class="bg-amber-50 p-4 rounded-lg">
                        <h6 class="font-bold text-amber-800 mb-2">⚡ Friction - Point de tension ou d'apprentissage</h6>
                        <p class="text-amber-700">${wellbeingProtocol.friction}</p>
                    </div>
                    
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h6 class="font-bold text-green-800 mb-2">🌱 Micro-ajustement - Pour les 24h</h6>
                        <p class="text-green-700">${wellbeingProtocol.microAdjustment}</p>
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h6 class="font-bold text-purple-800 mb-2">💭 Question d'intégration</h6>
                        <p class="text-purple-700 italic">${wellbeingProtocol.question}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Add synthesis section
    readingHTML += generateSynthesis();
    
    // Add journal integration button
    readingHTML += `
        <div class="text-center mt-8">
            <button id="save-to-journal" class="bg-teal-800 hover:bg-teal-700 text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold">
                📖 Sauvegarder ce tirage dans mon journal
            </button>
            <p class="text-sm text-gray-600 mt-2">Gardez une trace de votre accompagnement pour suivre votre évolution</p>
        </div>
    `;
    
    readingContent.innerHTML = readingHTML;
    
    // Add journal save event listener
    document.getElementById('save-to-journal').addEventListener('click', saveToJournal);
}

function generateWellbeingProtocol(card, position, index) {
    const protocols = {
        1: { // L'Intervalle
            friction: "Vous pourriez vous sentir coincé(e) entre deux choix ou deux versions de vous-même.",
            microAdjustment: "Pendant 5 minutes, acceptez de ne pas trancher. Notez simplement les deux options sans jugement.",
            question: "Entre quoi et quoi suis-je réellement en train d'hésiter ?"
        },
        2: { // La Fracture Sacrée
            friction: "Vos blessures passées pourraient vous faire douter de votre valeur actuelle.",
            microAdjustment: "Placez une main sur votre cœur et respirez profondément 3 fois en honorant ce qui a survécu.",
            question: "Comment ma blessure me révèle-t-elle ma force ?"
        },
        3: { // L'Empreinte
            friction: "Vous pourriez douter de qui vous êtes vraiment malgré vos actions alignées.",
            microAdjustment: "Observez une de vos habitudes aujourd'hui avec curiosité, sans jugement.",
            question: "Quelle empreinte inconsciente laisse-je et comment l'honorer ?"
        },
        4: { // La Mire
            friction: "Vos désirs pourraient sembler hors de portée ou contradictoires.",
            microAdjustment: "Prenez 2 minutes pour visualiser ce que vous visez comme déjà en cours de manifestation.",
            question: "Ce que je vise m'atteint-t-il déjà d'une certaine manière ?"
        },
        5: { // L'Inversion
            friction: "Vos peurs pourraient vous empêcher d'avancer vers ce qui vous attire.",
            microAdjustment: "Écrivez votre peur sur un papier et placez-le sous une source de lumière pendant la journée.",
            question: "Quel cadeau mon ombre essaie-t-elle de m'apporter ?"
        }
    };
    
    // Default protocol for cards not yet detailed
    const defaultProtocol = {
        friction: "Cette carte révèle un point de tension ou d'apprentissage dans votre vie actuelle.",
        microAdjustment: "Prenez quelques minutes aujourd'hui pour être présent avec ce que la carte évoque en vous.",
        question: "Qu'est-ce que cette situation m'apprend sur moi-même ?"
    };
    
    return protocols[card.id] || defaultProtocol;
}

function generateSynthesis() {
    const synthesisTexts = {
        'past-present-future': {
            title: "Synthèse de votre cycle de guérison",
            error: "Attention à ne pas vous laisser piéger par les schémas anciens.",
            nourishment: "Nourrissez la partie de vous qui a survécu et veut grandir."
        },
        'situation-action-outcome': {
            title: "Synthèse de votre protocole de décision",
            error: "L'erreur serait d'agir depuis la peur plutôt que depuis la clarté.",
            nourishment: "Nourrissez votre capacité à choisir en accord avec vos valeurs profondes."
        },
        'mind-body-spirit': {
            title: "Synthèse de votre scan d'alignement",
            error: "Le piège serait de négliger l'un des trois aspects au profit des autres.",
            nourishment: "Nourrissez l'harmonie entre vos pensées, votre corps et votre essence."
        }
    };
    
    const synthesis = synthesisTexts[selectedSpread];
    
    return `
        <div class="bg-gradient-to-r from-purple-100 to-teal-100 rounded-lg p-8 mt-8">
            <h3 class="title-font text-2xl font-bold text-gray-800 mb-4">${synthesis.title}</h3>
            <div class="space-y-4">
                <div class="bg-red-50 border-l-4 border-red-400 p-4">
                    <h6 class="font-bold text-red-800 mb-2">⚠️ Erreur ou piège à éviter</h6>
                    <p class="text-red-700">${synthesis.error}</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-400 p-4">
                    <h6 class="font-bold text-green-800 mb-2">🌱 À nourrir dans les 24h</h6>
                    <p class="text-green-700">${synthesis.nourishment}</p>
                </div>
            </div>
        </div>
    `;
}

function showCardDetails(cardData) {
    // Create modal or detailed view
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h2 class="title-font text-3xl font-bold text-gray-800">${cardData.name}</h2>
                        <p class="text-lg text-gray-600 italic">${cardData.nameEn}</p>
                    </div>
                    <button class="close-modal text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <div class="mb-6">
                    <img src="${cardData.image}" alt="${cardData.name}" class="w-full max-w-sm mx-auto rounded-lg shadow-lg">
                </div>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-xl font-bold text-purple-800 mb-2">Meaning</h3>
                        <p class="text-gray-700">${cardData.meaning}</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-purple-800 mb-2">Advice</h3>
                        <p class="text-gray-700 italic">${cardData.advice}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal handlers
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function resetReading() {
    // Reset all states
    drawnCards = [];
    isDrawing = false;
    
    // Hide interpretation
    interpretationDiv.classList.add('hidden');
    
    // Hide selected cards
    selectedCardsDiv.classList.add('hidden');
    
    // Show deck
    deck.style.display = 'flex';
    
    // Reset card elements
    const cards = selectedCardsDiv.querySelectorAll('.reading-card');
    cards.forEach((card, index) => {
        card.innerHTML = `
            <div class="text-center text-gray-600">
                <div class="text-2xl mb-2">${index + 1}</div>
                <div class="text-xs">${spreads[selectedSpread][index]}</div>
            </div>
        `;
    });
    
    // Scroll back to reading section
    document.getElementById('reading').scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleMobileMenu() {
    // Implement mobile menu toggle
    alert('Mobile menu functionality would be implemented here');
}

// Add some mystical effects
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.mystical-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'mystical-cursor fixed pointer-events-none z-50 w-4 h-4 bg-yellow-400 rounded-full opacity-30';
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.mystical-cursor');
    cursorElement.style.left = e.clientX - 8 + 'px';
    cursorElement.style.top = e.clientY - 8 + 'px';
});

// Add particle effects for mystical atmosphere
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'fixed pointer-events-none z-10 w-1 h-1 bg-yellow-300 rounded-full opacity-60';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    anime({
        targets: particle,
        translateY: -window.innerHeight - 100,
        opacity: [0.6, 0],
        duration: Math.random() * 3000 + 2000,
        easing: 'easeOutQuad',
        complete: function() {
            document.body.removeChild(particle);
        }
    });
}

// Create particles periodically
setInterval(createParticle, 2000);

function saveToJournal() {
    const readingData = {
        feeling: userState.feeling,
        need: userState.need,
        spreadType: selectedSpread,
        cards: drawnCards,
        raqelResponse: userState.raqelResponse
    };
    
    // Try to add to journal
    const savedReading = addReadingToJournal(readingData);
    
    if (savedReading) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        successMsg.innerHTML = `
            <div class="flex items-center space-x-2">
                <span>✅</span>
                <span>Tirage sauvegardé !</span>
                <a href="journal.html" class="underline hover:no-underline">Voir mon journal</a>
            </div>
        `;
        document.body.appendChild(successMsg);
        
        anime({
            targets: successMsg,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => {
                setTimeout(() => {
                    anime({
                        targets: successMsg,
                        translateX: [0, 300],
                        opacity: [1, 0],
                        duration: 300,
                        easing: 'easeInQuad',
                        complete: () => document.body.removeChild(successMsg)
                    });
                }, 4000);
            }
        });
        
        // Update button state
        const saveBtn = document.getElementById('save-to-journal');
        saveBtn.textContent = '✅ Tirage sauvegardé';
        saveBtn.disabled = true;
        saveBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        // Journal not available, show message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'fixed top-20 right-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        errorMsg.innerHTML = `
            <div class="flex items-center space-x-2">
                <span>📖</span>
                <span>Accédez au journal pour sauvegarder vos tirages</span>
                <a href="journal.html" class="underline hover:no-underline">Ouvrir le journal</a>
            </div>
        `;
        document.body.appendChild(errorMsg);
        
        setTimeout(() => {
            if (errorMsg.parentNode) {
                document.body.removeChild(errorMsg);
            }
        }, 3000);
    }
}