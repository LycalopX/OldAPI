<template>
  <div class="app" :class="mode">
    <span class="border-left border-dark"></span>
    <span class="border-right border-dark"></span>
    <img alt="Catavento dos idosos" src="../../assets/catavento.png" height="283" width="273" />
    <IndexComponent msg="Bem-vindo ao site dos idosos!!1!" />
  </div>
</template>

<script>
import IndexComponent from "../../components/IndexComponent.vue";

export default {
  name: "App",
  data() {
    return {
      mode: "",
    }
  },
  components: {
    IndexComponent,
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  background: #192734;
  color: #f3f3f3ef;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.app {
  width: 100vw;
  min-height: 100vh;
  color: #192734;
  margin-top: 30px;
}

</style>
