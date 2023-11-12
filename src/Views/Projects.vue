<template>
  <header>
    <Navbar />
  </header>
  <main class="py-4 bg-black border-t-2 border-gray-600">
    <h1 class="text-orange-500 text-3xl text-center pt-5 font-bold">
      My Tutorials
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