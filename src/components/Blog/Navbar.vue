<template>
  <section class="p-7">
    <header class="flex flex-row justify-between">
      <router-link to="/">
        <i class="pi pi-arrow-left" style="font-size: 1.3rem; color: black; font-weight: bold;"></i>
      </router-link>
      <h1 class="font-bold underline text-blue-500 text-2xl">BLOG</h1>
    </header>
  </section>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
section {
  margin-bottom: -10px;
}
</style>