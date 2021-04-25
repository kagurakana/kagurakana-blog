<template>
  <v-card class="chart" id="pv-chart"></v-card>
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
import moment from "moment";

export default {
  name: "PvChart",
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
  created() {},
  props: {
    accessTime: {},
  },
  watch: {
    accessTime() {
      this.initPvChart();
    },
  },
  methods: {
    initPvChart() {
      let pvChart = echarts.init(document.getElementById("pv-chart")); // 指定图表的配置项和数据
      const WEEK_DAYS = 7;
      let pvChartOption = {
        title: {
          text: "周pv",
          left: "center",
          top: "15px",
        },
        tooltip: {},
        legend: {
          data: ["pv"],
          right: "15px",
          top: "10px",
        },
        xAxis: {
          data: (() => {
            let arr = [];
            for (let i = WEEK_DAYS - 1; i >= 0; i--) {
              arr.push(moment().add(-i, "d").format("M月D日"));
            }
            return arr;
          })(),
        },
        yAxis: {},
        series: [
          {
            name: "pv",
            type: "bar",
            data: (() => {
              let arr = [];
              for (let i = 0; i < WEEK_DAYS; i++) {
                arr.push(0);
              }
              let current = Date.now();
              this.accessTime.forEach((date) => {
                let gepDay = Math.floor(
                  (current - date) / (1000 * 60 * 60 * 24)
                );
                gepDay < WEEK_DAYS && arr[gepDay]++;
              });
              return arr.reverse();
            })(),
          },
        ],
      };
      pvChart.setOption(pvChartOption);
      window.addEventListener("resize",()=>{
        pvChart.resize()
      })
    },
  },
};
</script>

<style lang='scss' scoped>
</style>