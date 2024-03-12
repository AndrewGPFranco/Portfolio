<template>
  <section class="bg-blue-900 p-7 mt-2">
    <div id="container" class="p-2 mt-6">
      <p class="text-gray-300 text-start mb-5 text-xl">
Hello!  I'm Andrew, I'm 22 years old and I'm a versatile developer with an appreciation for the frontend and a heart for the backend!  My Front-End skills cover HTML, CSS, JavaScript, Vue, Typescript, Bootstrap and Tailwind while in the Back-End, my skills are in Java, Spring. I have comprehensive knowledge in Docker, MySql and PostgreSQL databases and I am highly skilled in versioning with Git and GitHub.
      </p>
    </div>
    <div class="h-56"></div>
  </section>
</template>

<script>
  export default {
    name: "Biography"
  }
</script>

<style scoped>
  p {
    font-family: 'Croissant One', serif;
  }

  @media only screen and (min-width: 720px) {
    p {
      font-size: 2rem;
      text-align: center;
      font-weight: bold;
    }

    #container {
      margin-top: -2px;
      padding-right: 100px;
      padding-left: 100px;
    }
  }
</style>