<template>
  <footer class="bg-black text-blue-500 text-center p-2.5">
    <Line />
    <h1 class="mt-2.5">&copy; {{ year }} All Rights Reserved</h1>
    <Networks/>
  </footer>
</template>

<script>
  import Networks from "./Networks.vue"
  import Line from "./Line.vue"
export default {
  name: "Baseboard",
  data() {
    return {
      year: ""
    }
  },
  created() {
    this.getYear()
  },
  methods: {
    getYear() {
      const currentDate = new Date()
      this.year = currentDate.getFullYear()
    }
  },
  components: { Networks, Line }
}
</script>