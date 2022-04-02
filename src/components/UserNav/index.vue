<template>
  <div>
    <router-link
      to="/Resume?ka=nlp_resume_upload"
      class="link-sign-resume"
    >上传简历</router-link>

    <router-link
      to="/Resume?ka=header-geek"
      class="link-sign-resume"
    >我要找工作</router-link>

    <router-link
      to="/Resume?intent=1&ka=header-boss"
      class="link-scan"
    >我要招聘</router-link>

    <router-link
      to="/Block?ka=header-Login"
      class="userBlo user-block"
    >注册</router-link>

    <router-link
      to="/Block?ka=header-Register"
      class="userBlo user-block"
    >登录</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserNav',
  components: {},
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  setup(props: any) {
    return {}
  }
}
</script>
<style lang="less" scoped>
.link-sign-resume {
  position: relative;
  margin-right: 18px;
  display: inline;
}
.link-scan {
  margin-right: 17px;
}
.userBlo {
  box-sizing: content-box;
  position: relative;
  display: inline-block;
  background-color: #202329;
  border: 1px solid #5dd5c8;
  border-radius: 15px;
  height: 23px;
  line-height: 23px;
  padding: 0 9px 0 11px;
}
.userBlo.user-block {
  text-align: center;
  min-width: 0;
  color: #00c2c3;
  margin-left: 17px;
  letter-spacing: 1px;
  cursor: pointer;
  background: rgba(204, 172, 172, 0);
}
</style>
