<template>
  <div class="nav">
    <ul>
      <li v-for="article in mostRecent">
        <router-link 
          :to="{ name: 'Article', params: { article_id: article.id } }">
          {{ article.title }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Archive' }" :articles="articles">more...</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props: [ 'articles' ],
  computed: {
    mostRecent: function() {
      let recentArr = [];
      let count = 1;
      this.articles.some(function(article) {
        if (count > 3) return true;
        recentArr.push(article);
        count++;
      });
      return recentArr;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  display: inline-block;
  border: 2px solid #333;
  margin-left: 1rem;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 5px;
  text-align: left;
}

li {
  display: inline-block;
  margin: 10px 10px;
  text-transform: uppercase;
}

@media screen and (max-width: 946px) {
  ul {
    text-align: center;
  }
  li {
    position: relative;
    display: block;
    margin: 15px 10px;
  }
}
</style>
