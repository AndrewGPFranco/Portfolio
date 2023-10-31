<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Banner />
    <Stack />
    <Biography />
    <Skills />
  </main>
  <footer>
    <Baseboard />
  </footer>
</template>

<script>
import Navbar from "../components/Global/Navbar.vue"
import Banner from "../components/Home/Banner.vue"
import Stack from "../components/Home/Stack.vue"
import Biography from "../components/Home/Biography.vue"
import Baseboard from "../components/Global/Baseboard.vue"
import Skills from "../components/Home/Skills.vue"
export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Stack,
    Biography,
    Skills,
    Baseboard
  }
}
</script>