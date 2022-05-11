<template>
  <div class="not-found">
    <div class="status">
        404
    </div>
    <div class="message">
      Page Not Found!<br/>
      <span>페이지를 찾을 수 없습니다.^^</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.not-found{
  line-height: 1.2; // 줄 높이
  text-align: center; // 글자 가운데 정렬
  font-family: "Oswald", sans-serif;
  padding: 80px 20px; // 내부여백
  .status{
    font-size:180px;
    color:$primary
  }
  .message{
    font-size:60px;
    span{
      font-size:30px;
    }
  }
}
</style>