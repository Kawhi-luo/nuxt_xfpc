<template>
  <div class="menu-style">
    <ul>
      <li
        @click="jumpTo((nav.children.length>0), nav.resUrl)"
        v-for="nav in menu"
        :key="nav.id"
        class="fir-menu"
      >
        <div>{{nav.resName}}</div>
        <ul v-show="nav.children">
          <li
            @click.stop="jumpTo(false, item.resUrl)"
            v-for="item in nav.children"
            :key="item.id"
            class="sec-menu"
          >{{item.resName}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import menu from "~/assets/menu.json";
export default {
  data() {
    return {
      menu: menu
    };
  },
  created() {
    const that = this;
    let home =
      menu[0].children.length > 0 ? menu[0].children[0].resUrl : menu[0].resUrl;
    this.$bus.$on("jumpHome", function() {
      that.jumpTo(menu[0].children.length > 0, home);
    });
  },
  mounted() {
  
  },
  methods: {
    jumpTo(toggle, url) {
      if (toggle) {
        console.log("展开");
      } else {
        // 跳转
        this.$router.push({
          path: url
        });
      }
    }
  }
};
</script>
<style scoped lang="less">
.menu-style {
  color: #fff;
}
.sec-menu {
  padding-left: 20px;
}
</style>