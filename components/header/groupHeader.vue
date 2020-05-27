<template>
    <header>
        <div>
            <i>logo</i>
            <span>研究院</span>
        </div>
        
        <ul>
            <li @click="exit()">姓名</li>
        </ul>
        
    </header>
</template>
<script>
import cookie from "js-cookie";
export default {
    methods: {
        exit() {
            cookie.remove('token')
            this.$router.push({
              name: "login"
            });
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>