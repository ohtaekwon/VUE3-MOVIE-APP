<template>
  <div>{{ movie.imdbID }}</div>
  <div>{{ movie.Titel }}</div>

</template>

<script>


export default {
  props:{
    movie:{
      type:Object,
      default:()=>({})
    }
  }
}
</script>