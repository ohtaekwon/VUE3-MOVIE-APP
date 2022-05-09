<template>
  <div class="container">

    <input 
      class="form-control"
      v-model="title"
      type="text"
      placeholder="Search for Movies, Series & more"
      @keyup.enter="apply"/>

    <div class="selects">
      <select 
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option 
          v-if="filter.name==='year'"
          value="">
          All Years
        </option>
        <option 
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
// import axios from 'axios';/

export default {
  data() {
    return{
      title:'',
      type:'movie',
      number:10,
      year:'',
      filters:[
        {
          name:'type',
          items:['movie','series','episode']
        },
        {
          name:'number',
          items:[10,20,30]
        },
        {
          name:'year',
          // 즉시실행함수 ()()
          items:(()=>{
            const years=[]
            const thisYear = new Date().getFullYear() // 현재 년도의 숫자를 반환
            for (let i=thisYear; i>=1985; i-=1){
              years.push(i)
            }
            return years
          })() 
        }
      ]
    }
  },
  methods:{
    async apply(){
      // Search movies...
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex ; // input과 select수평정렬
  > * {
    // 전체 선택자
    margin-right:10px; // 우측 외부 여백 10px
    font-size:15px; // 글자크기 15px
    &:last-child{ // 마지막 자식 요소
      margin-right: 0px; // 0px로 초기화
    }
  }
  .selects{
    display: flex; // selects 내부 수평정렬
    select{
      width:120px; // 가로 너비
      margin-right: 10px;// 오른쪽 외부 여백 10px
      &:last-child{ // 마지막 우측 여백은
        margin-right: 0px; // o으로 초기화
      }
    }
  }
  .btn{
    width:120px; // 가로 너비
    height: 50px; // 세로 너비
    font-weight:700; // 굴기
    flex-shrink: 0; // 감소비율 : 0은 절대 감소하지 않겠다는 의미이다. 
  }
}
</style>