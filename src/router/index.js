import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'
import userinfo from '../views/user/userinfo'
import listuser from '../views/user/listuser'
import notfound from '../views/notfound'
import show from '../views/user/show'
// import gohome from '../views/user/gohome'


Vue.use(Router);

export default new Router({
  mode:'history',
  routes:[{
    path:'/main/:name',
    component:Main,
    props:true,
    children:[
      {path:'/user/list',component:listuser},
      {path:'/user/profile/:id',name: 'userinfo',component:userinfo,props:true}
      // {path:'/user/gohome',component:gohome}
      ]
  },
    {
      path:'/login',
      component:Login
    },
{
  path:'/user/gohome',
    redirect:'/login'
},
    {
      path:'*',
      component: notfound
    },
    {
      path:'/user/show',
      component: show
    }
]
});
