// Tarot Card Data (same as main.js)
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

// Initialize the gallery
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    initializeAnimations();
});

function initializeGallery() {
    const grid = document.getElementById('cards-grid');
    
    tarotCards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        grid.appendChild(cardElement);
    });
    
    // Animate cards appearing
    const cards = grid.querySelectorAll('.card-item');
    cards.forEach((card, index) => {
        setTimeout(() => {
            anime({
                targets: card,
                opacity: [0, 1],
                translateY: [50, 0],
                scale: [0.8, 1],
                duration: 600,
                easing: 'easeOutQuad'
            });
        }, index * 100);
    });
}

function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-item bg-white rounded-lg shadow-lg overflow-hidden mystical-glow';
    cardDiv.style.opacity = '0';
    
    cardDiv.innerHTML = `
        <div class="aspect-w-3 aspect-h-4">
            <img src="${card.image}" alt="${card.name}" class="w-full h-80 object-cover">
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500 font-medium">Arcane ${card.id}</span>
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Major</span>
            </div>
            <h3 class="title-font text-xl font-bold text-gray-800 mb-1">${card.name}</h3>
            <p class="text-sm text-gray-600 italic mb-3">${card.nameEn}</p>
            <p class="text-sm text-gray-700 mb-4 line-clamp-3">${card.meaning}</p>
            <button class="w-full bg-purple-800 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                View Details
            </button>
        </div>
    `;
    
    // Add click handler
    const button = cardDiv.querySelector('button');
    button.addEventListener('click', () => showCardModal(card));
    
    // Add hover effects
    cardDiv.addEventListener('mouseenter', () => {
        anime({
            targets: cardDiv,
            scale: 1.02,
            translateY: -10,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
    
    cardDiv.addEventListener('mouseleave', () => {
        anime({
            targets: cardDiv,
            scale: 1,
            translateY: 0,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
    
    return cardDiv;
}

function showCardModal(card) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
    modal.style.opacity = '0';
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto">
            <div class="p-8">
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <span class="text-sm text-gray-500 font-medium">Arcane ${card.id}</span>
                            <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Major Arcana</span>
                        </div>
                        <h2 class="title-font text-4xl font-bold text-gray-800">${card.name}</h2>
                        <p class="text-lg text-gray-600 italic">${card.nameEn}</p>
                    </div>
                    <button class="close-modal text-gray-500 hover:text-gray-700 text-3xl font-light">&times;</button>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="${card.image}" alt="${card.name}" class="w-full rounded-lg shadow-lg mystical-glow">
                    </div>
                    
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-2xl font-bold text-purple-800 mb-3">Sacred Meaning</h3>
                            <p class="text-gray-700 leading-relaxed">${card.meaning}</p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-bold text-purple-800 mb-3">Mystical Advice</h3>
                            <p class="text-gray-700 italic leading-relaxed border-l-4 border-purple-200 pl-4">${card.advice}</p>
                        </div>
                        
                        <div class="pt-4">
                            <a href="index.html" class="inline-block bg-purple-800 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                                Get a Reading with This Card
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal appearing
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutBack'
    });
    
    // Close modal handlers
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => closeModal(modal));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Escape key handler
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

function closeModal(modal) {
    anime({
        targets: modal,
        opacity: [1, 0],
        duration: 200,
        easing: 'easeInQuad',
        complete: function() {
            if (modal.parentNode) {
                document.body.removeChild(modal);
            }
        }
    });
}

function initializeAnimations() {
    // Fade in animations for hero section
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
    
    // Add mystical particle effects
    createParticleEffect();
}

function createParticleEffect() {
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'fixed pointer-events-none z-10 w-1 h-1 bg-yellow-300 rounded-full opacity-40';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        anime({
            targets: particle,
            translateY: -window.innerHeight - 100,
            opacity: [0.4, 0],
            duration: Math.random() * 4000 + 3000,
            easing: 'easeOutQuad',
            complete: function() {
                if (particle.parentNode) {
                    document.body.removeChild(particle);
                }
            }
        });
    }, 3000);
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});