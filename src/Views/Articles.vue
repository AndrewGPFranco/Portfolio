<template>
  <main class="bg-blue-200">
    <Navbar />
    <Search />
    <Category />
    <div class="overflow-x-auto flex pr-8 pl-2">
      <Card v-for="article in articles" :key="article.id" :article="article" />
    </div>
    <Baseboard />
  </main>
</template>

<script>
import Navbar from "../components/Articles/Navbar.vue"
import Search from "../components/Articles/Search.vue"
import Category from "../components/Articles/Category.vue"
import Card from "../components/Articles/Card.vue"
import Baseboard from "../components/Articles/Baseboard.vue"
  import articles from "../../articles.json"
export default {
  name: "Articles",
  components: {
    Navbar,
    Search, 
    Category,
    Card,
    Baseboard
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.articles = articles
  }
}
</script>