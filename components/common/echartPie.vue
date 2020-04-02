<!--
折线图模版 Luozhi 2020-03-24
-->
<template>
  <div v-show="xData" :id="propId"></div>
</template>
<script>
export default {
  props: ["propId", "xData", "yData", "tip"],
  mounted() {
    this.$nextTick(function() {
      let pieData = [];
      for (let i in this.xData) {
        pieData.push({
          value: this.yData[i],
          name: this.xData[i]
        });
      }
      let myChart = this.$echarts.init(document.getElementById(this.propId));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: this.tip,
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            data: pieData,
            label: {
              normal: {
                textStyle: {
                  fontSize: "11",
                  color: "#414141"
                },
                formatter(a) {
                  let text = a.name;
                  return text.length < 4
                    ? text
                    : `${text.slice(0, 5)}\n${text.slice(5)}`;
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: "#FFFFFF",
                borderWidth: 2,
                labelLine: {
                  show: true, //隐藏标示线
                  lineStyle: {
                    color: "#000"
                  }
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: ["#c8efff", "#a7e7ff", "#79d9f1", "#52cdd5", "#00acee"]
      });
    });
  }
};
</script>
<style lang="less" scoped>
</style>