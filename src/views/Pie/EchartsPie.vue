<template>
  <div class="echarts">
    <div
      :style="{ width: chartWidth, height: chartHeight }"
      class="no-data"
      v-if="noData"
    >
      <span>画图展无数据</span>
    </div>
    <div ref="pie" :style="{ width: chartWidth, height: chartHeight }"></div>
  </div>
</template>

<script>
import OptionPie from './echarts-pie'
import echartsMixin from './../Default/mixin'
import echarts from 'echarts'
export default {
  name: 'XPie',
  mixins: [echartsMixin],
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      let theme = ''
      if (this.settings.theme) {
        theme = this.settings.theme
      }
      //设置画图对象
      this.myChart = echarts.init(this.$refs.pie, theme)
      const pie = new OptionPie(this.chartData, this.settings, this.extend, this.series)
      this.myChart.setOption(pie.option)
    },
  }
}
</script>

