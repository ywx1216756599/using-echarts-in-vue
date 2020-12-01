<template>
  <div class="echarts">
    <div
      :style="{ width: chartWidth, height: chartHeight }"
      class="no-data"
      v-if="noData"
    >
      <span>画图展无数据</span>
    </div>
    <div ref="line" :style="{ width: chartWidth, height: chartHeight }"></div>
  </div>
</template>

<script>
import OptionLine from './echarts-line'
import echartsMixin from './../Default/mixin'
import echarts from 'echarts'
export default {
  name: 'XLine',
  mixins: [echartsMixin],
  beforeMount() {
    window.addEventListener("resize", this.lineResize, false)
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.lineResize, false)
  },
  methods: {
    //初始化画图
    initChart() {
      let theme = ''
      if (this.settings.theme) {
        theme = this.settings.theme
      }
      //设置画图对象
      this.myChart = echarts.init(this.$refs.line, theme)
      //设置OptionBar对象
      const line = new OptionLine(this.chartData, this.settings, this.extend, this.series)
      //开始画图
      this.myChart.setOption(line.option)
    },
    lineResize() {
      this.$nextTick(() => {
        if (this.myChart) {
          this.myChart.resize()
        }
      })
    }
  },
}
</script>

<style scoped>
</style>
