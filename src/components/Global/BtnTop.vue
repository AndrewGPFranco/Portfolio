<template>
  <div>
    <button class="btn-voltar-topo" @click="scrollToTop" v-show="!scrollAtTop">
      <i class="pi pi-arrow-circle-up" style="font-size: 1.7em;"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnTop",
  data() {
    return {
      scrollAtTop: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      this.scrollAtTop = scrollY === 0;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.btn-voltar-topo {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  color: #000;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.btn-voltar-topo:hover {
  background-color: #ccc;
}
</style>

