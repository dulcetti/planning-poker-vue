<template>
  <main class="container -play">
    <h1>Play this game</h1>
    <Card v-bind:value="10" />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Card from '@/components/card/card.vue';

@Options({
  components: {
    Card,
  },
})
export default class Play extends Vue {}
</script>
