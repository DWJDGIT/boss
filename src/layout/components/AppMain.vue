<template>
  <section id="main">
    <router-view v-slot="{ Component }">
      <!-- <transition> -->
        <div>
          <component :is="Component" />
        </div>
      <!-- </transition> -->
    </router-view>
  </section>
</template>

<script lang="ts">
export default {
  name: 'AppMain'
}
</script>
<style lang="less" scoped></style>
