<!--
echart图模版 Luozhi 2020-03-24
-->
<template>
  <div :id="propId"></div>
</template>
<script>
export default {
  // 类型 特殊定义 容器id X轴 Y轴 提示字段
  props: {
    type: String,
    custom: String,
    propId: String,
    xData: Array,
    yData: Array,
    tip: String
  },
  mounted() {
    this.$nextTick(function() {
      let myChart = this.$echarts.init(document.getElementById(this.propId));
      switch (this.type) {
        case "bar":
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
                      color: "#000"
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
          break;
        case "line":
          myChart.setOption({
            tooltip: {
              trigger: "axis",
              backgroundColor: "rgba(24,149,236,1)",
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "#6a7985"
                }
              }
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
          break;
        case "pie":
          myChart.setOption({
            tooltip: {
              trigger: "item"
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
          break;
      }
    });
  }
};
</script>
<style lang="less" scoped>
</style>