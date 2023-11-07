<template>
  <section class="py-1 px-2 min-w-full">
    <div class="rounded-2xl bg-black flex flex-col">
      <img class="h-48 rounded-t-2xl" :src="article.image" alt="Imagem" />
      <div class="h-52 p-6 bg-gray-200 text-black rounded-b-2xl">
        <h1 class="font-bold text-xl pb-1">{{ article.title }}</h1>
        <p>{{ article.description.substring(0,170) + "..."}}</p>
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
  }
}
</script>