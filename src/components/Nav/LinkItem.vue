<script lang="ts">
import { h } from 'vue'
export default {
  name: 'LinkItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(props: any): any {
    const vnodes: any = []
    // here, if you need to show icon, please remove comment
    // if (props.icon) {
    //   if (props.icon.includes('ft-icon')) {
    //     vnodes.push(h('i', { class: [props.icon, 'sub-ft-icon'] }))
    //   } else {
    //     vnodes.push(h('i', { 'icon-class': props.icon }))
    //   }
    // }
    if (props.title) {
      vnodes.push(h('span', { slot: props.title }, props.title))
    }
    return vnodes
  }
}
</script>
<style lang="less" scoped>

</style>
