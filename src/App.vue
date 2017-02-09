<template>
  <div id="app">
    <div class="page">
      <home :title="title"></home>
      <navigation :articles="articles"></navigation>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.params.article_id" :articles="articles"></router-view>
      </transition>
      {{ path }}
      <logo></logo>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Nav'
import Logo from './components/Logo'
import Home from './components/Home'
export default {
  name: 'app',
  components: {
    Navigation,
    Logo,
    Home
  },
  data() {
    return {
      title: 'Junior Days',
      articles: this.$store.state.articles
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bahiana|Bungee');
body {
  margin: 0;
  position: relative;
  height: calc(100vh - 60px);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page {
  text-align: left;
  width: 60%;
  margin: 60px auto 0 auto;
}
a {
  color: #333;
  text-decoration: none;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateX(100px);
}
</style>
