<template>
  <div class="nav">
    <ul class="nav-list">
      <nav-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import NavItem from './NavItem.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed, onMounted, reactive } from '@vue/runtime-core'
export default {
  name: 'NavIndex',
  components: {
    NavItem
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    // const path = window.location
    const routes = computed(() => router.options.routes)
    const state: any = reactive({})
    onMounted(() => {
      state.item = document.querySelectorAll('.nav-list')!
      state.liList = state.item[0].querySelectorAll('li') // target
      state.aList = state.item[0].querySelectorAll('a')
      const len = state.liList.length
      const name = route.name
      const arr: any = Array.from(state.aList) // <a></a>
      for (let i = 0; i < len; i++) {
        ((i) => {
          if (arr[i].getAttribute('href').indexOf(name) !== -1) {
            clearCur()
            state.liList[i].className = 'cur'
          } else if (arr[i].getAttribute('href') === '/') {
            clearCur()
            state.liList[i].className = 'cur'
          }
          state.liList[i].onclick = function() {
            clearCur()
            state.liList[i].className = 'cur'
          }
        })(i)
      }
    })
    const clearCur = () => {
      for (let i = 0; i < state.liList.length; i++) {
        if (state.liList[i].className === 'cur') {
          state.liList[i].className = ''
        }
      }
    }
    return {
      routes
    }
  }
}
</script>
<style lang="less" scoped></style>
