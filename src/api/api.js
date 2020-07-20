import {requestGet,requestPost} from './request'
export const server = {
    getInfo:(params)=>{//封装请求地址
        // console.log(params)
        // return axios({ //不封装版
        //     url: '/api',
        //     method: 'get',
        //     params:params,
        // })
        return requestGet('/api',params)
    },
    postInfo:(data)=>{//封装请求地址
        return requestPost('/api',data,{})
    },
}