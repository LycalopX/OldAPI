<script setup>

import { ref, onMounted } from "vue";

const count = ref(0);


onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>



<template>
  <div>
    <h3>Erro</h3>
    <p>
      <br />
      Vish, parece que essa página não existe :/
      <br />
      <br />
    </p>
    <img alt="Márcio" src="../../assets/fallen_down_mario.png" height="351" width="400" />
    <p>
      <br />
      Não podem espaços, sabia? :/
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
  background: #192734;
  color: #f3f3f3ef;
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