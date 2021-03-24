<template>
  <main class="container -play">
    <CardsList />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import CardsList from '@/components/cards-list/cards-list.vue';

@Options({
  components: {
    CardsList,
  },
})
export default class Play extends Vue {}
</script>
