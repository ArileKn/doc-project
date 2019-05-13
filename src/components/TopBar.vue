<template>
  <div class="component">
    <div class="top-bar">
      <div class="top-bar-d">
        <div class="top-bar-d-l">
          uni-app项目规范文档
        </div>
        <div class="top-bar-d-c">
          <div class="top-bar-d-c-i">
            <a href="https://uniapp.dcloud.io/" class="uni-logo" target="_blank"></a>
          </div>
          <div class="top-bar-d-c-i">
            <a href="https://uniapp.dcloud.io/collocation/pages" target="_blank">配置</a>
          </div>
          <div class="top-bar-d-c-i">
            <a href="https://uniapp.dcloud.io/component/README" target="_blank">组件</a>
          </div>
          <div class="top-bar-d-c-i">
            <a href="https://uniapp.dcloud.io/api/README" target="_blank">接口</a>
          </div>
          <div class="top-bar-d-r-i top-bar-d-r-i-cut">
            <a href="https://lanhuapp.com/" target="_blank">设计图</a>
          </div>
          <div class="top-bar-d-r-i">
            <a href="https://www.eolinker.com/" target="_blank">API管理</a>
          </div>
          <div class="top-bar-d-r-i">
            <a href="https://docs.qq.com/desktop/" target="_blank">腾讯文档</a>
          </div>
        </div>
        <div class="top-bar-d-r">
          <div style="margin-right: 0;" class="top-bar-d-r-i">
            <a href="" target="_blank">进入后台<i><img src="../assets/logo.png" ></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.top-bar {
  width: 100%;
  min-width: 1160px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.top-bar-d {
  height: 40px;
  line-height: 40px;
  padding: 10px 30px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
.top-bar-d-l {
  width: 315px;
  font-size: 20px;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
.top-bar-d-c {
  height: 32px;
  line-height: 32px;
  padding: 4px 0;
  -webkit-flex: 1;
  flex: 1;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
.top-bar-d-c-i {
  margin: 0 16px;
}
.top-bar-d-c-i:first-child {
    margin-left: 15px;
}
.top-bar-d-c-i a {
  font-size: 16px;
  display: block;
}
.top-bar-d-c-i .uni-logo {
  width: 135px;
  height: 33px;
  background-repeat: no-repeat;
  background-size: 135px 33px;
  background-image: url(https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp4@2x.png);
}
.top-bar-d-r {
  height: 32px;
  line-height: 32px;
  padding: 4px 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.top-bar-d-r-i {
  margin: 0 16px;
}
.top-bar-d-r-i a {
  font-size: 16px;
  display: block;
}
.top-bar-d-r-i a i {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-block;
  float: right;
}
.top-bar-d-r-i a i img {
  width: 100%;
  height: 100%;
  margin: 5px 0 0 5px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
.top-bar-d-r-i-cut {
    padding-left: 33px;
    position: relative;
}
.top-bar-d-r-i-cut:before {
    content: "";
    width: 1px;
    height: 60%;
    background-color: #ddd;
    position: absolute;
    top: 20%;
    left: 0;
}

</style>
