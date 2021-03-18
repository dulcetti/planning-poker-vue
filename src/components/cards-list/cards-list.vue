<template>
  <section class="wrapper-cards">
    <h1 class="title">Choose your Card:</h1>
    <ul class="cards-list">
      <li v-for="value in values" v-bind:key="value" :class="{ choosed: value === selected }">
        <Card v-bind:value="value" />
      </li>
    </ul>
  </section>
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
    selected() {
      return createStore.state.selectedCard;
    },
    values() {
      return createStore.state.cardValues;
    },
  },
})
export default class CardsList extends Vue {}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
