<template>
  <div>
    <span>按省份选择:</span>
    <m-select :list="provinceList"
              title="省份"
              :value="province"
              :showWrapperActive="provinceActive"
              @changeActive="changProvinceActive"
              @change="changProvince" />
    <m-select :list="cityList"
              title="城市"
              :value="city"
              :disabled="cityDisabled"
              :showWrapperActive="cityActive"
              @changeActive="changeCityActive"
              @change="changeCity" />
    <span>直接搜索:</span>
    <el-select v-model="searchWord"
               filterable
               remote
               reserve-keyword
               placeholder="请输入关键词"
               :remote-method="remoteMethod"
               :loading="loading">
      <el-option v-for="item in searchList"
                 :key="item"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>
  </div>

</template>
<script>
import MSelect from './select'
import api from '@/api/index'
export default {
  data () {
    return {
      province: '省份',
      provinceList: [],
      cityList: [],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchList: [],
      searchWord: '',
      loading: false,
      cityDisabled: true
    }
  },
  created () {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName
        return item
      })
    })
  },
  methods: {
    changProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      } else {
        this.provinceActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changProvince (item) {
      this.province = item.name
      this.cityDisabled = false
      this.cityList = item.cityInfoList
      this.provinceActive = false
    },
    changeCity (item) {
      this.city = item.name
      this.$store.dispatch('setPosition', item)
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
      this.$router.push('/index')
    },
    remoteMethod (val) {
      // 请求后端接口
    }
  },
  components: {
    MSelect
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
