// 导入组件，组件必须声明 name
import EchartsLine from './EchartsLine.vue'

// 为组件添加 install 方法，用于按需引入
EchartsLine.install = function (Vue) {
    Vue.component(EchartsLine.name, EchartsLine)
}

export default EchartsLine