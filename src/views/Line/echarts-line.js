//导入父类
import defaultConfig from './../Default/index'

export default class OptionLine extends defaultConfig {
  constructor({ rows = [], columns = [], header = columns[0] }, settings = {}, extend = {}, series = {}) {
    super()
    if (rows.length === 0 || columns.length === 0 || !header) {
      this.option = {}
    } else {
      const keyArr = columns.filter(item => item !== header)
      this.option = this.defaultConfig
      this.option.xAxis.data = rows.map(item => item[header])
      this.option.series = keyArr.map(item => {
        return {
          name: item,
          type: 'line',
          data: rows.map(list => list[item]),
        }
      })
      this.mySettings(this.option, settings)
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
  }
  mySettings = (option, settings) => {
    if (settings.legendName) {
      const { legendName } = settings
      this.setOtherName(option, legendName)
    }
    if (settings.stack) {
      const { stack } = settings
      this.setStack(option, stack)
    }
    if (settings.label) {
      const { label } = settings
      this.setLabel(option, label)
    }
    if (settings.myAxis) {
      let axis = settings.switchAxis ? settings.switchAxis.axis : 'xAxis'
      const { myAxis } = settings
      this.setMyAxis(option, myAxis, axis)
    }
    if (settings.xAxisType) {
      this.setXAxisType(option, settings)
    }
    if (settings.area) {
      this.setArea(option, settings)
    }
    if (settings.smooth) {
      this.setSmooth(option, settings)
    }
    if (settings.switchAxis) {
      this.setSwitchAxis(option, settings)
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
  setStack(option, stack) {
    const stackKeyArr = Object.keys(stack)
    stackKeyArr.forEach(item => {
      option.series.forEach(list => {
        for (let key in stack[item]) {
          if (list.name === stack[item][key]) {
            list.stack = item
          }
        }
      })
    })
  }
  setLabel(option, label) {
    option.series.forEach(item => {
      item.label = this.setNewStyle(label, this.label)
    })
  }
  setMyAxis(option, myAxis, axis) {
    let showAxis = 'xAxis'
    if (axis == showAxis) {
      showAxis = 'yAxis'
    }
    if (myAxis.axisType) {
      option[showAxis] = myAxis.axisType.map(item => {
        switch (item) {
          case 'K':
            return {
              type: 'value',
              axisLabel: {
                formatter: value => `${value / 1000}K`
              }
            }
          case '%':
            return {
              type: 'value',
              axisLabel: {
                formatter: value => `${value * 100}%`
              }
            }
          case 'normal':
            return {
              type: 'value',
              axisLabel: {
                formatter: value => value
              }
            }
          default:
            alert('请输入正确的axisType值')
            return {
              axisLabel: {
                formatter: value => value
              }
            }
        }
      })
    } else {
      option[showAxis] = [{ type: 'value' }, { type: 'value' }]
    }
    if (myAxis.axisName) {
      const { axisName } = myAxis
      option[showAxis] = this.setNewStyle(axisName.map(item => ({ name: item })), option[showAxis])
    }
    if (!myAxis.axisSite) {
      return
    }
    const { axisSite } = myAxis
    let axisSiteArr = Object.keys(axisSite)
    axisSiteArr.forEach(item => {
      if (item === 'right') {
        option.series.forEach(list => {
          axisSite[item].forEach(key => {
            if (list.name === key) {
              list[`${showAxis}Index`] = 1
            }
          })
        })
      }
    })
  }
  setXAxisType = (option, { xAxisType }) => {
    if (Object.prototype.toString.call(option.xAxis) === '[object Array]') {
      option.xAxis.forEach(item => {
        item.type = xAxisType
      })
    } else {
      option.xAxis.type = xAxisType
    }
  }
  setArea = (option, { area }) => {
    if (area) {
      option.series = option.series.map(item => this.setNewStyle({
        areaStyle: {
        },
        stack: item.stack ? item.stack : '总量'
      }, item))
    }
  }
  setSmooth = (option, { smooth }) => {
    if (smooth instanceof Array) {
      option.series.forEach((item, index) => item.smooth = smooth[index])
    } else {
      option.series.forEach(item => item.smooth = smooth)
    }
  }
  setSwitchAxis = (option, { switchAxis }) => {
    let otherAxis = 'yAxis'
    const { axis } = switchAxis
    if (axis == 'yAxis') {
      otherAxis = 'xAxis'
    }
    option[otherAxis].type = 'value'
    option[axis].type = 'category'
    option[axis].data = option[otherAxis].data ? option[otherAxis].data : option[axis].data
    option[otherAxis].data = ''
  }
}