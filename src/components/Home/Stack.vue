<template>
  <section class="bg-black flex flex-col -mt-2">
    <div class="text-center text-bold text-lg mt-3">
      <h1 class="text-blue-400">Stack Used to Create this Page</h1>
    </div>
    <div class="flex text-center p-2">
      <picture class=" w-4/12 m-1 flex justify-center rounded-3xl">
        <img class="w-3/4 cursor-pointer" src="../../assets/tailwind.png" alt="Logo da Tecnologia" />
      </picture>
      <picture class=" w-4/12 m-1 flex justify-center rounded-3xl">
        <img class="w-3/4 cursor-pointer" src="../../assets/vue.png" alt="Logo da Tecnologia" />
      </picture>
      <picture class=" w-4/12  m-1 flex justify-center rounded-3xl">
        <img class="w-3/4 cursor-pointer" src="../../assets/laravel.png" alt="Logo da Tecnologia" />
      </picture>
    </div> 
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