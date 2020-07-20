import axios from 'axios'
import QS from 'qs';


export default Plugin
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function requestGet(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}
/** 
* post方法，对应post请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function requestPost(url, data,param={}) {
    let myParams = '';
    for (const key in param) {//如果地址栏传参
        if (param.hasOwnProperty(key)) {
            const element = param[key];
            myParams += key +'=' + element + '&';
        }
    }
    url += '?'+ myParams
    return new Promise((resolve, reject) => {         
        axios.post(url, QS.stringify(data))        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}