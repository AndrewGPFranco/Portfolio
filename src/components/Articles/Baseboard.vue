<template>
  <section>
    <div class="flex justify-around p-5">
      <div class="flex flex-col text-center py-2">
        <i class="pi pi-home text-blue-500" style="font-size: 1.5rem;"></i>
        <p class="text-blue-500 font-bold">HOME</p>
      </div>
      <div class="flex flex-col text-center py-2">
      <i class="pi pi-heart text-blue-500" style="font-size: 1.5rem;"></i>
        <p class="text-blue-500 font-bold">FAVORITE</p>
      </div>
      <div class="flex flex-col text-center py-2">
      <i class="pi pi-comment text-blue-500" style="font-size: 1.5rem;"></i>
      <p class="text-blue-500 font-bold">COMMENTS</p>
      </div>
      <div class="flex flex-col text-center py-2">
      <i class="pi pi-cog text-blue-500" style="font-size: 1.5rem;"></i>
        <p class="text-blue-500 font-bold">A
        CONFIG</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Baseboard"
  }
</script>