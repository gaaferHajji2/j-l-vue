<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  closeFunction: {
    type: Function,
    required: true
  },
  addNote: {
    type: Function,
    required: true
  },
});

const newNote = ref('');
const errMsg = ref('');

// Handle adding note with validation
const handleSubmit = () => {
  if (newNote.value.trim().length < 10) {
    errMsg.value = 'Note must be at least 10 characters long.';
    // Shake animation trigger could go here
    return;
  }
  
  errMsg.value = '';
  props.addNote(newNote.value.trim());
  newNote.value = ''; // Clear input after success
};

// Close handler
const handleClose = () => {
  props.closeFunction();
};

// Animation on mount
onMounted(() => {
  // Ensure gsap is imported in your main app or this component
  console.log('the typeof gsap is: ', typeof gsap)
  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.modal-content', 
      { opacity: 0, y: 50, scale: 0.75 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
    );
    
    gsap.fromTo('.overlay', 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3 }
    );
  }
});
</script>

<template>
  <div class="overlay" @click.self="handleClose">
    <div class="modal-content modal">
      
      <!-- Header -->
      <div class="modal-header">
        <h2>Add New Note</h2>
        <button class="icon-btn close-icon" @click="handleClose" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <div class="input-group">
          <label for="note">Note Content</label>
          <textarea 
            id="note" 
            v-model.trim="newNote" 
            placeholder="Write your thoughts here..." 
            rows="6"
            :class="{ 'error-border': errMsg }"
          ></textarea>
          <p class="char-count">{{ newNote.length }} / 10 min chars</p>
        </div>

        <!-- Error Message -->
        <transition name="fade">
          <div v-if="errMsg" class="error-alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <span>{{ errMsg }}</span>
          </div>
        </transition>
      </div>

      <!-- Footer -->
      <div class="modal-footer">
        <button class="btn btn-secondary" @click="handleClose">
          Cancel
        </button>
        <button class="btn btn-primary" @click="handleSubmit">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Note
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Overlay */
.overlay {
  position: fixed; /* Changed from absolute to fixed for full viewport coverage */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Modal Card */
.modal-content {
  background-color: #ffffff;
  width: 100%;
  max-width: 500px; /* More reasonable max-width */
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Header */
.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  color: #666;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background-color: #f5f5f5;
  color: #333;
}

/* Body */
.modal-body {
  padding: 24px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  box-sizing: border-box; /* Important for padding */
}

textarea:focus {
  border-color: #8b5cf6; /* Violet focus */
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

textarea.error-border {
  border-color: #ef4444;
}

textarea.error-border:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.char-count {
  font-size: 0.75rem;
  color: #9ca3af;
  text-align: right;
  margin: 0;
}

/* Error Alert */
.error-alert {
  margin-top: 12px;
  padding: 10px 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  color: #b91c1c;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Footer */
.modal-footer {
  padding: 16px 24px;
  background-color: #f9fafb;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.btn {
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-secondary {
  background-color: white;
  border: 1px solid #d1d5db;
  color: #374151;
}

.btn-secondary:hover {
  background-color: #f3f4f6;
  border-color: #9ca3af;
}

.btn-primary {
  background-color: #8b5cf6; /* Modern Violet */
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.btn-primary:hover {
  background-color: #7c3aed;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.2);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>