<script setup>

import { ref } from 'vue';

const props = defineProps({
    closeFunction: Function,

    addNote: Function,
});

const newNote = ref("");

const errMsg = ref('');

const addNote2 = (note) => {
  if(note.length < 10) {
    errMsg.value = 'Note Must Be At Least 10-characters';

    console.log("The Note Is: ", note);

  } else {

    console.log(`The Note is '${note}'`);

    props.addNote(note);
    errMsg.value = "";
  }
}

</script>

<template>

    <div class='overlay'>
      <div class='modal'>
        <textarea name='note' id='note' cols='30' rows='10' v-model.trim="newNote"></textarea>
        <p v-if='errMsg' :style="{color: 'red', fontSize: '1.5rem'}"> {{ errMsg }} </p>
        <button @click="addNote2(newNote)">
          Add Note
        </button>

        <button class='close' @click="closeFunction">
          Close
        </button>
      </div>

      
    </div>

</template>

<script>

export default {
  name: "MainTemplate",
  mounted() {
    gsap.fromTo('.modal', 
        { opacity: 0, y: 30, rotate: '90deg' }, 
        { opacity: 1, y: 0, duration: .5, rotate: '0deg' });
  },
};


</script>

<style scoped>
.overlay {
    position: absolute;

    width: 100%;
    /*min-height: 100vh;*/

    min-height: 100%;

    background-color: rgba(0, 0, 0, 0.25);

    backdrop-filter: blur(2px);

    z-index: 10;

    display: flex;

    align-items: center;

    justify-content: center;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;

    padding: 30px;

    position: relative;

    display: flex;

    flex-direction: column;

  }

  .modal button {
    align-self: center;

    width: 100%;

    padding: 10px 20px;

    margin-top: 15px;

    border: none;

    outline: none;

    background-color: blueviolet;

    color: white;

    font-size: 20px;

    border-radius: 12px;

    cursor: pointer;
  }

  .modal .close {
    background-color: rgb(192, 15, 15);

    margin-top: 7px;
  }
</style>