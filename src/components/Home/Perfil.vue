<template>
  <div class="flex justify-center flex-col items-center mt-6">
    <img id="imageUser" class="w-48 h-48" src="../../assets/perfil.png" alt="Foto de perfil" />
    <img id="imageBanner" class="mt-16" src="../../assets/banner.svg" alt="banner" />
  </div>
</template>

<script>
export default {
  name: "Perfil"
}
</script>

<style scoped>
@media only screen and (min-width: 720px) {

  #imageUser {
    margin-bottom: 50px;
  }

  #imageBanner {
    display: none;
  }
}
</style>