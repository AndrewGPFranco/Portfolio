<template>
  <section class="flex flex-col p-20 gap-1" id="container">
    <h1 class="text-blacl text-4xl text-center font-bold">Contact</h1>
    <form>
      <div v-if="messageActive" class="text-center p-2 bg-green-500 font-bold text-lg rounded-lg m-2">
        <h1>Your message has been sent successfully</h1>
      </div>
      <div class="flex flex-col text-white gap-1">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Write your name..." v-model="name" required autocomplete="off" />
      </div>
      <div class="flex flex-col text-white gap-1">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Write your email..." v-model="email" required autocomplete="off" />
      </div>
      <div class="flex flex-col text-white gap-1">
        <label for="message">Message</label>
        <textarea name="texto" rows="8" cols="20" placeholder="Write your message..." v-model="message"
          required autocomplete="off"></textarea>
      </div>
      <div class="flex justify-center">
        <button @click="formIsTrue" class="bg-red-400 text-black py-2 px-6 rounded-full font-bold mt-2">Send</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      messageActive: false,
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    formIsTrue(e) {
      if (this.name.length > 0 && this.email.length > 0 && this.message.length > 0) {
        e.preventDefault();
        this.name = ''
        this.email = ''
        this.message = ''
        setTimeout(() => {
          this.messageActive = true;

          setTimeout(() => {
            this.messageActive = false;
          }, 5000);
        }, 1);
      }
    },
  },
};
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