<template>
  <div class="navbar">
    <transition-group>
      <ul
        v-for="(item, index) of levelList"
        :key="item.path"
      >
        <li
          v-if="item.redirect === 'noRedirect' || index === levelList.length - 1"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </li>
        <li v-else>
          <a @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </li>
      </ul>
    </transition-group>
  </div>

</template>

<script lang="ts">
interface localData {
  levelList: RouteLocationMatched[]
}
import { toRefs, reactive } from 'vue'
import { useRouter, useRoute, RouteLocationMatched } from 'vue-router'

import pathToRegexp from 'path-to-regexp'
export default {
  name: 'NavBar',
  components: {
  },
  props: {
    myclass: {
      type: String,
      default: ''
    }
  },
  setup() {
    const $router = useRouter() // 进行跳转
    const $route = useRoute() // 获取路由信息
    const data: localData = reactive({
      levelList: []
    })
    const handleLink = (item: any) => {
      const { redirect, path } = item
      if (redirect) {
        $router.push(redirect)
        return
      }
      $router.push(_pathCompile(path))
    }

    const getHome = () => {
      let matched = $route.matched.filter(
        (item) => item.meta && item.meta.title
      )
      const first = matched[0]

      if (!_isHome(first)) {
        matched = ([{ path: 'Home', meta: { title: 'Home' }}] as any).concat(matched)
        return
      }

      data.levelList = matched.filter(item => {
        if (item.meta && item.meta.title) {
          return item
        }
      })
    }

    function _isHome(route: any) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
    }

    function _pathCompile(path: any) {
      const { params } = $route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    }
    return {
      handleLink,
      getHome,
      ...toRefs(data)
    }
  }
}
</script>
<style lang="less" scoped>
.navbar{
  font-size: 0;
  float: left;
  margin-left: 15px;
  height: 49px;
  line-height: 49px;
  ul {
    display: inline-block;
    white-space: nowrap;
    vertical-align: top;
  }
  li{
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-size: 14px;
    margin: 0 7px;
  }
}
</style>
