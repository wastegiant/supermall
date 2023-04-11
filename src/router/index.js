import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// import Home from '@/views/home/Home.vue'
const Home=()=>import('views/home/Home')
const Category=()=>import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

// Vue.use(VueRouter)

const routes = [
    {
        //基本格式
        path: '',
        name: "default",
        redirect: '/home'
    },
    {
    //基本格式
    path: "/home",
    name: "home",
    component: Home,  
    },
    {
        path: "/category",
        name: "category",
        component: Category, 
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart, 
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile, 
    },
    ]
    
    //路由对象
    const router = createRouter({
    
              history: createWebHistory(process.env.BASE_URL),
    
              routes //上面的路由数组
    
    })
// const routes =[
//     { //默认路由
//         path:'',
//         redirect: '/home'
//     },
//     {
//         path:'/home',
//         component:Home
//     },
//     {
//         path:'/category',
//         component:Category
//     },
//     {
//         path:'/cart',
//         component:Cart
//     },
//     {
//         path:'/profile',
//         component:Profile
//     }
// ]

// const router=new VueRouter({
//     routes,
//     mode:'history'
// })

export default  router
