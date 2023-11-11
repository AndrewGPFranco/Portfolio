<template>
  <section class="flex justify-center flex-col">
    <div class="text-center p-5 border border-gray-100 m-2 rounded-full" v-for='aula in aulas' :key="aula.id">
      <img class="flex w-2/4 m-auto justify-center" :src="aula.image" alt="Imagem do Projeto" />
      <h1 class="text-center mt-3">{{ aula.title }}</h1>
      <p class="text-gray-300">{{ aula.description }}</p>
      <p class="text-gray-300">Category: <span class="text-orange-500">{{ aula.category }}</span></p>
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