<template>
  <div id="app">
    <LineDemo />
    <BarDemo/>
    <router-view />
  </div>
</template>
<script>
import LineDemo from '@/components/line.vue'
import BarDemo from '@/components/bar.vue'
export default {
  name: 'App',
  components:{
    LineDemo,
    BarDemo
  },
  created() {
  },

}
</script>
<style lang="scss">
</style>
