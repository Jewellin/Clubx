<template>
  <div id="app">  
    <!-- Header -->
    <mt-header fixed title="Clubx"></mt-header>  

    <!-- Tab -->
    <mt-navbar class="navbar-bottom" v-model="selected">
      <mt-tab-item id="1"><span class="el-icon-menu"></span>首页</mt-tab-item>
      <mt-tab-item id="2"><span class="el-icon-message"></span>社团信息</mt-tab-item>
      <mt-tab-item id="3"><span class="el-icon-news"></span>社团活动</mt-tab-item>
      <mt-tab-item id="4"><span class="el-icon-more"></span>设置</mt-tab-item>
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

.navbar-bottom {
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  border: 1px solid #ccc;
  background-color: rgb(238, 243, 243);
}
.navbar-bottom span {
  display: block;
}
</style>
