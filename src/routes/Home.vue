<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import Headline from '~/components/Headline.vue'
import Search from '~/components/Search.vue'
import MovieList from '~/components/MovieList.vue'

export default {
  // 컴포넌트 등록
  components: {
    Headline:Headline,
    Search: Search,
    MovieList:MovieList
  }
}
</script>