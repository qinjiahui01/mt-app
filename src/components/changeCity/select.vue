<template>
  <div class="choose-wrap"
       @click="showWrapper"
       v-document-click="documentClick">
    <div :class="['choose', disabled?'disabled':'']">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content"
           :class="{active:showWrapperActive}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col"
               v-for="(listData, index) in renderList"
               :key="index">
            <span :class="{'mt-item': true, 'active': item.name == value}"
                  v-for="(item, index) in listData"
                  :key="index"
                  @click="changeValue(item,$event)">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('document-click', {
  bind (el, binding, vNode) {
    document.addEventListener('click', binding.value)
  }
})
export default {
  props: ['list', 'value', 'title', 'showWrapperActive', 'disabled'],
  data () {
    return {
    }
  },
  computed: {
    renderList () {
      let col = Math.ceil(this.list.length / 12)
      let resultList = []
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12)
        resultList.push(data)
      }
      return resultList
    }
  },
  methods: {
    showWrapper (e) {
      e.stopPropagation()
      if (!this.disabled) {
        this.$emit('changeActive', true)
      }
    },
    documentClick () {
      this.$emit('changeActive', false)
    },
    changeValue (item, e) {
      e.stopPropagation()
      this.$emit('change', item)
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/select";
</style>
