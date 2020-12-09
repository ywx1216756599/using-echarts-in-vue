//导入父类
import defaultConfig from './../Default/index'

export default class OptionPie extends defaultConfig {
  constructor({ rows = [], columns = [], header = columns[0] }, settings = {}, extend = {}, series={}) {
    super()
    if (rows.length === 0 || columns.length === 0 || !header) {
      this.option = {}
    } else {
      const keyArr = columns.filter(item => item !== header)
      const data = keyArr.map(item => rows.map(list => ({ value: list[item], name: list[header] })))[0]
      this.option = this.defaultConfig
      this.option.series = keyArr.map(item => {
        return {
          name: item,
          radius: '40%',
          center: ['50%', '50%'],
          type: 'pie',
          data,
        }
      })
      this.mySettings(this.option, settings, data)
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
  mySettings = (option, settings, data) => {
    const config = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      }
    }
    this.hiddenXY(option)
    this.showLabel(option)
    this.thisDefaultConfig(option, config)
    if (settings.more) {
      const { more } = settings
      this.setMorePie(option, more, data)
    }
    if (settings.selected) {
      const { selected } = settings
      this.setSelectedMode(option, selected)
    }
    if (settings.center) {
      const { center } = settings
      this.setCenter(option, center)
    }
    if (settings.radius) {
      const { radius } = settings
      this.setRadius(option, radius)
    }
    if (settings.roseType) {
      const { roseType } = settings
      this.setRiseType(option, roseType)
    }
    if (settings.name) {
      const { name } = settings
      this.setName(option, name)
    }
  }
  showLabel(option) {
    option.series.forEach(item => {
      item.label = this.setNewStyle({ show: true, formatter: '{b}' }, this.label)
    })
  }
  setMorePie(option, more, data) {
    let newData = []
    for (let item in more) {
      newData[item] = []
      more[item].forEach(list => {
        data.forEach(key => {
          if (list == key.name) {
            newData[item].push(key)
          }
        })
      })
    }
    option.series = newData.map((item, index) => {
      return {
        radius: [`${index * 50 / newData.length}%`, `${(index + 1) * 50 / newData.length - 5}%`],
        center: ['50%', '50%'],
        type: 'pie',
        data: item,
      }
    })
    option.series.forEach((item, index) => {
      if (index !== option.series.length - 1) {
        item.label = this.setNewStyle({ position: 'inside' }, this.label)
      }
    })
  }
  setSelectedMode(option, selected) {
    option.series.forEach(item => {
      item.selectedMode = selected
    })
  }
  setCenter(option, center) {
    option.series.forEach(item => {
      item.center = center
    })
  }
  setRadius(option, radius) {
    radius.forEach((item, index) => {
      if (Object.prototype.toString.call(item) === '[object Array]') {
        option.series[index].radius = radius[index]
      } else {
        option.series.forEach(list => list.radius = radius)
      }
    })
  }
  setRiseType(option, roseType) {
    option.series.forEach(item => {
      item.roseType = roseType
    })
  }
  setName(option, name) {
    if (Object.prototype.toString.call(name) === '[object Array]') {
      for (let item in name) {
        option.series[item].name = name[item]

      }
    } else {
      option.series.forEach(item => {
        item.name = name
      })
    }
  }
}