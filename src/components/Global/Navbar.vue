<template>
  <nav class="flex flex-col">
    <div class="flex justify-between p-5 bg-black items-center">
      <router-link to="/"><img class="w-12 h-12 ml-4" src="../../assets/logo.png" alt="Logo" /></router-link>
      <button @click="showMenu" class="text-orange-500 mr-4 text-xl">
        <i class="pi pi-align-justify"></i>
      </button>
    </div>
    <div v-show="ativado">
      <ul class="text-white flex flex-col text-end bg-black">
        <router-link to ="/" class="flex justify-end"><li class="bg-blue-500 text-white p-1 text-center m-1 rounded-lg w-2/5 font-bold">Home</li></router-link>
        <router-link to ="/projects" class="flex justify-end"><li class="bg-blue-500 text-white p-1 text-center m-1  rounded-lg w-2/5 font-bold">Projects</li></router-link>
        <router-link to ="/articles" class="flex justify-end"><li class="bg-blue-500 text-white p-1 text-center m-1  rounded-lg w-2/5 font-bold">Articles</li></router-link>
      </ul>
    </div>
    <div class="bg-black">
      <Line />
    </div>
  </nav>
</template>

<script>
import Line from "./Line.vue"

export default {
  name: "Navbar",
  components: {
    Line
  },
    data() {
    return {
      ativado: false
    };
  },
  methods: {
    showMenu() {
      this.ativado = !this.ativado;
      console.log(this.ativado);
    }
  },
  components: {
    Line
  }
}
</script>