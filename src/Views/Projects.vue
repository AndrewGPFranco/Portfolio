<template>
  <header>
    <Navbar />
  </header>
  <main class="py-4 px-3 bg-black">
    <BtnTop />
    <h1 class="-mt-3 mb-2 text-blue-300 text-center font-bold text-4xl">my PROJECTS</h1>
    <Card />
    <CardVideo />
  </main>
  <footer>
    <Baseboard />
  </footer>
</template>

<script>
  import Baseboard from "../components/Global/Baseboard.vue"
  import Card from "../components/Projects/Card.vue"
  import CardVideo from "../components/Projects/CardVideo.vue"
  import BackHome from "../components/Global/BackHome.vue"
  import Navbar from "../components/Projects/Navbar.vue"
import BtnTop from "../components/Global/BtnTop.vue"
  export default {
    name: "Projects",
    components: {
      Baseboard,
      Card,
      Navbar,
      BackHome,
      CardVideo,
      BtnTop
    }
  }
</script>