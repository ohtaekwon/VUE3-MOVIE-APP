<template>
  <Header/>
<!-- RouterView -->
  <RouterView />
  <Footer />
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  components:{
    Header:Header,
    Footer:Footer
  }
}
</script>

<style lang="scss">
// 2. main.scss 파일 가져오기
@import "~/scss/main.scss";
</style>