<template>
  <section class="flex flex-col">
    <div class="flex flex-col text-center px-5 mt-5">
      <h1 id="info" class="text-3xl text-gray-200">ANDREW SILVA</h1>
      <h3 id="info" class="text-xl text-gray-200">Fullstack Developer</h3>
    </div>
    <div class="flex justify-center gap-4 p-3">
      <h1 class="w-20 h-20 align-items p-3 text-center text-white bg-gray-900 rounded-full">
        +20 <br> <i class="pi pi-book"></i>
      </h1>
      <h1 class="align-items p-3 text-center text-white bg-gray-900 rounded-full w-20 h-20">
        +1 <br> EXP
      </h1>
      <div class="flex justify-center align-items p-3 text-white bg-gray-900 rounded-full w-20 h-20 ">
        <a href="https://www.youtube.com/channel/UC7L-jcONEz0AG56nfSQiXvA" target="_blank"><i class="pi pi-youtube text-red-600 text-4xl mt-2"></i></a>
      </div>
    </div>
    <div class="flex text-center justify-center m-2">
      <button class="bg-gray-200 px-5 py-3 font-bold rounded-xl w-4/5 "><router-link to="/">REDIRECT BACK TO HOME</router-link></button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Information"
  }
</script>

<style scoped>
  section {
    background-color: black;
  }

  #info {
    font-family: monospace;
  }

  @media only screen and (min-width: 720px) {
    button {
      width: 50%;
      margin: 0 auto;
      font-size: 1.3rem;
    }
    
    button:hover {
      background-color: purple;
      color: white;
    }
  }
</style>