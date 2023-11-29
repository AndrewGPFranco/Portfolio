<template>
  <section class="flex justify-center flex-col">
    <div v-for="project in projects" :key="project.id" class="flex flex-col text-black bg-gray-200 text-center p-2 rounded-2xl m-1">
      <img :src="project.image" alt="Foto do Projeto" class="rounded-2xl" />
      <h1 class="mt-2 underline font-bold text-xl">{{ project.title }}</h1>
      <a class="p-2 mt-1 rounded-full font-bold text-xl bg-purple-500"  href="#" target="blank">ACCESS</a>
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
</style>