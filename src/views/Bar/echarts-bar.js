//导入父类
import defaultConfig from './../Default/index'

export default class OptionBar extends defaultConfig {
  constructor({ rows = [], columns = [], header = columns[0] }, settings = {}, extend = {}, series = {}) {
    super()
    if (rows.length === 0 || columns.length === 0 || !header) {
      this.option = {}
    } else {
      //去除数组中横坐标的key值
      const keyArr = columns.filter(item => item !== header)
      //配置默认项
      this.option = this.defaultConfig
      //设置横坐标的data
      const axisData = rows.map(item => item[header])
      this.option.xAxis.data = axisData
      //设置series参数 显示数据
      //循环遍历去除横坐标值的数组
      this.option.series = keyArr.map(item => {
        return {
          name: item,
          type: 'bar',
          //循环事件数据设置data值
          data: rows.map(list => list[item]),
        }
      })
      //特殊或某图的配置项
      this.mySettings(this.option, settings, axisData)
      // series配置项
      this.option.series = this.option.series.map(item => this.setNewStyle(series, item))
      //而外配置项 会覆盖前面的配置
      this.option = this.setNewStyle(extend, this.option)//去除数组中横坐标的key值
    }
  }
  mySettings = (option, settings) => {
    if (settings.legendName) {
      const { legendName } = settings
      this.setOtherName(option, legendName)
    }
    if (settings.switchAxis) {
      const { switchAxis } = settings
      this.setSwitchAxis(option, switchAxis)
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
  setSwitchAxis(option, switchAxis) {
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
  setXAxisType = (option, { xAxisType }) => {
    if (Object.prototype.toString.call(option.xAxis) === '[object Array]') {
      option.xAxis.forEach(item => {
        item.type = xAxisType
      })
    } else {
      option.xAxis.type = xAxisType
    }
  }
}