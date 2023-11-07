<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Description />
    <Perfil />
    <Stack />
    <Biography />
    <Skills />
    <Ask />
  </main>
  <footer>
    <Baseboard />
  </footer>
</template>

<script>
import Navbar from "../components/Global/Navbar.vue"
import Banner from "../components/Home/Banner.vue"
import Biography from "../components/Home/Biography.vue"
import Baseboard from "../components/Global/Baseboard.vue"
import Skills from "../components/Home/Skills.vue"
import Description from "../components/Home/Description.vue"
import Perfil from "../components/Home/Perfil.vue"
import Ask from "../components/Home/Ask.vue"
export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Biography,
    Skills,
    Baseboard, 
    Description,
    Perfil,
    Ask
  }
}
</script>