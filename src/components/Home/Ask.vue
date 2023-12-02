<template>
  <section class="flex flex-col py-6 px-7">
    <h1 class="text-center text-black text-3xl font-bold mb-3">
      Curiosities About Me
    </h1>
    <div class="flex justify-between p-4" id="box">
      <h1 class="text-white text-base font-bold">
        EVERYDAY STACK?
      </h1>
      <button @click="readMore" v-if="!ativado">
        <i class="pi pi-plus text-white"></i>
      </button>
      <button @click="readMore" v-if="ativado">
        <i class="pi pi-times text-white"></i>
      </button>
    </div>
    <div v-if="ativado" class="p-4 border border-black" id="box">
      <p class="text-white">
        In everyday life I tend to use Spring and Angular a lot. In addition to these, I usually use Laravel, Vue and
        Tailwind!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Ask",
  data() {
    return {
      ativado: false
    }
  },
  methods: {
    readMore() {
      this.ativado = !this.ativado
    }
  }
}
</script>

<style scoped>
#box {
  background-color: rgb(45, 45, 45);
}

i:hover {
  color: gray;
}

@media only screen and (min-width: 720px) {
  #box {
    width: 50%;
    margin: 0 auto;
  }
}
</style>