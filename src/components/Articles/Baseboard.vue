<template>
  <section class="px-1 pt-5 pb-3 flex justify-center">
    <div class="flex justify-around p-3 border border-black rounded-full w-2/5">
      <div class="flex flex-col text-center py-2">
        <router-link to="/"><i class="pi pi-home text-black" style="font-size: 1.5rem;"></i>
        <p class="text-black font-bold">HOME</p></router-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Baseboard"
  }
</script>

<style scoped>
  p:hover {
    text-decoration: underline;
  }
</style>