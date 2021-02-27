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

html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  min-height: 100%;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
