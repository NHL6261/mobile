<template>
  <div class="sildebar">
    <div class="home" @click="hideMenu">
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
    </div>
    <div class="menu" v-show="isShows" @click="hideMenu"></div>
    <div class="showcontainer">
      <transition name="slide-fade">
        <div class="positioning" v-show="isShow">
          <div class="header_horizontal">
            <div class="distributed">
              <div class="horizontal_header" @click="hideMenu">
                <div class="test1"></div>
                <div class="test1"></div>
                <div class="test1"></div>
              </div>
              <i class="iconfont icon-quxiao" v-show="isShows" @click="hideMenu"></i>
            </div>
          </div>
          <ul class="swiper">
            <li @click="goPath('/home')">首页</li>
            <li @click="goPath('/heart')">心选App</li>
            <li @click="goPath('/cloud')">云服务收银系统</li>
            <li @click="goPath('/employed')">自营产品</li>
            <li @click="goPath('/join')">加入我们</li>
            <li @click="goPath('/about')">关于我们</li>
            <li @click="goPath('/b2bproxy')">B2B代理</li>
          </ul>
          <div class="join_container" @click="flip">
            <i class="iconfont icon-triangle-top"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      isShow: false,
      isShows: false,
      block: true,
      extended_page: false
    };
  },
  methods: {
    hideMenu() {
      if (this.isShow) {
        this.isShow = false;
        this.isShows = false;
      } else {
        this.isShow = true;
        this.isShows = true;
      }
    },
    flip() {
      this.extended_page = true;
    },
    goPath:function(path) {
      if (this.$route.path === path) {
        this.isShow = false;
        this.isShows = false;
      }
      path !== this.$route.path && this.$router.push(path);
    }
  }
};
</script>
 
<style lang="less" scoped>
.positioning {
  color: #fff;
  position: fixed;
  width: 100%;
  height: 984px;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
  overflow-y: auto;
  background: #232323;
}
.home {
  position: absolute;
  left: 70px;
  top: 87px;
}
.positioning .swiper {
  width: 100%;
}
.positioning .swiper > li {
  width: 100%;
  height: 98px;
  border-bottom: 1px solid #666;
  line-height: 98px;
  font-size: 32px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding-left: 88px;
  box-sizing: border-box;
  position: relative;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to,
.slide-fade-enter {
  transform: translateX(-286px);
  opacity: 0;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.test {
  width: 76px;
  height: 8px;
  background-color: #ffad60;
  margin-top: 10px;
}
.header_horizontal {
  width: 100%;
  height: 224px;
  display: flex;
  justify-content: space-between;
  padding: 89px 39px 83px 91px;
  box-sizing: border-box;
  border-bottom: 1px solid #666666;
}
.horizontal_header {
  width: 76px;
  height: 51px;
}
.horizontal_header > .test1 {
  width: 76px;
  height: 8px;
  background-color: #fff;
  margin-top: 10px;
}
.distributed {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.iconfont {
  width: 52px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  font-size: 50px;
}
.iconfont2 {
  width: 52px;
  height: 52px;
  color: #fff;
  z-index: 12;
  font-size: 50px;
}
.join_container {
  position: absolute;
  right: 6%;
  top: 64%;
}
.pager {
  width: 100%;
  height: 50px;
  background-color: #404040;
}
.showcontainer {
  width: 100%;
}
</style>