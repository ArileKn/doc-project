<template>
  <div class="component">
    <div class="left-bar">
      <div class="left-bar-d">
        <ul class="sidebar-link">
          <li v-for="(item, key) in leftBarData" :key="key" @click="oneStageActive(key)">
            <router-link :to="item.url" :class="{active: stageObj.oneStage == key}" >{{ item.name }}</router-link>
            <ul class="sidebar-link-second" v-if="item.subDir && stageObj.oneStage == key">
              <li v-for="(item2, key2) in item.subDir" :key="key2" @click.stop="scrollTop(item2.name)">
                <router-link :to="item.url+'/'+item2.name" :class="{active: stageObj.twoStage == key2 && stageObj.threeStage == -1}">{{ item2.name }}</router-link>
                <ul class="sidebar-link-second" v-if="item2.subDir && stageObj.oneStage == key">
                  <li v-for="(item3, key3) in item2.subDir" :key="key3" @click.stop="scrollTop(item3.name)">
                    <router-link :to="item.url+'/'+item3.name" :class="{active: stageObj.twoStage == key2 && stageObj.threeStage == key3}">{{ item3.name }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      leftBarData: [{
        name: '规范目的',
        url: '/intent'
      },{
        name: '文件规范',
        url: '/filespec',
        subDir: [{
          name: '文件命名规则'
        },{
          name: '项目目录规则'
        },{
          name: '注意事项'
        }]
      },{
        name: '开发规范',
        url: '/devspec',
        subDir: [{
          name: '单页面编写规范',
          subDir: [{
            name: 'Template'
          },{
            name: 'Script'
          },{
            name: 'Style'
          }]
        },{
          name: '注释编写规范',
          subDir: [{
            name: '文档注释'
          },{
            name: '单页面template注释'
          },{
            name: '单页面js注释'
          },{
            name: '单页面css注释'
          }]
        }]
      },{
        name: '项目模板的使用',
        url: '/template',
        subDir: [{
          name: '使用须知'
        },{
          name: 'graceUI的使用',
          subDir: [{
            name: 'graceUI介绍'
          },{
            name: 'graceUI样式'
          },{
            name: 'graceUI组件'
          },{
            name: 'graceUI插件'
          }]
        },{
          name: '公共资源文件common',
          subDir: [{
            name: 'css'
          },{
            name: 'js'
          }]
        },{
          name: '组件components',
          subDir: [{
            name: 'DialogView'
          },{
            name: 'GetPermitView'
          },{
            name: 'GetUserInfoView'
          },{
            name: 'WxParse'
          },{
            name: 'GoTopBtn'
          },{
            name: 'ShareView'
          },{
            name: 'Abnor页面异常处理'
          }]
        },{
          name: 'Vuex的编写'
        }]
      }]
    }
  },
  computed: {
    ...mapState([
      'stageObj'
    ])
  },
  mounted () {
    this.$store.commit('leftBarData', this.leftBarData);
    if (sessionStorage.getItem("stageObj")) {
      //this.stageObj = JSON.parse(sessionStorage.getItem("stageObj"))
      this.$store.commit('stageObj', JSON.parse(sessionStorage.getItem("stageObj")));
    }
    let leftBarActData = [];
     window.addEventListener('scroll', () => {
       if (leftBarActData.length == 0) {
         for (let i in this.leftBarData) {
           if (this.leftBarData[i].subDir) {
             for (let n in this.leftBarData[i].subDir) {
               if (document.querySelector('#'+this.leftBarData[i].subDir[n].name)) {
                 var leftBarActobj = {};
                 leftBarActobj.key2 = n;
                 leftBarActobj.key3 = -1;
                 leftBarActobj.name = this.leftBarData[i].subDir[n].name;
                 leftBarActData.push(leftBarActobj);
                 if (this.leftBarData[i].subDir[n].subDir) {
                   for (let m in this.leftBarData[i].subDir[n].subDir) {
                     if (document.querySelector('#'+this.leftBarData[i].subDir[n].subDir[m].name)) {
                       var leftBarActobj = {}
                       leftBarActobj.key2 = n;
                       leftBarActobj.key3 = m;
                       leftBarActobj.name = this.leftBarData[i].subDir[n].subDir[m].name;
                       leftBarActData.push(leftBarActobj);
                     }
                   }
                 }
               }
             }
           }
         }
       } else {
         for (let i in leftBarActData) {
           if (leftBarActData[i]) {
             if (document.querySelector('#'+leftBarActData[i].name)) {
               let stageObj = {};
               let oneAct = document.querySelector('.router-link-active.active');
               let twoAct = document.querySelector('.sidebar-link-second .active');
               let leftBar = document.querySelector('.left-bar');
               let winHeight = document.documentElement.clientHeight;
               let topHeight = 60;
               //滚动时左侧栏选择状态以及记忆滚动条
               if (window.scrollY >= document.querySelector('#'+leftBarActData[i].name).offsetTop) {
                 stageObj.oneStage = this.$store.state.stageObj.oneStage;
                 stageObj.twoStage = parseInt(leftBarActData[i].key2);
                 stageObj.threeStage = parseInt(leftBarActData[i].key3);
                 this.$store.commit('stageObj', stageObj);
               }
               if (window.scrollY == 0) {
                 stageObj.oneStage = this.$store.state.stageObj.oneStage;
                 stageObj.twoStage = -1;
                 stageObj.threeStage = -1;
                 this.$store.commit('stageObj', stageObj);
               }

               //滚动时左侧栏跟着滚动
               if (twoAct) {
                 if (twoAct.offsetTop + twoAct.offsetHeight > leftBar.scrollTop + winHeight - topHeight) {
                   leftBar.scrollTop = twoAct.offsetTop + topHeight + twoAct.offsetHeight - winHeight;
                 }
                 if (twoAct.offsetTop < leftBar.scrollTop) {
                   leftBar.scrollTop = twoAct.offsetTop;
                 }
               }
               if (oneAct) {
                 if (window.scrollY == 0) {
                   leftBar.scrollTop = oneAct.offsetTop;
                 }
               }
             }else{
               leftBarActData = [];
             }
           }
         }
       }
     });
     window.addEventListener("beforeunload", () => {
       let stageObj = {};
       stageObj.oneStage = this.stageObj.oneStage;
       stageObj.twoStage = this.stageObj.twoStage;
       stageObj.threeStage = this.stageObj.threeStage;
       sessionStorage.setItem("stageObj", JSON.stringify(stageObj));
    })
  },
  methods: {
    scrollTop (domId) {
      this.$util.scrollTop(domId)
    },
    oneStageActive (key) {
      let stageObj = {};
      stageObj.oneStage = key;
      stageObj.twoStage = -1;
      stageObj.threeStage = -1;
      this.$store.commit('stageObj', stageObj);
    }
  }
}
</script>

<style>
.left-bar {
  width: 320px;
  background-color: #fff;
  border-right: 1px solid #eaecef;
  position: fixed;
  top: 61px;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
}
.left-bar-d {
  padding: 30px 0;
}
.sidebar-link {
  display: block;
}
.sidebar-link a {
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  font-weight: 400;
  margin: 5px 0;
  padding: 0 30px;
  display: block;
}
.sidebar-link a.active {
  color: #3eaf7c;
  font-weight: 600;
  position: relative;
}
.sidebar-link a.active:after {
  content: "";
  width: 4px;
  height: 100%;
  background-color: #3eaf7c;
  position: absolute;
  top: 0;
  left: 0;
}
.sidebar-link-second {
  padding-left: 15px;
  display: block;
}
.sidebar-link-second a {
  font-size: 14px;
}
.sidebar-link-second a.active {
  color: #3eaf7c;
  font-weight: 600;
  position: relative;
}
.sidebar-link-second a.active:after {
  content: "";
  width: 0;
  height: 100%;
  background-color: #3eaf7c;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
