<template>
  <div class="selected-card">
    <h2 class="title">Your card:</h2>
    <Card v-bind:value="selectedCard" v-if="selectedCard > 0"></Card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import createStore from '@/store';
import Card from '@/components/card/card.vue';

@Options({
  components: {
    Card,
  },
  computed: {
    selectedCard() {
      return createStore.state.selectedCard;
    },
  },
})
export default class SelectedCard extends Vue {}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
