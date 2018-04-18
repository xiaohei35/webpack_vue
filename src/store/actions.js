import {login} from '../utils/request.js'

let actions={
    getToken({commit},{data,notify,router}){
        login(data).then((res)=>{
            console.log(res)
            if(res.success==0){
                commit('saveToken',res.token)//commit触发mutations中的函数 并传实参 
                commit('saveUser',res.user.name)
                localStorage.setItem('token',res.token)
                //把用户名也存进去 为刷新时本地存储依然能够拿到username
                localStorage.setItem('username',res.user.name)

                notify({
                   title: '登录成功',
                   message: '跳转到首页',
                   type: 'success'
                });      
                router.push({
                    path:'/home'
                })        
            }else{
                notify({
                   title: '登录失败',
                   message: '用户名或密码输入错误',
                   type: 'warning'
                });
            }
        })
    }
}
export default actions