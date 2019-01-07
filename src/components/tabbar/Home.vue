<template>  
  <div>
   <h3>You</h3>  
   <mt-swipe :auto="2000">
    <mt-swipe-item v-for="(item, index) in swipeImg" v-if="index<=2" :key="item.id">
      <img :src="item.images.small">
    </mt-swipe-item>
   </mt-swipe>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
 name: 'Home',
 data() {
   return {
     swipeImg: [],
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

<style scoped>
* {
 margin: 0;
 padding: 0;
}
.mint-swipe {
 height: 200px;
 background-color: #FF0;
}
</style>
