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
export default {
    methods: {
        exit() {
            alert('22');
            console.log(1);
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>