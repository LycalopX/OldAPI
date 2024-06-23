<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <br />
      
      Caraca... Você me achou... <br /><br />
      Bom, não necessariamente. <br /><br />
      Eu no momento estou com a minha cadela no meu colo lendo minha própria
      mensagem e questionando minha própria sanidade ao ponto<br /><br />
      que eu posso ter te mandado vir me visitar. Enfim, aqui é o banco de dados do
      LycalopX. Se você consegue acessá-lo é problema seu. As dicas estão
      aqui.<br /><br />
      Aliás, já que eu já te tenho aqui, que tal vir para o:<br /><br />
      <ul>
      <li>
        <a href="http://localhost:4000/dica1">Dica Número 1</a>
      </li>
      </ul>
      <br />Parece uma boa ideia, não?
      <br /><br />
      PS: para chegar nas outras guias, digite a resposta que você acha ser a
      correta.
    </p>
    <h3>Outros sites...<br /></h3>
    <ul>
      <li>
        <a
          href="https://sites.google.com/view/lycalopx"
          target="_blank"
          rel="noopener"
          >Google</a
        >
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCA6-tD230rBNDYQvX8ivQdA"
          target="_blank"
          rel="noopener"
          >Youtube</a
        >
      </li>
      <li>
        <a href="https://twitch.tv/lycalopx" target="_blank" rel="noopener"
          >Twitch</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
