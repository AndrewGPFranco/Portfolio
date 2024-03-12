<template>
<BaseLayout>
  <template v-slot:header>
    <!-- conteúdo para a ranhura de cabeçalho -->
    <h1>
      Header
    </h1>
  </template>
    <h1>
      Main
    </h1>
  <template #footer>
    <h1>
      Footer
    </h1>
  </template>
</BaseLayout>
</template>

<script>
import BaseLayout from "../layouts/BaseLayout.vue"
  export default {
    name: "Hobby",
    components: {
      BaseLayout
    }
  }
</script>