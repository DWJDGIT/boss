<template>
  <component
    :is="type"
    v-bind="linkProps(to)"
    @click.prevent="handleLink(to)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { isExternal } from '@/utils/index'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'AppLink',
  components: {},
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props: any) {
    const router = useRouter()
    const isLocaleExternal = computed(() => {
      return isExternal(props.to)
    })
    const type = computed(() => {
      if (isLocaleExternal) {
        return 'a'
      }
      return 'router-link'
    })
    const linkProps = (to: any) => {
      if (isLocaleExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to
      }
    }
    const handleLink = (to: string) => {
      if (to === '/') {
        router.push(to)
      } else {
        router.push({ name: to.replace(/\//g, '') })
      }
    }
    return {
      type,
      linkProps,
      handleLink
    }
  }
}
</script>
<style lang="less" scoped>
.cur{
  a {
    color: #00d7c6!important;
  }
}
a {
  display: block;
  padding: 0 5px;
  position: relative;
}
</style>
