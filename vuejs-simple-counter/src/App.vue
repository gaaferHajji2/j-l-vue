
<script setup>
  import { ref } from 'vue';

  let count = ref(0);

  console.log("The count State Variable is: ", count);

  let add = () => {
    console.log("The Count is Inc");
    ++count.value;
  }

  let sub = () => {
    console.log("The Count is Dec");
    --count.value;
  }

</script>

<template>
  <div>
    <h4>
      The Count is:
    </h4>

    <p>
      {{ count }}
    </p>
    <p>
      <!-- <button @click="count++">+</button>
      <button @click="count--">-</button> -->

      <button @click="add()">+</button>
      <button @click="sub()">-</button>
    </p>

  </div>
</template>

<style scoped>
div {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(250deg, lightblue 75%, blue);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  padding: 0.5rem 2.5rem;

  border-radius: 24px;
  border: none;
  outline: none;

  cursor: pointer;

  transition: background 0.75s, transform 0.5s;

  margin: 0 0.5rem;
}

p {
  text-align: center;
}

button:hover {
  background-color: lightgrey;

  transform: rotateZ(-10deg);
}
</style>