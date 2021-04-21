<template>
  <v-row>
    <v-col class="col-12 col-lg-4 chart-container">
      <v-card class="top-card" width="100%" height="100px">
        <v-card-title class="card-title">pv访问：{{ count }}</v-card-title>
      </v-card>
    </v-col>
    <v-col class="col-12 col-lg-4 chart-container">
      <v-card class="top-card" width="100%" height="100px">
        <v-card-title class="card-title">文章总数：32</v-card-title>
      </v-card>
    </v-col>
    <v-col class="col-12 col-lg-4 chart-container">
      <v-card class="top-card" width="100%" height="100px">
        <v-card-title class="card-title">上次更新：2021年4月20日</v-card-title>
      </v-card>
    </v-col>
    <v-col class="col-12 col-lg-4 chart-container">
      <pv-chart :accessTime="accessTimes" />
    </v-col>
    <v-col class="col-12 col-lg-4 chart-container">
      <load-time-chart :loadTimes="loadTimes" />
    </v-col>
    <v-col class="col-12 col-lg-4 chart-container">
      <refer-chart :refers="refers" />
    </v-col>
    <v-col class="col-12 col-lg-6 chart-container">
      <region-chart :regions="regions" />
    </v-col>
    <v-col class="col-12 col-lg-6 chart-container">
      <browser-chart class="chart" :browserArr="browsers" />
    </v-col>
  </v-row>
</template>

<script>
import ReferChart from "./ReferChart";
import PvChart from "./PvChart";
import RegionChart from "./RegionChart.vue";
import BrowserChart from "./BrowserChart";
import LoadTimeChart from "./LoadTimeChart";
import { getAccessData } from "network/access";
export default {
  name: "Pannel",
  created() {
    getAccessData().then((res) => {
      this.accessData = res.data;
      this.count = res.data.length;
    });
  },
  mounted() {},
  components: {
    PvChart,
    ReferChart,
    RegionChart,
    BrowserChart,
    LoadTimeChart,
  },
  data() {
    return {
      accessData: [],
      count: 0,
    };
  },
  computed: {
    accessTimes() {
      return this.accessData.map((item) => {
        return item.accessTime;
      });
    },
    refers() {
      return this.accessData.map((item) => {
        return item.accessRefer;
      });
    },
    regions() {
      let regionsArr = [];
      this.accessData.forEach((item) => {
        item.addr && regionsArr.push(item.addr);
      });
      return regionsArr;
    },
    browsers() {
      let browserArr = [];
      this.accessData.forEach((item) => {
        item.accessUa && browserArr.push(item.accessUa);
      });
      return browserArr;
    },
    loadTimes() {
      let laodTimeArr = [];
      this.accessData.forEach((item) => {
        !isNaN(item.loadTime) && laodTimeArr.push(item.loadTime * 1);
      });
      return laodTimeArr;
    },
  },
};
</script>

<style lang='scss' scoped>
#pannel-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-width: 500px;
  overflow: scroll;
}
.chart {
  height: 400px;
  width: 550px;
}
.chart-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-card {
  background: #536976; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #292e49,
    #536976
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #292e49,
    #536976
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .card-title {
    color: $base-lightgray-color;
    font-size: 26px;
    font-weight: 300;
  }
}
</style>