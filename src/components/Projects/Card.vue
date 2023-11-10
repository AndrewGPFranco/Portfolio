<template>
  <section>
    <div v-for='projeto in projetos' :key="projeto.id">
      <h1>{{ projeto.titulo }}</h1>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Card",
    data() {
      return {
        projetos: []
      }
    },
    created() {
      axios.get('http://localhost:8080/api/projetos')
        .then((response) => {
          console.log(response)
          this.projetos = response.data
        })
        .catch((error) => {
          console.log(error);
        })
    },
  }
</script>
