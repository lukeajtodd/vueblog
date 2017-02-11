<template>
  <div class="welcome">
    <h3>Hello and welcome!</h3>
    <p>You will find my most recent articles in the navigation above and I hope you find a story worth remembering.</p>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style scoped>
.welcome {
  margin-left: 1rem;
  margin-top: 1rem;
  padding: 1rem;
}
h3 {
  font-family: 'Bungee';
  font-size: 1.6rem;
  color: #333;
  line-height: 1;
}
p {
  margin: 0;
  font-size: 1.2rem;
  width: 60%;
}
</style>