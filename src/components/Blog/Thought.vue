<template>
  <section class="mt-10 flex flex-col justify-center">
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

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  background-color: white;
  margin: 20px;
  width: 300px;
  height: 370px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1),
    0 2px 4px -2px rgba(0, 0, 0, .1);
}

.header {
  position: relative;
  background-clip: border-box;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.75rem;
  background-color: rgb(33 150 243);
  box-shadow: 0 10px 15px -3px rgba(33, 150, 243, .4), 0 4px 6px -4px rgba(33, 150, 243, .4);
  height: 14rem;
}

.info {
  border: none;
  padding: 1.5rem;
  text-align: center;
}

.title {
  color: rgb(38 50 56);
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.footer {
  padding: 0.75rem;
  border: 1px solid rgb(236 239 241);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 140, 255, 0.082);
}

.tag {
  font-weight: 300;
  font-size: .75rem;
  display: block;
}

.action {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  box-shadow: 0 4px 6px -1px rgba(33, 150, 243, .4), 0 2px 4px -2px rgba(33, 150, 243, .4);
  color: rgb(255 255 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: .75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33 150 243);
  border-radius: 0.5rem;
}
</style>