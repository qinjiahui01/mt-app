<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市"
           :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问"
           :list="rencentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>
<script>
import province from '@/components/changeCity/province'
import hot from '@/components/changeCity/hot'
import category from '@/components/changeCity/category'
import api from '@/api/index.js'
export default {
  data () {
    return {
      hotList: [],
      rencentList: []
    }
  },
  components: {
    province,
    hot,
    category
  },
  created () {
    api.getHotCity().then(res => {
      this.hotList = res.data.data
    })
    api.getRecentCity().then(res => {
      this.rencentList = res.data.data
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
