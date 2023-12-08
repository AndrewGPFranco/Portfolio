<template>
  <header>
    <Navbar />
  </header>
  <main>
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