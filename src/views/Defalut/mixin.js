const echartsMixin = {
  props: {
    // 图形宽度
    chartWidth: {
      type: String,
      default: '100%'
    },
    // 图形高度
    chartHeight: {
      type: String,
      default: '400px'
    },
    // 图形数据
    chartData: {
      type: Object,
      default: () => ({ columns: [], rows: [] })
    },
    // 其他配置项
    extend: {
      type: Object,
      default: () => ({})
    },
    // 特殊设置项
    settings: {
      type: Object,
      default: () => ({})
    },
    //series配置项
    series: {
      type: Object | Array,
      default: () => ({})
    },
    noData: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      myChart: null // 画图对象置null
    }
  },
  watch: {
    chartData: {
      handler() {
        this.initChart()
      },
      deep: true
    },
    extend: {
      handler() {
        this.initChart()
      },
      deep: true
    },
    series: {
      handler() {
        this.initChart()
      },
      deep: true
    },
    settings: {
      handler() {
        console.log(2)
        this.initChart()
      },
      deep: true
    },
    chartWidth() {
      if (this.myChart) {
        this.myChart.resize()
      }
    },
    chartHeight() {
      if (this.myChart) {
        this.myChart.resize()
      }
    }
  }
}

export default echartsMixin
