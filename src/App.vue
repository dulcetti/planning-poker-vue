<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Header from '@/components/header/header.vue';
import Footer from '@/components/footer/footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100vh;
}

html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-around;
  padding: 30px;
}
</style>
