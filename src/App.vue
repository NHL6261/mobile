<template>
  <div id="swiper">
    <router-view></router-view>
    <sidebar v-show="$route.meta.navlist"></sidebar>
  </div>
</template>

<script type="text/ecmascript-6">
import sidebar from './components/Sidebar'
  export default {
    components:{
      sidebar
    }
  }
</script>

<style lang="less" scoped>
#swiper{
  width: 100%;
  height: 100%;
}
 
</style>
