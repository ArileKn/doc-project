<template>
  <div class="container">
    <div class="pages-index">
      <div class="txt-content">
        <h1 class="title-link-noicon" id="开发规范"><a href="javascript:;" @click="scrollTop('开发规范')">开发规范</a></h1>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link-noicon" id="单页面编写规范" style="padding-bottom: 20px;border-bottom: 1px solid #ddd;"><a href="javascript:;" @click="scrollTop('单页面编写规范')">单页面编写规范</a></h2>
        <p></p>
        <h3 class="title-link" id="Template"><a href="javascript:;" @click="scrollTop('Template')">Template</a></h3>
        <p>1. Vue指令统一使用简写绑定</p>
        <p><code style="font-weight: 600;">v-bind</code> 缩写：</p>
        <pre v-highlight><code><span>&lt;!--完整语法--&gt;<br>&lt;a v-bind:href="url"&gt;...&lt;/a&gt;<br><br>&lt;!--缩写--&gt;<br>&lt;a :href="url"&gt;...&lt;/a&gt;</span></code></pre>
        <br>
        <p><code style="font-weight: 600;">v-on</code> 缩写：</p>
        <pre v-highlight><code><span>&lt;!--完整语法--&gt;<br>&lt;a v-on:click="doSomething"&gt;...&lt;/a&gt;<br><br>&lt;!--缩写--&gt;<br>&lt;a @click="doSomething"&gt;...&lt;/a&gt;</span></code></pre>
        <br>
        <p>2. 标签属性统一使用双引号包裹单引号：<code>&lt;input type="text"&gt;</code></p>
        <p>3. 在使用组件是，统一使用：<code>&lt;kebab-case&gt;&lt;/kebab-case&gt;</code></p>
        <p>4. 在传参时同使用组件规则一样，使用：<code>kebab-case="param"</code></p>
        <p>5. 页面根容器，统一添加：<code>class="page"</code></p>
        <p>6. 全局代码缩进统一使用<span style="font-weight: bold; color: rgb(66, 185, 131);">4格</span></p>
        <p>7. 样式类class，统一使用中划线“-”连接。避免使用拼音、数字，尽量完整的英文单词，和更加语义化的命名。</p>
        <p>8. 在组件上总是必须用 <code style="font-weight: 600;">key</code> 配合 <code style="font-weight: 600;">v-for</code>，以便维护内部组件及其子树的状态</p>
        <p>9. 不要把 <code style="font-weight: 600;">v-if</code> 和 <code style="font-weight: 600;">v-for</code> 同时用在同一个元素上。如：为了过滤一个列表中的项目 (比如 <code>v-for="user in users" v-if="user.isActive"</code>)。在这种情形下，请将 <code style="font-weight: 600;">users</code> 替换为一个计算属性 (比如 <code>activeUsers</code>)，让其返回过滤后的列表</p>
        <p>10. 为了避免渲染本应该被隐藏的列表 (比如 <code>v-for="user in users" v-if="shouldShowUsers"</code>)。这种情形下，请将 <code style="font-weight: 600;">v-if</code> 移动至容器元素上 (比如 ul, ol)。</p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="Script"><a href="javascript:;" @click="scrollTop('Script')">Script</a></h3>
        <p>1. 每行代码结束必须有<span style="font-weight: bold; color: rgb(66, 185, 131);">分号</span></p>
        <p>2. 变量命名使用<span style="font-weight: bold; color: rgb(66, 185, 131);">驼峰式命名</span>，命名语义化, 尽可能利用英文单词或其缩写</p>
        <p>3. 属性名命名同上</p>
        <p>4. 为了保持代码中数据类型的完整性,要求<span style="font-weight: bold; color: rgb(66, 185, 131);">使用全等(===)和不全等( !==)操作符</span></p>
        <p>5. 在代码编写时，尽量使用<span style="font-weight: bold; color: rgb(66, 185, 131);">es6</span>语法。由于在使用代码提示时，记得修改成为es6的写法</p>
        <p>6. 代码结构明了, 加适量注释. 提高函数重用率</p>
        <p>7. 在声明 <code style="font-weight: 600;">prop</code> 的时候，其命名应该始终使用驼峰命名<code style="font-weight: 600;">camelCase</code></p>
        <p>8. 对于组件间的传参，<code style="font-weight: 600;">prop</code> 的定义应该尽量详细，至少需要指定其类型<code style="font-weight: 600;">props: {status: String}</code></p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="Style"><a href="javascript:;" @click="scrollTop('Style')">Style</a></h3>
        <p>1. 由于<span style="font-weight: bold; color: rgb(66, 185, 131);">uni-app</span>的原因，统一标准字体大小为<span style="font-weight: bold; color: rgb(66, 185, 131);">28upx</span>,依据不同内容，再进行调整</p>
        <p>2. 黑色透明遮罩层统一使用<code style="font-weight: 600;">rgba(0, 0, 0, .65)</code></p>
        <p>3. 属性值为0的时候，则不需要带单位</p>
        <p>4. 布局方式首选<code style="font-weight: 600;">flex</code></p>
        <p>5. 合并margin、padding、border的-top/-right/-bottom/-left的设置，尽量使用短名称</p>
        <p>6. css属性书写顺序, 建议遵循 布局定位属性-->自身属性-->文本属性-->其他属性. (建议)</p>
        <p>7. 统一页面布局的className为：头(header) 内容(container) 尾(footer) 导航(nav), 侧栏(sidebar)</p>
        <br>
        <br>
        <br>
        <br>
        <h2 class="title-link-noicon" id="注释编写规范" style="padding-bottom: 20px;border-bottom: 1px solid #ddd;"><a href="javascript:;" @click="scrollTop('注释编写规范')">注释编写规范</a></h2>
        <p>考虑到代码的易读和可维护性，对于代码注释进行一些详细的要求及规范希望努力遵循。</p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="文档注释"><a href="javascript:;" @click="scrollTop('文档注释')">文档注释</a></h3>
        <p>1. Js：在文件中再文档顶部添加注释信息包括：<code>@author</code>(代码作者)，<code>@description</code>(代码说明)，<code>@update</code>(更新时间)。在每次修改之后更新 <code>@update</code>的时间：</p>
        <p><code style="font-size: 14px;padding: 15px;display: block;">/*<br>* @description: 中文说明<br>* @author: name<br>* @update: xxxx-xx-xx xx:xx<br>*/</code></p>
        <p>2. 在方法之前编写：</p>
        <p><code style="font-size: 14px;padding: 15px;display: block;">/**<br> 	* 方法说明<br> 	* @param {参数类型} 参数名 参数说明<br> 	* @return {返回值类型} 返回值说明<br> 	*/</code></p>
        <p>3. 在方法内关键步骤进行补充</p>
        <p>4. CSS：文档顶部注释JS文档。在不同功能区域前进行分区注释，如：</p>
        <p><code style="font-size: 14px;padding: 15px;display: block;">/*Header*/<br>/*Nav*/<br>/*Container*/<br>/*Footer*/</code></p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="单页面template注释"><a href="javascript:;" @click="scrollTop('单页面template注释')">单页面template注释</a></h3>
        <p>在template文档顶部标注本页面功能的简单描述依。据不同功能区域，对不同的功能模块分进行注释</p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="单页面js注释"><a href="javascript:;" @click="scrollTop('单页面js注释')">单页面js注释</a></h3>
        <p>在方法内部，对复杂的逻辑处理进行注释，必要时使用TODO,方便代码的更新迭代。建议对每个方法进行提示性注释</p>
        <br>
        <br>
        <br>
        <h3 class="title-link" id="单页面css注释"><a href="javascript:;" @click="scrollTop('单页面css注释')">单页面css注释</a></h3>
        <p>同文档CSS</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let pageIndex = 2; //左侧栏的页面index
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
    color:#333333;
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
