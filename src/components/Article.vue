<template>
  <div class="article">
    <h2>{{ articles[this.$route.params.article_id].title }}</h2>
    <p>{{ articles[this.$route.params.article_id].content }}</p>
  </div>
</template>

<script>
export default {
  name: 'article',
  props: [ 'articles' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article {
  margin-left: 1rem;
  margin-top: 2rem;
  padding: 1rem;
}
h2 {
  line-height: 1;
  color: #333;
  font-size: 2rem;
  font-family: 'Bungee';
}
p {
  font-size: 1.2rem;
  width: 75%;
}
</style>
