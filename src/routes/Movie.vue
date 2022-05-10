<template>
  <div class="container">
    <template v-if="loading">
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
    <Loader 
      :size="3"
      :z-index="9"
      :fixed="true"/>
    </template>
    <div 
      v-else
      class="movie-details">
      <div
        :style="{backgroundImage:`url(${requestDiffSizeImage(theMovie.Poster)})`}" 
        class="poster">
        <Loader
          v-if="imageLoading"
          absolute/>
        </div>
      <div class="specs">
        <div class="title">
          {{ theMovie.Title }}
        </div>
        <div class="labels">
          <span> {{ theMovie.Released }} </span>
          <span> {{ theMovie.Runtime }} </span>
          <span> {{ theMovie.Country }} </span>
        </div>
        <div class="plot">
          {{ theMovie.Plot }}
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <div class="rating-wrap">
            <div 
              v-for="{Source:name, Value:score} in theMovie.Ratings"
              :key="name"
              :title="name"
              class="rating">
              <img 
                :src="`https://raw.githubusercontent.com/ohtaekwon/VUE3-MOVIE-APP/master/src/assets/${name}.png`" 
                :alt="name"/>
              <span>{{ score }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Actors</h3>
          {{ theMovie.Actors }}
        </div>
        <div>
          <h3>Director</h3>
          {{ theMovie.Director }}
        </div>
        <div>
          <h3>Poduction</h3>
          {{ theMovie.Production }}
        </div>
        <div>
          <h3>Genre</h3>
          {{ theMovie.Genre }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader.vue'

export default {
  components:{
    Loader:Loader
  },
  data(){
    return{
      imageLoading:true
    }
  }
  ,
  computed:{
    theMovie(){
      return this.$store.state.movie.theMovie
    },
    loading(){
      return this.$store.state.movie.loading
    }
  },
  // Life cycle
  created() {
    console.log('create :', this.$route)
    this.$store.dispatch('movie/searchMovieWithId',{
      // movie/특정아이디 에서, 아이디를 :id로 만들었기떄문에 전달이 된다.
      id:this.$route.params.id
    })
  },
  methods:{
    requestDiffSizeImage(url, size=700){
      const src = url.replace('SX300',`SX${size}`)
      this.$loadImage(src)
      .then(()=>{
        this.imageLoading = false
      })
      return src
    }
  }
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
    position: relative;
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
.movie-details{
  display: flex; // 수평정렬
  color:$gray-600; // 기본 색상
  .poster{
    flex-shrink: 0; // 감소너비 사용하지 않음
    width:500px; // 가로
    height:500px * 3/2; // 높이
    margin-right:70px; // 우측으로 외부 여백
    border-radius:10px; // 모서리 깍기
    background-color:$gray-200; // 배경색
    background-size: cover; // 이미지가 더 넓은 너비에 맞춤
    background-position: center;
  }
  .specs{
    flex-grow:1; // 증가 너비 사용
    .title{
      color:$black;
      font-family: 'Oswald',sans-serif;
      font-size:70px; 
      line-height: 1; // 글자 크기에 맞게 줄높이
      margin-bottom:30px; // 아래 외부 여백
    }
    .labels{
      color:$primary;
      span{
        font-size:16px;
        &::after { // 가상요소 선택자 after
          content: "\00b7"; // 가운데 점
          margin:0 6px; // 좌우만 6px
        }
        &:last-child::after{ // 마지막에는 
          display: none; // 표시하지 않음
        }
      }
    }
    .plot{
      margin-top:20px; // 위쪽 여백 20px
      font-size:16px; 
    }
    .ratings{
      .rating-wrap{
        display: flex;
        .rating{
          display: flex;
          align-items: center;
          margin-right: 32px;
          img{
            height: 30px;
            flex-shrink: 0;
            margin-right:6px;
          }
        }
      }

    }
    div{
      font-size:16px;
      h3{
        margin:24px 0 6px; // 위24 좌우0 아래6px
        color:$black;
        font-family: "Oswald",sans-serif;
        font-size:20px;
      }
    }
  }
}
</style>