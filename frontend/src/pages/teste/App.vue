
<script setup>

import { ref, onMounted } from "vue";

const count = ref(0);
const mode = "dark"

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>



<template>
  <div class="app" :class="mode">
    <br />
    <br />
    <button @click="increment">Count is: {{ count }}</button>
    <p>
      <br />
      <br />
      Uaauuuuu
      </p>
  </div>
</template>



<style>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f3f3f3;
}

.light {
  width: 100vw;
  min-height: 100vh;
  margin-top: 60px;
  margin: 0;
  padding: 0;
  background: #f3f3f3;
  color: #192734;
}
.dark {
  width: 100vw;
  min-height: 100vh;
  color: #192734;
  margin-top: 60px;
  margin: 0;
  padding: 0;
  background: #192734;
  color: #f3f3f3ef;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #95c964;
}
h4 {
  color: #95c964;
}
h5 {
  color: #95c964;
  font-size: 10vh;
}
</style>


<style scoped>
button {
  font-weight: bold;
}
</style>