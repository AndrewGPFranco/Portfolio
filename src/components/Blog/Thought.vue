<template>
  <section class="p-5">
    <div v-for="thought in thoughts" :key="thought.id" class="card">
<div class="header"></div>
<div class="info">
  <p class="title">
    {{ thought.title }}
  </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi. </p>
</div>
<div class="footer">
  <p class="tag">#HTML #CSS </p>
  <button type="button" class="action">Get started </button>
</div>
</div>
  </section>
</template>

<script>
  import thoughts from "../../filesJson/blog.json"
  export default {
    name: "Thought",
    data(){
      return {
        thoughts
      }
    }
  }
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  background-color: white;
  width: 300px;
  height: 370px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),
  0 2px 4px -2px rgba(0,0,0,.1);
}

.header {
  position: relative;
  background-clip: border-box;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.75rem;
  background-color: rgb(33 150 243);
  box-shadow: 0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4);
  height: 14rem;
}

.info {
  border: none;
  padding: 1.5rem;
  text-align: center;
}

.title {
  color: rgb(38 50 56);
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.footer {
  padding: 0.75rem;
  border: 1px solid rgb(236 239 241);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 140, 255, 0.082);
}

.tag {
  font-weight: 300;
  font-size: .75rem;
  display: block;
}

.action {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  box-shadow: 0 4px 6px -1px rgba(33,150,243,.4),0 2px 4px -2px rgba(33,150,243,.4);
  color: rgb(255 255 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: .75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33 150 243);
  border-radius: 0.5rem;
}

</style>