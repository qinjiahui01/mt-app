<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item, index) in letterList"
          :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-category-section"
        v-for="(item,index) in cityGroup"
        :key="index">
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item"
              :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
  data () {
    return {
      letterList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: {}
    }
  },
  created () {
    api.getCityList().then(res => {
      var obj = {}
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })
      this.cityGroup = obj
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>
