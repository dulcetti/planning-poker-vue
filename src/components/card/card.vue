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

<style scoped lang="scss">
.card {
  align-items: center;
  background-color: #2c3e50;
  border: 5px solid #fff;
  border-radius: 12px;
  color: #fff;
  cursor: grab;
  display: flex;
  font-size: 4rem;
  height: 200px;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 140px;

  &:active:hover {
    cursor: grabbing;
  }

  &:before {
    background-color: #2c3e50;
    border-radius: 8px;
    bottom: -15px;
    content: ' ';
    left: -15px;
    position: absolute;
    right: -15px;
    top: -15px;
    z-index: -1;
  }
}
</style>
