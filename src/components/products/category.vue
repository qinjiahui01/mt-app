<template>
  <div class="m-product-category">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classList"
          :key="item.type">
        <m-select :name="item.title"
                  :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList"
          :key="item.type">
        <m-select :name="item.title"
                  :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>
<script>
import MSelect from './select'
import api from '@/api/index.js'
export default {
  data () {
    return {
      classList: [],
      areaList: []
    }
  },
  created () {
    api.getClssify().then(res => {
      this.classList = res.data.data
    })
    api.getAreaList().then(res => {
      this.areaList = JSON.parse(res.data + ']}').data
    })
  },
  components: {
    MSelect
  }
}
</script>
