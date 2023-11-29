<template>
  <section class="flex justify-center flex-col">
    <div id="card" v-for="project in projects" :key="project.id" class="flex flex-col text-black bg-transparent text-center p-2 rounded-2xl m-1">
      <img :src="project.image" alt="Foto do Projeto" class="rounded-2xl" />
      <h1 class="mt-2 underline font-bold text-white text-xl">{{ project.title }}</h1>
      <div class="flex justify-center">
        <img v-for="tech in project.technology" :key="tech" class="flex rounded-full w-16 h-16" :src="tech" alt="logo da tecnologia" />
      </div>
      <a class="p-2 mt-1 rounded-full font-bold text-xl bg-purple-500" :href="project.link" target="blank">ACCESS</a>
    </div>
  </section>
</template>

<script>
  import projects from "../../filesJson/projects.json"
  
  export default {
    name: "Card",
    data() {
      return {
        projects
      }
    }
  }
</script>

<style scoped>
  * {
    font-family: monospace;
  }

  #card {
    box-shadow: 0px 2px 5px purple;
  }
</style>
