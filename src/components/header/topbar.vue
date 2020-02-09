<template>
  <el-row class="m-header-topbar m-header">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <my-nav />
    </el-col>
  </el-row>
</template>
<script>
import geo from '@/components/header/geo'
import MyNav from '@/components/header/nav'
export default {
  components: {
    geo,
    MyNav
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
