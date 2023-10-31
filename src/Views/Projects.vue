<template>
  <!--<header>
    <Navbar />
  </header>-->
  <main>
    <h1 class="text-blue-400 text-3xl text-center pt-5 font-bold">My Projects Library</h1>
    <Card 
      src="https://i.ibb.co/fqnhssG/blog.png"
      title= "Blog of GPS"
      link= "https://blog-vue-replit.vercel.app"
    />
    <Card 
      src="https://i.ibb.co/Jt14MrV/presentation-old.png"
      title= "Presentation v1"
      link= "https://presentation-bice.vercel.app"
    />
    <Card 
      src="https://i.ibb.co/2v4gDq1/Screenshot-68.png"
      title= "Plataforma TI"
      link= "https://github.com/AndrewGPSilva/FrontEnd---PlataformaTI"
    />
    <Card 
      src="https://i.ibb.co/rpgGQPX/api.jpg"
      title= "API with Laravel"
      link= "https://github.com/AndrewGPSilva/Api_PlataformaTI"
    />
    <Card 
      src="https://i.ibb.co/rpgGQPX/api.jpg"
      title= "API with Spring"
      link= "https://github.com/AndrewGPSilva/api_spring_filmes"
    />
    <Card 
      src="https://i.ibb.co/rpgGQPX/api.jpg"
      title= "API with NodeJs"
      link= "https://github.com/AndrewGPSilva/api_nodejs"
    />
  </main>
  <!--<footer>
    <Baseboard />
  </footer>-->
</template>

<script>
  import Baseboard from "../components/Global/Baseboard.vue"
  import Navbar from "../components/Global/Navbar.vue"
  import Card from "../components/Projects/Card.vue"
  export default {
    name: "Projects",
    components: {
      Navbar,
      Baseboard,
      Card
    }
  }
</script>

<style scoped>
  main {
    background-image: url("../assets/library.jpg");
    background-size: cover;
  }
</style>