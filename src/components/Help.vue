<template>
 <div class="help">
  <h1>It is Help component.</h1>
  <router-link to="/help/info">Info</router-link>
  <router-link to="/help/num">Num</router-link>

  <router-view></router-view>
 </div>
</template>

<script>
export default {
 name: 'Help',
 data() {
  return {
   msg: ''
  }
 }
}
</script>

<style scoped>

</style>
