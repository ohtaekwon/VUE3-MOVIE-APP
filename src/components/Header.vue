<template>
  <header>
    <Logo/>
    <div class="nav nav-pills">
      <div class="nav-item"
        v-for="nav in navigations"
        :key="nav.name">
        <RouterLink 
          v-bind:to="nav.href"
          active-class="active"
          :class="{ active : isMatch(nav.path) }"
          class="nav-link"> 
          {{ nav.name }} 
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
// 3. Data로 관리
export default {
  components:{
    Logo:Logo
  },
  data() {
    return{
      navigations:[
        {
          name:'Search',
          href:'/'
        },
        {
          name:'Movie',
          href:'/movie/tt6751668 ', // tt6751668 tt4520988
          path:/^\/movie/   // 정규표현식 - /^\/movie/ - '/movie' 
        },
        {
          name:'About',
          href:'/about'
        }
      ]
    }
  },
    methods:{
      isMatch(path){
        if (!path) return false
        console.log('fullPath :',this.$route.fullPath)
        return path.test(this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  height: 70px;
  padding:0 40px;
  display: flex; // 내부의 자식 요소들이 수평정렬한다.
  align-items: center; // 수직 가운데에 iterm들이 위치한다.
  font-size:16px;
  .logo{
    margin-right:40px;
  }
}
</style>