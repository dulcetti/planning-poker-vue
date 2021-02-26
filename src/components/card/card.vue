<template>
  <div class="card">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    value: Number,
  },
})
export default class Card extends Vue {
  value!: number;
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
