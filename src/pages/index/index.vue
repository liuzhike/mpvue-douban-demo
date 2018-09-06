<template>
  <div class="container">
    <listItem v-if="listData.length" :list-data="listData"></listItem>
    <!--<div class="weui-panel weui-panel_access">-->
      <!--<div class="weui-panel__bd">-->
        <!--<div class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">-->
          <!--<div class="weui-media-box__hd weui-media-box__hd_in-appmsg">-->
            <!--<image class="weui-media-box__thumb" src="" />-->
          <!--</div>-->
          <!--<div class="weui-media-box__bd weui-media-box__bd_in-appmsg">-->
            <!--<div class="weui-media-box__title">标题一</div>-->
            <!--<div class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div v-else class="no-data">-->
      <!--数据库暂无数据...-->
    <!--</div>-->
  </div>
</template>

<script>
import API from '../../utils/api'
import listItem from '../../components/common/listItemTwo'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      listData: []
    }
  },

  components: {
    listItem
  },
  computed: {
    ...mapState(['userInfo', 'apiKey'])
  },
  methods: {
    ...mapMutations(['setUserInfo', 'setApiKey']),
    getNowPlaying () {
      API.getNowPlaying({apikey: this.apiKey}).then(({data}) => {
        this.listData = data.data.entries
      })
    }
  },
  getUserInfo () {
    // 调用登录接口
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: (res) => {
            console.log(res)
            // 获取用户信息存到vuex中
            this.setUserInfo(res.userInfo)
          }
        })
      }
    })
  },
  mounted () {
    this.getNowPlaying()
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.setApiKey('0df993c66c0c636e29ecbb5344252a4a')
    // this.getUserInfo()
  }
}
</script>

<style scoped lang="scss">
 .no-data{
   text-align: center;
   margin-top: 100rpx;
   color: #999;
 }
</style>
