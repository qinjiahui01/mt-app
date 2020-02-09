<template>
  <div class="recommend-item">
    <div class="img-box">
      <img src="http://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@275w_156h_1e_1c"
           alt="店铺图片">
    </div>
    <div class="info-box">
      <p class="title">
        {{item.title}}
      </p>
      <p class="score-line">
        <el-rate v-model="item.score"
                 disabled
                 show-score
                 text-color="#ff9900"
                 score-template="{value}">
        </el-rate>
        <span class="comment-number">
          {{item.commentNum}}个评价
        </span>
      </p>
      <p class="desc-line">
        <span class="desc">
          {{item.areaName}}
        </span>
      </p>
      <p class="price-line">
        <span class="yuan">¥</span>
        <span class="price-number">{{item.lowPrice}}</span>
        <span class="price-desc">起</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item']
}
</script>
