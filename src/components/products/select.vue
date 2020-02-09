<template>
  <div class="m-product-select">
    <div class="tab">
      <dl>
        <dt>
          {{name}}
          <i class="el-icon-caret-bottom"></i>
        </dt>
        <dd>
          <dl>
            <dt class="select-title">{{name}}</dt>
            <span v-for="(item, index) in list"
                  :key="index">{{item.name}}
            </span>
          </dl>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'list']
}
</script>
