<template>  
  <div>
   <h3>Home</h3>  
   <mt-swipe :auto="2000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
   </mt-swipe>
  </div>
</template>

<script>
export default {
 name: 'Home'
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
