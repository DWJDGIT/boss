<template>
  <div class="content">{{ type }}</div>
</template>

<script lang='ts'>
export default {
  name: 'TypeDialog',
  components: {},
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
 .content{
   width: 100%;
   text-align: center;
 }
</style>
