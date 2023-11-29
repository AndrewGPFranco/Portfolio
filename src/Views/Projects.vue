<template>
  <header>
    <Navbar />
  </header>
  <main class="py-4 px-3 bg-black">
    <Card />
  </main>
  <footer>
    <Baseboard />
  </footer>
</template>

<script>
  import Baseboard from "../components/Global/Baseboard.vue"
  import Card from "../components/Projects/Card.vue"
  import BackHome from "../components/Global/BackHome.vue"
  import Navbar from "../components/Projects/Navbar.vue"
  export default {
    name: "Projects",
    components: {
      Baseboard,
      Card,
      Navbar,
      BackHome
    }
  }
</script>