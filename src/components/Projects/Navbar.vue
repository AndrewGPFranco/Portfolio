<template>
  <section class="px-7 bg-black py-4">
    <div class="flex justify-between items-center">
      <router-link to="/"><i class="pi pi-arrow-left" style="font-size: 1.3rem; color: white; font-weight: bold;"></i></router-link>
      <button><router-link to="/user">
        <img class="w-10 h-10 rounded-full border border-black" src="../../assets/luffy.jpeg" alt="Imagem de Perfil" /></router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
  i {
    padding: 10px;
  }

  i:hover {
    background-color: rgb(61, 61, 61);
    border-radius: 40%;
  }

  section {
    /*border-bottom: 1px solid #333;*/
  }
</style>