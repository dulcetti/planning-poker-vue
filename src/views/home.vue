<template>
  <main class="container -home">
    <Header />
    <Card v-bind:value="10" />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Card from '@/components/card/card.vue';
import Header from '@/components/header/header.vue';

@Options({
  components: {
    Card,
    Header,
  },
})
export default class Home extends Vue {}
</script>
