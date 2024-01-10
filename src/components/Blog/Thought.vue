<template>
  <section class="mt-10 bg-blue-200 flex flex-col justify-center">
    <div v-for="thought in thoughts" :key="thought.id"
      class="relative mx-auto m-5 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div v-if="thought.image"
        class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img :src="thought.image" alt="Capa do Projeto">
      </div>
      <div class="p-6">
        <h5
          class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {{ thought.title }}
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {{ thought.description }}
        </p>
      </div>
      <div class="flex justify-end p-2 font-bold">
        {{ thought.date }}
      </div>
    </div>
  </section>
</template>

<script>
import thoughts from "../../filesJson/blog.json"
export default {
  name: "Thought",
  data() {
    return {
      thoughts
    }
  }
}
</script>