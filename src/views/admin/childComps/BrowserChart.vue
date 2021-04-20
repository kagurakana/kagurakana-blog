<template>
  <v-card class="chart" id="browser-chart"></v-card>
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
  name: "BrowserChart",
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
    browserArr: {
      type: Array,
    },
  },
  watch: {
    browserArr() {
      console.log(1111111111);
      this.initBrowserChart();
    },
  },
  methods: {
    initBrowserChart() {
      let browserChart = echarts.init(document.getElementById("browser-chart")); // 指定图表的配置项和数据
      let browserChartOption = {
        title: {
          text: "浏览器类型",
          left: "center",
          top: "15px",
        },
        tooltip: {},
        legend: {
          data: [],
        },
        series: [
          {
            name: "ua",
            type: "pie",
            radius: ["30%", "50%"],
            selectedMode: true,
            label: {
              formatter: `{b}: {d}%`,
            },
            data: (() => {
              let o = {};
              let arr = [];
              this.browserArr.forEach((browser) => {
                console.log(browser);
                switch (true) {
                  case /NULL/g.test(browser):
                    typeof o["未知"] === "undefined"
                      ? (o["未知"] = 1)
                      : o["未知"]++;
                    break;
                  case /Chrome/g.test(browser):
                    typeof o["谷歌浏览器"] === "undefined"
                      ? (o["谷歌浏览器"] = 1)
                      : o["谷歌浏览器"]++;
                    break;
                  default:
                    typeof o[browser] === "undefined"
                      ? (o[browser] = 1)
                      : o[browser]++;
                }
              });
              for (const key in o) {
                arr.push({ name: key, value: o[key] });
                arr.sort((a, b) => {
                  a.value - b.value;
                })[0].selected = true;
              }
              return arr;
            })(),
          },
        ],
      };
      browserChart.setOption(browserChartOption);
    },
  },
};
</script>

<style lang='scss' scoped>
</style>