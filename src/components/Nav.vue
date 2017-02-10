<template>
  <div class="nav">
    <ul>
      <li v-for="n in 3">
        <router-link 
          :to="{ name: 'Article', params: { article_id: articles[n - 1].id } }">
          {{ articles[n - 1].title }}
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

@media screen and (max-width: 800px) {
  ul {
    text-align: center;
  }
  li {
    position: relative;
    display: block;
    margin: 15px 10px;
  }
}

a {
  color: #333;
  font-weight: bold;
}

a:hover {
  color: darkred;
}
</style>
