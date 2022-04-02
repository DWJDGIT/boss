<template>
  <div
    v-if="isLocaleExternal"
    :style="styleExternalIcon"
    v-bind="$attrs"
    class="svg-external-icon svg-icon"
  />
  <svg
    v-else
    :class="svgClass"
    v-bind="$attrs"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { computed } from 'vue'
import { isExternal } from '@/utils/index'
export default {
  name: 'SvgIcon',
  components: {},
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props: any) {
    const isLocaleExternal: any = computed(() => {
      return isExternal(props.iconClass)
    })
    const iconName = computed(() => {
      return `#icon-${props.iconClass}`
    })
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    })
    const styleExternalIcon = computed(() => {
      return {
        mask: `url(${props.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
      }
    })
    return {
      isLocaleExternal,
      iconName,
      svgClass,
      styleExternalIcon
    }
  }
}
</script>
<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
