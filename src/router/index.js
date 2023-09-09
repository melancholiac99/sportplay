import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginName from'../components/LoginName.vue'//引入Login组件
import HomeHome from '../components/HomeHome.vue'
import WelCome from'../components/WelCome.vue'
import UserList from'../components/admin/UserList.vue'

Vue.use(VueRouter)
const routes =[
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        component:LoginName
    },
    {
        path:"/Home",
        component:HomeHome,
        redirect:"WelCome",
        children:[
            {path:"/welcome",component:WelCome},
            {path:"/user",component:UserList}
        ]
    },
]

const router = new VueRouter({
    routes
})
router.beforeEach((to,from,next)=>{
    //to,访问
    //from,从哪访问
    //next,接着下一个URL，若无，则继续访问to路径
    if(to.path=='/login')return next();
    //获取user
    const userFlag=window.sessionStorage.getItem("user");//取出当前用户
    if(!userFlag)return next('login');//无值，返回登陆页
    next();//符合要求，放行
})
export default router