<!--
折线图模版 Luozhi 2020-03-24
-->
<template>
  <div :id="propId"></div>
</template>
<script>
export default {
  props: ["propId", "xData", "yData","tip"],
  mounted() {
    this.$nextTick(function() {
      let myChart = this.$echarts.init(document.getElementById(this.propId));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(24,149,236,1)",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          // formatter: '{b}<br />'+this.tip+':{c}'
        },
        color: ["#4472C5"],
        grid: {
          left: "4%",
          right: "8%",
          bottom: "8%",
          top: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.xData
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              show: false
            },
            splitNumber: 3
          }
        ],
        series: [
          {
            name: this.tip,
            type: "line",
            stack: "",
            smooth: true,
            lineStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#50e0fd" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#1d62f0" // 0% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            itemStyle: {
              normal: { borderColor: "#0061b1" }
            },

            data: this.yData
          }
        ]
      });
    });
  }
};
</script>
<style lang="less" scoped>
</style>