<template>
  <nav class="flex flex-col">
    <div class="flex justify-between py-8 px-5 bg-white items-center">
      <router-link to="/"><img class="w-14 h-14 ml-4" src="../../assets/logo.png" alt="Logo" /></router-link>
      <button v-if="!ativado" @click="showMenu" class="text-black mr-4 text-lg">
        <i class="pi pi-align-justify"></i>
      </button>
      <button v-if="ativado" @click="showMenu" class="text-black mr-4 text-lg">
        <i class="pi pi-times"></i>
      </button>
    </div>
    <div v-show="ativado">
      <ul class="text-black flex flex-col text-center bg-white p-5">
        <router-link to="/" class="flex justify-center">
          <li
            class="text-purple-700 border-2 border-purple-500 px-5 py-1 text-center text-xl m-1 rounded-full w-auto font-bold">
            Home</li>
        </router-link>
        <router-link to="/articles" class="flex justify-center">
          <li
            class=" text-purple-700 border-2 border-purple-500 px-5 py-1 text-center m-1 text-xl rounded-full w-auto font-bold">
            Articles</li>
        </router-link>
        <router-link to="/projects" class="flex justify-center">
          <li
            class="text-purple-700 border-2 border-purple-500 text-xl px-5 py-1 text-center m-1 rounded-full w-auto font-bold">
            Projects</li>
        </router-link>
        <router-link to="/blog" class="flex justify-center">
          <li
            class="text-purple-700 border-2 border-purple-500 text-xl px-5 py-1 text-center m-1 rounded-full w-auto font-bold">
            Time Line</li>
        </router-link>
      </ul>
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

<style scoped>
li:hover {
  border: 2px solid black;
  color: black;
}

@media only screen and (min-width: 720px) {
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>