<template>
  <div>
    <v-menu class="menu-box"></v-menu>
    <main class="main-box">
      <v-header class="header-box"></v-header>
      <nuxt class="content-box" />
    </main>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import VHeader from "~/components/header/mainHeader.vue";
import VMenu from "~/components/menu/index.vue";
export default {
  components: {
    VHeader,
    VMenu
  },
};
</script>
<style>
@import "~/assets/css/common.css";
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
ul {
  padding-left: 0;
  list-style-type: none;
}
a {
  text-decoration: none;
}
</style>