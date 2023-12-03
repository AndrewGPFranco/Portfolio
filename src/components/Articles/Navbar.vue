<template>
  <section class="px-7 py-4">
    <div class="flex justify-between items-center">
      <router-link to="/"><i class="pi pi-arrow-left" style="font-size: 1.3rem; font-weight: bold;"></i></router-link>
      <h1 class="font-bold text-2xl">Articles</h1>
      <button><router-link to="/user"><img id="imageUser" class="w-10 h-10 rounded-full border border-black"
            src="../../assets/luffy.jpeg" alt="Imagem de Perfil" /></router-link></button>
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

#imageUser:hover {
  border: 2px solid black;
}
</style>