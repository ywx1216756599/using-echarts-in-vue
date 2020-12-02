// 导入组件，组件必须声明 name
import EchartsPie from './EchartsPie.vue'

// 为组件添加 install 方法，用于按需引入
EchartsPie.install = function (Vue) {
    Vue.component(EchartsPie.name, EchartsPie)
}

export default EchartsPie