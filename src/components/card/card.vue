<template>
  <div class="card-container">
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
.card-container {
  align-items: center;
  background-color: #00a;
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: 4rem;
  height: 200px;
  justify-content: center;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 140px;

  &:before {
    border: 8px solid #fff;
    border-radius: 10px;
    content: '';
    display: block;
    height: 100%;
    left: 10px;
    position: absolute;
    top: 10px;
    width: 100%;
  }
}
</style>
