<template>
  <section class="bg-black flex flex-col">
    <div class="text-center text-bold text-lg mt-3">
      <h1 class="text-blue-400">Stack Used to Create this Page</h1>
    </div>
    <div class="flex text-center p-2">
      <picture class="bg-gray-900 w-5/12 m-1 flex justify-center rounded-3xl">
        <img class="w-3/4" src="../../assets/tailwind.png" alt="Logo da Tecnologia" />
      </picture>
      <picture class="bg-gray-900 w-5/12 m-1 flex justify-center rounded-3xl">
        <img class="w-3/4" src="../../assets/vue.png" alt="Logo da Tecnologia" />
      </picture>
      <picture class="bg-gray-900 w-5/12 m-1 flex justify-center rounded-3xl">
        <img class="w-3/4" src="../../assets/laravel.png" alt="Logo da Tecnologia" />
      </picture>
    </div>
    <Line />
  </section>
</template>

<script>
  import Line from "../Global/Line.vue"
  export default {
    name: "Stack",
    components: {
      Line
    }
  }
</script>