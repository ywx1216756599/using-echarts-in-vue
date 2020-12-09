//导入父类
import defaultConfig from './../Default/index'

export default class OptionScatter extends defaultConfig {
  constructor({ rows = [], columns = [], header = columns[0] }, settings = {}, extend = {}, series = {}) {
    super()
    const { seriesType } = settings
    const keyArr = columns.filter(item => item !== header)
    this.option = this.defaultConfig
    this.option.series = keyArr.map((item, index) => {
      return {
        name: item,
        symbolSize: 20,
        type: seriesType ? seriesType[index] : 'scatter',
        data: rows.map(list => [list[header], list[item]]),
      }
    })
    this.mySettings(this.option, settings)
    // series配置项
    if (series instanceof Array) {
      this.option.series = this.option.series.map((item, index) => {
        if (series[index]) {
          return this.setNewStyle(series[index], item)
        }
        return item
      })
    } else {
      this.option.series = this.option.series.map(item => this.setNewStyle(series, item))
    }
    this.option = this.setNewStyle(extend, this.option)
  }
  mySettings = (option, settings) => {
    if (settings.legendName) {
      const { legendName } = settings
      this.setOtherName(option, legendName)
    }
    if (settings.xAxisType) {
      const { xAxisType } = settings
      this.setXAxisType(option, xAxisType)
    }
    if (settings.xAxisName) {
      const { xAxisName } = settings
      this.setXAxisName(option, xAxisName)
    }
    if (settings.yAxisName) {
      const { yAxisName } = settings
      this.setYAxisName(option, yAxisName)
    }
    if (settings.tooltipTrigger) {
      const { tooltipTrigger } = settings
      this.setTooltipTrigger(option, tooltipTrigger)
    }
    if (settings.axisVisible || settings.axisVisible === false) {
      const { axisVisible } = settings
      this.setAxisVisible(option, axisVisible)
    }
    if (settings.symbol) {
      const { symbol } = settings
      this.setSymbol(option, symbol)
    }
    if (settings.symbolSize) {
      const { symbolSize } = settings
      this.setSymbolSize(option, symbolSize)
    }
    if (settings.label) {
      const { label } = settings
      this.setLabel(option, label)
    }
  }
  setOtherName = (option, legendName) => {
    const keyArr = Object.keys(legendName)
    option.series.forEach(item => {
      if (keyArr.includes(item.name)) {
        item.name = legendName[item.name]
      }
    })
  }
  setXAxisType = (option, xAxisType) => {
    option.xAxis.type = xAxisType
  }
  setXAxisName = (option, xAxisName) => {
    option.xAxis.name = xAxisName
  }
  setYAxisName = (option, yAxisName) => {
    if (Object.prototype.toString.call(option.yAxis) === '[object Array]') {
      option.yAxis.forEach(item => item.name = yAxisName)
    } else {
      option.yAxis.name = yAxisName
    }
  }
  setTooltipTrigger = (option, tooltipTrigger) => {
    option.tooltip.trigger = tooltipTrigger
  }
  setAxisVisible = (option, axisVisible) => {
    option.xAxis.show = axisVisible
    if (Object.prototype.toString.call(option.yAxis) === '[object Array]') {
      option.yAxis.forEach(item => item.show = axisVisible)
    } else {
      option.yAxis.show = axisVisible
    }
  }
  setSymbol = (option, symbol) => {
    if (symbol instanceof Array) {
      symbol.forEach((item, index) => {
        option.series[index].symbol = item
      })
    } else {
      option.series.forEach(item => item.symbol = symbol)
    }
  }
  setSymbolSize = (option, symbolSize) => {
    if (symbolSize instanceof Array) {
      symbolSize.forEach((item, index) => {
        option.series[index].symbolSize = item
      })
    } else {
      option.series.forEach(item => item.symbolSize = symbolSize)
    }
  }
  setLabel(option, label) {
    option.series.forEach(item => {
      item.label = this.setNewStyle(label, this.label)
    })
  }

}