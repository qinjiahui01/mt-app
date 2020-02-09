<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav"
          :key="item.key"
          :class="{'s-nav-active':item.key == active}"
          @click="sortProduct(item)">
        {{item.name}}
      </li>
    </ul>
    <el-row>
      <item v-for="(item, index) in productList"
            :key="index"
            :meta="item" />
    </el-row>
  </div>
</template>
<script>
import item from './item'
import api from '@/api/index.js'
export default {
  data () {
    return {
      nav: [{
        key: 's-default',
        name: '智能排序'
      }, {
        key: 's-price',
        name: '价格最低'
      }, {
        key: 's-sale',
        name: '人气最高'
      }, {
        key: 's-comment',
        name: '评价最高'
      }],
      active: 's-default',
      productList: []
    }
  },
  created () {
    api.getProductsList().then(res => {
      this.productList = res.data.data
    })
  },
  components: {
    item
  },
  methods: {
    sortProduct (item) {
      this.active = item.key
      this.productList.sort((a, b) => {
        if (['s-default', 's-price'].includes(this.active)) {
          return a.avgPrice - b.avgPrice
        } else if (this.active === 's-sale') {
          return b.commentNum - a.commentNum
        } else {
          return b.score - a.score
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>
