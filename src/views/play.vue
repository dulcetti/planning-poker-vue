<template>
  <main class="container -play">
    <CardsList />
    <SelectedCard />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import CardsList from '@/components/cards-list/cards-list.vue';
import SelectedCard from '@/components/selected-card/selected-card.vue';

@Options({
  components: {
    CardsList,
    SelectedCard,
  },
})
export default class Play extends Vue {}
</script>
