<template>
    <div id="Main_map">
        dituaaaaaaaaaaaa
    </div>
</template>
<script>
export default {
    mounted() {
        this.$axios
        .$GET({
          serviceName: "base_url",
          apiUrl: "/v2/erecord/getAerialviewImgInfo",
          params: {
            unitId: this.$ls.get('userInfo').orgcode
          }
        })
        .then(res => {
          if (res.data && res.data.code === "success") {
            this.unitInfoArr = res.data.data;
            debugger
          } else {
            this.$message.error(res.data.message);
          }
        });
    }
}
</script>