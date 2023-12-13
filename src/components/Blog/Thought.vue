<template>
  <section class="p-5">
    <div class="card" v-for="thought in thoughts" :key="thought.id">
      <h1 class="font-bold text-xl text-start underline">{{ thought.title.toUpperCase() }}</h1>
      <img class="h-56 rounded-xl mt-2 w-full" v-if="thought.image" :src="thought.image" alt="Image of thought" />
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

<style scoped>
  .card {
  width: 100%;
  height: 100%;
  padding: 30px;
  margin-bottom: 10px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
  }
</style>