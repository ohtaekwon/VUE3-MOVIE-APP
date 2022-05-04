<template>
  <footer>
    <Logo />
    <a 
      href="https://github.com/ohtaekwon" 
      target="_blank">
      (c){{ new Date().getFullYear() }} OHTAEKWON
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo:Logo
  },
}
</script>

<style lang="scss" scoped>
footer{
  padding:70px 0;
  text-align: center;
  opacity: .3;
  font-size:16px;
  .logo{
   display: block; 
   margin-bottom:4px;
  }
}
</style>