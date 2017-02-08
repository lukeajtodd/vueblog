<template>
  <div id="app">
    <div class="page">
      <home :title="title"></home>
      <navigation :articles="articles"></navigation>
      <router-view :articles="articles"></router-view>
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
      articles: [
        { id: 0, title: 'TITLE 1', content: 'lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur.' },
        { id: 1, title: 'TITLE 2', content: 'lorem ipsum dolor sit amet consecteur.' },
        { id: 2, title: 'TITLE 3', content: 'lorem ipsum dolor sit amet consecteur.' },
        { id: 3, title: 'TITLE 4', content: 'lorem ipsum dolor sit amet consecteur.' },
        { id: 4, title: 'TITLE 5', content: 'lorem ipsum dolor sit amet consecteur.' },
      ]
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
</style>
