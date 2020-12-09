// 导入组件，组件必须声明 name
import EchartsBar from './EchartsBar.vue'

// 为组件添加 install 方法，用于按需引入
EchartsBar.install = function (Vue) {
    Vue.component(EchartsBar.name, EchartsBar)
}

export default EchartsBar