import Vue from 'vue'
import axios from 'axios'
//instance  封装一个拦截的方法 在请求拦截后操作数据再返回

//创建一个新的实例
axios.defaults.baseURL='http://localhost:9000'
let instance = axios.create({
    headers:{
        "plantform":"PC"
    }
})
//instance.defaults.baseURL = ''

//请求拦截
instance.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
})

//响应拦截
instance.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data
    }else{
         return Promise.reject({
             status:res.status
        })
    }
})

//instance实例挂载到Vue原型属性上
//Vue.prototype.$http=instance  只是赋值
Object.defineProperty(Vue.prototype,'$http',{//(对象,添加的属性,添加的属性的属性值)
    value:instance
})
export default instance 


export function login(loginIfon){
    return new Promise((resolve,reject)=>{
        //发送接收到的实参 与user.json里的数据进行判断
        instance.post('/dsp-admin/user/login',loginIfon).then(res=>{
            console.log(res)
            //如果匹配 返回数据
            resolve(res)
        })
    })
}