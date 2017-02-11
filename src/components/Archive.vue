<template>
  <div class="archive">
    <ul>
      <li v-for="article in articles">
        <router-link 
          :to="{ name: 'Article', params: { article_id: article.id } }">
          {{ article.title }}
        </router-link>
        <span>{{ article.createdAt }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'archive',
    props: [ 'articles' ]
  }
</script>

<style scoped>
  .archive {
    margin-left: 1rem;
    padding-top: 1rem;
    display: inline-block;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 1rem 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom: 1px solid black;
  }
  a {
    padding-right: 1rem;
  }
  span {
    float: right;
    background: black;
    color: #fff;
    padding: 5px;
    margin-top: -5px;
  }
  @media screen and (max-width: 650px) {
    .archive {
      text-align: center;
      margin-bottom: 4rem;
    }
    a {
      display: block;
    }
    span {
      float: none;
      display: inline-block;
      margin-top: 5px;
    }
  }
</style>