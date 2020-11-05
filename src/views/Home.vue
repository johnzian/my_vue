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
      <h3>{{mymy}}</h3>
      <input type="text" @change="changeStore()" v-model="myLocalValue">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import server from "@/api/api.js";
import {playlistMixin} from "@/mixins/mixin1.js"
import store from '@/store'
export default {
  name: 'Home',
  mixins:[playlistMixin],
  components: {
    HelloWorld
  },
  computed:{
        
    mymy(){
        return this.$store.state.mymy;
    }
        
  },
  data(){
    return {
      myLocalValue: 0
    }
  },
  mounted: function() {
    this.tryGet2()
    this.handlePlaylist([1,2,3])
  },
  methods: {
    changeStore(){
      this.$store.dispatch('changeMymyAction', {
        myValue:this.myLocalValue,
				callback: (res) => {
					console.log(1)
				},
			})
    },
    jumpPage(page){
      this.$router.push(page)
    },
    tryGet(){//无封装版
      this.axios({
        method: 'post',
        // url: '/api/demo/table/user/',//layui的请求方式
        url: '/api',
        data: {
          s: 'App.Common_GZ.QueryYouEYuang',
          app_key:'0B0C54231820D9BE5114FC66103710C6',
          sign:'0875A7D2EE40F052037F184E372DCA33'
        },
     }).then((res) => {

     })
    },
    tryGet2(){//封装版
    //   this.$server.getInfo({//get版
    //       s: 'App.Common_GZ.QueryYouEYuang',
    //       app_key:'0B0C54231820D9BE5114FC66103710C6',
    //       sign:'0875A7D2EE40F052037F184E372DCA33'
    //   }).then((res) => {
    //     console.log(res)
    //  })


      this.$server.postInfo({//post版
            s: 'App.Common_GZ.QueryYouEYuang',
            app_key:'0B0C54231820D9BE5114FC66103710C6',
            sign:'0875A7D2EE40F052037F184E372DCA33'
        }).then((res) => {
          console.log(res)
      })
    }
  },
}
</script>
