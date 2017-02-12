<template>
  <div id="app">
    {{ articles }}
    <div class="page">
      <home :title="title"></home>
      <navigation :articles="sortedArticles"></navigation>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.params.article_id" :articles="sortedArticles"></router-view>
      </transition>
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
  computed: {
    sortedArticles: function() {
      let sortedArr = this.articles;
      return sortedArr.sort(function(a, b) {
        a = Math.floor(new Date(a.createdAt.split('-').reverse().join('-')).getTime() / 1000);
        b = Math.floor(new Date(b.createdAt.split('-').reverse().join('-')).getTime() / 1000);
        return a - b;
      });
    }
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
*, *:after, *:before {
  box-sizing: border-box;
}
body {
  margin: 0;
  position: relative;
  min-height: calc(100vh - 1rem);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2, h3 {
  line-height: 1;
}
.page {
  text-align: left;
  width: 60%;
  margin: 1rem auto 0 auto;
}
@media screen and (max-width: 600px) {
  body {
    min-height: 110vh;
  }
  .page {
    width: 80%;
  }
}
a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: darkred;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateX(100px);
}
</style>
