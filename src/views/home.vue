<template>
  <main class="container -home">
    <Header msg="Welcome to Your Vue.js + TypeScript App" />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/header/index.vue';

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
