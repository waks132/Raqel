// Journal Management System
class ReadingJournal {
    constructor() {
        this.readings = this.loadReadings();
        this.notes = this.loadNotes();
        this.init();
    }
    
    init() {
        this.displayReadings();
        this.loadLatestNote();
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('save-note').addEventListener('click', () => this.saveNote());
        document.getElementById('export-journal').addEventListener('click', () => this.exportJournal());
        document.getElementById('clear-journal').addEventListener('click', () => this.clearJournal());
    }
    
    // Reading Management
    addReading(readingData) {
        const reading = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            feeling: readingData.feeling,
            need: readingData.need,
            spreadType: readingData.spreadType,
            cards: readingData.cards,
            raqelResponse: readingData.raqelResponse
        };
        
        this.readings.unshift(reading); // Add to beginning
        this.saveReadings();
        return reading;
    }
    
    loadReadings() {
        const stored = localStorage.getItem('raqel-readings');
        return stored ? JSON.parse(stored) : [];
    }
    
    saveReadings() {
        localStorage.setItem('raqel-readings', JSON.stringify(this.readings));
    }
    
    displayReadings() {
        const container = document.getElementById('readings-history');
        const noReadings = document.getElementById('no-readings');
        const countElement = document.getElementById('reading-count');
        
        countElement.textContent = this.readings.length;
        
        if (this.readings.length === 0) {
            container.classList.add('hidden');
            noReadings.classList.remove('hidden');
            return;
        }
        
        container.classList.remove('hidden');
        noReadings.classList.add('hidden');
        
        container.innerHTML = this.readings.map(reading => this.createReadingHTML(reading)).join('');
        
        // Add event listeners to reading cards
        container.querySelectorAll('.reading-card').forEach((card, index) => {
            card.addEventListener('click', () => this.showReadingDetails(this.readings[index]));
        });
    }
    
    createReadingHTML(reading) {
        const date = new Date(reading.timestamp).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const spreadNames = {
            'past-present-future': 'Cycle de guérison',
            'situation-action-outcome': 'Protocole de décision',
            'mind-body-spirit': 'Scan d\'alignement'
        };
        
        const cardNames = reading.cards.map(card => card.name).join(', ');
        
        return `
            <div class="reading-card bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-800">${spreadNames[reading.spreadType]}</h3>
                        <p class="text-sm text-gray-600">${date}</p>
                    </div>
                    <div class="text-right">
                        <div class="flex space-x-2 mb-2">
                            ${reading.feeling ? `<span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">${reading.feeling}</span>` : ''}
                            ${reading.need ? `<span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">${reading.need}</span>` : ''}
                        </div>
                    </div>
                </div>
                
                <div class="flex space-x-4 mb-4">
                    ${reading.cards.map(card => `
                        <div class="w-16 h-24 bg-gray-200 rounded overflow-hidden">
                            <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover">
                        </div>
                    `).join('')}
                </div>
                
                <div class="space-y-2">
                    <p class="text-sm text-gray-700"><strong>Cartes :</strong> ${cardNames}</p>
                    <p class="text-sm text-gray-600 italic">${reading.raqelResponse}</p>
                </div>
                
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <span class="text-xs text-purple-600 font-medium">Cliquez pour voir les détails</span>
                </div>
            </div>
        `;
    }
    
    showReadingDetails(reading) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
        modal.style.opacity = '0';
        
        const date = new Date(reading.timestamp).toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="title-font text-3xl font-bold text-gray-800">Détails du tirage</h2>
                            <p class="text-lg text-gray-600">${date}</p>
                        </div>
                        <button class="close-modal text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
                    </div>
                    
                    <div class="mb-6">
                        <h3 class="text-xl font-bold text-purple-800 mb-3">Contexte initial</h3>
                        <div class="flex space-x-4 mb-4">
                            ${reading.feeling ? `<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full">État : ${reading.feeling}</span>` : ''}
                            ${reading.need ? `<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Besoin : ${reading.need}</span>` : ''}
                        </div>
                        <p class="text-gray-700 italic">${reading.raqelResponse}</p>
                    </div>
                    
                    <div class="space-y-6">
                        ${reading.cards.map((card, index) => `
                            <div class="border-l-4 border-yellow-600 pl-6 py-4">
                                <div class="flex items-center mb-3">
                                    <div class="w-16 h-24 bg-gray-200 rounded mr-4 overflow-hidden">
                                        <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover">
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-800">${card.name}</h4>
                                        <p class="text-sm text-gray-600 italic">${card.nameEn}</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 mb-3">${card.meaning}</p>
                                <p class="text-purple-700 font-medium italic">${card.advice}</p>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="mt-8 text-center">
                        <button class="bg-purple-800 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
                            Intégrer ce tirage
                        </button>
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
        
        // Close modal handlers
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => closeModal(modal));
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    }
    
    // Notes Management
    saveNote() {
        const noteText = document.getElementById('integration-note').value;
        const microGesture = document.getElementById('micro-gesture').value;
        
        if (!noteText.trim() && !microGesture.trim()) {
            alert('Veuillez écrire quelque chose avant de sauvegarder.');
            return;
        }
        
        const note = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            note: noteText,
            microGesture: microGesture
        };
        
        this.notes.unshift(note);
        this.saveNotes();
        
        // Clear form
        document.getElementById('integration-note').value = '';
        document.getElementById('micro-gesture').value = '';
        
        // Show success message
        this.showMessage('Note sauvegardée avec succès !');
    }
    
    loadNotes() {
        const stored = localStorage.getItem('raqel-notes');
        return stored ? JSON.parse(stored) : [];
    }
    
    saveNotes() {
        localStorage.setItem('raqel-notes', JSON.stringify(this.notes));
    }
    
    loadLatestNote() {
        if (this.notes.length > 0) {
            const latestNote = this.notes[0];
            document.getElementById('integration-note').value = latestNote.note || '';
            document.getElementById('micro-gesture').value = latestNote.microGesture || '';
        }
    }
    
    // Export Function
    exportJournal() {
        if (this.readings.length === 0 && this.notes.length === 0) {
            alert('Aucune donnée à exporter.');
            return;
        }
        
        const exportData = {
            readings: this.readings,
            notes: this.notes,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `raqel-journal-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showMessage('Journal exporté avec succès !');
    }
    
    // Clear Journal
    clearJournal() {
        if (confirm('Êtes-vous sûr de vouloir effacer tous vos tirages et notes ? Cette action est irréversible.')) {
            localStorage.removeItem('raqel-readings');
            localStorage.removeItem('raqel-notes');
            this.readings = [];
            this.notes = [];
            this.displayReadings();
            this.showMessage('Journal réinitialisé. Nouveau cycle commencé.');
        }
    }
    
    // Utility Functions
    showMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        
        anime({
            targets: messageDiv,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => {
                setTimeout(() => {
                    anime({
                        targets: messageDiv,
                        translateX: [0, 300],
                        opacity: [1, 0],
                        duration: 300,
                        easing: 'easeInQuad',
                        complete: () => document.body.removeChild(messageDiv)
                    });
                }, 3000);
            }
        });
    }
}

// Initialize journal when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.readingJournal = new ReadingJournal();
    
    // Initialize animations
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
});

// Function to add reading from main page (called from main.js)
function addReadingToJournal(readingData) {
    if (window.readingJournal) {
        return window.readingJournal.addReading(readingData);
    }
    return null;
}