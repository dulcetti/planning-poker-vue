<template>
  <header class="header">
    <nav class="nav">
      <h1 class="brand">Planning Card Pocker</h1>
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

<style scoped lang="scss">
.header {
  background-color: #2c3e50;

  > .nav {
    display: flex;
    margin: 0 auto;
    max-width: 1280px;

    > .brand {
      color: #fff;
      margin-right: 40px;
    }

    > .menu {
      display: flex;
      list-style-type: none;
      padding: 0;

      > .item {
        display: inline-block;
        margin: 0 10px;

        > a {
          align-items: center;
          color: #42b983;
          display: flex;
          font-weight: bold;
          height: 100%;
          padding: 15px 25px;

          &.router-link-exact-active {
            background-color: #fff;
            color: #2c3e50;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
