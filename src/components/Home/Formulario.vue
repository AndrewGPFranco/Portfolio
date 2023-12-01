<template>
  <section class="flex flex-col p-20" id="container">
    <h1 class="text-blue-400">Contact</h1>
    <div class="flex flex-col text-white">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Write your name" />
    </div>
    <div class="flex flex-col text-white">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Write your email" />
    </div>
    <div class="flex flex-col text-white">
      <label for="message">Message</label>
      <textarea name="texto" rows="10" cols="20"></textarea>
    </div>
    <div>
      <button>Send</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Formulario"
  }
</script>

<style scoped>
  #container {
    background-image: url("../../assets/backgroundForm.jpg");
    background-size: cover;
  }
</style>