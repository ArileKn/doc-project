<template>
  <div class="container">
    <div class="pages-index">
      <div class="txt-content">
        <h1 class="title-link-noicon" id="文件规范"><a href="javascript:;" @click="scrollTop('文件规范')">文件规范</a></h1>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link" id="文件命名规则"><a href="javascript:;" @click="scrollTop('文件命名规则')">文件命名规则</a></h2>
        <br>
        <p><span style="font-size: medium;">1. 文件名称统一用小写的英文字母、数字和下划线的组合,其中不得包含汉字、空格和特殊字符。</span><br></p><p><span style="font-size: medium;">2. 因为使用uni-app进行开发，文件的&nbsp;<span style="color: rgb(249, 150, 59); font-weight: bold;">命名规则</span>&nbsp;也遵循&nbsp;<span style="font-weight: bold; color: #42b983;">uni-app</span>&nbsp;以及&nbsp;<span style="font-weight: bold; color: #42b983;">vue</span>&nbsp;的命名风格及规范。</span></p><p><span style="font-size: medium;">3. 对于<span style="color: rgb(249, 150, 59); font-weight: bold;">单页面文件</span>，文件名应该始​​终是多个单词的的组合，且以大写单词开头拼接。如：<span style="font-weight: bold; color: #42b983;">MyComponent.vue</span></span></p><p><span style="font-size: medium;">4. 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。</span></p>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link" id="项目目录规则"><a href="javascript:;" @click="scrollTop('项目目录规则')">项目目录规则</a></h2>
        <br>
        <br>
        <pre><code style="line-height: 1.6;font-size: 14px;padding: 15px;display: block;border-radius: 6px;"><span>┌─common                          可复用公共工具插件[1]<br>│  ├─css                          公共css 目录<br>│  └─js                           公共js 目录       	<br>├─components                      uni-app组件目录<br>│  ├─pages                        可复用的页面内容组件目录<br>│  └─template                     可复用的模板组件目录<br>├─config                          uni-app组件目录<br>│  └─index.js                     项目相关配置文件<br>├─graceUI                         graceUI存放目录<br>├─pages                           业务页面文件存放的目录<br>│  └─mainPages                    存放项目主包页面<br>│     └─index                     index页面<br>│          └─index.vue      <br>│  └─subPages                     存放项目副包页面<br>│      └─cart                     功能页<br>│           ├─components          功能所需的组件<br>│           ├—resource            功能所需的资源(js,css,img)<br>│           └—pages               功能页面<br>├─platforms                       存放各平台专用页面的目录[2]<br>├─plugin                          存放插件类型文件<br>│      └─wxParse                  每个插件由单独的文件夹存放<br>├─static                          存放应用引用静态资源[3]<br>├─store                           Vuex存放目录<br>│  ├─modules                      Vuex模块存放目录<br>│  ├─index.js                     Vuex入口文件<br>│  ├─mutations.js                 mutations文件<br>│  └─actions.js                   actions文件<br>├─main.js                         Vue初始化入口文件<br>├─App.vue                         应用配置，用来配置App全局样式以及监听 应用<br>├─manifest.json                   配置应用名称、appid、logo、版本等打包信息 <br>└─pages.json                      配置页面路由、导航条、选项卡等页面类信息</span></code></pre>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link" id="注意事项"><a href="javascript:;" @click="scrollTop('注意事项')">注意事项</a></h2>
        <br>
        <br>
        <p>1.  css、less/scss 等资源同样不要放在 static 目录下，这些公用的资源放在 <code style="font-weight: 600;">common</code> 目录下。</p>
        <p>2. platforms目录下，会根据项目打包的类型加载不同目录下的页面</p>
        <p style="text-align: center;"><img src="../../assets/images/img1.png" style="display: inline-block;"></p>
        <p>3. 存放应用引用静态资源（如图片、视频等）的地方，注意：<span style="color: rgb(66, 185, 131);">静态资源只能存放于此</span>。<code style="font-weight: 600;">static</code> 目录下的 js 文件不会被编译，如果里面有 es6 的代码，不经过转换直接运行，在手机设备上会报错。同时static 目录下支持分平台目录。</p>
        <p style="text-align: center;">
          <table class="gridtable">
            <thead>
              <tr>
                <td>有效目录</td><td>说明</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>app-plus</td><td>5+App</td>
              </tr>
              <tr>
                <td>h5</td><td>H5</td>
              </tr>
              <tr>
                <td>mp-weixin</td><td>微信小程序</td>
              </tr>
              <tr>
                <td>mp-alipay</td><td>支付宝小程序</td>
              </tr>
              <tr>
                <td>mp-baidu</td><td>百度小程序</td>
              </tr>
            </tbody>
          </table>
        </p>
        <p>4. 公共资源文件js不能自主删改。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let pageIndex = 1; //左侧栏的页面index
    this.$nextTick(() => {
      this.$util.leftAct(pageIndex, this.$route.params.id);
    });
  },
  methods: {
    scrollTop(domId) {
      this.$util.scrollTop(domId);
    }
  }
}
</script>

<style scoped>
.pages-index {

}
table.gridtable {
    font-family: verdana,arial,sans-serif;
    font-size: 16px;
    color: #333333;
    background-color: #fff;
    border-width: 1px;
    border-color: #d9d9d9;
    border-collapse: collapse;
    display: inline-block;
}
table.gridtable th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #c9c9c9;
}
table.gridtable thead tr {
  background-color: #f9f9f9;
}
table.gridtable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #d9d9d9;
}
table.gridtable td:nth-child(2) {
  width: 300px;
}
table.gridtable tbody td {
    height: 50px;
    line-height: 50px;
}
</style>
