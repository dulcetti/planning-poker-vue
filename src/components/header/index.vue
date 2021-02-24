<template>
  <header class="header">
    <h1 class="brand">Planning Card Pocker</h1>
    <nav class="nav">
      <ul class="menu">
        <li class="item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="item">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Header extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  > .nav {
    > .menu {
      list-style-type: none;
      padding: 0;

      > .item {
        display: inline-block;
        margin: 0 10px;

        > a {
          color: #42b983;
          font-weight: bold;

          &.router-link-exact-active {
            color: #2c3e50;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
