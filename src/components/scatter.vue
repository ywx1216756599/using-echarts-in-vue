<template>
  <div class="scatter">
    <x-scatter
      :chartData="{
        columns: ['time', 'gas', 'water'],
        rows: [
          { time: '1-1', gas: 234, water: 262 },
          { time: '1-2', gas: 234, water: 262 },
          { time: '1-3', gas: 234, water: 262 },
          { time: '1-4', gas: 234, water: 262 },
          { time: '1-5', gas: 234, water: 262 },
          { time: '1-6', gas: 234, water: 262 },
          { time: '1-7', gas: 234, water: 262 },
          { time: '1-8', gas: 234, water: 262 },
          { time: '1-9', gas: 234, water: 262 },
        ],
      }"
      :settings="settings"
    ></x-scatter>
  </div>
</template>

<script>
export default {
  name: 'ScatterDemo',
  data() {
    this.settings = {
      theme: 'dark',
      legendName: {
        gas: '气'
      },
      label: {
        show: true,
        position: 'top',
      },
      symbolSize: [10, 50],
      symbol: ['arrow', 'triangle'],
      xAxisName: '这是x轴',
      yAxisName: '这是y轴',
    }
    return {}
  }
}
</script>

<style>
</style>