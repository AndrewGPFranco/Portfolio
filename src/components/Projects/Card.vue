<template>
  <section class="flex justify-center flex-col">
    <div v-if="aulas" class="text-center p-5 border border-gray-100 m-2 rounded-2xl" v-for='aula in aulas' :key="aula.id">
      <a :href="aula.link" target="_blank"><img class="flex w-2/4 m-auto justify-center" :src="aula.image" alt="Imagem do Projeto" /></a>
      <h1 class="text-center text-cyan-400 mt-3">{{ aula.title }}</h1>
      <p class="text-gray-300">{{ aula.description }}</p>
      <p class="text-gray-300">Category: <span class="text-orange-500">{{ aula.category }}</span></p>
    </div>
    <div v-if="aulas.length === 0">
      <h1 class="text-sky-400">
        Essa página utiliza de uma Api própria porém não hospedada, mais pra frente planejo hospedar mas enquanto isso, pode ver o resultado em meu canal do tiktok @gps_drew_dev
      </h1>
      <img class="mt-3" src="../../assets/projetos-api.png" alt="Imagem do Site" />
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Card",
    data() {
      return {
        aulas: []
      }
    },
    created() {
      axios.get('http://127.0.0.1:8000/api/aulas')
        .then((response) => {
          console.log(response)
          this.aulas = response.data
        })
        .catch((error) => {
          console.log(error);
        })
    },
  }
</script>

<style scoped>
  * {
    font-family: monospace;
  }
</style>