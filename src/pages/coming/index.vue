<template>
  <div class="container">
    <listItem v-if="listData.length" :list-data="listData"></listItem>
    <div v-else class="no-data">
      数据库暂无数据...
    </div>
  </div>
</template>

<script>
import API from '../../utils/api'
import listItem from '../../components/common/listItemTwo'
import { mapState } from 'vuex'

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
    ...mapState(['apiKey'])
  },
  methods: {
    async getListData () {
      let data = await API.getComing({apikey: this.apiKey})
      this.listData = data.data.entries
    }
  },
  mounted () {
    this.getListData()
  },
  created () {}
}
</script>

<style scoped lang="scss">
 .no-data{
   text-align: center;
   margin-top: 100rpx;
   color: #999;
 }
</style>
