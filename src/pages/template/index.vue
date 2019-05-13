<template>
  <div class="container">
    <div class="pages-index">
      <div class="txt-content">
        <h1 class="title-link-noicon" id="项目模板的使用"><a href="javascript:;" @click="scrollTop('项目模板的使用')">项目模板的使用</a></h1>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link-noicon" id="使用须知"><a href="javascript:;" @click="scrollTop('使用须知')">使用须知</a></h2>
        <p></p>
        <p>模板里的任何文件禁止自己修改，如需新增或修改。需向负责人提出申请后，才能进行修改。</p>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link-noicon" id="graceUI的使用" style="padding-bottom: 20px;border-bottom: 1px solid #ddd;"><a href="javascript:;" @click="scrollTop('graceUI的使用')">graceUI的使用</a></h2>
        <p></p>
        <h3 class="title-link" id="graceUI介绍"><a href="javascript:;" @click="scrollTop('graceUI介绍')">graceUI介绍</a></h3>
        <p><code>graceUI</code>是一套兼容<span style="font-weight: bold; color: rgb(66, 185, 131);">uni-app</span>的UI框架，拥有大量的样式和插件。具体的样式类，请仔细阅读项目根目录下<span style="color: rgb(66, 185, 131);">graceUI=》graceUI.css</span>。在开发过程中，以前样式以<code>graceUI</code>内所包含的样式类为主。请务必仔细学习。</p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="graceUI样式"><a href="javascript:;" @click="scrollTop('graceUI样式')">graceUI样式</a></h3>
        <p>在使用<code>graceUI</code>前请在<span style="color: rgb(66, 185, 131);">HBuilderX</span>中安装代码提示插件，以提升开发效率。具体代码块的使用详见：<a href="http://grace.hcoder.net/doc/info/91-0.html" style="color: rgb(66, 185, 131);text-decoration: underline;" target="_blank">http://grace.hcoder.net/doc/info/91-0.html</a>。</p>
        <p>在项目开发过程中，如果需要对<code>graceUI</code>的样式进行调整的时候，不可修改源码，只能在<code>common/css/customize.css</code>中进行样式覆盖，具体方法可以使用页面根容器的<code>.page .grace-padding</code>等方法增加样式权重进行覆盖。</p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="graceUI组件"><a href="javascript:;" @click="scrollTop('graceUI组件')">graceUI组件</a></h3>
        <p>在<code>graceUI</code>目录下有框架自带的功能组件。直接引用即可。具体方法详见：<a href="http://grace.hcoder.net/doc" style="color: rgb(66, 185, 131);text-decoration: underline;" target="_blank">http://grace.hcoder.net/doc</a>及代码<code>graceUI</code>示例项目。</p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="graceUI插件"><a href="javascript:;" @click="scrollTop('graceUI插件')">graceUI插件</a></h3>
        <p><code>graceUI</code>插件中具有表单验证插件，具体使用方法详见：<a href="http://grace.hcoder.net/doc/info/73-3.html" style="color: rgb(66, 185, 131);text-decoration: underline;" target="_blank">http://grace.hcoder.net/doc/info/73-3.html</a>。懒加载插件已重新封装至<code style="font-weight: 600;">common</code>目录下。</p>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link-noicon" id="公共资源文件common" style="padding-bottom: 20px;border-bottom: 1px solid #ddd;"><a href="javascript:;" @click="scrollTop('公共资源文件common')">公共资源文件common</a></h2>
        <p></p>
        <h3 class="title-link" id="css"><a href="javascript:;" @click="scrollTop('css')">css</a></h3>
        <p>
          <table class="gridtable">
            <thead>
              <tr>
                <td>文件名</td><td>说明</td><td>注意事项</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>customize</td><td>项目自定义全局样式和graceUI覆盖样式</td><td></td>
              </tr>
              <tr>
                <td>iconfont</td><td>字体图标</td><td>不能擅自修改</td>
              </tr>
            </tbody>
          </table>
        </p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="js"><a href="javascript:;" @click="scrollTop('js')">js</a></h3>
        <p>
          <table class="gridtable">
            <thead>
              <tr>
                <td>文件名</td><td>说明</td><td>注意事项</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lazyload</td><td>列表图片懒加载</td><td></td>
              </tr>
              <tr>
                <td>request</td><td>请求方法封装</td><td></td>
              </tr>
              <tr>
                <td>utils</td><td>工具方法封装</td><td></td>
              </tr>
            </tbody>
          </table>
        </p>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link-noicon" id="组件components" style="padding-bottom: 20px;border-bottom: 1px solid #ddd;"><a href="javascript:;" @click="scrollTop('组件components')">组件components</a></h2>
        <p></p>
        <h3 class="title-link" id="DialogView"><a href="javascript:;" @click="scrollTop('DialogView')">DialogView 弹出框</a></h3>
        <pre v-highlight style="font-size: 14px;"><code>&lt;dialog-view&gt;&lt;/dialog-view&gt;</code></pre>
        <p>示例：</p>
        <pre v-highlight><code>&lt;template&gt;<br>    &lt;view class="page"&gt;<br>        &lt;<span style="color: inherit; font-size: inherit;">get-permit-view</span><span style="color: inherit; font-size: inherit;"> </span><br>	    :dialog-show="dialogShow"         &lt;!--控制显示 父组件必须定义此参数--&gt;<br>	    :title="'弹出层标题'"              &lt;!--非必须--&gt;<br>	    :content="'弹出层文本内容。。。'"   &lt;!--非必须--&gt;<br>	    :cancel="true"                    &lt;!--非必须--&gt;<br>	    :confirm="true"                   &lt;!--非必须--&gt;<br>	    @cancel="dialogCancel"            &lt;!--dialogCancel为父组件定义的方法--&gt;<br>	    @confirm="dialogConfirm"          &lt;!--dialogConfirm为父组件定义的方法--&gt;<br>        &gt;&lt;/<span style="background-color: rgb(245, 245, 245);">dialog-view</span><span style="color: inherit; font-size: inherit;">&gt;</span><br>        &lt;view class="span" @click="dialogToggle()"&gt;显示弹出层&lt;/view&gt;<br>    &lt;/view&gt;<br>&lt;/template&gt;<br><br>&lt;script&gt;<br>    import DialogView from '@/components/template/DialogView'; /*以实际文件目录为准*/<br>	<br>    export default {<br>        data() {<br>            return {<br>                dialogShow: false<br>            };<br>        },<br>        components: {<br>            DialogView<br>        },<br>        methods: {<br>            dialogToggle() {<br>                this.dialogShow = true;<br>            },<br>            dialogCancel() {<br>                this.dialogShow = false; <span style="color: inherit; font-size: inherit;">/*</span><span style="color: inherit; font-size: inherit;">关闭dialog</span><span style="color: inherit; font-size: inherit;">*/</span><br>                /*取消弹出层后操作*/<br>            },<br>            dialogConfirm() {<br>                this.dialogShow = false; <span style="color: inherit; font-size: inherit;">/*</span><span style="color: inherit; font-size: inherit;">关闭dialog*/</span><br>                /*确认弹出层后操作*/<br>            }<br>        }<br>    }<br>&lt;/script&gt;<br>&lt;style&gt;&lt;/style&gt;</code></pre>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="GetPermitView"><a href="javascript:;" @click="scrollTop('GetPermitView')">GetPermitView 获取用户权限弹窗</a></h3>
        <pre v-highlight><code>&lt;get-permit-view&gt;&lt;/get-permit-view&gt;</code></pre>
        <p>示例：</p>
        <pre v-highlight><code>&lt;template&gt;<br>    &lt;view class="page"&gt;<br>        &lt;get-permit-view <br>            :permit-name="'获取权限名称'"     &lt;!--必须--&gt;<br>            :app-title="'窗口标题'"           &lt;!--必须--&gt;<br>            :show-view="true"                &lt;!--控制显示 父组件定义此参数--&gt;<br>        &gt;&lt;/get-permit-view&gt;<br>    &lt;/view&gt;<br>&lt;/template&gt;<br><br>&lt;script&gt;<br>    import GetPermitView from '@/components/template/GetPermitView';<br>	<br>    export default {<br>        components: {<br>            GetPermitView<br>        }<br>    }<br>&lt;/script&gt;<br>&lt;style&gt;&lt;/style&gt;</code></pre>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="GetUserInfoView"><a href="javascript:;" @click="scrollTop('GetUserInfoView')">GetUserInfoView 获取用户信息</a></h3>
        <pre v-highlight><code>&lt;get-user-info-view&gt;&lt;/get-user-info-view&gt;</code></pre>
        <p>示例：</p>
        <pre v-highlight><code>&lt;template&gt;<br>    &lt;view class="page"&gt;<br>        &lt;get-user-info-view&gt;&lt;/get-user-info-view&gt;<br>    &lt;/view&gt;<br>&lt;/template&gt;<br><br>&lt;script&gt;<br>    import GetUserInfoView from '@/components/template/GetUserInfoView';<br>	<br>    export default {<br>        components: {<br>            GetUserInfoView<br>        }<br>    }<br>&lt;/script&gt;<br>&lt;style&gt;&lt;/style&gt;</code></pre>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="WxParse"><a href="javascript:;" @click="scrollTop('WxParse')">WxParse 富文本</a></h3>
        <pre v-highlight><code>&lt;wx-parse&gt;&lt;/wx-parse&gt;</code></pre>
        <p>示例：</p>
        <pre v-highlight><code>&lt;template&gt;<br>    &lt;view class="page"&gt;<br>        &lt;wx-parse <br>            :is-base-decode="false"             &lt;!--非必须 是否使用Base64解密--&gt;<br>            :wx-parse-content="'富文本内容'"     &lt;!--必须 父组件定义此参数--&gt;<br>        &gt;&lt;/wx-parse&gt;<br>    &lt;/view&gt;<br>&lt;/template&gt;<br><br>&lt;script&gt;<br>    import WxParse from '@/components/template/WxParse';<br><br>    export default {<br>        components: {<br>            WxParse<br>        }<br>    }<br>&lt;/script&gt;<br>&lt;style&gt;&lt;/style&gt;</code></pre>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="GoTopBtn"><a href="javascript:;" @click="scrollTop('GoTopBtn')">GoTopBtn 返回顶部</a></h3>
        <pre v-highlight><code>&lt;go-top-btn&gt;&lt;/go-top-btn&gt;</code></pre>
        <p>示例：</p>
        <pre v-highlight><code>&lt;template&gt;<br>    &lt;view class="page"&gt;<br>        &lt;go-top-btn <br>            :page-scroll="0"                             &lt;!--页面互动的高度--&gt;<br>            :go-top-style="'bottom:20px;right:20px;'"    &lt;!--按钮与底部、左右的距离--&gt;<br>            :show-top-height="300"                       &lt;!--设置按钮出现的高度--&gt;<br>        &gt;&lt;/go-top-btn&gt;<br>    &lt;/view&gt;<br>&lt;/template&gt;<br><br>&lt;script&gt;<br>    import GoTopBtn from '@/components/template/GoTopBtn';<br>	<br>    export default {<br>        components: {<br>            GoTopBtn<br>        }<br>    }<br>&lt;/script&gt;<br>&lt;style&gt;&lt;/style&gt;</code></pre>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="ShareView"><a href="javascript:;" @click="scrollTop('ShareView')">ShareView 分享组件</a></h3>
        <pre v-highlight><code>&lt;share-view&gt;&lt;/share-view&gt;</code></pre>
        <p>示例：</p>
        <pre v-highlight><code>&lt;template&gt;<br>    &lt;view class="page"&gt;<br>        &lt;share-view <br>            :share-on.sync="shareOn"         &lt;!--控制显示 父组件必须定义此参数--&gt;<br>            :share-list="shareList"          &lt;!--相关配置 父组件必须定义此参数--&gt;<br>        &gt;&lt;/share-view&gt;<br>    &lt;/view&gt;<br>&lt;/template&gt;<br><br>&lt;script&gt;<br>    import ShareView from '@/components/template/ShareView'<br>	<br>    export default {<br>        data() {<br>            return {<br>                shareList: {<br>                    pic: "图标路径",<br>                    text: "图标文字",<br>                    callback: "回调函数"<br>                }<br>            };<br>        },<br>        components: {<br>            ShareView<br>        }<br>    }<br>&lt;/script&gt;<br>&lt;style&gt;&lt;/style&gt;</code></pre>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="Abnor页面异常处理"><a href="javascript:;" @click="scrollTop('Abnor页面异常处理')">Abnor 页面异常处理</a></h3>
        <pre v-highlight><code>&lt;Abnor&gt;&lt;/Abnor&gt;</code></pre>
        <p>示例：</p>
        <pre v-highlight><code>&lt;template&gt;<br>    &lt;view class="page"&gt;<br>        &lt;Abnor <br>            :abnor="'暂无数据'"             &lt;!--必须 父组件定义此参数--&gt;<br>        &gt;&lt;/Abnor&gt;<br>    &lt;/view&gt;<br>&lt;/template&gt;<br><br>&lt;script&gt;<br>    import Abnor from '@/components/template/Abnor';<br><br>    export default {<br>        components: {<br>            Abnor<br>        }<br>    }<br>&lt;/script&gt;<br>&lt;style&gt;&lt;/style&gt;</code></pre>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link-noicon" id="Vuex的编写" style="padding-bottom: 20px;border-bottom: 1px solid #ddd;"><a href="javascript:;" @click="scrollTop('Vuex的编写')">Vuex的编写</a></h2>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let pageIndex = 3; //左侧栏的页面index
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
    display: block;
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
    width: 300px;
    border-width: 1px;
    height: 24px;
    line-height: 24px;
    padding: 8px;
    border-style: solid;
    border-color: #d9d9d9;
    box-sizing: border-box;
}
</style>
