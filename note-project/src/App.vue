<script setup>

import { ref } from 'vue';

import ModalComponent from './components/ModalComponent.vue';

const showModal = ref(false);

const notes = ref([]);

// console.log('The Show Modal is: ', showModal);

// function onClick() {
//   console.log(showModal);

//   showModal.value = true;
// }

function close() {
  gsap.fromTo('.modal',
    { opacity: 1, y: 0, rotate: '0deg' },
    {
      opacity: 0, y: 30, duration: .5, rotate: '-90deg', onComplete: () => {
        showModal.value = false;
      }
    }
  );
}

function addNote(note) {

  notes.value.push({
    text: note,
    date: new Date().toLocaleDateString('en'),
    id: notes.value.length + 1,
    backgroundColor: 'hsl(' + Math.random() * 360 + ', 100%, 75%)',
    className: 'card-' + notes.value.length + 1,
  });

  gsap.fromTo('.modal',
    { opacity: 1, y: 0, rotate: '0deg' },
    {
      opacity: 0, y: 30, duration: .5, rotate: '-90deg', onComplete: () => {
        showModal.value = false;
      }
    }
  );

}

</script>

<template>
  <main>

    <ModalComponent :close-function='close' v-if='showModal' :add-note='addNote' />
    <!-- <ModalComponent :close-function='close' v-show='showModal' /> -->


    <div class='container'>
      <header>
        <h1>Notes</h1>

        <button @click='showModal = true'>+</button>
      </header>

      <div class='cards-container'>
        <div v-for='note in notes' :style='{ backgroundColor: note.backgroundColor }' :key='note.id' class='card'>
          <p class='card-main-text'>
            {{ note.text }}
          </p>

          <p class='card-date'>{{ note.date }}</p>
        </div>
      </div>
    </div>



  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;

  position: relative;
}

.container {
  max-width: 1000px;

  padding: 25px;

  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 45px;
}

header button {
  border: none;
  background-color: lightgrey;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  color: white;
  transition: background 0.5s, font-size 0.5s;
  font-size: 25px;
}

header button:hover {
  background-color: darkgray;
  font-size: 40px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.card {
  width: 200px;
  height: 200px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  align-items: flex-start;

  padding: 15px;

  border-radius: 24px;
  background-color: darkgrey;

  margin: 0 15px 15px 0;

  overflow: auto;
  overflow-x: hidden;
}

.card-date {
  font-weight: bold;
}

.card-main-text {
  color: #363333;

  font-size: 20px;

  font-weight: 500;
}
</style>

<script>


window.addEventListener('load', function (event) {

  // console.log('The Show Modal is: ', showModal);

  // const modal = document.querySelector('.card');

  // if(modal) {
  //   gsap.fromTo(modal, 
  //     { y: 30, opacity: 0 }, 
  //     { y:0, opacity: 1, duration: 1.5, stagger: 0.075 }
  //   );
  // } else {
  //   console.log('Card Not Found');
  // }

  // gsap.fromTo('.card', { y: 30, opacity: 0 }, { y:0, opacity: 1, duration: 1.5, stagger: 0.075 });

  // gsap.fromTo('.card-main-text', { opacity: 0 }, { opacity: 1 }, '<25%');

});
</script>