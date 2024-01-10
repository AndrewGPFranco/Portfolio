<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-blue-200">
    <h1 class="font-bold underline text-center text-black text-2xl">My Time-Line</h1>
    <Thought />
  </main>
</template>

<script>
  import Thought from "../components/Blog/Thought.vue"
  import Navbar from "../components/Blog/Navbar.vue"
  export default {
    name: "Blog",
    components: {
      Thought,
      Navbar
    }
  }
</script>

<style scoped>
  
</style>