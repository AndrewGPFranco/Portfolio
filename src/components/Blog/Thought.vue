<template>
  <section>
    <div class="p-6" v-for="thought in thoughts" :key="thought.id">
      <h1 class="font-bold text-xl text-start underline">{{ thought.title.toUpperCase() }}</h1>
      <img class="h-48 rounded-xl mt-2 w-full" v-if="thought.image" :src="thought.image" alt="Image of thought" />
      <p class="mt-3">{{ thought.description }}</p>
      <h3 class="text-end m-2 text-blue-500"><i class="pi pi-calendar"></i> {{ thought.date }}</h3>
    </div>
  </section>
</template>

<script>
  import thoughts from "../../filesJson/blog.json"
  export default {
    name: "Thought",
    data(){
      return {
        thoughts
      }
    }
  }
</script>