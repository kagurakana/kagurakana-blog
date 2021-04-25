<template>
  <v-card class="chart" id="refer-chart"></v-card>
</template>

<script>
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
export default {
  name: "ReferChart",
  mounted() {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      CanvasRenderer,
      LegendComponent,
      BarChart,
    ]);
  },
  props: {
    refers: {
      type: Array,
    },
  },
  watch: {
    refers() {
      this.initReferChart();
    },
  },
  methods: {
    initReferChart() {
      let referChart = echarts.init(document.getElementById("refer-chart")); // 指定图表的配置项和数据
      let referChartOption = {
        title: {
          text: "访问来源",
          left: "center",
          top: "15px",
        },
        tooltip: {},
        legend: {
          data: [],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            selectedMode: "single",
            label: {
              formatter: `{b}: {d}%`,
            },
            data: (() => {
              let o = {};
              let arr = [];
              this.refers.forEach((refer) => {
                refer = refer.match(/(https?:\/\/.*?\/)/g);
                refer = refer && refer[0];
                switch (true) {
                  case /-|(null)/g.test(refer):
                    typeof o["未知"] === "undefined"
                      ? (o["未知"] = 1)
                      : o["未知"]++;
                    break;
                  case /baidu/g.test(refer):
                    typeof o["百度"] === "undefined"
                      ? (o["百度"] = 1)
                      : o["百度"]++;
                    break;
                  case /bing/g.test(refer):
                    typeof o["必应"] === "undefined"
                      ? (o["必应"] = 1)
                      : o["必应"]++;
                    break;
                  default:
                    typeof o[refer] === "undefined"
                      ? (o[refer] = 1)
                      : o[refer]++;
                }
              });
              for (const key in o) {
                arr.push({ name: key, value: o[key] });
              }
              arr.sort((a, b) => {
                a.value - b.value;
              })[0].selected = true;
              return arr;
            })(),
          },
        ],
      };
      referChart.setOption(referChartOption);
      window.addEventListener("resize",()=>{
        referChart.resize()
      })
    },
  },
};
</script>

<style lang='scss' scoped>
</style>