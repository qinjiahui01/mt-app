<template>
  <div class="m-header">
    <el-row>
      <topbar />
    </el-row>
    <el-row>
      <searchBar />
    </el-row>
  </div>
</template>
<script>
import topbar from '@/components/header/topbar'
import searchBar from '@/components/header/searchBar'
export default {
  components: {
    topbar,
    searchBar
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>
