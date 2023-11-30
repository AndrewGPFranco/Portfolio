<template>
  <Banner />
  <Photography/>
  <Information/>
  <Baseboard />
</template>

<script>
  import Banner from "../components/Perfil/Banner.vue"
  import Photography from "../components/Perfil/Photography.vue"
  import Information from "../components/Perfil/Information.vue"
  import Baseboard from "../components/Global/Baseboard.vue"
  export default {
    name: "Perfil",
    components: {
      Banner, 
      Photography,
      Information,
      Baseboard
    }
  }
</script>