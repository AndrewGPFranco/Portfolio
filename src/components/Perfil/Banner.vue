<template>
  <section>
    <!--<img src="../../assets/banner-perfil.jpg" alt="Banner do Site" />-->
    <div>
      
    </div>
  </section>
</template>

<script>
  export default {
    name: "Banner"
  }
</script>

<style scoped>
  div {
    height: 450px;
    background-image: url("../../assets/banner-perfil.jpg");
    background-size: cover;
  }

  @media only screen and (min-width: 720px) {
    background-image: url("../../assets/banner.jpg");
  }
</style>