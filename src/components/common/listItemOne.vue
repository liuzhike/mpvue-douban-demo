<template>
  <div class="weui-panel__bd">
    <div @click="goToDetail(item.id)" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active" v-for="(item, index) in listData" :key="item.id">
      <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
        <image class="weui-media-box__thumb" :src="item.subject.images.small" />
      </div>
      <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
        <div class="weui-media-box__title">{{item.subject.title}}</div>
        <div class="weui-media-box__desc">导演:{{item.subject.directors[0].name}} 主演：<span :key="item2.id" v-for="(item2, index2) in item.subject.casts">{{item2.name}}</span></div>
        <div class="weui-media-box__info">
          <div class="weui-media-box__info__meta">{{item.subject.mainland_pubdate}}</div>
          <div class="weui-media-box__info__meta">{{item.subject.genres}}</div>
          <div class="weui-media-box__info__meta">{{item.subject.durations[0]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'listItemOne.vue',
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

<style scoped>

</style>
