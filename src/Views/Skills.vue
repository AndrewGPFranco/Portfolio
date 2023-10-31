<template>
  <Navbar />
  <Baseboard />
</template>

<script>
import Navbar from "../components/Global/Navbar.vue"
import Baseboard from  "../components/Global/Baseboard.vue"
  export default {
    name: "Skills",
    components: {
      Baseboard,
      Navbar
    }
  }
</script>