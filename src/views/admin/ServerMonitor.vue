<template>
  <v-row class="server-monitor-charts">
    <v-col class="col-lg-6 col-12 chart-container">
      <div class="moni-chart mem-chart"></div>
    </v-col>
    <v-col class="col-lg-6 col-12 chart-container">
      <div class="moni-chart cpu-chart"></div>
    </v-col>
    <v-col class="col-lg-6 col-12 chart-container">
      <div class="moni-chart net-in-chart"></div>
    </v-col>
    <v-col class="col-lg-6 col-12 chart-container">
      <div class="moni-chart net-out-chart"></div>
    </v-col>
  </v-row>
</template>

<script>
import * as echarts from "echarts";

import { getServerMonitorData } from "network/access";
export default {
  name: "ServerMonitor",
  created() {
    getServerMonitorData().then((res) => {
      this.chartData = res;
    });
  },
  data() {
    return {
      chartData: [],
    };
  },
  watch: {
    chartData() {
      this.initMemChart();
      this.initCpuChart();
      this.initNetInChart();
      this.initNetOutChart();
    },
  },
  methods: {
    initMemChart() {
      let memChart = echarts.init(document.querySelector(".mem-chart"), "dark");
      let memChartOption = {
        title: {
          text: "服务器内存使用率",
          left: "center",
          top: "15px",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          name: "时间",
          type: "time",
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          type: "value",
          name: "使用率(%)",
        },
        series: [
          {
            name: "使用率",
            data: (() => {
              let res = [];
              let len = this.chartData[0].datapoints.length;
              this.chartData[0].datapoints.forEach((item, index) => {
                index % Math.floor(len / 100) === 0 &&
                  res.push([item.timestamp, item.average]);
              });
              return res;
            })(),
            type: "line",
            lineStyle: {
              width: 3,
            },
            symbol: "emptyCircle",
            showSymbol: false,
          },
        ],
      };
      memChart.setOption(memChartOption);
      window.addEventListener("resize",()=>{
        memChart.resize()
      })
    },
    initCpuChart() {
      let cpuChart = echarts.init(document.querySelector(".cpu-chart"), "dark");
      let cpuChartOption = {
        title: {
          text: "服务器CPU使用率",
          left: "center",
          top: "15px",
        },
        tooltip: {
          trigger: "axis",
          formatter: "",
        },
        xAxis: {
          name: "时间",
          type: "time",
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          type: "value",
          name: "使用率(%)",
        },
        series: [
          {
            name: "CPU使用率",
            data: (() => {
              let res = [];
              let len = this.chartData[1].datapoints.length;
              this.chartData[1].datapoints.forEach((item, index) => {
                index % Math.floor(len / 100) === 0 &&
                  res.push([item.timestamp, item.average.toFixed(2)]);
              });
              return res;
            })(),
            type: "line",
            lineStyle: {
              width: 3,
            },
            symbol: "emptyCircle",
            showSymbol: false,
          },
        ],
      };
      cpuChart.setOption(cpuChartOption);
       window.addEventListener("resize",()=>{
        cpuChart.resize()
      })
    },
    initNetInChart() {
      let netInChart = echarts.init(
        document.querySelector(".net-in-chart"),
        "dark"
      );
      let netInChartOption = {
        title: {
          text: "服务器网络流入速率",
          left: "center",
          top: "15px",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            //格式化函数
            return `

            ${params[0].axisValueLabel}
              </br>
              ${params[0].marker}
              <b>网络流入速率：
              ${params[0].data[1]}
              B/s</b>`;
          },
        },
        xAxis: {
          name: "时间",
          type: "time",
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          type: "value",
          name: "网络流入速率(B/s)",
        },
        series: [
          {
            name: "网络流入速率",
            data: (() => {
              let res = [];
              let len = this.chartData[2].datapoints.length;
              this.chartData[2].datapoints.forEach((item, index) => {
                index % Math.floor(len / 100) === 0 &&
                  res.push([item.timestamp, item.average.toFixed(2)]);
              });
              return res;
            })(),
            type: "line",
            lineStyle: {
              width: 3,
            },
            symbol: "emptyCircle",
            showSymbol: false,
          },
        ],
      };
      netInChart.setOption(netInChartOption);
       window.addEventListener("resize",()=>{
        netInChart.resize()
      })
    },
    initNetOutChart() {
      let netOutChart = echarts.init(
        document.querySelector(".net-out-chart"),
        "dark"
      );
      let netOutChartOption = {
        title: {
          text: "服务器网络流出速率",
          left: "center",
          top: "15px",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            //格式化函数
            return `

            ${params[0].axisValueLabel}
              </br>
              ${params[0].marker}
              <b>网络流出速率：
              ${params[0].data[1]}
              B/s</b>`;
          },
        },
        xAxis: {
          name: "时间",
          type: "time",
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          type: "value",
          name: "网络流出速率(B/s)",
        },
        series: [
          {
            name: "网络流出速率",
            data: (() => {
              let res = [];
              let len = this.chartData[3].datapoints.length;
              this.chartData[3].datapoints.forEach((item, index) => {
                index % Math.floor(len / 100) === 0 &&
                  res.push([item.timestamp, item.average.toFixed(2)]);
              });
              return res;
            })(),
            type: "line",
            lineStyle: {
              width: 3,
            },
            symbol: "emptyCircle",
            showSymbol: false,
          },
        ],
      };
      netOutChart.setOption(netOutChartOption);
       window.addEventListener("resize",()=>{
        netOutChart.resize()
      })
    },
  },
};
</script>

<style lang='scss' scoped>
.moni-chart {
  width: 100%;
  height: 400px;
}
.server-monitor-charts{
  min-width: 900px!important;
}
.chart-container {
  padding: 32px;
}
</style>