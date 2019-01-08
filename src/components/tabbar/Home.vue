<template>  
  <div>
   <h3>You</h3>  

   <!-- 轮播图 -->
   <mt-swipe :auto="2000">
    <mt-swipe-item v-for="(item, index) in swipeImg" v-if="index<=2" :key="item.id">
      <img :src="item.images.small">
    </mt-swipe-item>
   </mt-swipe>

   <!-- 九宫格分布 -->
   <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">1</div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">2</div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">3</div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">4</div></el-col>
   </el-row>
   <el-row :gutter="10">
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="grid-content bg-purple">
        <img :src="logo">
        <p>淘汰</p>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="grid-content bg-purple">
        <img :src="logo">
        <p>十年</p>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="grid-content bg-purple">
        <img :src="logo">
        <p>疼爱</p>
      </div>
    </el-col>
   </el-row>
   <el-row :gutter="10">
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="grid-content bg-purple">
        <img :src="logo">
        <p>你的背包</p>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="grid-content bg-purple">
        <img :src="logo">
        <p>突然好想你</p>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="grid-content bg-purple">
        <img :src="logo">
        <p>体面</p>
      </div>
    </el-col>
   </el-row>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import logo from '../../assets/logo.png'

export default {
 name: 'Home',
 data() {
   return {
     swipeImg: [],
     logo: logo
   }
 },
 created() {
   this.getImg();
 },
 methods: {
   getImg() {
     this.$http.jsonp('https://api.douban.com//v2/movie/top250').then(res => {
       if(res.status === 200) {
         this.swipeImg = res.body.subjects;
         console.log(this.swipeImg);
        //  Toast('成功获取数据')
       } else {
         Toast('无法获取数据');
       }
     })
   }
 }
}
</script>

<style lang="scss" scoped>
* {
 margin: 0;
 padding: 0;
}
.mint-swipe {
 height: 200px;

 .mint-swipe-item {
   &:nth-child(1) {
     background-color: #000;
   }
   &:nth-child(2) {
     background-color: #0FF;
   }
   &:nth-child(3) {
     background-color: #F0F;
   }

   img {
     width: 100%;
     height: 100%;
   }
 }
}

.el-col {
  margin-top: 10px;
  border-radius: 4px;
}
.bg-purple-dark {
  // background: #99a9bf;
}
.bg-purple {
  // background: #d3dce6;
}
.bg-purple-light {
  // background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;

  img {
    width: 40%;
    height: 40%;
  }
  p {
    font-size: 14px;
    font-weight: 800;
  }
}
</style>
