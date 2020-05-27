<template>
  <div>
    <el-button type="primary" @click="getUserInfo()" :loading="false">登录</el-button>
    <el-button @click="login_click()">test</el-button>
    <org-sel ref="orgSelect"></org-sel>
  </div>
</template>
<script>
import md5 from "js-md5";
import cookie from "js-cookie";
import orgSel from "~/components/common/orgSel";
export default {
  layout: "login",
  components: {
    orgSel
  },
  data() {
    return {};
  },
  // watch: {
  //   "$store.state.auth.isLogin"(val) {
  //     if (val) {
  //     } else {
  //     }
  //   }
  // },
  methods: {
    login_click() {
      // this.$store.commit("auth/loginChange", true);
      // console.log(this.$store.state.auth.isLogin);
      // cookie.set("token", "luo");
      // this.$ls.set('pass','123')
      // console.log(cookie.get('name'))
      // console.log(this.$ls.get('pass'))
      // this.getUserInfo();
    },
    // 获取用户信息
    getUserInfo() {
      this.loading = true;
      let pass = "a123456" + true;
      md5(pass);
      let hash = md5.create();
      hash.update(pass);
      let pwd = hash.hex(pass);
      this.$axios
        .$POST_QS({
          serviceName: "base_url",
          apiUrl: "/v2/authuser/userAuthLogin",
          params: {
            loginName: "qujl",
            password: pwd,
            flag: "1"
          }
        })
        .then(res => {
          if (res.data.code === "success") {
            const data = res.data.data;
            // 保存用户信息
            this.$ls.set('userInfo', data);
            // this.$store.commit("userInfo/setUser", data);
            this.loading = false;
            this.$refs.orgSelect.getOrgList(data.id);
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch(_ => {
          this.$message.error("用户信息接口");
        });
    }
  }
};
</script>
<style lang="less">
</style>