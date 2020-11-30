# 项目安装/使用方法

1. 拉取项目到本地文件夹内
2. 确保安装 node 和 vue-cli4+（https://nodejs.org/en/ 下载 node, npm install -g @vue/cli 下载最新版 vue-cli）
3. 打开当前拉取文档的终端 输入 npm install 下载依赖项
4. npm run serve 启动项目
5. npm run build 打包项目

## XCharts 的使用方法

### XCharts 的 settings 配置项使用说明

#### x-bar

| 属性名 | 类型 | 用法  | 说明 | 特殊说明 |
| :--- | :---: | :--: | :--: | ------: |
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


