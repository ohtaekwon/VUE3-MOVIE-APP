<template>
  <div
    :style="{backgroundImage:`url(${movie.Poster})`}"
    class="movie">
    <div class="info">
      <div class="year">
        {{ movie.Year}}
      </div>
      <div class="title">
        {{ movie.Title}}
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
@import "~/scss/main.scss";

.movie{
  $width:200px;
  width:$width;
  height: $width * 3/2;
  margin : 10px;
  border-radius: 4px;
  background-color:$gray-400;
  background-size:cover; // 배경이미지가 movie라는 클래스 전체를 덮을 수 있도록 넓이에 맞춰서 출력
  overflow: hidden; // 넘치는 내용을 숨긴다.
  position: relative; // 포지션 값을 지정
  .info{
    background-color:rgba($black, .3);
    width:100%;
    padding: 14px;
    font-size:14px;
    text-align:center; // 가운데 정렬
    position: absolute; // 부모요소를 기준으로 배치한다.
    left : 0px; // 왼쪽에서 0px 지점
    bottom : 0px; // 아레에서 0px 지점
  }
}

</style>