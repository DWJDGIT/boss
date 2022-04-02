<template>
  <div class="home-page">
    <!-- <carsouel
      :autoplay="true"
      :duration="8000"
      :inital="0"
      :hasDot="true"
      :hasDirector="true"
    >
      <car-item v-for="(item, index) of CarData" :key="index">
        <img :src="require(`../../assets/${item.img_name}`)" >
      </car-item>
    </carsouel> -->

    <!-- 快速注册 -->
    <div class="fast-register-box top-sign-box">
      <div class="inner home-inner">
        <img src="../../assets/zhipinAdv.png" class="icon-tip" />
        <div class="step-form" />
        <div class="fast-reg-desc" />
      </div>
    </div>
    <!-- 搜索 -->
    <div class="column-search-panel search-panel-new">
      <div class="inner home-inner">
        <div class="search-box">
          <div class="search-form">
            <ft-input
              v-model:value="searchValue"
              placeholder="搜索职位、公司"
              size="large"
              @input="handleSearch"
            >
              <template #prepend>
                <div class="label-text">hello</div>
              </template>
              <template #append>
                <div class="btn-search">
                  <ft-button>搜索</ft-button>
                </div>
              </template>
            </ft-input>
          </div>
          <div class="search-hot">
            <b>热门职位:</b>
            <ul>
              <li v-for="(item, index) of hotData" :key="index">
                <!-- <a :href="item.href">{{ item.title }}</a> -->
                <router-link
                  :to="{ path: 'JobDetail', query: { jobId: item.href } }"
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体main -->
    <div id="main-container" class="inner home-inner">
      <div class="home-box">
        <div class="home-sider">
          <div class="job-menu">
            <sider-menu :job="JobData">
              <template #icon>
                <svg-icon icon-class="right" />
              </template>
            </sider-menu>
          </div>
        </div>
        <div class="home-main">
          <div class="slider-box">
            <div class="promotion-main">
              <table>
                <tbody class="firstRow">
                  <td
                    valign="top"
                    rowspan="2"
                    colspan="2"
                    style="word-break: break-all"
                  >
                    <a href="/"><img src="../../assets/b1.jpg" alt="" /></a>
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- 职位tab列表 -->
        <div class="common-tab-box merge-city-job">
          <div class="box-title">热招职位</div>
          <h3>
            <span>IT·互联网</span>
            <span>金融</span>
            <span>房地产·建筑</span>
            <span>教育培训</span>
            <span>娱乐传媒</span>
            <span>医疗健康</span>
            <span>法律咨询</span>
            <span>供应链·物流</span>
            <span>采购贸易</span>
          </h3>
          <ul>
            <li>
              <div class="sub-li">
                <router-link to="/" class="job-info">
                  <div class="sub-li-top">
                    <p class="name">大数据开发工程师</p>
                    <svg-icon icon-class="guide"></svg-icon>
                    <p class="salary">15-28K·13薪</p>
                  </div>
                  <p class="job-text">
                    成都<span class="fline"></span>3-5年<span
                      class="fline"
                    ></span
                    >本科
                  </p>
                </router-link>
                <div class="sub-li-bottom">
                  <img src="../../assets/f_s.png" />
                  <a href="/">
                    <span class="name">金康赛力斯</span>
                    <span class="type">汽车生产</span>
                    <span class="fline"></span>
                    <span class="level">不需要融资</span>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="sub-li">
                <router-link to="/" class="job-info">
                  <div class="sub-li-top">
                    <p class="name">大数据开发工程师</p>
                    <svg-icon icon-class="guide"></svg-icon>
                    <p class="salary">15-28K·13薪</p>
                  </div>
                  <p class="job-text">
                    成都<span class="fline"></span>3-5年<span
                      class="fline"
                    ></span
                    >本科
                  </p>
                </router-link>
                <div class="sub-li-bottom">
                  <img src="../../assets/f_s.png" />
                  <a href="/">
                    <span class="name">金康赛力斯</span>
                    <span class="type">汽车生产</span>
                    <span class="fline"></span>
                    <span class="level">不需要融资</span>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="sub-li">
                <router-link to="/" class="job-info">
                  <div class="sub-li-top">
                    <p class="name">大数据开发工程师</p>
                    <svg-icon icon-class="guide"></svg-icon>
                    <p class="salary">15-28K·13薪</p>
                  </div>
                  <p class="job-text">
                    成都<span class="fline"></span>3-5年<span
                      class="fline"
                    ></span
                    >本科
                  </p>
                </router-link>
                <div class="sub-li-bottom">
                  <img src="../../assets/f_s.png" />
                  <a href="/">
                    <span class="name">金康赛力斯</span>
                    <span class="type">汽车生产</span>
                    <span class="fline"></span>
                    <span class="level">不需要融资</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <p class="common-tab-more">
            <a class="btn btn-outline" href="/c100010000/" ka="open_joblist">查看更多</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { shake } from '../../utils/comon'
import { hot } from '@/data/hotData'
import { jobData } from '@/data/jobData'
// import { job } from '@/data/job'
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const hotData = hot
    const JobData = jobData
    const searchValue = ref(null)
    const handleSearch = shake(() => {
      console.log(searchValue.value)
    }, 1000)
    return {
      hotData,
      JobData,
      searchValue,
      handleSearch,
    }
  },
})
</script>

