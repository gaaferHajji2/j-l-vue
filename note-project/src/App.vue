<script setup>
import { ref, onMounted } from 'vue';
import ModalComponent from './components/ModalComponent.vue';

// State
const showModal = ref(false);
const notes = ref([]);

// Curated pastel colors for better aesthetics than random HSL
const pastelColors = [
  '#FFD1DC', // Pastel Pink
  '#E0BBE4', // Lavender
  '#957DAD', // Purple
  '#D291BC', // Orchid
  '#FEC8D8', // Light Pink
  '#FFDFD3', // Peach
  '#B5EAD7', // Mint
  '#C7CEEA', // Periwinkle
  '#FFF2CC', // Cream
  '#E2F0CB'  // Pale Green
];

// Methods
function openModal() {
  showModal.value = true;
}

function closeModal() {
  // Animate out before hiding
  if (typeof gsap !== 'undefined') {
    gsap.to('.modal', {
      opacity: 0,
      scale: 0.75,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        showModal.value = false;
      }
    });
  } else {
    showModal.value = false;
  }
}

function addNote(noteText) {
  const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  
  const newNote = {
    text: noteText,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    id: Date.now(), // Use timestamp for unique ID
    backgroundColor: randomColor,
  };

  notes.value.unshift(newNote); // Add to top
  
  // Close modal
  closeModal();

  // Animate the new card entering the list
  if (typeof gsap !== 'undefined') {
    // Wait for DOM update then animate the first card
    setTimeout(() => {
      gsap.fromTo('.card:first-child', 
        { opacity: 0, y: -20, scale: 0.75 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }, 50);
  }
}

function deleteNote(id) {
  if (typeof gsap !== 'undefined') {
    const index = notes.value.findIndex(n => n.id === id);
    if (index > -1) {
       // Simple removal for now, could be enhanced with GSAP exit animation
       notes.value.splice(index, 1);
    }
  } else {
    notes.value = notes.value.filter(n => n.id !== id);
  }
}

// Initial Animation for existing notes
onMounted(() => {
  if (typeof gsap !== 'undefined' && notes.value.length > 0) {
    gsap.fromTo('.card', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
    );
  }
});
</script>

<template>
  <main>
    <!-- Modal Wrapper for Animation -->
    <div v-if="showModal" class="modal-wrapper">
      <ModalComponent :close-function="closeModal" :add-note="addNote" />
    </div>

    <div class="container">
      <header>
        <div class="header-content">
          <h1>My Notes</h1>
          <p class="subtitle">{{ notes.length }} {{ notes.length === 1 ? 'note' : 'notes' }} saved</p>
        </div>
        
        <button class="fab" @click="openModal" aria-label="Add new note">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </header>

      <div class="cards-container">
        <div 
          v-for="note in notes" 
          :key="note.id" 
          class="card"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <div class="card-content">
            <p class="card-text">{{ note.text }}</p>
          </div>
          
          <div class="card-footer">
            <span class="card-date">{{ note.date }}</span>
            <button class="delete-btn" @click="deleteNote(note.id)" aria-label="Delete note">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="notes.length === 0" class="empty-state">
          <div class="empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
          </div>
          <p>No notes yet. Click the + button to create one!</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

main {
  min-height: 100vh;
  width: 100%;
  background-color: #f8f9fa; /* Light gray background */
  font-family: 'Inter', sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  padding: 40px 20px;
  margin: 0 auto;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.header-content h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.subtitle {
  margin: 5px 0 0;
  color: #6c757d;
  font-size: 0.9rem;
}

/* Floating Action Button */
.fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background-color: #6366f1; /* Indigo */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.fab:hover {
  background-color: #4f46e5;
  transform: scale(1.1) rotate(90deg);
  box-shadow: 0 6px 15px rgba(99, 102, 241, 0.4);
}

.fab svg {
  width: 24px;
  height: 24px;
}

/* Grid Layout */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  align-items: start; /* Important for masonry-like feel */
}

/* Card Design */
.card {
  border-radius: 16px;
  padding: 20px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
}

.card-content {
  flex-grow: 1;
  margin-bottom: 15px;
}

.card-text {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #1f2937;
  white-space: pre-wrap; /* Preserves line breaks */
  word-wrap: break-word;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: 12px;
  margin-top: auto;
}

.card-date {
  font-size: 0.75rem;
  color: #4b5563;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.delete-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background-color: rgba(255, 255, 255, 0.5);
  color: #ef4444;
}

/* Empty State */
.empty-state {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: #9ca3af;
  text-align: center;
}

.empty-icon {
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state p {
  font-size: 1.1rem;
  margin: 0;
}

/* Modal Wrapper for GSAP */
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  /* Background blur handled inside ModalComponent or here */
}
</style>