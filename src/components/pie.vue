<template>
  <div class="pie">
    <x-pie
    :settings="settings"
    :chartData="{
      columns: ['time','value'],
      rows: [
        {time: '1-1',value:'111'},
        {time: '1-2',value:'123'},
        {time: '1-3',value:'165'},
        {time: '1-4',value:'134'},
        {time: '1-5',value:'193'},
        {time: '1-6',value:'152'}
      ]
    }"
    ></x-pie>
  </div>
</template>

<script>
export default {
  name:'PieDemo',
  data(){
    this.settings = {
      theme: 'dark',
      name: '某圆饼图',
      selected: 'single',
      radius: [['0%','20%'],['35%','40%'],['45%','50%']],
      center: ['20%','40%'],
      roseType: 'radius',
      more:[
        ['1-1','1-2'],
        ['1-1','1-2','1-3','1-4'],
        ['1-1','1-2','1-3','1-4','1-5','1-6'],
      ]
    }
    return{}
  }
}
</script>

<style>

</style>