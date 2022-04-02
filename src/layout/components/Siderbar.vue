<template>
  <div id="siderbar">
    <div class="sider-index">
      <ul class="siderbar-top">
        <li data-value="interest">
          <svg-icon icon-class="love-line" />
          <a ka="side_interesr"> 感兴趣 </a>
        </li>
        <li data-value="contact">
          <svg-icon icon-class="chat" />
          <a ka="side_contact">沟通过</a>
        </li>
        <li data-value="deliver">
          <svg-icon icon-class="plane" />
          <a ka="side_deliver">已投递</a>
        </li>
        <li data-value="interview">
          <svg-icon icon-class="interview" />
          <a ka="side_interview">面试</a>
        </li>
      </ul>
      <ul class="siderbar-bottom">
        <li @click="scrollToTop"><svg-icon icon-class="up" /></li>
        <li>反馈</li>
        <li>微信</li>
        <li>微博</li>
      </ul>
      <ft-dialog
        :visible="visible"
        @onClose="closeDialog"
      >
        <type-dialog :type="type" />
      </ft-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted, onBeforeUnmount, onUnmounted, toRefs, nextTick } from 'vue'
import TypeDialog from './TypeDialog/index.vue'
import { SiderBar } from '.'
export default {
  name: 'SiderBar',
  components: {
    TypeDialog
  },
  setup() {
    const oBuffer = reactive({
      oSiderList: [] as HTMLElement[]
    })
    const state = reactive({
      visible: false as boolean,
      type: ''
    })

    onMounted(() => {
      // sidebar挂载完毕后，进行事件委托，点击弹出对应弹窗
      // 这里还要个弹窗的组件
      const siderBody = document.querySelector('#siderbar')!
      const oSiderbar = document.querySelector('.siderbar-top')!

      const oSiderList: HTMLLIElement[] = Array.from(
        oSiderbar.querySelectorAll('li')
      )
      oBuffer.oSiderList = oSiderList
      for (let i = 0; i < oSiderList.length; i++) {
        ((i) => {
          oSiderList[i].addEventListener(
            'click',
            bindEvent.bind(null, i, oSiderList),
            true
          )
        })(i)
      }
      window.onscroll = () => {
        let sl: number = -Math.max(document.body.scrollTop, document.documentElement.scrollTop)
        if(49 + sl <= 0){
           document.getElementById('siderbar')!.style.top = '0'
           return 
        }
        document.getElementById('siderbar')!.style.top = 49 + sl + 'px'
      }
      // nextTick(() => {
      //   if(!siderBody)return
      //   document.body.appendChild(siderBody)
      // })
    })
    // onUnmounted(() => {
    //   const siderBody = document.querySelector('#siderbar')!
    //   if(!siderBody)return
    //   document.body.removeChild(siderBody)
    // })

    onBeforeUnmount(() => {
      const len = oBuffer.oSiderList.length
      const localEle = oBuffer.oSiderList
      for (let i = 0; i < len; i++) {
        localEle[i].removeEventListener(
          'click',
          bindEvent.bind(null, i, localEle),
          true
        )
      }
    })
    const bindEvent = (i: number, list: Array<HTMLElement>) => {
      const type = list[i].dataset.value!
      state.visible = true
      state.type = type
    }
    const closeDialog = (value: boolean) => {
      state.visible = value
    }
    const scrollToTop = () => {
      setTimeout(() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }, 20)
    }
    return {
      ...toRefs(state),
      closeDialog,
      scrollToTop
    }
  }
}
</script>
<style lang="less" scoped>
#siderbar {
  background: #fff;
  position: fixed;
  top: 49px;
  right: 0;
  z-index: 1005;
  box-shadow: -1px 0 8px rgb(0 0 0 / 3%);
  height: 100%;
  .sider-index {
    width: 40px;
    height: 100%;
    float: left;
    position: relative;
    transition: 0.2s color;
    &:hover a {
      color: #414a60!important;
    }
    transition: 0.2s width;
    &:hover {
      width: 60px;
    }
    .siderbar-top {
      width: 100%;
      float: left;
      padding-top: 15px;
      text-align: center;

      li {
        display: block;
        position: relative;
        font-size: 12px;
        color: #9fa3b0;
        line-height: 14px;
        cursor: pointer;
        padding: 10px 0;
        a {
          color: #fff;
          padding: 8px 0;
          display: block;
          transition: 0.2s all;
        }
        &:hover svg {
          color: #00d7c6;
        }
        &:hover a {
          color: #00d7c6!important;
        }

        svg {
          font-size: 22px;
        }
      }
    }
    .siderbar-bottom {
      position: absolute;
      width: 100%;
      bottom: 140px;
      text-align: center;
      li {
        display: block;
        position: relative;
        font-size: 12px;
        color: #9fa3b0;
        line-height: 14px;
        cursor: pointer;
        padding: 10px 0;
        &:hover {
          color: #00d7c6;
        }
      }
      svg {
        font-size: 22px;
      }
    }
  }
}
@media (max-height: 780px) {
  .siderbar-bottom {
    bottom: 80px!important;
  }
  #siderbar .siderbar-bottom li a,
  #siderbar .siderbar-top li a {
    padding: 10px 0;
  }
}
</style>
