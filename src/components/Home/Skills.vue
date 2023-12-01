<template>
  <section class="p-5 border rounded-2xl bg-white -mt-60 mx-7 border-gray-200 mb-4">
    <h1 class="text-black text-center font-bold text-4xl">My Hard Skills</h1>
    <div id="containerImage" class="flex flex-wrap justify-center py-5 mt-1">
        <img
          id="iconLanguage"
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
  import language from "../../filesJson/language.json"
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

  #iconLanguage:hover {
    background-color: #333;
    box-shadow: 1px 1px 3px purple;
  }

  @media only screen and (min-width: 720px) {
    img {
      width: 100px;
      height: 100px;
    }

    #containerImage {
      width: 100%;
      gap: 10px;
      padding: 10px;
    }
  }
</style>