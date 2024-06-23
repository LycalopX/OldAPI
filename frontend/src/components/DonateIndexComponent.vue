<template>
  <div class="container">
    <div class="gallery-container" style="height: 300px">
      <button v-if="!showDetailed" @click="prevImage">&#9664;</button>
      <div class="gallery-wrapper">
        <div class="gallery">
          <img :src="currentImage" :alt="'Image ' + (currentIndex + 1)">
          <p class="image-text" :class="{ detailed: showDetailed }">
            <button v-if="!showDetailed" @click="showDetailedText" v-html="displayText"></button>
          </p>
        </div>
      </div>
      <button v-if="!showDetailed" @click="nextImage">&#9654;</button>
      <div v-if="showDetailed" class="detailed-text">
        <p v-html="detailedText"></p>
      </div>
    </div>
    <button class="visit-button">Agende uma visita!</button>
    <div class="thumbnails">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="'Thumbnail ' + (index + 1)"
        @click="showImage(index)" :class="{ active: currentIndex === index }">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        require('../assets/oldwoman.png'),
        require('../assets/oldman2.png'),
        require('../assets/oldman3.png'),
        require('../assets/oldman1.png'),
      ],
      texts: [
        'Olá! Meu nome é Ana Cláudia, tenho 67 anos e moro no abrigo Helena Dornfeld. \nCaso você tenha o interesse de me conhecer melhor, clique no balão!',
        'Olá! Meu nome é Fernando, tenho 74 anos e moro no abrigo Helena Dornfeld. \nCaso você tenha o interesse de me conhecer melhor, clique no balão!',
        'Olá! Meu nome é Arlindo, tenho 85 anos e moro no abrigo Helena Dornfeld. Caso você tenha o interesse de me conhecer melhor, clique no balão!',
        'Meu nome é Arlindo, tenho 85 anos e moro no abrigo Helena Dornfeld. \nCaso você tenha o interesse de me conhecer melhor, clique no balão!'
      ],
      detailedtexts: [
        'Nome: Roberto \nIdade: 74 anos   Grau: II\nHistória: Ex-dono de um bar... \nHábitos: andar \nGostos: Panqueca',
        'Nome: Afonso \nIdade: 82 anos   Grau: III\nHistória: Vivia na rua Delmar... \nHábitos: xadrez \nGostos: Frango grelhado',
        'Nome: Roberto \nIdade: 61 anos   Grau: I\nHistória: Perdi a criatividade \nHábitos: Cozinhar \nGostos: Churrasco',
        'Nome: Arlindo cruz de souza \nIdade: 85 anos \nGrau: III \nHistória: \nOlá, sou o senhor Arlindo. Nascido e criado em Canoas/RS! Quando jovem sempre fui apaixonado pelo Grêmio e sempre sonhei em ser um jogador profissional. Porém a vida me levou para outro rumo e fui trabalhar na marcenaria do meu pai logo após atingir meus 18 anos. Desde então, trabalhei lá até conhecer minha esposa, que me levou para morar em sua cidade natal, São Carlos/SP. Quando ela faleceu, vim morar no abrigo Helena Dornfeld, para poder receber o devido apoio que necessito. \nSou apaixonado em criar arte e em jogos de baralho, então adoraria que você viesse se juntar a mim em alguma dessas atividades!'
      ],
      showDetailed: false
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    displayText() {
      return this.texts[this.currentIndex].replace(/\n/g, '<br>');
    },
    detailedText() {
      return this.detailedtexts[this.currentIndex].replace(/\n/g, '<br>');
    }
  },
  methods: {
    showDetailedText() {
      this.showDetailed = true;
    },
    showImage(index) {
      const totalImages = this.images.length;
      if (index >= totalImages) {
        this.currentIndex = 0;
      } else if (index < 0) {
        this.currentIndex = totalImages - 1;
      } else {
        this.currentIndex = index;
      }
      this.showDetailed = false; // Reset to show summary text when switching images
    },
    nextImage() {
      this.showImage(this.currentIndex + 1);
    },
    prevImage() {
      this.showImage(this.currentIndex - 1);
    }
  },
  mounted() {
    this.showImage(this.currentIndex);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #141f29;
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

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #141f29;
  color: #f3f3f3ef;
}

.container {
  background: #141f29;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

p {
  font-size: 1em;
  margin-bottom: 20px;
}

.gallery-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 10px;
  cursor: pointer;
}

.gallery-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* Ajuste a largura conforme necessário */
  margin: 0 10px;
}

.gallery {
  display: flex;
  align-items: center;
}

.gallery img {
  max-width: 300px;
  /* Ajuste a largura da imagem conforme necessário */
  margin-right: 20px;
  transition: transform 0.5s ease;
}

.image-text {
  font-size: 1em;
  color: #f3f3f3ef;
  max-width: 500px;
  /* Ajuste a largura máxima do texto conforme necessário */
  white-space: pre-wrap;
}

.thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.thumbnails img {
  width: 50px;
  height: 50px;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.3s;
}

.thumbnails img.active {
  border: 2px solid #007bff;
}

.detailed-text {
  background-color: #192734;
  margin-left: 20px;
  text-align: left;
  font-size: 18px;
  max-width: 800px; /* Adjust width as necessary */
}

.visit-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.visit-button:hover {
  background-color: #218838;
}

.visit-button:active {
  background-color: #1e7e34;
}
</style>

<style>
.image-text button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #192734;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 20px;
}

.image-text button:hover {
  background-color: #223648;
  transform: scale(1.05);
}

.image-text button:active {
  background-color: #223648;
  transform: scale(0.95);
}

.image-text.detailed {
  background-color: #192734;
}

.detailed-text {
  display: inline-block;
  padding: 10px 20px;
  background-color: #192734;
  background: #192734;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 20px;
}
.detailed-text p {
  background-color: #192734;
  background: #192734;
}
</style>
