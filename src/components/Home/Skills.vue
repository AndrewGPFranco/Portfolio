<template>
  <section class="bg-black p-3">
    <h1 class="text-blue-500 text-center text-2xl">My Hard Skills</h1>
    <div class="flex flex-wrap justify-center mt-1">
        <img 
          class="w-20 m-1 h-20" 
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