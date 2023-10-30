<template>
  <header>
    <Navbar />
  </header>
  <h1>Projects</h1>
  <footer>
    <Baseboard />
  </footer>
</template>

<script>
  import Baseboard from "../components/Global/Baseboard.vue"
  import Navbar from "../components/Global/Navbar.vue"
  export default {
    name: "Projects",
    components: {
      Navbar,
      Baseboard
    }
  }
</script>