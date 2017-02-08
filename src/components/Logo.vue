<template>
  <a href="https://www.ltodd.co.uk">
    <div class="footer">
      <svg class="logo" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.000000 189.000000">
        <path :fill="colours[Math.floor(Math.random() * 19) + 1]" d="M2 2c0 1.1-.4 2-1 2-.7 0-1 31-1 91.1 0 77.6.2 91.3 1.4 92.5 1.2 1.2 14.5 1.4 89.3 1.4 68.8 0 88.3-.3 89.6-1.3 1.6-1.1 1.7-6.8 1.9-71.2l.3-70 25.1-.3c24-.2 25.2-.3 27-2.3 1.7-1.9 1.9-4.1 2.2-18.8.3-14.4.1-17.4-1.5-20.9L233.5 0h-76.7C88.5 0 80 .2 80 1.5c0 .9-.7 1.8-1.5 2.1-1.3.5-1.5 3.7-1.5 19.9 0 16.7.2 19.4 1.7 20.6 1.2 1.1 7.5 1.5 26.7 1.9l25.1.5v101h-80L50 76c-.3-39.3-.9-72.5-1.4-73.8C47.8 0 47.7 0 24.9 0 2.7 0 2 .1 2 2z"></path>
      </svg>
    </div>
  </a>
</template>

<script>
export default {
  name: 'logo',
  data () {
    return {
      colours: [
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border: 2px solid #333;
  margin: 0;
  margin-left: 1rem;
  padding: 0;
  transition: box-shadow 0.4s;
}

.footer:hover {
  box-shadow: #666 2px 4px 10px -1px;
}

.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -50%);
  width: 60%;
}

</style>
