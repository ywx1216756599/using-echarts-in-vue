<template>
  <div id="app">
    <LineDemo />
    <BarDemo />
    <PieDemo />
    <router-view />
  </div>
</template>
<script>
import LineDemo from '@/components/line.vue'
import BarDemo from '@/components/bar.vue'
import PieDemo from '@/components/pie.vue'
export default {
  name: 'App',
  components: {
    LineDemo,
    BarDemo,
    PieDemo
  },
  created() {
  },

}
</script>
<style lang="scss">
</style>
