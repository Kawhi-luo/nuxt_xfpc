<template>
    <header>
        <div>
            <i>logo</i>
            <span>研究院</span>
        </div>
        
        <ul>
            <li @click="exit()">退出</li>
        </ul>
    </header>
</template>
<script>
export default {
    methods: {
        exit() {
            this.$router.push({
              "path": "/login"
            });
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>