<template>
  <div>
    <el-dialog :close-on-click-modal="false" :visible.sync="orgSelDialog" width="360px" center>
      <div
        v-for="item in orgList"
        :key="item.id"
        @click="getUserRole(item.orgCode, item.orgName, item.authId, item.authStatus)"
      >{{item.orgName}}</div>
    </el-dialog>
  </div>
</template>
<script>
import cookie from "js-cookie";
import fireRole from "~/config/role.js";
export default {
  data() {
    return {
      orgList: [],
      orgSelDialog: false,
      userId: "",
      roleArr: [], //角色id集合
      userInit: {}
    };
  },
  methods: {
    getOrgList(userId) {
      this.userId = userId;
      // 获取企业列表
      this.$axios
        .$POST_QS({
          serviceName: "base_url",
          apiUrl: "/v2/authuser/getOrgListByUserId",
          params: {
            userId: this.userId,
            flag: "1"
          }
        })
        .then(res => {
          if (res.data.code === "success") {
            // 多个企业 提供选择弹窗
            const data = res.data.data;
            if (data && data.length > 1) {
              this.orgList = data;
              this.orgSelDialog = true;
            } else if (data && data.length === 1) {
              // 单个企业 直接进入
              const postData = data[0];
              this.getUserRole(
                postData.orgCode,
                postData.orgName,
                postData.authId,
                postData.authStatus
              );
            } else {
              this.$message.error("暂无权限访问");
            }
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch(_ => {
          this.$message.error("企业列表接口");
        });
    },
    // 获取用户角色
    getUserRole(orgCode, orgName, authId, authStatus) {
      if (authStatus === "0") {
        // 更新用户信息
        // let userInfo = this.$store.state.userInfo.userInfo;
        let userInfo = this.$ls.get('userInfo');
        userInfo.orgCode = orgCode; // 登录修改
        userInfo.orgName = orgName; // 登录添加
        userInfo.authId = authId; // 登录添加
        // 更新选择企业信息
        // this.$store.commit("userInfo/setUser", newUser);
        this.$ls.set('userInfo', userInfo);
        // 保存集团用户运营中心code
        this.$ls.set('centerGroup', orgCode);
        // this.$store.commit("userInfo/setCenterGroup", orgCode);
        this.$axios
          .$POST_QS({
            serviceName: "base_url",
            apiUrl: "/v2/role/getUserRole",
            params: {
              userId: this.userId,
              orgCode: orgCode,
              flag: "1"
            }
          })
          .then(res => {
            if (res.data.code === "success") {
              const roleData = res.data.data;
              let flag = false;
              //sa用户特殊处理
              if (
                roleData === null ||
                roleData === "" ||
                roleData.length === 0
              ) {
                flag = true;
              }
              for (const i of roleData) {
                if (i.id !== fireRole.qyaqzyRoleId) {
                  flag = true;
                  break;
                }
              }
              this.roleArr = [];
              for (const i of roleData) {
                this.roleArr.push(i.id);
              }
              if (flag) {
                // 保存全部角色id
                this.$ls.set('userRole', this.roleArr);
                // this.$store.commit("userInfo/setRoleArr", this.roleArr);
                this.getSubcenter(orgCode);
              } else {
                this.$message.error("暂无权限访问");
              }
            } else {
              this.$message.error(res.data.message);
            }
          })
          .catch(_ => {
            this.$message.error("用户角色接口");
          });
      } else {
        this.$message.error("该企业已锁定");
      }
    },
    // 获取运营中心code
    getSubcenter(orgCode) {
      this.$axios
        .$GET({
          serviceName: "base_url",
          apiUrl: "/v2/org/getOrgInfoDetail",
          params: {
            orgCode: orgCode
          }
        })
        .then(res => {
          if (res.data.code === "success") {
            const data = res.data.data;
            // 保存运营中心code
            this.$ls.set('centerCode', data.subCenterCode);
            // this.$store.commit("userInfo/setCenterCode", data.subCenterCode);
            this.loginTo(orgCode);
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch(_ => {
          this.$message.error("运营中心接口");
        });
    },
    // 判断跳转页面
    loginTo(orgCode) {
      this.$axios
        .$POST_QS({
          serviceName: "base_url",
          apiUrl: "/v2/authorg/getOrgs",
          params: {
            orgCode: orgCode,
            flag: "1"
          }
        })
        .then(res => {
          if (res.data.code === "success") {
            const data = res.data.data;
            // 保存客户端token用于登录验证 假
            // 登录时保存 切换时不变
            if (!cookie.get("token")) {
              cookie.set(
                "token",
                this.$ls.get('userInfo').userToken
                // this.$store.state.userInfo.userInfo.userToken
              );
            }
            if (data != null && data.length > 1) {
              // 集团
              this.$router.push({
                name: 'group'
              });
            } else {
              // 首页
              this.$router.push({
                name: 'home'
              });
            }
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch(_ => {
          this.$message.error("getOrgs");
        });
    }
  }
};
</script>
<style lang="less" scoped>
</style>