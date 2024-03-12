<template>
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>

<script>
  export default {
    name: "BaseLayout"
  }
</script>

<style scoped>
  header {
    background-color: yellow;
  }

  footer {
    background-color: blue;
  }

  main {
    background-color: pink;
  }
</style>