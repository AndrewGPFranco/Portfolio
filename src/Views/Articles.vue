<template>
  <main class="bg-blue-200">
    <Navbar />
    <Search />
    <Category />
    <h1 class="text-start pl-5 text-2xl font-bold text-black mb-2">Programming Languages</h1>
    <div class="overflow-x-auto flex pr-8 pl-2" id="backend">
      <Card v-for="article in articles" :key="article.id" :article="article" />
    </div>
    <h1 class="mt-5 font-bold text-start pl-5 text-2xl text-black mb-2">Frontend Frameworks</h1>
    <div class="overflow-x-auto flex pr-8 pl-2" id="frontend">
      <Card v-for="articlefe in articlesfe" :key="articlefe.id" :article="articlefe" />
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
import articlesfe from "../../articlesfe.json"
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
      articles: [],
      articlesfe: []
    }
  },
  created() {
    this.articles = articles,
    this.articlesfe = articlesfe
  }
}
</script>