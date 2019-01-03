<template>
  <div class="hello">
  
    <mt-button @click="getlist" type="danger">DANGER</mt-button>    
    <mt-button @click="indicat" type="primary">Open Indicator</mt-button>

  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
import { setTimeout } from 'timers';

export default {
  name: 'HelloWorld',
  data () {
    return {      
      toastInstance: null,
      indicatorIns: null
    }
  },
  methods: {
    getlist() {
      this.show();
      setTimeout(() => {
        this.toastInstance.close();
      }, 3000)
    },
    getResult() {
      this.indicat();
      setTimeout(() => {
        this.indicatorIns.close();
      }, 3000)
    },
    show() {
      this.toastInstance = Toast({
        message: 'wowowowo',
        duration: -1,
        position: 'top',
        className: 'mytoast'
      });
    },
    indicat() {
      this.indicatorIns = Indicator.open({
        text: '加载中',
        spinnerType: 'fadding-circle'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
