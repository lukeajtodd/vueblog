<template>
  <div class="article">
    <h2>{{ currentArticle.title }}</h2>
    <p v-for="paragraph in currentArticle.content">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: 'article',
  props: [ 'articles' ],
  computed: {
    currentArticle: function() {
      let self = this;
      let current = this.articles.filter(function(article) {
        return article.id == self.$route.params.article_id;
      });
      return current[0];
    }
  }
}
</script>

<style scoped>
.article {
  margin-left: 1rem;
  margin-top: 1rem;
  padding: 1rem;
}
h2 {
  line-height: 1;
  color: #333;
  font-size: 1.6rem;
  font-family: 'Bungee';
  margin-top: 1rem;
}
p {
  line-height: 1.4;
  letter-spacing: 0.001rem;
  font-size: 1.1rem;
  width: 75%;
}
</style>
