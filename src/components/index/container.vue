<template>
  <div class="m-istyle">
    <dl :class="nav.class"
        @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item, index) in nav.list"
          :data-type="item.type"
          :class="{active: kind === item.type}"
          :key="index">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]"
          :key="index">
        <el-card :body-style="{ padding: '0px' }"
                 shadow="never">
          <img :src="item.image"
               class="image">
          <div class="cbody">
            <div class="title"
                 :title="item.title">{{item.title}}</div>
            <div class="sub-title"
                 :title="item.sub_title">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  props: ['nav'],
  data () {
    return {
      kind: 'all',
      resultsData: {}
    }
  },
  methods: {
    over (e) {
      const el = e.target
      const className = el.tagName.toLowerCase()
      if (className !== 'dd') {
        return false
      }
      this.kind = e.target.dataset.type
    }
  },
  created () {
    api.getResultsByKeywords().then(res => {
      this.resultsData = res.data.data
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
