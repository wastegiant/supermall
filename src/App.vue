<template>
<div>
  <keep-alive >
    <router-view></router-view>
  </keep-alive>
  <main-tab-bar></main-tab-bar>
  <!-- <router-view/>
  <main-tab-bar></main-tab-bar> -->

</div>
</template>

<script>
// import  TabBar  from "./components/common/tabbar/TabBar";
// import TabBarItem  from "./components/common/tabbar/TabBarItem"; 
import MainTabBar from "./components/content/MainTabBar/MainTabBar";

export default {
  name: 'App',
  components: {
    // TabBar,
    // TabBarItem,
    MainTabBar,
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
