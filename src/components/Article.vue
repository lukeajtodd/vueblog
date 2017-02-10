<template>
  <transition name="fade">
    <div class="article">
      <h2>{{ articles[this.$route.params.article_id].title }}</h2>
      <p>{{ articles[this.$route.params.article_id].content }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'article',
  props: [ 'articles' ]
}
</script>

<style scoped>
.article {
  margin-left: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  padding-left: 0;
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
