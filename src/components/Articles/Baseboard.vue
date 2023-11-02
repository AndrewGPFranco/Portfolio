<template>
  <section class="px-1 pb-3">
    <div class="flex justify-around p-5 border border-blue-300 rounded-full">
      <div class="flex flex-col text-center py-2">
        <router-link to="/"><i class="pi pi-home text-blue-500" style="font-size: 1.5rem;"></i>
        <p class="text-blue-500 font-bold">HOME</p></router-link>
      </div>
      <div class="flex flex-col text-center py-2">
      <router-link to="/"><i class="pi pi-heart text-blue-500" style="font-size: 1.5rem;"></i></router-link>
        <p class="text-blue-500 font-bold">FAVORITE</p>
      </div>
      <div class="flex flex-col text-center py-2">
      <router-link to="/"><i class="pi pi-comment text-blue-500" style="font-size: 1.5rem;"></i>
      <p class="text-blue-500 font-bold">COMMENTS</p></router-link>
      </div>
      <div class="flex flex-col text-center py-2">
      <router-link to="/"><i class="pi pi-cog text-blue-500" style="font-size: 1.5rem;"></i>
        <p class="text-blue-500 font-bold">CONFIG</p></router-link>
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