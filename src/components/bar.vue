<template>
  <div class="bar">
    <x-bar
      :chartData="{
        columns: ['time', 'gas', 'water', 'small'],
        rows: [
          { time: '1-1', gas: '123', water: '234', small: '0.2' },
          { time: '1-2', gas: '123', water: '234', small: '0.2' },
          { time: '1-3', gas: '123', water: '234', small: '0.2' },
          { time: '1-4', gas: '123', water: '234', small: '0.2' },
          { time: '1-5', gas: '123', water: '234', small: '0.2' },
          { time: '1-6', gas: '123', water: '234', small: '0.2' },
          { time: '1-7', gas: '123', water: '234', small: '0.2' },
          { time: '1-8', gas: '123', water: '234', small: '0.2' },
          { time: '1-9', gas: '123', water: '234', small: '0.2' },
          { time: '1-10', gas: '123', water: '234', small: '0.2' },
          { time: '1-11', gas: '123', water: '234', small: '0.2' },
        ],
      }"
      :settings="{
        theme: 'dark',
        legendName: {
          water: '水'
        },
        stack:{
          结合:['水','gas']
        },
        label:{
          show: true, 
          position:'inside'
        },
        myAxis:{
          axisSite: {
            right: ['small']
          }
        }
      }"
    ></x-bar>
  </div>
</template>

<script>
export default {
  name:"BarDemo"
}
</script>

<style>
</style>