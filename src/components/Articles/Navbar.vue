<template>
  <section class="px-7 py-4">
    <div class="flex justify-between items-center">
      <router-link to="/"><i class="pi pi-arrow-left" style="font-size: 1.3rem; font-weight: bold;"></i></router-link>
      <h1 class="font-bold text-2xl">Articles</h1>
      <button @click="ativar()"><img class="w-10 h-10 rounded-full border border-black" src="../../assets/luffy.jpeg" alt="Imagem de Perfil" /></button>
    </div>
    <div v-if="ativado" class="p-4 flex text-end border border-gray-100 text-white mt-2 rounded-2xl">
      <img class="h-28 w-28 border border-black rounded-full" src="../../assets/luffy.jpeg" alt="logo" />
      <div class="pl-11 flex flex-col justify-center text-end items-center">
        <h1 class="text-blue-900"><span class="text-blue-400">Dev:</span> Andrew Silva</h1>
        <h2 class="text-blue-900">Fullstack Developer</h2>
        <h2 class="text-blue-900">Country: Brasil</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      ativado: false
    }
  },
  methods: {
      ativar() {
        this.ativado = !this.ativado
      }
    }
}
</script>

<style scoped>
  i {
    padding: 10px;
  }

  i:hover {
    background-color: rgb(156 163 175);
    border-radius: 40%;
  }
</style>