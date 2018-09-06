<template>
    <div class="weui-panel">
      <div class="weui-panel__bd">
        <div @click="goToDetail(item.id)" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active" v-for="(item, index) in listData" :key="item.id">
          <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
            <image class="weui-media-box__thumb" :src="item.images.large" />
          </div>
          <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
            <div class="weui-media-box__title">{{item.title}}</div>
            <div class="weui-media-box__desc">
              <span>评分：<span v-if="item.rating" class="rating">{{item.rating || '-'}}分</span><span v-else class="rating">--</span>
              </span>
              <span>上映时间：{{item.pubdate}}</span>
            </div>
            <div class="weui-media-box__info">
              <div class="weui-media-box__info__meta">{{item.wish}}人想看</div>
              <div class="weui-media-box__info__meta">{{item.collection}}人收藏</div>
              <div class="weui-media-box__info__meta">明星数量：{{item.stars}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'listItem',
    props: {
      listData: {
        type: Array,
        default () {
          return []
        }
      }
    },
    method: {
      goToDetail (id) {
        console.log(id)
      }
    }
  }
</script>

<style scoped lang="scss">

  .rating{
    color: #e09015;
    font-size: 24rpx;
    padding-right: 10rpx;
  }

</style>
