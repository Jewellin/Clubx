<template>
  <div id="app">  
    <!-- Header -->
    <mt-header fixed title="Clubx"></mt-header>  

    <!-- Tab -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">首页</mt-tab-item>
      <mt-tab-item id="2">社团信息</mt-tab-item>
      <mt-tab-item id="3">社团活动</mt-tab-item>
      <mt-tab-item id="4">设置</mt-tab-item>
    </mt-navbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
