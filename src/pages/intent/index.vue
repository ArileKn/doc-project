<template>
  <div class="container">
    <div class="pages-index">
      <div class="txt-content">
        <h1>规范目的</h1>
        <br>
        <p>
          为提高团队协作效率, 便于后台人员添加功能及前端后期优化维护, 输出高质量的文档, 特制订此文档. 本规范文档一经确认, 前端开发人员必须按本文档规范进行前台页面开发. 本文档如有不对或者不合适的地方请及时提出, 经讨论决定后可以更改此文档。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let pageIndex = 0; //左侧栏的页面index
    this.$nextTick(() => {
      this.$util.leftAct(pageIndex, this.$route.params.id);
    });
  }
}
</script>

<style scoped>
.pages-index {

}
</style>
