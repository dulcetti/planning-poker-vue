<template>
  <div class="selected-card"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {},
})
export default class SelectedCard extends Vue {}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
