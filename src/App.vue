<template>
  <div id="app">  
    <!-- Header -->
    <mt-header fixed title="Clubx"></mt-header>  

    <router-view></router-view>

    <!-- Tabbar -->
    <mt-navbar class="navbar-bottom" v-model="selected">      
      <mt-tab-item id="1">
        <router-link to="/" tag="div"><span class="el-icon-menu"></span></router-link>首页
      </mt-tab-item>      
      <mt-tab-item id="2">        
        <router-link to="/clubInfo" tag="div">
          <el-badge :value="2" class="item">
            <span class="el-icon-message"></span>  
          </el-badge>
        </router-link>
        社团信息
      </mt-tab-item>      
      <mt-tab-item id="3">
        <router-link to="/clubActi" tag="div"><span class="el-icon-news"></span></router-link>社团活动
      </mt-tab-item>            
      <mt-tab-item id="4">
        <router-link to="/setting" tag="div"><span class="el-icon-more"></span></router-link>设置
      </mt-tab-item>      
    </mt-navbar>
    
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
  cursor: pointer;
}
.navbar-bottom span {
  display: block;
  font-size: 20px;
}
</style>
