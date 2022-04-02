<template>
  <div id="header">
    <div class="inner home-inner">
      <div class="logo">
        <a title="Boss直聘">
          <span>Boss直聘</span>
        </a>
      </div>
      <nav-index />
      <div class="user-nav">
        <user-nav />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavIndex from '@/components/Nav/index.vue'
import UserNav from '@/components/UserNav/index.vue'
export default {
  name: 'BossHeader',
  components: {
    NavIndex,
    UserNav
  }
}
</script>
<style lang="less" scoped>
#header {
  width: 100%;
  height: 49px;
  background-color: #202329;
  box-shadow: 0 1px 8px rgb(0, 0, 0, 6%);
  position: relative;
  z-index: 1005;
  a {
    color: #fff;
  }
  .logo {
    float: left;
    padding: 6px 0 0 0;
  }
  .logo a {
    display: block;
    width: 110px;
    height: 36px;
    background: url('../../assets/logo-2x.png') 3px 7px no-repeat;
    background-size: 105px 19px;
  }
  .logo span {
    display: none;
  }
  .user-nav {
    float: right;
    margin-left: 5px;
    font-size: 14px;
    a {
      font-size: 14px;
      padding: 0 5px;
    }
    // .btns {
    //   display: inline-block;
    //   vertical-align: top;
    //   a {
    //     font-size: 14px;
    //     padding: 0 5px;
    //   }
    // }
  }
}
</style>
