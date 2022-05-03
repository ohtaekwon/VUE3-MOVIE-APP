<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Life cycle
  created() {
    console.log('create :', this.$route)
    this.$store.dispatch('movie/searchMovieWithId',{
      // movie/특정아이디 에서, 아이디를 :id로 만들었기떄문에 전달이 된다.
      id:this.$route.params.id
    })
  },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container{
  padding-top:40px;
}
.skeletons{
  display: flex;
  .poster{
    flex-shrink: 0; // 감소 너비 사용하지 않음 즉, 가로 사이즈 500을 유지
    $width:500px;
    width:$width;
    height: $width * 3/2;
    margin-right:70px;
  }
  .specs{
    flex-grow:1; // 증가 너비를 0에서 1로 하여, 최대한 많은 너비를 사용 
  }
  .skeleton {
    border-radius: 10px;
    background-color:$gray-200;
    &.title{
      width:80%;
      height:70px;
    }
    &.spec{
      width:60%;
      height:30px;
      margin-top:20px;
    }
    &.plot{
      width:100%;
      height: 250px;
      margin-top:20px;
    }
    &.etc{
      width:50%;
      height:50px;
      margin-top:20px;
    }
  }
}
</style>