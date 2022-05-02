<template>
  <div class="container">
    <div 
      :class="{'no-result':!movies.length}"
      class="inner">
      <!-- Loading components -->
      <div
        v-if="loading"
        class="spinner-border text-primary">
      </div>
      <div
        v-if="message" 
        class="message">
        {{ message }}
      </div>
      <div 
        v-else
        class="movies">
        <MovieItem 
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie"/>
      </div>
      </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem.vue'

export default {
  components:{
    MovieItem:MovieItem
  },
  computed:{
    movies(){
      return this.$store.state.movie.movies
    },
    message(){
      return this.$store.state.movie.message
    },
    loading(){
      return this.$store.state.movie.loading
    }
  }
}
</script>
<style lang="scss" scoped>
// main.scss에서 가져오기
@import "~/scss/main.scss";

.container{
  margin-top:30px; // 위쪽의 외부 여백
  .inner{
    background-color:$gray-200;
    padding:10 0; // 내부 여백(위아래 10px / 좌우는 사용하지 않음)
    border-radius: 4px;

    text-align: center;
    &.no-result{
      padding:70px 0;
    }
  }
  .message{
    color:$gray-400;
    font-size:20px;
  }
  .movies{
    display: flex; // 한줄의 수평
    flex-wrap: wrap; // 줄 바꿈의 수평처리
    justify-content: center; // 수평 가운데 정렬
  }
}
</style>
