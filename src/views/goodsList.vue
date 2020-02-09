<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col ref="goodsList"
              :span="19">
        <el-row>
          <category />
        </el-row>
        <el-row>
          <list ref="list" />
        </el-row>
      </el-col>
      <el-col class="right-content"
              :span="4">
        <el-row>
          <div ref="map"
               class="map">
            <img src="@/assets/img/map-img.png"
                 alt="">
          </div>
          <div></div>
        </el-row>
        <el-row>
          <recommend />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import crumbs from '@/components/products/crumbs'
import category from '@/components/products/category'
import list from '@/components/products/list'
import recommend from '@/components/products/recommend'
export default {
  components: {
    crumbs,
    category,
    list,
    recommend
  },
  mounted () {
    document.addEventListener('scroll', this.scrollHandle)
  },
  destroyed () {
    document.removeEventListener('scroll', this.scrollHandle)
  },
  methods: {
    scrollHandle () {
      const oGoodsList = this.$refs.goodsList.$el
      const oMap = this.$refs.map
      const top = oGoodsList.offsetTop
      const height = oGoodsList.offsetHeight
      const mapHeight = oMap.offsetHeight
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop >= top + height) {
        oMap.style.position = 'absolute'
        oMap.classList.remove('fixed-map')
        oMap.style.top = height - mapHeight + 'px'
      } else if (scrollTop > top) {
        oMap.classList.add('fixed-map')
        oMap.style.position = 'fixed'
        oMap.style.top = '0px'
        oMap.nextElementSibling.style.height = mapHeight + 'px'
      } else {
        oMap.classList.remove('fixed-map')
        oMap.style.position = 'static'
        oMap.nextElementSibling.style.height = 0 + 'px'
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
