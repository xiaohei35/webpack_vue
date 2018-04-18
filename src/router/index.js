import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'
//一级
import login from '../views/login.vue'
import home from '../views/home.vue'
import advert from '../views/advert.vue'
import data from '../views/data.vue'
import setting from '../views/setting.vue'
import newAdvert from '../views/newAdvert.vue'
//二级
import design from '../views/design.vue'
import unit from '../views/unit.vue'
import idea from '../views/idea.vue'

import newAccount from '../views/newAccount.vue'
import adplan from '../views/adplan.vue'
import single from '../views/single.vue'
Vue.use(Router)

let router= new Router({
  mode:"history",
  routes: [
    {
      path: '/newAdvert',
      redirect:'/newAdvert/adplan'
    },{
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name: 'home',
      component: home
    },{
      path:'/login',
      name: 'login',
      component: login
    },{
      path:'/advert',
      name: 'advert',
      component: advert,
      children:[
          {
            path:'/advert/design',
            name: 'design',
            component: design,
          },{
            path:'/advert/unit',
            name: 'unit',
            component: unit,
          },{
            path:'/advert/idea',
            name: 'idea',
            component: idea,
          }
      ]
      },
    {
      path:'/data',
      name: 'data',
      component: data
    },{
      path:'/setting',
      name: 'setting',
      component: setting
    },{
      path:'/newAdvert',
      name: 'newAdvert',
      component: newAdvert,
      children:[
        {
          path:'/newAdvert/newAccount',
          name: 'newAccount',
          component: newAccount,
        },
        {
          path:'/newAdvert/adplan',
          name: 'adplan',
          component: adplan,
        },{
          path:'/newAdvert/single',
          name: 'single',
          component: single,
        }
      ]
    }
  ]
})
//路由跳转前做是否登录验证

// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
// next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
// next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
// next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
// next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

function checkLogin(){
  let token=localStorage.getItem('token')
  if(token){
    //往页面上渲染用户名的值 应是从localStorage里获取到的username
    store.commit('saveUser',localStorage.getItem('username'))
  }
  return !!token;
}

router.beforeEach((to,form,next)=>{
  let login = checkLogin();
  //如果路由是login直接进去
  if(to.name=='login'){
    next()
  }else{
    //如果不是login 判断是否登录(localStorage)
    if(!login){
      next({
        name:'login'
      })
    }else{
        next()
      }
  }
})



export default router