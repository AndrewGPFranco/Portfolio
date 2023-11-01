<template>
  <div class="bg-blue-200">
    <Navbar />
    <Search />
    <Category />
    <div class="overflow-x-auto flex pr-8 pl-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Articles/Navbar.vue"
import Search from "../components/Articles/Search.vue"
import Category from "../components/Articles/Category.vue"
import Card from "../components/Articles/Card.vue"
export default {
  name: "Articles",
  components: {
    Navbar,
    Search, 
    Category,
    Card
  }
}
</script>