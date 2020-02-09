<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3"
              class="left">
        <router-link to="/index">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
               alt="美团">
        </router-link>
      </el-col>
      <el-col :span="15"
              class="center">
        <div class="wrapper">
          <el-input v-model="searchWord"
                    placeholder="请输入内容"
                    @focus="focusInput"
                    @blur="blurInput"
                    @input="input"></el-input>

          <el-button type="primary"
                     icon="el-icon-search">
          </el-button>

          <dl class="hotPlace"
              v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList"
                :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList"
              v-if="isSearchList">
            <dd v-for="(item, index) in searchList"
                :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link v-for="(item, index) in hotPlaceList"
                       :key="index"
                       :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: []
    }
  },
  computed: {
    isHotPlace () {
      return !this.searchWord && this.isFocus
    },
    isSearchList () {
      return this.searchWord && this.isFocus
    }
  },
  methods: {
    focusInput () {
      this.isFocus = true
    },
    blurInput () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input () {
      let val = this.searchWord
      api.getSearchList().then(res => {
        const searchList = res.data.data.list
        this.searchList = searchList.filter(item => {
          return item.includes(val)
        })
      })
    }
  },
  created () {
    api.getSearchHotWords().then(res => {
      this.hotPlaceList = res.data.data
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>
