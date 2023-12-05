<template>
  <section class="py-1 px-2 min-w-full">
    <div class="rounded-2xl bg-black flex flex-col">
      <img class="h-48 rounded-t-2xl" :src="article.image" alt="Imagem" />
      <div id="card" class="h-auto p-6 bg-gray-200 text-black rounded-b-2xl">
        <h1 class="font-bold text-xl pb-1">{{ article.title }}</h1>
        <p v-if="!readmore">{{ article.description.substring(0,170) + "..."}}</p>
        <p v-if="readmore">{{ article.description }}</p>
<button @click="readmore = !readmore" class="mt-2 text-center rounded-xl p-2 bg-blue-500 text-black font-bold">
  {{ readmore ? 'Read Less' : 'Read More' }}
</button>
        <p class="font-bold text-end">{{ article.author }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      readmore: false
    }
  },
  methods: {
    activeRead() {
      this.readmore = !this.readmore;
    }
  }
}
</script>

<style scoped>
  #card {
    overflow-y: auto;
    max-height: 250px;
  }
</style>