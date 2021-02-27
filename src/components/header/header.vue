<template>
  <header class="header">
    <nav class="nav">
      <h1 class="brand">
        <span>Planning Card Pocker</span>
        <strong>P<sup>2</sup></strong>
      </h1>
      <ul class="menu">
        <li class="item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="item">
          <router-link to="/play">Play</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {},
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
