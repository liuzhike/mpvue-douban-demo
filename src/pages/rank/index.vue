<template>
  <div class="container">
    <scroll-view class="scroll-view-head" :scroll-left="scrollLeft" :scroll-x="true" >
      <div class="item-tab" @click="changeTab(index, $event)" :class="[nowIndex===index ?'active':'']" v-for="(item, index) in navData" :key="index">
        {{item}}
      </div>
    </scroll-view>
    <listItem :list-data="listData"></listItem>
  </div>
</template>

<script>
import API from '../../utils/api'
import listItem from '../../components/common/listItemOne'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      listData: [],
      scrollLeft: 0,
      nowIndex: 0,
      navData: ['本周口碑榜', '北美票房榜', '新片榜']
    }
  },

  components: {
    listItem
  },
  computed: {
    ...mapState(['apiKey'])
  },
  methods: {
    async getWeekly (params) {
      let data = await API.getWeekly(params)
      this.listData = data.data.subjects
      console.log('this.listData_' + JSON.stringify(this.listData))
    },
    async getUsBox (params) {
      let data = API.getUsBox(params)
      this.listData = data.data.subjects.subject
    },
    async getNewMovies (params) {
      let data = await API.getNewMovies(params)
      this.listData = data.data.subjects.subject
    },
    getListData (index) {
      let params = {
        apikey: this.apiKey
      }
      if (index === 0) {
        this.getWeekly(params)
      } else if (index === 1) {
        this.getUsBox(params)
      } else if (index === 2) {
        this.getNewMovies(params)
      }
    },
    changeTab (index, e) {
      this.nowIndex = index
      this.getListData(index)
      // 需要让导航滚动到可见区域
      if (this.nowIndex > 2) {
        this.scrollLeft = e.x
      } else {
        this.scrollLeft = 0
      }
    }
  },
  onload () {
    this.listData = []
  },
  onShow () {
    this.changeTab(0)
  },
  mounted () {
    // this.changeTab(0)
  },
  created () {}
}
</script>

<style scoped lang="scss">
 .scroll-view-head{
   width: 100%;
   height: 84rpx;
   line-height: 84rpx;
   white-space: nowrap;
   .item-tab{
     display: inline-block;
     padding: 0 20rpx;
     text-align: center;
   }
   .active {
     color: #ab2b2b;
     height: 100%;
     border-bottom: 2px solid #ab2b2b;
     box-sizing: border-box;
   }
 }
</style>
