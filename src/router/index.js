import Vue from 'vue'
import Router from 'vue-router'
import index from "../views/index"
import music from "../views/music"
import newsong from "../components/New"
import recommend from "../components/Recommend"
import search from "../components/Search"
import mine from "../components/Mine"

Vue.use(Router)

export default new Router({
routes: [
{
    path: '/',
    name: 'index',
    component: index,
    redirect:"/new",
    children:[
    {
    path: '/new',
    name: 'newsong',
    component: newsong
    },
    {
    path: '/recommend',
    name: 'recommend',
    component: recommend
    },
    {
    path: '/search',
    name: 'search',
    component: search
    },
    {
    path: '/mine',
    name: 'mine',
    component: mine
    }
    ]
    },
    {
        path: '/music',
        name: 'music',
        component: music
    }
]
})