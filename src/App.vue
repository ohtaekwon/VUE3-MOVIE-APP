<template>
  <Header/>
<!-- RouterView -->
  <RouterView />
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components:{
    Header:Header
  }
}
</script>

<style lang="scss">
// 2. main.scss 파일 가져오기
@import "~/scss/main.scss";
</style>