<style lang="less" scoped>
.home-page {
  .fast-register-box.top-sign-box {
    height: 120px;
    background: #5dd5c8;
    position: relative;
    z-index: 1004;
    padding-top: 0;
  }
  .top-sign-box {
    background: #52cbc5;
    height: 115px;
    padding-top: 15px;
    position: relative;
    z-index: 1003;
    .inner {
      height: 100%;
      .icon-tip {
        float: left;
        height: 120px;
        margin: 0 35px 0 0;
        width: auto;
      }
      .step-form {
        float: right;
        position: relative;
      }
    }
    .home-inner {
      width: 1084px;
    }
  }
  .column-search-panel {
    position: relative;
    z-index: 1003;
    .search-box {
      width: 934px;
      margin: 0 auto;
      .search-hot {
        height: 41px;
        margin-bottom: 20px;
        overflow: hidden;
        box-sizing: border-box;
        width: 794px;
        padding: 9px 0 26px 0;
        color: #9fa3b0;
        font-size: 13px;
        b {
          margin-right: 18px;
          display: inline-block;
        }
        ul {
          display: inline-block;
          li {
            display: inline-block;
            a {
              color: #00c2b3 !important;
              margin: 0 22px 10px 0;
            }
          }
        }
      }
    }
  }
  .home-inner {
    max-width: 1184px;
  }
  .search-box {
    padding-top: 20px;
    width: 884px;
    position: relative;
    font-size: 13px;
  }
  #main-container {
    position: relative;
    .home-sider {
      width: 384px;
      position: absolute;
      left: 0;
      top: 0;
      .job-menu {
        width: 384px;
        background-color: #fff;
        color: #61687c;
        position: absolute;
        z-index: 1003;
        box-shadow: 5px 5px 15px rgb(3 0 0 / 4%);
      }
    }
    .home-main {
      margin-left: 400px;
      min-width: 697px;
      .slider-box {
        position: relative;
        overflow: hidden;
        .promotion-main {
          font-size: 0;
          line-height: 0;
          height: 340px;
          position: relative;
          table {
            width: 100%;
            table-layout: fixed;
          }
        }
      }
    }
    .common-tab-box {
      clear: both;
      margin-top: 37px;
      overflow: hidden;
      .box-title {
        font-size: 24px;
        text-align: center;
        position: relative;
        margin-bottom: 24px;
        &::before {
          content: '';
          display: inline-block;
          vertical-align: 8px;
          margin: 0 10px;
          width: 50px;
          height: 1px;
          background: #d1d4db;
        }
        &::after {
          content: '';
          display: inline-block;
          vertical-align: 8px;
          margin: 0 10px;
          width: 50px;
          height: 1px;
          background: #d1d4db;
        }
      }
      h3 {
        height: 50px;
        position: relative;
        padding-left: 20px;
        background: #fff;
        margin-bottom: 10px;
        margin-right: -77px;
        span {
          position: relative;
          display: inline-block;
          margin-right: 77px;
          line-height: 50px;
          color: #8d92a1;
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
        }
      }
      ul {
        font-weight: 400;
        width: 110%;
        overflow: hidden;
        li {
          // display: inline-block;
          height: 130px;
          width: 384px;
          background: #fff;
          float: left;
          margin: 0 16px 16px 0;
          .sub-li {
            display: block;
            height: 130px;
            width: 384px;
            font-size: 0;
            padding: 16px 20px;
            box-sizing: border-box;
            .job-info {
              padding: 0;
              width: 100%;
              .sub-li-top {
                position: relative;
                P {
                  display: inline-block;
                }
                svg {
                  color: #00c2b3 !important;
                  vertical-align: top;
                  font-size: 16px;
                  &:hover {
                    background: #00c2b3;
                    color: #fff !important;
                  }
                }
                .name {
                  max-width: 200px;
                  margin-right: 10px;
                  line-height: normal;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .salary {
                  position: absolute;
                  right: 0;
                  color: #fd7240;
                }
              }
            }
            a {
              font-size: 14px;
              color: #414a60 !important;
            }
            .job-text {
              font-size: 13px;
              color: #8d92a1;
              padding-right: 0;
              line-height: 28px;
              max-width: 240px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .fline {
                display: inline-block;
                width: 1px;
                height: 12px;
                vertical-align: middle;
                background: #e0e0e0;
                margin: 0 10px;
              }
            }
            .sub-li-bottom {
              border-top: 1px solid #888;
              margin-top: 8px;
              padding-top: 12px;
              img {
                width: 30px;
                height: 30px;
                border: 1px solid #eee;
                box-sizing: border-box;
                // margin-right: 20px;
              }
              a {
                height: 30px;
                line-height: 30px;
                span {
                  display: inline-block;
                  vertical-align: bottom;
                }
                .name {
                  margin: 0 20px 0 10px;
                }
                .fline {
                  display: inline-block;
                  width: 1px;
                  height: 12px;
                  vertical-align: -7px;
                  background: #e0e0e0;
                  margin: 0 10px;
                }
              }
            }
          }
        }
      }
    }
    .common-tab-more{
      text-align: center;
      margin-top: 4px;
      .btn{
        display: inline-block;
        width: 216px;
        font-size: 15px;
        height: 32px;
        line-height: 32px;
        background: #5dd5c8;
        color: #fff;
      }
    }
    .merge-city-job {
      width: 100%;
      overflow: hidden;
    }
  }
}
.label-text {
  height: 22px;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
}

.btn-search {
  background-color: #5dd5c8;
  height: 46px;
  line-height: 46px;
  background-image: none;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  border: 0;
  button {
    color: #fff;
    background-color: #5dd5c8;
  }
}
</style>
