<script>

import { ref, onMounted } from "vue";
import GalleryComponent from "../../components/DonateIndexComponent.vue";

export default {
  name: 'app',
  components: {
    GalleryComponent
  }
};

const count = ref(0);



onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
  <h3 :style="{ backgroundImage: `url('https://images6.alphacoders.com/129/thumb-1920-1297693.jpg')` }">
    Bem-vindo ao
    <br />
    <img alt="Catavento" src="../../assets/catavento.png" height="61.425" width="70" />
    ABRIGO DE IDOSOS HELENA DORNFELD

    <h2 :style="{ backgroundImage: `url('https://images6.alphacoders.com/129/thumb-1920-1297693.jpg')` }">
      Conheça as pessoas morando aqui no abrigo que você pode ajudar!
      <br />
      <br />
      <pre></pre>
    </h2>
  </h3>

  <div class="seperator">
    <h5><span>
        <img alt="Vue" src="../../assets/Vue.png" height="50" width="50" />
      </span></h5>
  </div>

  <GalleryComponent />

  <br />
  <pre></pre>
  <div>
    <h3>
      <a href="http://localhost:4000/donate" class="button" >Contribuir à causa</a>
    </h3>
  </div>
  <br />
  <pre></pre>
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

.seperator h5 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
}

.seperator h5::before,
.seperator h5::after {
  content: "";
  display: block;
  flex-grow: 1;
  height: 1px;
  background: #ccc;
}

.seperator h5 span {
  padding: 0 2em;
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

a.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #141f29;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s, transform 0.3s;
}

a.button:hover {
  background-color: #1d2a38;
  transform: scale(1.05);
}

a.button:active {
  background-color: #111a23;
  transform: scale(0.95);
}

h3 {
  margin: 0px 0 0;
  font-size: 50px;
}

h2 {
  margin: 40px 0 0;
  font-size: 20px;
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


<style scoped></style>