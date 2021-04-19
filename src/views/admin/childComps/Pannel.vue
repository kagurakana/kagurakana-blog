<template>
  <v-row>
    <v-col class="col-12 col-lg-6 chart-container">
      <pv-chart :accessTime="accessTimes" />
    </v-col>
    <v-col class="col-12 col-lg-6 chart-container">
      <refer-chart :refers="refers" />
    </v-col>
    <v-col class="col-12 col-lg-6 chart-container">
      <region-chart :regions="regions" />
    </v-col>
    <v-col class="col-12 col-lg-6 chart-container">
      <v-card class="chart" id="blog-date-chart"></v-card>
    </v-col>
  </v-row>
</template>

<script>
import ReferChart from "./ReferChart";
import PvChart from "./PvChart";
import RegionChart from "./RegionChart.vue";
import { getAccessData } from "network/access";
export default {
  name: "Pannel",
  created() {
    getAccessData().then((res) => {
      this.accessData = res.data;
    });
  },
  mounted() {},
  components: {
    PvChart,
    ReferChart,
    RegionChart,
  },
  data() {
    return {
      accessData: [],
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
</style>