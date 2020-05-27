<!--
常规首页 luozhi 2020-03-24
-->
<template>
  <div class="home-content flow-hide">
    <div class="left-home">
      <div class="home-total-mess"></div>
      <div class="home-map-box">
        <v-map />
      </div>
    </div>
    <div class="right-home">
      <custom-chart :tip="tip" :xData="xData" :yData="yData" type="bar" custom="normal" propId="Line" class="echart-box" />
    </div>
  </div>
</template>
<script>
import CustomChart from "~/components/common/echartCommon.vue";
import VMap from "~/components/home/map";
export default {
  components: {
    CustomChart,
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
.echart-box {
  display: inline-block;
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
