<template>
  <section>
    <div v-for="thought in thoughts" :key="thought.id">
      <h1>{{ thought.title }}</h1>
      <p>{{ thought.description }}</p>
      <img v-if="thought.image" :src="thought.image" alt="Image of thought" />
      <h3>{{ thought.date }}</h3>
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

</style>