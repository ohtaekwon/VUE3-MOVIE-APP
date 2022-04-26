<template>
  <div class="contaioner">
    <div class="inner">
      <MovieItem 
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem.vue'



export default {
  components:{
    MovieItem:MovieItem
  },
  // data() {
  //   return{
  //     movies:[]
  //   }
  // },
  computed:{
    movies(){
      return this.$store.state.movie.movies
    }
  }
}
</script>