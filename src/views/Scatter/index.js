// 导入组件，组件必须声明 name
import EchartsScatter from './EchartsScatter.vue'

// 为组件添加 install 方法，用于按需引入
EchartsScatter.install = function (Vue) {
    Vue.component(EchartsScatter.name, EchartsScatter)
}

export default EchartsScatter