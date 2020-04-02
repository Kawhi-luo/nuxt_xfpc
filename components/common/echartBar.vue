<!--
柱状图模版 Luozhi 2020-03-24
-->
<template>
  <div :id="propId"></div>
</template>
<script>
export default {
  props: ["propId", "xData", "yData", "tip"],
  mounted() {
    this.$nextTick(function() {
      let myChart = this.$echarts.init(document.getElementById(this.propId));
      myChart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.xData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: this.tip,
            type: "bar",
            barWidth: "60%",
            // itemStyle: {
            //     normal: {color: 'rgba(0,0,0,0.05)'}
            // },
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#000",
                //   fontSize: "18px"
                }
              }
            },
            data: this.yData,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 1,
                      color: "#50e0fd" // 100% 处的颜色
                    },
                    {
                      offset: 0,
                      color: "#1d62f0" // 0% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }
        ]
      });
    });
  }
};
</script>
<style lang="less" scoped>
</style>