<template>
  <main class="container -home">
    <Header />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Header from '@/components/header/header.vue';

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
