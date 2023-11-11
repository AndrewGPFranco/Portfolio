<template>
  <header>
    <Navbar />
  </header>
  <main class="py-4 bg-black border-t-2 border-gray-600">
    <h1 class="text-white text-3xl text-center pt-5 font-bold">
      My Projects Library
    </h1>
    <div class="p-4 flex overflow-x-auto">
      <Card />
    </div>
  </main>
  <footer>
    <Baseboard />
  </footer>
</template>

<script>
  import Baseboard from "../components/Global/Baseboard.vue"
  import Navbar from "../components/Global/Navbar.vue"
  import Card from "../components/Projects/Card.vue"
  import BackHome from "../components/Global/BackHome.vue"
  export default {
    name: "Projects",
    components: {
      Navbar,
      Baseboard,
      Card,
      BackHome
    }
  }
</script>