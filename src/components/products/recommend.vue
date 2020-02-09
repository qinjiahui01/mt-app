<template>
  <div class="recommend-wrapper">
    <div class="top-nav-box">
      <p class="label">猜你喜欢</p>
    </div>
    <div class="recommend-list">
      <router-link to="#"
                   v-for="(item, index) in recommendList"
                   :key="index">
        <item :item='item' />
      </router-link>
    </div>
  </div>

</template>
<script>
import item from './recommendItem'
import api from '@/api/index.js'
export default {
  data () {
    return {
      recommendList: []
    }
  },
  created () {
    api.getRecommend().then(res => {
      this.recommendList = res.data.data.map(item => {
        item.score = parseFloat(item.score)
        return item
      })
    })
  },
  components: {
    item
  }
}
</script>
<style lang="scss">
@import "@/assets/css/products/recommend.scss";
</style>
