export const playlistMixin = {
    // 当组件的dom准备好了之后触发的
    mounted(){


    },
    // 当视图的keepalive切换的时候触发的
    activated(){

    },
    //监听playList变化
    watch:{

    },
    computed:{
    //..............
    },
    methods:{
        handlePlaylist(arr){
            console.log('我是mixin')
            console.log(arr)
        }
    }
}
