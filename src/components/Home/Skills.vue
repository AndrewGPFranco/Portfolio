<template>
  <section class="p-5 border rounded-2xl bg-white -mt-60 mx-7 border-gray-200 mb-4">
    <h1 class="text-blue-500 text-center font-bold text-4xl">My Hard Skills</h1>
    <div class="flex flex-wrap justify-center py-5 mt-1">
        <img 
          class="w-16 m-1 h-16 cursor-pointer" 
          v-for="image in language" 
          :key="image.id" 
          :src="image.imagem" 
          alt="logo da image.nome" 
        />
    </div>
  </section>
</template>

<script>
  import language from "../../../language.json"
  export default {
    name: "Skills",
    data() {
      return {
        language
      }
    }
  }
</script>

<style scoped>
  img {
    border-radius: 30%;
    box-shadow: 1px 1px 3px orangered;
  }
</style>