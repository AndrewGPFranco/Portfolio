<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Banner />
  </main>
</template>

<script>
import Navbar from "../components/Global/Navbar.vue"
import Banner from "../components/Home/Banner.vue"
export default {
  name: "Home",
  components: {
    Navbar,
    Banner
  }
}
</script>