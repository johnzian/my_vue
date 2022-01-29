import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mymy: 0,
        canPost: true // 能否提交
    },
    mutations: {
        changeMymy(state, data) {
            Vue.set(state, "mymy", data);
        },
        commitCanGet(state, val) {
            // get请求处理示例
            console.log(val);
        },
        commitCanPost(state, val) {
            // post请求处理示例
            state.canPost = true;
            console.log(val);
        }
    },
    actions: {
        changeMymyAction(context, data) {
            context.commit("changeMymy", data.myValue);
            if (data.callback) {
                data.callback();
            }
        },
        // 这里写异步请求
        changetest(context, params) {
            // get请求
            Vue.prototype.$bridge.requireInterface({
                domain: `${process.apiBaseUrl}`,
                url: `/api/v1/guild_pk/is_first_in_progress`,
                type: "GET",
                key: {
                    mock: "abcabc", // mock数据请求的接口
                    storeKey: "commitCanGet" // 请求后做的回调，就是mutations里面的方法名
                },
                params: { task_code: params.taskCode },
                // data:{task_code: params.taskCode } // post请求
            });
        }
    },
    modules: {},
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
            // reducer(val) {
            //     return {
            //         // 只储存state中的token
            //         assessmentData: val.token
            //     };
            // }
        })
    ]
});
