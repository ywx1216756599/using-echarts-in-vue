# 项目安装/使用方法

1. 拉取项目到本地文件夹内
2. 安装 node（https://nodejs.org/en/ 下载 node)
3. 打开电脑终端 输入node -v 和npm -v 看看是否出现对应的版本 出现--->安装完成
4. 安装vue-cli 在电脑终端中输入  npm install -g @vue/cli 下载最新版
5. 打开当前拉取文档的终端 输入 npm install 下载依赖项
6. npm run serve 启动项目
7. npm run build 打包项目

## XCharts 的使用方法

### 基本使用方法

1.在main.js中引入

```
//导入echarts
import echarts from 'echarts'
//导入主题部分(路径自拟)
import Func from '@/views/theme/index'
//导入封装的Xcharts部分(路径自拟)
import Xcharts from '@/views/index'
//导入Xcharts的css文件(路径自拟)
import '@/views/css/index.css'
//使用Xcharts
Vue.use(Xcharts)
//设置主题
Func(echarts)
```
2. 使用对应的模块 (柱状图为例)
```
//使用组件
<template>
   <x-bar
   :chartData="barData"
   ></x-bar>  //组件使用是x-xxx
</template>

<script>
export default {
  data(){
    return{
      barData:{
        columns: ['time', 'water', 'gas'],
        rows: [
          {time: '1-1', water: '20', gas: '40'},
          {time: '1-2', water: '20', gas: '40'},
          {time: '1-3', water: '20', gas: '40'},
          {time: '1-4', water: '20', gas: '40'}
        ],
      }
    }
  }
}
</script>
```

2. 数据传递

   | 属性 | 数据类型 | 默认传递项 | 说明 |
   | :--: | :--: | :--: | :--: |
   | chartWidth | String | 100% | 图形宽度 |
   | chartHeight | String | 400px | 图形高度 |
   | chartData | Object | { columns: [], rows: [] }) | 传递数据 |
   | chartData/rows | Array | [] | 画图数据(包含 x 轴线显示数据) |
   | chartData/columns | Array | [] | 需要画图的选项(第一个数据为 x 轴显示数据) |
   | settings | Object | {} | 特殊配置项数据(一些特殊的配置项，方便修改) |
   | extend | Object | {} | 修改配置项(根据 echats 官网的 option 配置,修改画图的配置) |
   | series | Object或Array | {} | 修改option的series配置项

### XCharts 的 settings 配置项使用说明

#### x-line

| 属性名 | 类型 | 用法  | 说明 | 特殊说明 |
| :---: | :---: | :--: | :--: | :------: |
| theme | String | 'drak' | 主题 | theme文件夹下有主题内容 |
| legendName | Object | {oldName: newName}|修改别名| - |
| smooth | Array或Boolean或Number | smooth:true | 设置弯曲值(范围:0-1) true为0.5 |类型是Array时 是给对应序号的折线图设置弯曲值 |
| stack | Object | {总和: ['name1', 'name2']} | 选择合并递增显示的数据 |修改别名后用别名| - |
| label | Object | {show: true,position: 'top'} | 设置数据是否显示(默认不显示)和显示的位置 | - |
| switchAxis | Object | {axis: 'yAxis'} | 切换数据的显示轴线位置(参数为:yAxis 或 xAxis) | - |
| area| Boolean| true| 是否显示堆叠面积(默认不显示)| - |
| myAxis | Object | 传递以下三个值 | 设置 y 轴的配置 | - |
| axisSite | Object | { right: ['fire'] } | 设置双 y 轴 | - |
| axisType | Array | ['normal', '%'] | 设置数据的属性,normal：默认,K：千,%：百分比 | - |
| axisName | Array | ['值', '比率'] | 设置 y 轴的名称 | - |

#### x-bar
| 属性名 | 类型 | 用法  | 说明 | 特殊说明 |
| :---: | :---: | :--: | :--: | :------: |
| theme | String | 'drak' | 主题 | theme文件夹下有主题内容 |
| legendName | Object | {oldName: newName}|修改别名| - |
| stack | Object | {总和: ['name1', 'name2']} | 选择合并递增显示的数据 |修改别名后用别名| - |
| label | Object | {show: true,position: 'top'} | 设置数据是否显示(默认不显示)和显示的位置 | - |
| switchAxis | Object | {axis: 'yAxis'} | 切换数据的显示轴线位置(参数为:yAxis 或 xAxis) | - |
| myAxis | Object | 传递以下三个值 | 设置 y 轴的配置 | - |
| axisSite | Object | { right: ['fire'] } | 设置双 y 轴 | - |
| axisType | Array | ['normal', '%'] | 设置数据的属性,normal：默认,K：千,%：百分比 | - |
| axisName | Array | ['值', '比率'] | 设置 y 轴的名称 | - |

#### x-pie
| 属性名 | 类型 | 用法  | 说明 | 特殊说明 |
| :---: | :---: | :--: | :--: | :------: |
| theme | String | 'drak' | 主题 | theme文件夹下有主题内容 |-|
| name | String | 'name' | 设置圆环图的名称 |-|
| selected | String,Boolean | 'single' | 选中模式(默认为false,其他值:true,'single','multiple') |-|
| radius | String,Array | '50%' | 设置半径(数组情况下可以设置圆环图) |设置为数组可以显示圆环图|
| center | Array | [ '50%','50%' ] | 设置图形位置(相对于x,y轴的位置) |-|
| roseType | String,Boolean | 'radius' | 是否展示成南丁格尔图(默认是false,其他值'radius','area') |
| more | Array | [ [ '1-1','1-2' ] , [ '1-1','1-2','1-3' ] ] | 多圆饼图时设置 |设置raius会改变状态，若需要，设置[[],[],[]]类型|


