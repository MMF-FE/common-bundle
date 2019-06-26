<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div v-if="loaded">
      <vue-echarts class="echarts" autoresize :options="chartConfig"></vue-echarts>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { loadScript } from '@/common/loadScript'
import pieConfig from '@/common/chartConfig/pie'

// @ts-ignore
pieConfig.series[0].data = [1, 2, 3, 4]

@Component({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    loaded = false
    chartConfig = pieConfig
    async created() {
        await loadScript('http://127.0.0.1:8081/vue2/vue-echarts.js')
        this.loaded = true

        // @ts-ignore
        Vue.component('vue-echarts', VueECharts)

        await loadScript('http://127.0.0.1:8081/common/xlsx.js')
        // @ts-ignore
        console.log(Xlsx)
    }
}
</script>

<style lang="scss">
.echarts {
    width: 400px;
    height: 400px;
}
</style>
