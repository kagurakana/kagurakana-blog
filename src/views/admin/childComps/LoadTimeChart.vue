<template>
  <v-card class="chart" id="load-time-chart"></v-card>
</template>

<script>
import * as echarts from "echarts/core";
import {
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

export default {
  name: "LoadTimeChart",
  mounted() {
    echarts.use([
      GridComponent,
      LegendComponent,
      MarkLineComponent,
      MarkPointComponent,
      LineChart,
      CanvasRenderer,
      TooltipComponent,
      TitleComponent,
    ]);
  },
  props: {
    loadTimes: {
      type: Array,
    },
  },
  watch: {
    loadTimes() {
      this.initLoadTimeChart();
    },
  },
  methods: {
    initLoadTimeChart() {
      let LoadTimeChart = echarts.init(
        document.getElementById("load-time-chart")
      );
      let LoadTimeChartOption = {
        title: {
          text: "加载时间",
          left: "center",
          top: "15px",
        },
        tooltip: {},
        xAxis: {
          name: "计数",
          type: "category",
          data: (() => {
            let arr = [];
            this.loadTimes.forEach((item, idx) => {
              arr.push(idx + 1);
            });
            return arr;
          })(),
        },
        yAxis: {
          type: "value",
          name: "加载时间（ms）",
        },
        series: [
          {
            name: "加载时间",
            data: this.loadTimes,
            type: "line",
            markPoint: {
              data: [
                { type: "max", name: "耗时最长" },
                { type: "min", name: "耗时最短" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均加载时长" }],
            },
          },
        ],
      };

      LoadTimeChartOption && LoadTimeChart.setOption(LoadTimeChartOption);
      window.addEventListener("resize", () => {
        LoadTimeChart.resize();
      });
    },
  },
};
</script>

<style lang='scss' scoped>
</style>