<template>
  <div id="app">
    <top-bar />
    <left-bar />
    <div class="center-bar">
      <div class="app-content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import LeftBar from '@/components/LeftBar';

export default {
  name: 'app',
  components: {
    TopBar, LeftBar
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
a,a:hover,a:active,a:visited,a:link,a:focus {
  color: #333;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  -webkit-tap-highlight-color: transparent;
  outline:none;
  background: none;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
li {
  list-style-type: none;
}
pre {
  margin-top: 19px;
}
pre .hljs {
  line-height: 1.5em;
  margin: 0;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 6px;
  font-family: Menlo,Monaco,Consolas,Courier New,monospace;
}
pre .hljs-comment {
  font-style: normal;
}
code {
    color: #e96900;
    padding: 3px 5px;
    margin: 0 2px;
    background-color: #f8f8f8;
    border-radius: 2px;
}
.txt-content pre, .txt-content code, .txt-content pre p {
  font-size: 14px;
}
.txt-content pre p {
  line-height: 1.5em;
  margin: 0;
}
code, kbd, pre, samp {
    font-family: Menlo,Monaco,Consolas,Courier New,monospace;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
.center-bar {
  position: relative;
  padding: 61px 40px 61px 320px;
}
.app-content {
  max-width: 740px;
  margin: 0 0 0 40px;
  padding: 37px 0;
}
@media screen and (min-width: 1462px) {
  .app-content {
    margin-left: calc((100vw - 740px) / 2 - 321px);
  }
}
.txt-content h2, .txt-content h3, .txt-content h4, .txt-content h5, .txt-content h6, .txt-content p {
  margin-top: 19px;
}
.txt-content p, .txt-content pre {
  position: relative;
  z-index: 5;
}
.txt-content h1 {
  position: relative;
  z-index: 3;
}
.txt-content h2 {
  position: relative;
  z-index: 2;
}
.txt-content h3 {
  font-size: 18px;
  position: relative;
  z-index: 1;
}
.txt-content p {
  line-height: 1.7;
  font-size: 16px;
}
.title-link {
  padding-top: 80px;
  margin-top: -80px!important;
  position: relative;
}
.title-link-noicon {
  padding-top: 80px;
  margin-top: -80px!important;
}
.title-link a {
  position: relative;
}
.title-link a:before {
  content: "#";
  height: 100%;
  color: rgb(66, 185, 131);
  padding-right: 18px;
  position: absolute;
  top: 0;
  left: -18px;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
</style>
