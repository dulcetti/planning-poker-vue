<template>
  <main class="container -play">
    <CardsList />
    Your card: <span v-if="selectedCard > 0">{{ selectedCard }}</span>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import createStore from '@/store';
import CardsList from '@/components/cards-list/cards-list.vue';

@Options({
  components: {
    CardsList,
  },
  computed: {
    selectedCard() {
      return createStore.state.selectedCard;
    },
  },
})
export default class Play extends Vue {}
</script>
