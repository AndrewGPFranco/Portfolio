<template>
  <Banner />
  <Photography/>
  <Information/>
</template>

<script>
  import Banner from "../components/Perfil/Banner.vue"
  import Photography from "../components/Perfil/Photography.vue"
  import Information from "../components/Perfil/Information.vue"
  export default {
    name: "Perfil",
    components: {
      Banner, 
      Photography,
      Information
    }
  }
</script>