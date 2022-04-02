<template>
  <li
    v-if="!item.meta || !item.meta.hidden"
    :class="{ 'nav-item': true }"
  >
    <template
      v-if="
        hasOneShowingChild(item.children, item) && !item.children[0].children
      "
    >
      <app-link
        v-if="getChild(item.children)"
        :to="resolvePath(item.path)"
      >
        <link-item
          :icon="item.children[i].meta.icon || (item.meta && item.meta.icon)"
          :title="item.children[i].meta.title"
        />
      </app-link>
    </template>
    <!-- <template v-else></template> -->
  </li>
</template>

<script lang="ts">
import AppLink from './AppLink.vue'
import LinkItem from './LinkItem.vue'
import { isExternal } from '@/utils/index'
import path from 'path'
// import { ref, onMounted } from 'vue'
export default {
  name: 'NavItem',
  components: {
    AppLink,
    LinkItem
  },
  props: {
    item: {
      type: Object,
      require: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    },
    i: {
      type: Number,
      default: 0
    }
  },
  setup(props: any) {
    const hasOneShowingChild = (children: Array<any>, parent: any) => {
      if (!children) {
        return false
      }
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        return false
      }
    }

    const resolvePath = (routePath: string, item: any) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }

    const getChild = (children: any) => {
      if (children[0].meta) {
        return true
      }
      return false
    }

    return {
      getChild,
      hasOneShowingChild,
      resolvePath
    }
  }
}
</script>
<style lang="less" scoped></style>
