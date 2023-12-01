<template>
  <section class="flex flex-col p-20 gap-1" id="container">
    <h1 class="text-blacl text-4xl text-center font-bold">Contact</h1>
    <div class="flex flex-col text-white gap-1">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Write your name..." />
    </div>
    <div class="flex flex-col text-white gap-1">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Write your email..." />
    </div>
    <div class="flex flex-col text-white gap-1">
      <label for="message">Message</label>
      <textarea name="texto" rows="8" cols="20" placeholder="Write your message..."></textarea>
    </div>
    <div class="flex justify-center">
      <button class="bg-red-400 text-black py-2 px-6 rounded-full font-bold mt-2">Send</button>
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

input,
textarea {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px;
  color: black;
}

* {
  font-family: monospace;
}

button:hover {
  color: white;
  background-color: blueviolet;
}
</style>