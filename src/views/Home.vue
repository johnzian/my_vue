<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="nav">
      <router-link to="/about">跳去about</router-link>

    </div>
    <HelloWorld msg="123"/>
    <div>
      这是我新创建的vue项目
    </div>
      <div @click="jumpPage('/about')">
        跳去about2
      </div>
    <div>
      这是首页，可以是登录页，也可以是商城的首页
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted: function() {
    this.tryGet()
  },
  methods: {
    jumpPage(page){
      this.$router.push(page)
    },
    tryGet(){
      this.axios({
        method: 'get',
        url: '/api/demo/table/user/',
        params: {
          page: '2',
          limit:'10'
        },
     })
    },
  },
}
</script>
