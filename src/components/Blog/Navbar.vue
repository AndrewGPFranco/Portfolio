<template>
  <section class="p-7">
    <header class="flex flex-row justify-between items-center">
      <router-link to="/">
        <i class="pi pi-arrow-left" style="font-size: 1.3rem; color: black; font-weight: bold;"></i>
      </router-link>
      <button><router-link to="/user">
          <img id="imageUser" class="w-10 h-10 rounded-full border border-black" src="../../assets/luffy.jpeg"
            alt="Imagem de Perfil" /></router-link>
      </button>
    </header>
  </section>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
section {
  margin-bottom: -10px;
}
</style>