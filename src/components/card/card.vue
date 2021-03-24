<template>
  <div class="card" :class="{ choosed: value === selected }" v-on:click="chooseCard(value)">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import createStore from '@/store';

@Options({
  props: {
    value: Number,
  },
  computed: {
    selected() {
      createStore.state.selectedCard;
    },
  },
  methods: {
    chooseCard: (value: number) => {
      createStore.state.selectedCard = value;
    },
  },
})
export default class Card extends Vue {
  value!: number;
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
