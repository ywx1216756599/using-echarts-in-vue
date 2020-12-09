
export default class defaultConfig {
  constructor () {
    this.defaultConfig = {
      title: {
        show: false,
        text: '',
        link: '',
        target: 'blank',
        textStyle: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 18
        },
        subtext: '',
        sublink: '',
        subtarget: 'blank',
        subtextStyle: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        left: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto'
      },
      legend: {
        show: true
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      toolbox: {
        show: false,
        orient: 'horizontal',
        itemSize: 15,
        itemGap: 10,
        showTitle: true,
        top: 0,
        right: 20,
        feature: {
          restore: {},
          magicType: {
            type: ['line', 'bar']
          },
          saveAsImage: {}
        }
      },
      xAxis: {
        show: true,
        type: 'category',
        position: 'bottom',
        offset: 0,
        name: '',
        nameLocation: 'end',
        nameTextStyle: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 14
        },
        inverse: false,
        axisLine: {
          show: true,
          symbol: ['none', 'arrow'],
          symbolSize: [8, 15],
          symbolOffset: [0, 12]
        },
        splitLine: {
          show: true
        }
      },
      yAxis: {
        show: true,
        type: 'value',
        position: 'bottom',
        offset: 0,
        name: '',
        nameLocation: 'end',
        nameTextStyle: {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 14
        },
        inverse: false,
        axisLine: {
          show: true,
          symbol: ['none', 'arrow'],
          symbolSize: [8, 15],
          symbolOffset: [0, 12]
        },
        splitLine: {
          show: true
        }
      },
      series: []
    }
    this.label = {
      show: true,
      fontSize: 12
    }
  }

  // 重新设置新样式
  setNewStyle (newData, oldData) {
    const newDataArr = Object.keys(newData)
    if (newDataArr != 0) {
      newDataArr.forEach(item => {
        if (!oldData.hasOwnProperty(item)) {
          oldData = Object.assign(oldData, { [item]: newData[item] })
        } else {
          if (Object.prototype.toString.call(newData[item]) == '[object Object]') {
            this.setNewStyle(newData[item], oldData[item])
          } else {
            oldData[item] = newData[item]
          }
        }
      })
    }
    return oldData
  }

  // 更新默认配置
  thisDefaultConfig (option, config) {
    option = this.setNewStyle(config, option)
  }

  // 隐藏xy轴
  hiddenXY (option) {
    option.xAxis = { show: false }
    option.yAxis = { show: false }
  }
}
