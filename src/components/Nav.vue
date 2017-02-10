<template>
  <div class="nav">
    <ul>
      <li v-for="article in articles">
        <router-link 
          :to="{ name: 'Article', params: { article_id: article.id } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props: [ 'articles' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  border: 2px solid #333;
  width: 100%;
  max-width: 26rem;
  margin: 1rem;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 5px;
  text-align: center;
}

li {
  display: inline-block;
  margin: 10px 10px;
}

@media screen and (max-width: 688px) {
  .nav {
    max-width: 10rem;
  }
  li {
    display: block;
  }
}

a {
  color: #333;
  font-weight: bold;
}

a:hover {
  color: aquamarine;
}
</style>
