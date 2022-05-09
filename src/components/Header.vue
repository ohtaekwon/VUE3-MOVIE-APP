<template>
<!-- 1. Header를 만듬 -->
  <header>
    <Logo/>
    <div class="nav nav-pills">
      <!-- 4. 반복문 입력 -->
      <div class="nav-item"
        v-for="nav in navigations"
        :key="nav.name">
        <!-- 2. RouterLink 컴포넌트 -->
        <!-- 5-1. RouterLink to 속성 추가 -->
        <!-- 10. active 클래스 추가 -->
        <RouterLink 
          v-bind:to="nav.href"
          active-class="active"
          class="nav-link"> 
          <!-- 데이터로 관리해 효율적으로 출력하기 위해서 -->
          <!-- 5-2. -->
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
          href:'/movie/tt6751668'
        },
        {
          name:'About',
          href:'/about'
        }
      ]
    }
  },
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