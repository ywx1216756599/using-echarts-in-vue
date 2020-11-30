<template>
  <div id="app">
    <x-line
      :settings="{
        theme: 'dark',
        legendName: {
          gas: '气',
        },
        smooth: [true, 0.1, true],
        stack: { 合并: ['气', 'hot'] },
        label: { show: true, position: 'top' },
        switchAxis: { axis: 'xAxis' },
        myAxis: {
          axisSite: { right: ['small'] },
          axisType: ['normal', '%'],
          axisName: ['值','比率']
        },
      }"
      :chartData="{
        columns: ['time', 'gas', 'hot', 'small'],
        rows: [
          { time: '1-1', gas: 120, hot: 130, small: '0.8' },
          { time: '1-2', gas: 220, hot: 230, small: '0.8' },
          { time: '1-3', gas: 200, hot: 150, small: '0.8' },
          { time: '1-4', gas: 150, hot: 180, small: '0.8' },
          { time: '1-5', gas: 180, hot: 220, small: '0.8' },
          { time: '1-6', gas: 160, hot: 330, small: '0.8' },
          { time: '1-7', gas: 200, hot: 250, small: '0.8' },
          { time: '1-8', gas: 220, hot: 130, small: '0.8' },
        ],
      }"
    ></x-line>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {

  }
}
</script>
<style lang="scss">
</style>
