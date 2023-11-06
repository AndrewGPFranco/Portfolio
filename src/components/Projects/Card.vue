<template>
  <section class="pt-3 pb-1 px-10 min-w-full -ml-7">
    <div class="bg-gray-900 p-4 rounded-3xl flex flex-col">
    <div class="mb-2">
      <img class="border border-orange-400" :src="src" alt="Imagem" />
    </div>
    <div class="w-full flex justify-center bg-gray-900 -mb-1">
        <div class="w-4/5 bg-gray-200 h-1">
        </div>
    </div>
    <div class="p-3 text-center font-bold text-2xl text-gray-200">
      <h1 class="mb-3">{{ title }}</h1>
      <a :href="link" target="_blank" class="bg-gray-200 text-black p-1.5 rounded-2xl">ACCESS</a>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: {
    src: String,
    title: String,
    link: String
  }
}
</script>
