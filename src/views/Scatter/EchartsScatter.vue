<template>
  <div class="echarts">
    <div
      :style="{ width: chartWidth, height: chartHeight }"
      class="no-data"
      v-if="this.chartData.rows && this.chartData.rows.length == 0"
    >
      <span>画图展无数据</span>
    </div>
    <div
      ref="scatter"
      :style="{ width: chartWidth, height: chartHeight }"
    ></div>
  </div>
</template>

<script>
import OptionScatter from './echarts-scatter'
import echartsMixin from './../Default/mixin'
import echarts from 'echarts'
export default {
  name: 'XScatter',
  mixins: [echartsMixin],
  mounted() {
    this.initChart()
  },
  methods: {
    //初始化画图
    initChart() {
      //设置画图对象
      let theme = ''
      if (this.settings.theme) {
        theme = this.settings.theme
      }
      this.myChart = echarts.init(this.$refs.scatter, theme)
      //设置OptionScatter对象
      const scatter = new OptionScatter(this.chartData, this.settings, this.extend, this.series)
      //开始画图
      console.log(scatter.option)
      this.myChart.setOption(scatter.option)
    }
  }
}
</script>

<style scoped>
.no-data {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
