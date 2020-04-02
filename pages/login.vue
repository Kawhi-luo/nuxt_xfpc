<template>
  <div>
    <el-button type="primary" @click="login_click()">登录</el-button>
  </div>
</template>
<script>
import md5 from "js-md5";

export default {
  layout: "login",
  methods: {
    login_click() {
      let pass = "a123456true";
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
            this.$router.push({
              name: "index"
            });
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch(_ => {
          this.loading = false;
        });
    }
  }
};
</script>
<style lang="less">
</style>