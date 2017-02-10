<template>
  <transition name="fade">
    <div class="article">
      <h2>{{ articles[this.$route.params.article_id].title }}</h2>
      <p v-for="paragraph in articles[this.$route.params.article_id].content">{{ paragraph }}</p>
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
  margin-top: 1rem;
  padding: 1rem;
  padding-left: 0;
}
h2 {
  line-height: 1;
  color: #333;
  font-size: 2rem;
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
