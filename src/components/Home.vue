<template>
  <header>
    <router-link to="/"><h1 class="header">{{ title }}</h1></router-link>
  </header>
</template>

<script>
  export default {
    name: 'home',
    props: [ 'title' ]
  }
</script>

<style>
  .header {
    font-size: 5rem;
    line-height: 1;
    padding: calc(0.5rem + 5px);
    width: 10rem;
    position: relative;
    margin-left: 10px;
    margin-bottom: 1rem;
    font-family: 'Bahiana';
  }
  .header:before {
    content: "";
    width: 5px;
    height: 0%;
    background: #333;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s;
  }
  .header:hover:before {
    height: 100%;
  }
</style>