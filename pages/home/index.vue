<!--
常规首页 luozhi 2020-03-24
-->
<template>
  <div class="home-content">
    <div class="left-home">
      <div class="home-total-mess"></div>
      <div class="home-map-box">
        <v-map />
      </div>
    </div>
    <div class="right-home">
      <bar-chart :tip="tip" :xData="xData" :yData="yData" propId="Line" class="line" />
    </div>
  </div>
</template>
<script>
import BarChart from "~/components/common/echartPie.vue";
import VMap from "~/components/home/map";
export default {
  components: {
    BarChart,
    VMap
  },
  data() {
    return {
      xData: ["a", "b", "c"],
      yData: ["1", "2", "3"],
      tip: "隐患数"
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.line {
  width: 200px;
  height: 200px;
}
.home-content {
  padding: 20px;
  .left-home {
    width: calc(100% - 460px);
    float: left;
    height: 100%;
    .home-total-mess {
      height: 112px;
      background: #f00;
      margin-bottom: 12px;
    }
    .home-map-box {
      height: calc(100% - 124px);
      padding: 15px;
      background: #666;
    }
  }
  .right-home {
    width: 450px;
    float: left;
    height: 100%;
    margin-left: 10px;
    background: #f00;
  }
}
</style>
