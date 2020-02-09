<template>
  <div class="m-menu">
    <div class="category-nav-title">全部分类</div>
    <ul class="nav"
        @mouseleave="menuLeave">

      <li v-for="item in menuList"
          :key="item.title"
          @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </li>
    </ul>
    <div class="detail"
         v-if="curDetail"
         @mouseenter="detailEnter"
         @mouseleave="detailLeave">
      <template v-for="item in curDetail.items">
        <h4 :key="item.tltle">{{item.title}}</h4>
        <span v-for="(v, i) in item.items"
              :key="v+'_'+i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created () {
    api.getMenuList().then(res => {
      this.menuList = res.data.data
    })
  },
  methods: {
    menuEnter (item) {
      clearInterval(this.timer)
      this.curDetail = item
    },
    menuLeave () {
      const self = this
      this.timer = setTimeout(() => {
        self.curDetail = null
      }, 100)
    },
    detailEnter () {
      clearInterval(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>
