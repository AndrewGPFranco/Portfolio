<template>
  <header>
    <Navbar />
  </header>
  <main>
    <h1 class="text-blue-400 text-3xl text-center pt-5 font-bold bg-black">My Projects Library</h1>
    <Card src="https://i.ibb.co/vQq0LC0/PROPS.jpg"
      title= "PLATAFORMA DE TI"
      link= "https://github.com/AndrewGPSilva/FrontEnd---PlataformaTI"
    />
    <Card src="https://i.ibb.co/tD0dByw/INERTIA.jpg"
      title= "INERTIA"
      link= "https://github.com/AndrewGPSilva/FrontEnd---PlataformaTI"
    />
  </main>
  <footer>
    <Baseboard />
  </footer>
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