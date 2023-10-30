<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Card />
  </main>
  <footer>
    <Baseboard />
  </footer>
</template>

<script>
  import Baseboard from "../components/Global/Baseboard.vue"
  import Navbar from "../components/Global/Navbar.vue"
  import Card from "../components/Projects/Card.vue"
  export default {
    name: "Projects",
    components: {
      Navbar,
      Baseboard,
      Card
    }
  }
</script>

<style scoped>
  main {
    background-image: url("../assets/fundoProjects.jpg");
    background-size: cover;
    height: 80vh;
  }
</style>