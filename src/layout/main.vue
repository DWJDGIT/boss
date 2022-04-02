<template>
  <div class="app-wrapper">
    <boss-header />
    <app-main />
    <sider-bar v-if="isSiderBar" />
  </div>
</template>

<script lang="ts">
import { BossHeader, AppMain, SiderBar } from './components'
import { useRoute } from 'vue-router'
import { reactive, computed } from 'vue'
export default {
  name: 'LayOut',
  components: {
    BossHeader,
    AppMain,
    SiderBar
  },
  setup() {
    const state = reactive({
      route: useRoute()
    })
    const isSiderBar = computed(() => state.route.meta.siderbar)
    return {
      isSiderBar
    }
  }
}
</script>
<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
