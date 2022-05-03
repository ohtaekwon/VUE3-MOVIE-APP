// 1. vue-router 패키지 
import { createRouter, createWebHashHistory } from 'vue-router' // vue-router라는 패키지에서 
// 3. 페이지 연결
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'


// 2. createRouter를 main.js로 내보내기
export default createRouter({

  // 2-1. Hash, History   // https://google.com/#/search
  history: createWebHashHistory(),  // Hash
    
  // 2-2. pages를 구분해줌
  // https://google.com/
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/movie/:id',
      component:Movie
    },
    {
      path:'/about',
      component:About
    },
  ]
})