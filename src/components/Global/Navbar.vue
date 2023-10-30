<template>
  <nav class="flex flex-col">
    <div class="flex justify-between p-5 bg-black items-center">
      <img class="w-12 h-12 ml-4" src="../../assets/logo.png" alt="Logo" />
      <p class="text-orange-500 mr-4 text-xl">
        <i class="pi pi-align-justify"></i>
      </p>
    </div>
    <div class="bg-black">
      <Line />
    </div>
  </nav>
</template>

<script>
import Line from "./Line.vue"

export default {
  name: "Navbar",
  components: {
    Line
  }
}
</script>