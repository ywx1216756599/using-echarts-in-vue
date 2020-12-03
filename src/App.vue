<template>
  <div id="app">
    <LineDemo />
    <BarDemo />
    <PieDemo />
    <ScatterDemo />
    <router-view />
  </div>
</template>
<script>
import LineDemo from '@/components/line.vue'
import BarDemo from '@/components/bar.vue'
import PieDemo from '@/components/pie.vue'
import ScatterDemo from '@/components/scatter.vue'
export default {
  name: 'App',
  components: {
    LineDemo,
    BarDemo,
    PieDemo,
    ScatterDemo
  },
  created() {
  },

}
</script>
<style lang="scss">
</style>
