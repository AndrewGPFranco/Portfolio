<template>
    <section class="bg-black">
<div class="bg-black">
      <img class="p-2 mb-0.5 rounded-2xl" src="../../assets/banner.jpg" alt="Banner" />
    </div>
      <div class="bg-black">
        <Line />
      </div>
    </section>
  </template>

<script>
  import Line from "../Global/Line.vue"
  export default {
    name: "Banner",
    components: { Line }
  }
</script>