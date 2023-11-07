<template>
  <section class="flex flex-col py-6 px-7" id="container">
    <h1 class="text-center text-black text-3xl font-bold mb-3">Common Questions</h1>
    <div class="flex justify-between p-4" id="box">
      <h1 class="text-white text-lg font-bold">
        QUAL A MELHOR LINGUAGEM
      </h1>
      <button @click="readMore" v-if="!ativado">
        <i class="pi pi-plus text-white"></i>
      </button>
      <button @click="readMore" v-if="ativado">
        <i class="pi pi-times text-white"></i>
      </button>
    </div>
    <div v-if="ativado" class="p-4 border border-black" id="box">
      <p class="text-white">Qual a melhor eu não consigo responder mas a que eu mais gosto de trabalhar e codar é PHP, a primeira que eu aprendi e a que eu carrego em meu coração!</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Ask",
    data(){
      return {
        ativado: false
      }
    },
    methods: {
      readMore() { 
        this.ativado = !this.ativado
      }
    }
  }
</script>

<style scoped>
  #box {
    background-color: rgb(45,45,45);
  }

  #container {
    border-top: 3px solid gray;
  }
</style>