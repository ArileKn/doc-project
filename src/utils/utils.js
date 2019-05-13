import Store from '../store';

const Util = {};

//点击滚动到元素对应位置
Util.scrollTop = (domId) => {
  let scrollY = window.scrollY;
  let memoryScrollY = '';
  let offsetTop = document.querySelector('#'+domId).offsetTop;
  let scrollNum = Math.abs(document.querySelector('#'+domId).offsetTop - window.scrollY);
  let finishTime = Math.ceil(scrollNum / 100);
  if(offsetTop > scrollY){
    let scrollInterval = setInterval(() => {
      scrollY += finishTime;
      if(scrollY < offsetTop && window.scrollY !== memoryScrollY){
        memoryScrollY = window.scrollY;
        document.documentElement.scrollTop = scrollY;
      }else{
        document.documentElement.scrollTop = offsetTop;
        clearInterval(scrollInterval);
      }
    }, 0);
  }else{
    let scrollInterval = setInterval(() => {
      scrollY = scrollY - finishTime;
      if(scrollY > offsetTop && window.scrollY !== memoryScrollY){
        memoryScrollY = window.scrollY;
        document.documentElement.scrollTop = scrollY;
      }else{
        document.documentElement.scrollTop = offsetTop;
        clearInterval(scrollInterval);
      }
    }, 0);
  }
}

//记忆左侧栏的选择状态
Util.leftAct = (oneStage, id) => {
  let stageObj = {};
  let leftBarData = Store.state.leftBarData;
  let offsetTop = document.querySelector('#'+id) ? document.querySelector('#'+id).offsetTop : 0;
  stageObj.oneStage = oneStage;
  if (typeof(id) !== 'undefined') {
    for (let i in leftBarData) {
      if (leftBarData[i].subDir) {
        for (let n in leftBarData[i].subDir) {
          if (leftBarData[i].subDir[n].name == id) {
            stageObj.twoStage = n;
            stageObj.threeStage = -1;
          }
          if (leftBarData[i].subDir[n].subDir) {
            for (let m in leftBarData[i].subDir[n].subDir) {
              if (leftBarData[i].subDir[n].subDir[m].name == id) {
                stageObj.twoStage = n;
                stageObj.threeStage = m;
              }
            }
          }
          document.documentElement.scrollTop = offsetTop;
        }
      }
    }
  }
  Store.commit('stageObj', stageObj);
}


export default {
  ...Util
}
